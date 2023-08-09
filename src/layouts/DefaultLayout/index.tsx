import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      {/* a tag <Outlet/> informa para a aplicação
      o local a onde deve ser renderizado o contéudo
      de uma página específica !!! 
      (acredito ser um novo recurso. Já vi em alguns projetos usar "Children" para o
      mesmo funcionamento) */}
    </LayoutContainer>
  );
}
