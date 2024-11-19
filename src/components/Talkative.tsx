import React, { useState } from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const Talkative: React.FC<{
  markdownString: string;
  components: any;
  externalReactComponents: React.ReactNode[];
  externalToggleLabel?: string;
  showExternalToggle?: boolean;
}> = ({ 
  markdownString,
  components,
  externalReactComponents,
  externalToggleLabel = 'Show Controls',
  showExternalToggle = false
}) => {
  
  const [showExternals, setShowExternals] = useState(false);

  const handleToggleControls = () => {
    setShowExternals(!showExternals);
  };

  return (
    <div className="container mt-4">
      {showExternalToggle && (
        <div className="form-check form-switch mb-3">
          <input
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
            checked={showExternals}
            onChange={handleToggleControls}
          />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
            {externalToggleLabel}
          </label>
        </div>
      )}
  
      {externalReactComponents.map((Component, index) => (
        <div key={index} style={{ display: showExternals ? 'block' : 'none' }}>
          {Component}
        </div>
      ))}

      <div
        className="card" 
      >
        <div className="card-body" >
          <MarkdownRenderer 
            markdownString={markdownString}
            components={components}
          />
        </div>
      </div>
    </div>
  );
};

export default Talkative;