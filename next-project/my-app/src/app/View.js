export default function View(props) {
    
    //regra de renderização do front
    const renderColor = props.job === 'Desenvolvedor de Sotware' ? 'red' : 'blue';
    const processsJobView = (job) => {
        if (job === 'Desenvolvedor de Software'){
            return(
                <span style={{color:"blue"}}>
                {job}
                </span>
            )
        }else{
            return(
                <span style={{color:"blue"}}>{job}</span>
            )
        }
    }

  return (
    <main>
        <br />
      <h3>Dados do cliente selecionado:</h3>
      <span>Nome: {props.name}</span><br />
      <span style={{ color: renderColor }}>Rgm: {props.rgm}</span><br />
      {processsJobView(props.job)}
      <br />
    </main>
  );
}