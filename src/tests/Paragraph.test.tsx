import React from 'react'; // 意味のないimportに見えるが、eslintの設定上必要
import Paragraph from "../components/Paragraph";
import { render, screen } from '@testing-library/react';

describe('paragraph', () => {
    test('paragraph test', () => {
        const { container } = render(<Paragraph text="sample" />)
        screen.debug();

        const p = container.querySelector("p");
        expect(p?.textContent).toBe("sample");
        
    })
})
