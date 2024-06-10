import SettingsIcon from "@mui/icons-material/Settings";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import LinkIcon from "@mui/icons-material/Link";
import AssistantIcon from "@mui/icons-material/Assistant";

const getCards = (option) => {
    switch (option) {
        case 'Manufacturing':
            return (
                <div className="container card-container">
                    <div className="card">
                        <div className="logo-div">
                            <SettingsIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>EMI/RFI Filters</h2>
                        <div className="card-details">
                            <p>
                                Manage electromagnetic and radio-frequency interference with
                                specialized filters
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <SettingsIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Wireless Data Loggers</h2>
                        <div className="card-details">
                            <p>Advanced solutions for remote data monitoring and logging</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <SettingsIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Customization</h2>
                        <div className="card-details">
                            <p>Tailored solutions to fit specific instrument profiles</p>
                        </div>
                    </div>
                </div>
            )
        case 'Services':
            return (
                <div className="container card-container">
                    <div className="card">
                        <div className="logo-div">
                            <RoomPreferencesIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Computer System Validation (CSV)</h2>
                        <div className="card-details">
                            <p>Ensuring systems operate within regulatory guidelines</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <RoomPreferencesIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Thermal Validation</h2>
                        <div className="card-details">
                            <p>
                                Validating temperature-controlled environments and equipment
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <RoomPreferencesIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Calibration Services</h2>
                        <div className="card-details">
                            <p>Precision calibration for various instruments and devices</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <RoomPreferencesIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>

                        <h2>HVAC Validation</h2>
                        <div className="card-details">
                            <p>
                                Comprehensive validation for heating, ventilation, and air
                                conditioning systems
                            </p>
                        </div>
                    </div>
                </div>
            )
        case 'Technology':
            return (
                <div className="container card-container">
                    <div className="card">
                        <div className="logo-div">
                            <OnlinePredictionIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Software Development</h2>
                        <div className="card-details">
                            <p>Creating custom software solutions for various platforms</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <OnlinePredictionIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Software Testing</h2>
                        <div className="card-details">
                            <p>
                                Rigorous testing to ensure software reliability and performance
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <OnlinePredictionIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Automation</h2>
                        <div className="card-details">
                            <p>
                                Implementing automated systems for improved efficiency and
                                accuracy
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <OnlinePredictionIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Tech Support</h2>
                        <div className="card-details">
                            <p>
                                Providing ongoing technical support for all IT and software
                                needs
                            </p>
                        </div>
                    </div>
                </div>
            )
        case 'Supply Chain':
            return (
                <div className="container card-container">
                    <div className="card">
                        <div className="logo-div">
                            <LinkIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Trading</h2>
                        <div className="card-details">
                            <p>
                                Efficient and reliable trading solutions to optimize supply
                                chain operations
                            </p>
                        </div>
                    </div>
                </div>
            )
        case 'Consulting & Audit':
            return (
                <div className="container card-container">
                    <div className="card">
                        <div className="logo-div">
                            <AssistantIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Regulatory Compliance</h2>
                        <div className="card-details">
                            <p>
                                Expertise in industry regulations such as US FDA 21 CFR Part 11,
                                EU GMP Annexure 11, GAMP5, MHRA, TGA, and WHO
                            </p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="logo-div">
                            <AssistantIcon color="primary" sx={{ fontSize: 50 }} />
                        </div>
                        <h2>Audit & Risk Management</h2>
                        <div className="card-details">
                            <p>
                                Detailed audits, risk assessments, and quality management system
                                implementations
                            </p>
                        </div>
                    </div>
                </div>
            )
        default:
            return;
    }

}
export const HiddenCardSection = ({cardName}) => {
    return (
        cardName && (
            <div id="hidden-services" className="container2-contents hidden-cards-container">
            <div className="container">

                <h2>{cardName}</h2>
            </div>

                {getCards(cardName)}
        </div>
        )
        
    )
}