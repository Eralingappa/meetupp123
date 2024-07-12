import styled from 'styled-components'

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  min-height: 80vh;
`
export const RegisterImg = styled.img`
  height: 400px;
  width: 400px;
`
export const From = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const RegisterHeading = styled.h1`
color:#334155;
font-size:14px;;
font-family:'Roboto;

`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
color:#7b8794;
font-size:14px;
font-family:'Roboto;


`
export const Input = styled.input`
  border: 1px solid #cbd5e1;
  width: 340px;
  padding: 12px;
  font-family: 'Roboto';
`
export const Select = styled.select`
  border: 1px solid #cbd5e1;
  width: 340px;
  padding: 12px;
  font-family: 'Roboto';
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  boder: none;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 12px;
  font-family: 'Roboto';
`
export default RegisterContainer
