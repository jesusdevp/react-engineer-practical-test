import { CardBanks } from "./CardBanks"

export const BanksContainer = ({ banks }) => {
    return (
        <>
            <h1>List of Banks</h1>
            {Object.keys(banks).length > 0
                ? <CardBanks banks={banks} />
                : <h1>No banks available</h1>
            }
        </>
    )
}
