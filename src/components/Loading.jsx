import { BounceLoader } from "react-spinners"

export const Loading = ({ Loading }) => {

    const override = {
        display: "flex",
        margin: "0 auto",
        justifyContent: 'center',
    };

    return (
        <div className="justify-content-center">
            <BounceLoader loading={Loading} cssOverride={override} />
        </div>
    )
}
