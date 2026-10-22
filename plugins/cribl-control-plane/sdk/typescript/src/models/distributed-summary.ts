import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { groups2Schema, type Groups2 } from "./groups2.js";
import { workersSchema, type Workers } from "./workers.js";

/** Summary of the deployment for the specified Cribl product (Stream or Edge). */
export type DistributedSummary = {
  /** Resource counts for Worker Groups or Edge Fleets in the deployment summary. */
  groups: Groups2;
  /** Worker or Edge Node counts and health statistics in the deployment summary. */
  workers?: Workers;
};

export const distributedSummarySchema: Schema<DistributedSummary> = s.object<DistributedSummary>({
  groups: groups2Schema,
  workers: s.optional(s.lazy(() => workersSchema)),
});
