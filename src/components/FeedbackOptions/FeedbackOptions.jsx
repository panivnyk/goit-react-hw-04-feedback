import PropTypes from 'prop-types';
import { Section } from 'components/Section/Section';

import {
  DivBtn,
  Button,
} from 'components/FeedbackOptions/FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Section title="Please leave feedback">
      <DivBtn>
        {options.map((option, id) => {
          return (
            <Button
              key={id}
              type="button"
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </Button>
          );
        })}
      </DivBtn>
    </Section>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
