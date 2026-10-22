import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount25Schema, type Amount25 } from "./amount25.js";
import { sourceSchema, type Source } from "./source.js";

export type RoutingReversal = {
  /** The amount that will be pulled back. */
  amount?: Amount25;
  /** Where the funds will be pulled back from. */
  source?: Source;
};

export const routingReversalSchema: Schema<RoutingReversal> = s.object<RoutingReversal>({
  amount: s.optional(s.lazy(() => amount25Schema)),
  source: s.optional(s.lazy(() => sourceSchema)),
});
