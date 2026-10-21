import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { ryftCardOptionsSchema, type RyftCardOptions } from "../ryft-card-options.js";

/** Custom options to be passed to the `ryft-card` connector. */
export type RyftCard = RyftCardOptions;

export const ryftCardSchema: Schema<RyftCard> = s.of<RyftCard>(
  s.union([s.lazy(() => ryftCardOptionsSchema)]),
);
