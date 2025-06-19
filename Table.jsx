const Table = (props) => {
    const { data, c ,setFn } = props;
    let newData =[];
    if (c < data.length) {
    newData = [data[c]];

    }
    return(
        <>
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tboby>
                {newData.map((item) => {
                    return (
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.value}</td>
                        </tr>
                    );
                })}
            </tboby>
        </table>
        <button onClick={() => setFn(c - 1)}>Decrement Counter</button>
        </>
    );
};
export default Table;