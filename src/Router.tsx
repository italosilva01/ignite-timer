import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { DefaultLayout } from "./layouts/DefaultLayout";

export function Router() {
  return (
    <Routes>
      {/* por que o 'path="/"' ? pois o <Header /> irá ser exibido em todos os
      endereçoes que começarem com "/" */}
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
}