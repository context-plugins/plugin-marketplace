import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount25Schema, type Amount25 } from "./amount25.js";
import { source1Schema, type Source1 } from "./source1.js";

export type RoutingReversal1 = {
  /** The amount that will be pulled back. */
  amount?: Amount25;
  /** Where the funds will be pulled back from. */
  source?: Source1;
};

export const routingReversal1Schema: Schema<RoutingReversal1> = s.object<RoutingReversal1>({
  amount: s.optional(s.lazy(() => amount25Schema)),
  source: s.optional(s.lazy(() => source1Schema)),
});
