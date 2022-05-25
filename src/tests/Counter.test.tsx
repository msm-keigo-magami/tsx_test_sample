import React from 'react'; // 意味のないimportに見えるが、eslintの設定上必要
import Counter from "../components/Counter";
import { fireEvent, render, screen } from '@testing-library/react';


/**
 * Counterをもちいたイベント発火によるテスト
 */
describe("Counter", () => {
    test("Counter1 初期値なし", () => {
        const {container} = render(<Counter name="counter1" />)
        // screen.debug()
        
        // counterの表示文言がcount = 0を示すものであること
        const dispCount = container.getElementsByClassName("dispCount")[0]
        expect(dispCount.textContent).toBe("counter1:0")

        // これだとできないということがわかった。。。
        // const increaseButton = (container.querySelector(`button[name="counter1_increase"]`)) as HTMLButtonElement
        // increaseButton.click()
        // screen.debug()

        // ボタンの取得
        const buttons = screen.queryAllByRole("button")
        const increaseButton = buttons.find(e => e.getAttribute("name") === "counter1_increase" )
        const decreaseButton = buttons.find(e => e.getAttribute("name") === "counter1_decrease" )
        if(!increaseButton || !decreaseButton){
            throw Error
        }
        console.log(increaseButton.getAttribute("name"))
        
        // 以下のようにfireEventを用いてボタン押下イベントを発火させる https://qiita.com/ossan-engineer/items/4757d7457fafd44d2d2f#react-testing-library-%E3%82%A4%E3%83%99%E3%83%B3%E3%83%88%E3%81%AE%E7%99%BA%E7%81%AB
        fireEvent.click(increaseButton)
        // screen.debug()を実行すると、コマンドライン上にレンダリングしたDOMが表示される
        // screen.debug()
        
        // +ボタンを一度押したときの期待値
        expect(dispCount.textContent).toBe("counter1:1")

        // +ボタンを2度押したときの期待値
        fireEvent.click(increaseButton)
        // screen.debug()
        expect(dispCount.textContent).toBe("counter1:2")

        // +ボタンが二度押された状態から-ボタンを一度押した場合
        fireEvent.click(decreaseButton)
        // screen.debug()
        expect(dispCount.textContent).toBe("counter1:1")

        // 更に二度、-ボタンを押下した場合
        fireEvent.click(decreaseButton)
        fireEvent.click(decreaseButton)
        screen.debug()
        expect(dispCount.textContent).toBe("counter1:-1")
        
    })
})