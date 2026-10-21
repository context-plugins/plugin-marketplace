import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { chaseOptionsSchema, type ChaseOptions } from "../chase-options.js";

/** Custom options to be passed to the `chaseorbital-card` connector. */
export type ChaseorbitalCard = ChaseOptions;

export const chaseorbitalCardSchema: Schema<ChaseorbitalCard> = s.of<ChaseorbitalCard>(
  s.union([s.lazy(() => chaseOptionsSchema)]),
);
