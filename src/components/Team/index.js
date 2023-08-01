import Employee from "../Employee";
import "./team.css";

const Team = (props) => {
  return (
    (props.employees.length>0) ? <section
      className="team"
      style={{
        backgroundColor: props.corSecundaria,
      }}
    >
      <h3
        style={{
          borderColor: props.corPrimaria,
        }}
      >
        {props.nome}
      </h3>
      <div className="employees">
        {props.employees.map(employee => <Employee key={employee.nome} nome={employee.nome} cargo={employee.cargo} imagem={employee.imagem} corDeFundo={props.corPrimaria} />)}
        </div>
    </section>
    : ''
  );
};

export default Team;
