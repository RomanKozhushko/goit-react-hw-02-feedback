import css from './sectionRender.modules.css';
// import PropTypes from 'prop-types';

// countTotalFeedback();
// countPositiveFeedbackPercentage();





export const sectionRender = (Good, Neutral, Total, Bad, PositiveFeedback,) => {
  return (
    <section>
    <div>
        <h2>Please leave feedback</h2>
        <button className={css.button}>
            Good
        </button>
           <button className={css.button}>
            Neutral
        </button>
           <button className={css.button}>
            Bad
        </button>
    </div>   
    <div>
        <h2>Statistics</h2>
        <p>Good: {Good}</p>
        <p>Neutral: {Neutral}</p>
        <p>Bad: {Bad}</p>
        <p>Total: {Total}</p>
        <p>Positive feedback: {PositiveFeedback}</p>
    </div>
</section>
  );
};

// sectionRender.propTypes = {
//     Good : PropTypes.number.isRequired,
//     Neutral :PropTypes.number.isRequired,
//     Bad: PropTypes.number.isRequired,
//     Total: PropTypes.number.isRequired,
//     PositiveFeedback: PropTypes.number.isRequired,
// }
export default sectionRender