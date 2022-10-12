import styled from '@emotion/styled';

export const DivBtn = styled.div``;

export const Button = styled.button`
  margin-left: 5px;
  background-color: #eee;
  font-size: 20px;
  width: 100px;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  :hover,
  :focus {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #ddd;
  }
`;
