import axios from 'axios';
import { useState, useEffect } from 'react';


function Project() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3002/getData');
            setProjectList(response.data);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="project-wrapper">
                <div className="project-title">신규 프로젝트</div>
                <div className="project-list-wrapper">
                    <div className="list-wrapper">
                        {projectList.map((el, index) => {
                            return (
                                <div className="project">
                                    <div className="project-title">
                                        {el.title}
                                    </div>
                                    <div className="project-desc">
                                        {el.content}
                                    </div>
                                    <div className="project-headcount">
                                        {el.member}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="project-wrapper">
                <div className="project-title">마감 임박 프로젝트</div>
            </div>
            <div className="project-wrapper">
                <div className="project-title">모집중 전체 프로젝트</div>
            </div>
        </div>
    );
}

export default Project;

