import { PropTypes } from 'prop-types';
import { DivMessage } from 'components/Notification/Notification.styled';

export const Notification = ({ message }) => {
  return <DivMessage>{message}</DivMessage>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
