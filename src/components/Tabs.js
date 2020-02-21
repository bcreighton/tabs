import React from 'react';

export default class Tabs extends React.Component {
  //send default props to the component
  static defaultProps = {
    tabs: []
  };

  render() {
    // return a div of the created buttons above
    renderButtons() {
      return this.props.tabs.map((tab, i) => (
        // create a button for each name with a unique key
        <button key={i}>
          {tab.name}
        </button>
      ))
    }

    renderContent() {
      // set the default tab as the first tab
      const currentTab = this.props.tabs[0];

      return (
        <div className='content'>
          {currentTab.content}
        </div>
      )
    }

    // only show content when the tabs array has a length
    return <div>
      {this.renderButtons()}
      {this.props.tabs.length && this.renderContent()}
    </div>;
  }
}
