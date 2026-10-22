import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { orderidSchema, type Orderid } from "./unions/orderid.js";
import { reportgroupSchema, type Reportgroup } from "./unions/reportgroup.js";

export type WorldpayVapOptions = {
  /** Overrides the default report group to pass to the Worldpay VAP API. */
  reportGroup?: Reportgroup;
  /**
   * Overrides the `orderId` passed to the Worldpay VAP API, which defaults to the Gr4vy transaction
   * ID.
   */
  orderId?: Orderid;
};

export const worldpayVapOptionsSchema: Schema<WorldpayVapOptions> = s.object<WorldpayVapOptions>({
  reportGroup: s.optional(s.lazy(() => reportgroupSchema)),
  orderId: s.optional(s.lazy(() => orderidSchema)),
});
