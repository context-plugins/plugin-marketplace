import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { optionSchema, type Option } from "./option.js";

export type Shipping1 = {
  /**
   * A fixed list of shipping options to show your customer during checkout. Use `callbackUrl`
   * instead if your options depend on the customer's shipping address.
   */
  options?: Option[];
  /**
   * The URL Mollie calls to retrieve shipping options whenever your customer selects or changes
   * their shipping address. Requires `https://` for live mode. In test mode, `http://` is also
   * allowed.
   *
   * See the [shipping options
   * guide](https://docs.mollie.com/docs/handle-shipping-options-with-express-component) for the
   * callback request and response.
   */
  callbackUrl: string;
};

export const shipping1Schema: Schema<Shipping1> = s.object<Shipping1>({
  options: s.optional(s.array(s.lazy(() => optionSchema))),
  callbackUrl: s.string(),
});
