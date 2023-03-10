import { Checkout as SourceCheckout } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper/ContentWrapper.component";

import ProgressBar from "../../component/ProgressBar/ProgressBar.component";

export class Checkout extends SourceCheckout {
  render() {
    return (
      <main block="Checkout">
        <ProgressBar
          stepMap={this.stepMap}
          checkoutStep={this.props.checkoutStep}
        />
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}
export default Checkout;
