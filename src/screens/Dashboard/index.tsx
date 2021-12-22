import HighlightCard from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  UserName,
  User,
  UserGreetings,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList,
} from './styles';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const data: DataListProps[] = [{
    id: '1',
    type: 'positive',
    title: "Desenvolvimento de Site",
    amount: 'R$12.000,00',
    category: {
      name: 'Vendas',
      icon: 'dollar-sign',
    },
    date: '13/04/2021'
  },
  {
    id: '2',
    type: 'negative',
    title: "Hamburguer Pizzy",
    amount: 'R$59,00',
    category: {
      name: 'Alimentação',
      icon: 'coffee',
    },
    date: '10/04/2021'
  },
  {
    id: '3',
    type: 'negative',
    title: "Aluguel AP",
    amount: 'R$1200,00',
    category: {
      name: 'Vendas',
      icon: 'shopping-bag',
    },
    date: '10/04/2021'
  }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/83284629?s=400&u=4185d2226a8683149ad33d4770d4e70a6b7f5306&v=4' }} />
            <User>
              <UserGreetings>Olá,</UserGreetings>
              <UserName>Arthur</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$1.259,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$16.141,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={data as DataListProps[]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  )
}
