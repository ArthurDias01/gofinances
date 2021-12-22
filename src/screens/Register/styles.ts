import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import theme from '../../global/styles/theme';

export const Container = styled.View`
background-color: ${({ theme }) => theme.colors.background};
flex: 1;
`;

export const Header = styled.View`
background-color: ${({ theme }) => theme.colors.primary};})}
height: ${RFValue(113)}px;
align-items: center;
justify-content: flex-end;
padding-bottom: 19px
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};})}
font-size: ${RFValue(18)}px;
color: ${({ theme }) => theme.colors.shape};})}
`;

export const Form = styled.View`
flex: 1;
width: 100%;
padding: 24px;
justify-content: space-between;
`;

export const Fields = styled.View`
`;