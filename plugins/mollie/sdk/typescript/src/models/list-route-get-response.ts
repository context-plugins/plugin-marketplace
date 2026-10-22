import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount47Schema, type Amount47 } from "./amount47.js";
import { destination2Schema, type Destination2 } from "./destination2.js";
import { links61Schema, type Links61 } from "./links61.js";

export type ListRouteGetResponse = {
  /**
   * Indicates the response contains a route object. Will always contain the string `route` for this
   * endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this route. Mollie assigns this identifier at route
   * creation time. Mollie will always refer to the route by this ID. Example:
   * `crt_dyARQ3JzCgtPDhU2Pbq3J`.
   */
  id: string;
  /**
   * The unique identifier of the payment. For example: `tr_5B8cwPMGnU6qLbRvo7qEZo`. The full
   * payment object can be retrieved via the payment URL in the `_links` object.
   */
  paymentId: string;
  /** The amount of the route. That amount that will be routed to the specified destination. */
  amount: Amount47;
  /** The description of the route. This description is shown in the reports. */
  description: string;
  /** The destination of the route. */
  destination: Destination2;
  /**
   * Whether to create the entity in test mode or live mode.
   *
   * Most API credentials are specifically created for either live mode or test mode, in which case
   * this parameter must not be sent. For organization-level credentials such as OAuth access
   * tokens, you can enable test mode by setting `testmode` to `true`.
   */
  testmode?: boolean | null;
  /**
   * The entity's date and time of creation, in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
   * format.
   */
  createdAt: string;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links61;
};

export const listRouteGetResponseSchema: Schema<ListRouteGetResponse> = s.object<ListRouteGetResponse>({
  resource: s.string(),
  id: s.string(),
  paymentId: s.string(),
  amount: amount47Schema,
  description: s.string(),
  destination: destination2Schema,
  testmode: s.optionalNullable(s.boolean()),
  createdAt: s.string(),
  links: links61Schema,
  _keysMap: {
    links: "_links",
  },
});
