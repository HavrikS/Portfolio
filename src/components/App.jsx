import React from 'react';
import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import  NavBar  from './NavBar/NavBar.jsx';
const HomePage = lazy(() => import('../pages/HomePage/HomePage.jsx'));
const ContactsPage  = lazy(() => import('../pages/ContactsPage/ContactsPage.jsx'));
const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage.jsx'));
const SkillsPage = lazy(() => import('../pages/SkillsPage/SkillsPage'));
const CertificatePage = lazy(() => import('../pages/CertificatePage/CertificatePage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage.jsx'));

const App = () => {
  return (
    <div> 
      <NavBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/progects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/certificate" element={<CertificatePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};


export default App;