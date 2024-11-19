import { default as React } from 'react';
interface DynamicComponentProps {
    title: string;
    initialCount: number;
    items: string[];
    fetchDataUrl?: string;
}
export declare const ExampleDynamicComponent: React.FC<DynamicComponentProps>;
interface HighlightDisplayComponentProps {
    highlightedHTML: string;
}
export declare const HighlightDisplayComponent: React.FC<HighlightDisplayComponentProps>;
export default ExampleDynamicComponent;
