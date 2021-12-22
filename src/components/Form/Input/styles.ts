import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import theme from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
font-family: ${({ theme }) => theme.fonts.regular};
font-size: ${RFValue(14)}px;
width: 100%;
padding: 0 16px;

padding-top: ${RFValue(12)}px;
padding-bottom: ${RFValue(6)}px;

background-color: ${({ theme }) => theme.colors.shape};
color: ${({ theme }) => theme.colors.text_dark};
border-radius: 5px;
margin-bottom: 8px;

`;
