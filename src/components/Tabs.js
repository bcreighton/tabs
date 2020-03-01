import React from 'react';

export default class Tabs extends React.Component {
  //send default props to the component
  static defaultProps = {
    tabs: []
  };

  state = {
    currentTabIndex: 0
  };

  // return a div of the created buttons above
  renderButtons() {
    return this.props.tabs.map((tab, i) => (
      // create a button for each name with a unique key
      <button key={i} onClick={() => this.handleButtonClick(i)}>
        {tab.name}
      </button>
    ))
  }

  renderContent() {
    // set the default tab as the first tab
    const currentTab = this.props.tabs[this.state.currentTabIndex];

    return (
      <div className='content'>
        {currentTab.content}
      </div>
    )
  }

  handleButtonClick = (i) => {
    this.setState({ currentTabIndex: i })
  }

  render() {
    // only show content when the tabs array has a length
    return <div>
      {this.renderButtons()}
      {!!this.props.tabs.length && this.renderContent()}
    </div>;
  }
}
