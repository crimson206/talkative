import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkEmoji from "remark-emoji";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";

import { useInternalLinkHandler } from "@crimson206/internal-link-handler";

export interface MarkdownRendererProps {
  markdownString: string;
  components: any;
  tocTitle?: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({
  markdownString,
  components,
  tocTitle: tocTitle = "Table Of Contents",
}) => {
  const containerRef = useInternalLinkHandler<HTMLDivElement>();

  const rehypePlugins = [
    rehypeRaw,
    rehypeSlug,
    rehypeKatex,
  ];

  return (
    <div ref={containerRef}>
      <ReactMarkdown
        remarkPlugins={[
          remarkGfm,
          remarkMath,
          remarkEmoji,
          [remarkToc, { heading: tocTitle, tight: true }],
        ]}
        rehypePlugins={rehypePlugins}
        components={components}
      >
        {markdownString}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
