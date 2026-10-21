import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Resource counts for Worker Groups or Edge Fleets in the deployment summary. */
export type Groups2 = {
  /** Total number of Worker Groups or Edge Fleets. */
  count: number;
  /** Total number of Destinations. */
  destinations: number;
  /** Total number of Packs. */
  packs: number;
  /** Total number of Pipelines. */
  pipelines: number;
  /** Total number of QuickConnect configurations. */
  quickConnects: number;
  /** Total number of Routes. */
  routes: number;
  /** Total number of Sources. */
  sources: number;
};

export const groups2Schema: Schema<Groups2> = s.object<Groups2>({
  count: s.int(),
  destinations: s.int(),
  packs: s.int(),
  pipelines: s.int(),
  quickConnects: s.int(),
  routes: s.int(),
  sources: s.int(),
});
