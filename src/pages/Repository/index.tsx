import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Header, RepositoryInfo, Issues} from './styles';

interface RepositoryParams {
    repository: string;
}

const Repository: React.FC = () => {
    const { params } = useRouteMatch<RepositoryParams>();
    return (
        <>
            <Header> 
                <img src={logoImg} alt="Github Explorer" />
                <Link to="/">
                    <FiChevronLeft size={16} />
                    Voltar
                </Link>
                {/* Repository:{params.repository}  */}
            </Header>
            <RepositoryInfo>
                <header>
                    <img src="https://avatars1.githubusercontent.com/u/26532535?v=4" alt="Img minha"/>
                    <div>
                        <strong> react/reacttop</strong>
                        <p> curso top pra mim mesmo </p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>68</strong>
                        <span>Issues</span>
                    </li>
                </ul>
            </RepositoryInfo>

            <Issues>
                <Link to="ggdfgf">
                    <div>
                        <strong>hdfhgd </strong>
                        <p> gfhfdhhg </p>
                    </div>
    
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;