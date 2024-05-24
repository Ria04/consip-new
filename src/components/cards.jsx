import SettingsIcon from "@mui/icons-material/Settings";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import OnlinePredictionIcon from "@mui/icons-material/OnlinePrediction";
import LinkIcon from "@mui/icons-material/Link";
import AssistantIcon from "@mui/icons-material/Assistant";
export const Card = () => {
    return (
        <div id="services" className="container2-contents">
        <div className="container">

          <h2>Services</h2>
        </div>

        <div className="container card-container">
          <div className="card">
            <div className="logo-div">
              <SettingsIcon color="primary" sx={{ fontSize: 50 }} />
            </div>
            <h2>Manufacturing</h2>
            <div className="card-details">
              <h3>EMI/RFI Filters</h3>
              <p>
                Manage electromagnetic and radio-frequency interference with
                specialized filters
              </p>
              <h3>Wireless Data Loggers</h3>
              <p>Advanced solutions for remote data monitoring and logging</p>
              <h3>Customization</h3>
              <p>Tailored solutions to fit specific instrument profiles</p>
            </div>
          </div>
          <div className="card">
            <div className="logo-div">
              <RoomPreferencesIcon color="primary" sx={{ fontSize: 50 }} />
            </div>

            <h2>Services</h2>
            <div className="card-details">
              <h3>Computer System Validation (CSV)</h3>
              <p>Ensuring systems operate within regulatory guidelines</p>
              <h3>Thermal Validation</h3>
              <p>
                Validating temperature-controlled environments and equipment
              </p>
              <h3>Calibration Services</h3>
              <p>Precision calibration for various instruments and devices</p>
              <h3>HVAC Validation</h3>
              <p>
                Comprehensive validation for heating, ventilation, and air
                conditioning systems
              </p>
            </div>
          </div>
          <div className="card">
            <div className="logo-div">
              <OnlinePredictionIcon color="primary" sx={{ fontSize: 50 }} />
            </div>
            <h2>Technology</h2>
            <div className="card-details">
              <h3>Software Development</h3>
              <p>Creating custom software solutions for various platforms</p>
              <h3>Software Testing</h3>
              <p>
                Rigorous testing to ensure software reliability and performance
              </p>
              <h3>Automation</h3>
              <p>
                Implementing automated systems for improved efficiency and
                accuracy
              </p>
              <h3>Tech Support</h3>
              <p>
                Providing ongoing technical support for all IT and software
                needs
              </p>
            </div>
          </div>
          <div className="card">
            <div className="logo-div">
              <LinkIcon color="primary" sx={{ fontSize: 50 }} />
            </div>
            <h2>Supply Chain</h2>
            <div className="card-details">
              <h3>Trading</h3>
              <p>
                Efficient and reliable trading solutions to optimize supply
                chain operations
              </p>
            </div>
          </div>
          <div className="card">
            <div className="logo-div">
              <AssistantIcon color="primary" sx={{ fontSize: 50 }} />
            </div>
            <h2>Consulting & Audit</h2>
            <div className="card-details">
              <h3>Regulatory Compliance</h3>
              <p>
                Expertise in industry regulations such as US FDA 21 CFR Part 11,
                EU GMP Annexure 11, GAMP5, MHRA, TGA, and WHO
              </p>
              <h3>Audit & Risk Management</h3>
              <p>
                Detailed audits, risk assessments, and quality management system
                implementations
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}