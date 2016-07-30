/** Do not rename this file **/
import React from 'react';

export default class MyNewWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'quote-of-the-day';
  static widgetName = 'your-widget-name';
  static sizes = [[1, 1], [2, 1]];

  render() {
    return (
      <div className="uk-margin-left uk-vertical-align container uk-margin-right">
        <div className="uk-vertical-align-middle">
          <blockquote>
            <i className="uk-icon-medium uk-icon-quote-left uk-margin-small-right"></i>
            Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.
            <i className="uk-icon-medium uk-icon-quote-right uk-margin-small-left"></i>
          </blockquote>
          <i className="uk-align-right uk-margin-small-right">Sun Tzu</i>
        </div>
      </div>
    );
  }
}
