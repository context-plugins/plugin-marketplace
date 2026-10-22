import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authorizationSchema, type Authorization } from "./unions/authorization.js";
import { capture1Schema, type Capture1 } from "./unions/capture1.js";
import { refund1Schema, type Refund1 } from "./unions/refund1.js";

export type AdyenSplitsOptions = {
  /**
   * Split payment values to pass to the Adyen API on payment authorization. See [the Adyen
   * docs](https://docs.adyen.com/platforms/online-payments/split-transactions/split-payments-at-authorization/)
   * for details on the format and contents of the list.
   */
  authorization?: Authorization;
  /**
   * Split payment values to pass to the Adyen API on payment capture. See [the Adyen
   * docs](https://docs.adyen.com/platforms/online-payments/split-transactions/split-payments-at-capture/)
   * for details on the format and contents of the list.
   */
  capture?: Capture1;
  /**
   * Split payment values to pass to the Adyen API on payment refund. See [the Adyen
   * docs](https://docs.adyen.com/platforms/online-payments/split-transactions/split-refunds/) for
   * details on the format and contents of the list.
   */
  refund?: Refund1;
};

export const adyenSplitsOptionsSchema: Schema<AdyenSplitsOptions> = s.object<AdyenSplitsOptions>({
  authorization: s.optional(s.lazy(() => authorizationSchema)),
  capture: s.optional(s.lazy(() => capture1Schema)),
  refund: s.optional(s.lazy(() => refund1Schema)),
});
