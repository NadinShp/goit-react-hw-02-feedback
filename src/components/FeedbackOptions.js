import PropTypes from 'prop-types';
import styles from './Feedback.module.css';
const FeedbackOptions = ({ onLeaveFeedback }) => (
    <ul className={styles.btn__list}>
        <li className="statistics__item">
            <button className={styles.statistics__btn} type="button" data-value="good" onClick={onLeaveFeedback}>Good</button>
        </li>
        <li className="statistics__item">
            <button className={styles.statistics__btn} type="button" data-value="neutral" onClick={onLeaveFeedback}>Neutral</button>
        </li>
        <li className="statistics__item">
            <button className={styles.statistics__btn} type="button" data-value="bad" onClick={onLeaveFeedback}>Bad</button>
        </li>
    </ul>
);

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
}
export default FeedbackOptions;