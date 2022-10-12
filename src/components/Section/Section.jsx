import { PropTypes } from 'prop-types';
import { SectionStyle, H2 } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionStyle>
      {title && <H2>{title}</H2>}
      {children}
    </SectionStyle>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
