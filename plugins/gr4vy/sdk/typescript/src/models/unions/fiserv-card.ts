import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fiservOptionsSchema, type FiservOptions } from "../fiserv-options.js";

/** Custom options to be passed to the `fiserv-card` connector. */
export type FiservCard = FiservOptions;

export const fiservCardSchema: Schema<FiservCard> = s.of<FiservCard>(
  s.union([s.lazy(() => fiservOptionsSchema)]),
);
