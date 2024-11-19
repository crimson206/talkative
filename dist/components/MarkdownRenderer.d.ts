import { default as React } from 'react';
export interface MarkdownRendererProps {
    markdownString: string;
    components: any;
    tocTitle?: string;
}
declare const MarkdownRenderer: React.FC<MarkdownRendererProps>;
export default MarkdownRenderer;
