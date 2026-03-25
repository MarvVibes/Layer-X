import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { GlobalCursorGlow } from './components/Shared';
import Home from './pages/Home';
import ArchitecturePage from './pages/Architecture';
import UseCasesPage from './pages/UseCases';
import TokenPage from './pages/Token';
import DocsPage from './pages/Docs';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalCursorGlow />
      <div className="fixed inset-0 scanline z-40 pointer-events-none" />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/architecture" element={<ArchitecturePage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/token" element={<TokenPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
