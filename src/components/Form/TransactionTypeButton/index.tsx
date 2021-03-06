import {
  Container,
  Icon,
  Title,
} from './styles';

import { TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container
      isActive={isActive}
      type={type}
      {...rest} >
      <Icon
        type={type}
        name={icons[type]}
      />
      <Title>
        {title}
      </Title>

    </Container>
  )
}
