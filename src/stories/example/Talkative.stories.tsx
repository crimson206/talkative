import React from 'react'
import Talkative from '../../components/Talkative'
import { useDynamicComponents } from '@crimson206/markdown-prerender';
import { processDynamicComponents } from '@crimson206/markdown-prerender';
import ExampleDynamicComponent, {HighlightDisplayComponent} from '../../components/dynamicComponent/DynamicComponents';
import { PrimeCodePlugin } from '@crimson206/markdown-prism-code-plugin';
import { BootstrapThemePlugin } from '@crimson206/bootstrap-theme-plugin';
import markdownString from "./markdown.md?raw"


export default {
    title: 'Example/Talkative'
}

const dynamicRenderResult = processDynamicComponents(
  markdownString,
  [
    {id:'dynamicComponent', Component: ExampleDynamicComponent},
    {id:'highlighted', Component: HighlightDisplayComponent}
  ]
)

export const Default = () => {

  useDynamicComponents(
    dynamicRenderResult.componentPairs
  )

  const codePlugin = new PrimeCodePlugin('tomorrow');
  const { CodeStyleSelector, codeExecute } = codePlugin.useComponent();

  const themePlugin = new BootstrapThemePlugin('lux');
  const { ThemeSelector } = themePlugin.useThemeComponent();

  const components = {
    code: codeExecute,
  }

  return (
    <div>
        <Talkative
          markdownString= {dynamicRenderResult.transformedContent}
          components = {components}
          showExternalToggle={true}
          externalToggleLabel='Show Style Controls'
          externalReactComponents={[
            <ThemeSelector key="theme" />,
            <CodeStyleSelector key="code" />,
          ]}
        />
      </div>
    )
}
