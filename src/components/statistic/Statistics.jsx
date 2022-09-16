// import css from './statistics.module.css'
// import PropTypes from 'prop-types'; 


// class Statistics extends React.Component {
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//     }
    
//     countGood = () => {
//         this.setState(prevGood => {
//             return {
//                 good: prevGood.good + 1,
//             }
//         })
//     };
//     countNeutral = () => { 
//         this.setState(prevNeutral => {
//             return {
//                 neutral: prevNeutral.neutral + 1,
//             }
//         })
//     };
//     countBad = () => { 
//         this.setState(prevBad => {
//             return {
//                 bad: prevBad.bad + 1,
//             }
//         })
//     };
        
//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad
//     };
//     countPositiveFeedbackPercentage = () => {
        
//     const { good, neutral, bad } = this.state;
//         return Math.round(good * 100 / (neutral + bad + good));
//     }

//     render() {
//       const { good, neutral, bad } = this.state;
//         const totalFeedback = this.countTotalFeedback();
//         const PositiveFeedbackPercentage = this.countPositiveFeedbackPercentage();
//         return (
//                 <div >
//                     <h2>Statistics</h2>
//                     <p>Good:
//                         <span className='good__value'>{good}</span>
//                     </p>
//                     <p>Neutral:
//                         <span className='neutral__value'>{neutral}</span>
//                     </p>
//                     <p>Bad:
//                         <span className='bad__value'>{bad}</span>
//                     </p>
//                     <p>Total:
//                         <span className='total__value'>{totalFeedback}</span>
//                     </p>
//                     <p>Positive feedback:
//                         <span className='positiveFeedback__value'>{PositiveFeedbackPercentage || 0}</span>
//                     </p>
//                 </div>
//             )
//     }
// }
    
// Statistics.propTypes = {
//     good : PropTypes.number.isRequired,
//     neutral : PropTypes.number.isRequired,
//     bad : PropTypes.number.isRequired,
//     total : PropTypes.number.isRequired,
//     positivePercentage : PropTypes.number.isRequired,
// };

// export default Statistics