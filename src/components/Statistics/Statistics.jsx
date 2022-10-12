import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

import {
  DivStat,
  Span,
  SpanTotal,
  SpanPercentage,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <Section title="Statistics">
      <DivStat>
        <Span>Good: {good}</Span>
        <Span>Neutral: {neutral}</Span>
        <Span>Bad: {bad}</Span>
        <SpanTotal>Total: {total}</SpanTotal>
        <SpanPercentage>
          Positive feedback: {positivePercentage}%
        </SpanPercentage>
      </DivStat>
    </Section>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
