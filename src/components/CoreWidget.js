/** Do not rename this file **/
import React from 'react';

export default class QotDWidget extends React.Component {
  static propTypes = {
    width: React.PropTypes.number,
    height: React.PropTypes.number,
    settings: React.PropTypes.object.isRequired,
  };

  static id = 'quote-of-the-day';
  static widgetName = 'Quote of the Day';
  static sizes = [[2, 1]];

  render() {
    return (
      <div className="uk-margin-small-left container uk-margin-small-right">
        <div className="uk-margin-small-top uk-flex-column">
          <blockquote className="quote uk-flex-item-1 uk-margin-bottom-remove">
            <i className="uk-icon-medium uk-icon-quote-left uk-margin-small-right quote-text"></i>
            Victorious warriors win first and then go to war, while defeated warriors go to war first and then seek to win.
            <i className="uk-icon-medium uk-icon-quote-right uk-margin-small-left"></i>
          </blockquote>
          <i className="uk-flex-item-none uk-flex-bottom uk-align-right uk-margin-small-right">Sun Tzu</i>
        </div>
      </div>
    );
  }
}
