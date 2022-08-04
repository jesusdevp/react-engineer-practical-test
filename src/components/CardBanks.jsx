

export const CardBanks = ({ banks }) => {
    return (
        <>
            {banks.map((bank, i) => (
                <div className="col-xl-3 col-md-4 col-sm-4 mb-4" key={i}>
                    <div className="card h-100 text-center p-4">
                        <img src={bank.url} className="card-img-top" alt={bank.bankName} height='250px' />
                        <div className="card-body">
                            <h5 className="card-title mb-0">{bank.bankName}</h5>
                            <p className="card-text lead fw-bold">Age:  {bank.age}</p>
                            <p className="card-text lead fw-bold">Description:  {bank.description}</p>
                        </div>
                    </div>
                </div>
            ))}

        </>
    )
}
