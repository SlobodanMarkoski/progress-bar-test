import { PureComponent } from "react";

import "./ProgressBar.styles.scss";

export default class ProgressBar extends PureComponent {
  render() {
    const { stepMap, checkoutStep } = this.props;

    const checkoutSteps = Object.keys(stepMap).map((step) => step);

    const stepNumber = checkoutSteps.indexOf(checkoutStep) + 1;

    const steps = Object.keys(stepMap).map((step, idx) => (
      <div
        className={
          stepNumber > idx ? "progress-bar-step active" : "progress-bar-step "
        }
      >
        {idx !== Object.keys(stepMap).length - 1 && (
          <>
            <span
              className={
                stepNumber - 1 > idx
                  ? "checkout-step past-checkout"
                  : "checkout-step"
              }
            >
              {idx + 1}
            </span>

            <div className="checkout-label">
              <span>{stepMap[step].url.substring(1)}</span>
            </div>
          </>
        )}
      </div>
    ));

    return (
      <div className="progress-container">
        <div className="progress-bar">{steps}</div>
      </div>
    );
  }
}
