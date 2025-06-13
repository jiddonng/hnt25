'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const AboutPage = () => {
  return (
    <Container>
      <BackgroundVideo autoPlay muted loop>
        <source src="/background-video.mp4" type="video/mp4" />
      </BackgroundVideo>
      
      <ContentWrapper>
        <Navigation>
          <NavItem>
            <Link href="/about">about</Link>
          </NavItem>
          <NavItem>
            <Link href="/artist">artist</Link>
          </NavItem>
          <NavItem>
            <Link href="/ticket">ticket</Link>
          </NavItem>
        </Navigation>

        <MainContent>
          <Header>
            <WebInfo>web 1920 - about</WebInfo>
            <Title>HAVE A NICE TRIP 2025</Title>
            <TicketButton>Ticket</TicketButton>
          </Header>

          <TextContent>
            <p>2023년 처음 인사드렸던 'HAVE A NICE TRIP'이 올해도 돌아옵니다.</p>
            <p>깜짝 놀랄 만큼의 퀄적함과 어디에서도 만난 적 없던 고감도의 큐레이션으로 여러분과 다시 만나기를 기다리고 있습니다.</p>
            <p>음악이라는 가장 작별한 진구와 너나는 또 하나의 여행,</p>
            <p>HAVE A NICE TRIP 2025 에서 겪었습니다.</p>
            <Credits>
              <p>주관 : 민트페이퍼(Mint Paper), 더 볼트(THE VAULT)</p>
              <p>주최 : 주식회사 엠피엠지(MPMG)</p>
            </Credits>
          </TextContent>
        </MainContent>
      </ContentWrapper>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 100%;
  padding: 2rem;
  color: white;
`;

const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100px;
  padding-top: 2rem;
`;

const NavItem = styled.div`
  a {
    color: white;
    text-decoration: none;
    font-size: 0.9rem;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

const WebInfo = styled.div`
  font-size: 0.9rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: normal;
`;

const TicketButton = styled.button`
  background: white;
  color: black;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const TextContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  line-height: 1.6;
  
  p {
    margin-bottom: 1rem;
  }
`;

const Credits = styled.div`
  margin-top: 2rem;
  font-size: 0.9rem;
  
  p {
    margin-bottom: 0.5rem;
  }
`;

export default AboutPage; 