const Task2 = () => {
    var a = [
        {
          stock_name: "EFX",
          company_name: "Equifax Inc",
          price: 163.55,
          currency: "USD",
          change: "+9.03",
        },
        {
          stock_name: "IRM",
          company_name: "Iron Mountain Inc",
          price: 33.21,
          currency: "USD",
          change: "+1.42",
        },
        {
          stock_name: "NTAP",
          company_name: "NetApp Inc",
          price: 54.81,
          currency: "USD",
          change: "-6.01",
        },
        {
          stock_name: "CTL",
          company_name: "Centurylink Inc",
          price: 13.79,
          currency: "USD",
          change: "-1.37",
        },
      ];
    return (
    <>
      <table className="task2" style={{ border: "solid 1px" }}>
        <tr>
          <th>stock_name</th>
          <th>company_name</th>
          <th>price</th>
          <th>currency</th>
          <th>change</th>
        </tr>
        {a.map((e) => {
          return (
            <tr>
              <th>{e.stock_name}</th>
              <th>{e.company_name}</th>
              <th>{e.price}</th>
              <th>{e.currency}</th>
              <th style={+e.change > 0 ? { color: "green" } : { color: "red" }}>
                {e.change}
              </th>
            </tr>
          );
        })}
      </table>
    </>
  );
};

export default Task2;
