import styled from 'styled-components/native';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import theme from '../../../global/styles/theme';
import { RFValue } from 'react-native-responsive-fontsize';


export const Container = styled(TouchableOpacity) <TouchableOpacityProps>`
width: 100%;
background-color: ${({ theme }) => theme.colors.secondary};
border-radius: 5px;
align-items: center;
justify-content: center;
padding: 18px;
`;

export const Title = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
font-size: ${RFValue(14)}px;
color: ${({ theme }) => theme.colors.shape};


`;
