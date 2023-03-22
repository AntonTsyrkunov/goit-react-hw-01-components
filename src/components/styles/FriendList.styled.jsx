import styled from '@emotion/styled';


export const ListOfFriends = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  .avatar {
    margin-right: 10px;
  }
  .name {
    font-weight: 700;
    margin-right: 10px;
  }
  .status {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    margin-right: 10px;
    background-color: ${props => (props.isOnline ? 'green' : 'red')};
  }
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: #f0f0f0;
    outline: none;
    border-radius: 4px;
  }
`;