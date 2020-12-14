import styled from 'styled-components';

export const FormWrapper = styled.div`
background-color:white;
padding:16px;
display:flex;
flex-direction: column;
@media (max-width: 767px) {
    margin: 16px;
  };
  @media (min-width: 768px) {
    justify-content:center;
  }
`;

