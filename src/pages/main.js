import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import Button from 'react-bootstrap/Button';

function Main() {
  return (
    <div className="App">    
      {/* content wrapper start */}
      <div id="content-wrapper">
        {/* welcome content start */}
        <div id="welcome-content-wrapper" className="content-wrapper">
          <div className="content_box">
            <div className="content-title-wrapper">
              <div className="content-main-title">우리들의 프로젝트 중심지, SideHub</div>
              <div className="content-main-desc">대학생을 위한 커뮤니티 기반 프로젝트 플랫폼</div>
            </div>
            <div className="button-wrapper">
              <Button variant="secondary">프로젝트 참여하기</Button>{' '}
              <Button variant="secondary">프로젝트 만들기</Button>{' '}
            </div>
          </div>
        </div>
        {/* welcome content end */}


        {/* best porfolio content start */}
        <div id="best-portfolio-content-wrapper" className="content-wrapper">
          <div className="content_box">
            <div className="content-title-wrapper">
              <div className="content-main-title">올해 최고의 포트폴리오</div>
              <div className="content-main-desc">부가 설명 부가 설명 부가 설명 부가 설명 부가 설명</div>
            </div>

            <div className="main-content-wrapper">
              <div id="first-portfolio-wrapper" className="portfolio-wrapper">
                <div className="portfolio-image"></div>
                <div className="portfolio-detail">
                  <div className="portfolio-title"> title </div>
                  <div className="portfolio-desc"> desc </div>
                  <div className="portfolio-icon"> icon </div>
                </div>
              </div>
              <div id="second-portfolio-wrapper" className="portfolio-wrapper">
                <div className="portfolio-image"></div>
                <div className="portfolio-detail">
                  <div className="portfolio-title"></div>
                  <div className="portfolio-desc"></div>
                  <div className="portfolio-icon"></div>
                </div>
              </div>
              <div id="third-portfolio-wrapper" className="portfolio-wrapper">
                <div className="portfolio-image"></div>
                <div className="portfolio-detail">
                  <div className="portfolio-title"></div>
                  <div className="portfolio-desc"></div>
                  <div className="portfolio-icon"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* best porfolio content end */}


        {/* scheduled project content start */}
        <div id="scheduled-project-content-wrapper" className="content-wrapper">
          <div className="content_image">대표 이미지</div>
          <div className="content_box">
            <div className="content-title-wrapper">
              <div className="content-main-title">현재 구인 프로젝트</div>
              <div className="content-main-desc">부가 설명 부가 설명 부가 설명 부가 설명 부가 설명</div>
            </div>
          </div>
        </div>
        {/* scheduled project content end */}


        {/* recent study content start */}
        <div id="recent-study-content-wrapper" className="content-wrapper">
          <div className="content_box">
              <div className="content-title-wrapper">
                <div className="content-main-title">최근 시작된 스터디</div>
                <div className="content-main-desc">부가 설명 부가 설명 부가 설명 부가 설명 부가 설명</div>
              </div>
          </div>
          <div className="content_image">대표 이미지</div>
        </div>
        {/* recent study content end */}


        {/* user review content start */}
        <div id="user-review-content-wrapper" className="content-wrapper">
          <div className="content_box">
              <div className="content-title-wrapper">
                <div className="content-main-title">사용자 후기</div>
                <div className="content-main-desc">부가 설명 부가 설명 부가 설명 부가 설명 부가 설명</div>
              </div>
          </div>
          <div className="content_image">대표 이미지</div>
        </div>
        {/* user review content end */}
      </div>
      {/* content wrapper end */}

    </div>
  );
}

export default Main;
