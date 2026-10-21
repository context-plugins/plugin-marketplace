import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount48Schema, type Amount48 } from "./amount48.js";
import { destination2Schema, type Destination2 } from "./destination2.js";

/** Payload to create a new delayed route for a payment. */
export type RouteCreateRequest = {
  /** The amount to be routed. */
  amount: Amount48;
  /** The destination of the route. */
  destination: Destination2;
  /** Description shown in reports. */
  description?: string;
};

export const routeCreateRequestSchema: Schema<RouteCreateRequest> = s.object<RouteCreateRequest>({
  amount: amount48Schema,
  destination: destination2Schema,
  description: s.optional(s.string()),
});
