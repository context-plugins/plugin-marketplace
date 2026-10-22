import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount13Schema, type Amount13 } from "./amount13.js";
import { destinationSchema, type Destination } from "./destination.js";
import { links3Schema, type Links3 } from "./links3.js";
import { modeSchema, type Mode } from "./mode.js";

export type EntityPaymentRouteResponse = {
  /**
   * Indicates the response contains a route object. Will always contain the string `route` for this
   * endpoint.
   */
  resource: string;
  /**
   * The identifier uniquely referring to this route. Mollie will always refer to the route by this
   * ID. Example: `rt_5B8cwPMGnU6qLbRvo7qEZo`.
   */
  id: string;
  /** Whether this entity was created in live mode or in test mode. */
  mode: Mode;
  /**
   * The portion of the total payment amount being routed. Currently only `EUR` payments can be
   * routed.
   */
  amount: Amount13;
  /** The destination of this portion of the payment. */
  destination: Destination;
  /** The date and time when the route was created. The date is given in ISO 8601 format. */
  createdAt: string;
  /**
   * Optionally, schedule this portion of the payment to be transferred to its destination on a
   * later date. The date must be given in `YYYY-MM-DD` format.
   *
   * If no date is given, the funds become available to the connected merchant as soon as the
   * payment succeeds.
   */
  releaseDate?: string | null;
  /**
   * An object with several relevant URLs. Every URL object will contain an `href` and a `type`
   * field.
   */
  links: Links3;
};

export const entityPaymentRouteResponseSchema: Schema<EntityPaymentRouteResponse> =
  s.object<EntityPaymentRouteResponse>({
    resource: s.string(),
    id: s.string(),
    mode: modeSchema,
    amount: amount13Schema,
    destination: destinationSchema,
    createdAt: s.string(),
    releaseDate: s.optionalNullable(s.string()),
    links: links3Schema,
    _keysMap: {
      links: "_links",
    },
  });
