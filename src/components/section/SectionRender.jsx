import React from 'react';
import css from './sectionRender.modules.css';
// import PropTypes from 'prop-types';

// countTotalFeedback();
// countPositiveFeedbackPercentage();



class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
countGood = () => { };
countNeutral = () => { };
countBad = () => {};
countTotalFeedback = () => { };
countPositiveFeedbackPercentage = () => { };
    render() {
        return(
        <section>
            <div>
                <h2>Please leave feedback</h2>
                <button type='button' className={css.button} onClick={this.countGood}>
                    Good
                </button>
                <button type='button' className={css.button} onClick={this.countNeutral}>
                    Neutral
                </button>
                <button type='button' className={css.button} onClick={this.countBad}>
                    Bad
                </button>
            </div>
                <div>
                    <h2>Statistics</h2>
                    <p>Good:
                        <span className='good__value'>{this.state.good}</span>
                    </p>
                    <p>Neutral:
                        <span className='neutral__value'>{this.state.neutral}</span>
                    </p>
                    <p>Bad:
                        <span className='bad__value'>{this.state.bad}</span>
                    </p>
                    <p>Total:
                        <span className='total__value'>0</span>
                    </p>
                    <p>Positive feedback:
                        <span className='positiveFeedback__value'>0</span>
                    </p>
            </div>
        </section>
        )
    }
}
    




// sectionRender.propTypes = {
//     Good : PropTypes.number.isRequired,
//     Neutral :PropTypes.number.isRequired,
//     Bad: PropTypes.number.isRequired,
//     Total: PropTypes.number.isRequired,
//     PositiveFeedback: PropTypes.number.isRequired,
// }
export default Feedback;