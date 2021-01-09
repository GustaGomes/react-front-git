import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories} from './styles';

const Dashboard: React.FC = () => {
    return (
        <>
        <img src={logoImg} alt=""/>
        <Title> Explore repositórios no Github </Title>

        <Form>
            <input placeholder="Digite o nome do repositório" />
            <button type="submit"> Pesquisar </button>
        </Form>

        <Repositories>

            <a href="">
                <img 
                src="https://avatars3.githubusercontent.com/u/26532535?s=460&u=740ecd46ee025cf92ba253ee0c96057d5ca5ac4a&v=4" 
                alt="Gomes Gustavo"
                />

                <div>
                    <strong> Gustavo Gomes | ReactJS | Angular </strong>
                    <p> Easy peasy highly scalable ReacleJS & React Native forms! </p>
                </div>

                <FiChevronRight size={20} />
            </a>

            <a href="">
                <img 
                src="https://avatars3.githubusercontent.com/u/26532535?s=460&u=740ecd46ee025cf92ba253ee0c96057d5ca5ac4a&v=4" 
                alt="Gomes Gustavo"
                />

                <div>
                    <strong> Gustavo Gomes | ReactJS | Angular </strong>
                    <p> Easy peasy highly scalable ReacleJS & React Native forms! </p>
                </div>

                <FiChevronRight size={20} />
            </a>

            <a href="">
                <img 
                src="https://avatars3.githubusercontent.com/u/26532535?s=460&u=740ecd46ee025cf92ba253ee0c96057d5ca5ac4a&v=4" 
                alt="Gomes Gustavo"
                />

                <div>
                    <strong> Gustavo Gomes | ReactJS | Angular </strong>
                    <p> Easy peasy highly scalable ReacleJS & React Native forms! </p>
                </div>

                <FiChevronRight size={20} />
            </a>

        </Repositories>
        </>
    );
};
export default Dashboard;