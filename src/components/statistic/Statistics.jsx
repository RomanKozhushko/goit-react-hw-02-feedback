import PropTypes from 'prop-types';
import { StatList, StatItem, StatItemSpan } from './Statistics.styled'




const Statistics = ({
    good,
    neutral,
    bad,
}) => {
    
   
    const total = good + neutral + bad;
    const percentage = Math.round(good * 100 / total);
      
    
    return (
        <StatList>

            <StatItem>Good:
                <StatItemSpan >{good}</StatItemSpan>
            </StatItem>

            <StatItem>Neutral:
                <StatItemSpan >{neutral}</StatItemSpan>
            </StatItem>

            <StatItem>Bad:
                <StatItemSpan >{bad}</StatItemSpan>
            </StatItem>

            <StatItem>Total:
                <StatItemSpan >{total} </StatItemSpan>
            </StatItem>

            <StatItem>Positive feedback:
                <StatItemSpan >{percentage || 0}</StatItemSpan>
            </StatItem>

        </StatList>)
};

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,

}

export default Statistics