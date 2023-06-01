const BabyNameList = (props: any) => {

  return (
    <ul>
      {props.babies.map((baby: any, index: number) => (
        <li key={index}>{baby.name}</li>
      ))}
    </ul>
  );
}

export default BabyNameList;