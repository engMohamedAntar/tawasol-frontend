import { connect } from "react-redux";
import { useAlert } from "react-alert";
import { useEffect } from "react";

const Alert = ({alert}) => {
    const showAlert = useAlert();
    useEffect(()=> {
        if(alert.show) {
            showAlert.show(alert.msg, {type: alert.type});
        }
    })

    return <></>;
}

const mapStateToProps = (state) => {
    return {
        alert : state.alerts
    }
}

export default connect(mapStateToProps)(Alert);