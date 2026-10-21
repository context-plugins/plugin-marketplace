import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { trustlyOptionsSchema, type TrustlyOptions } from "../trustly-options.js";

/** Custom options to be passed to the `trustly-trustly` connector. */
export type TrustlyTrustly = TrustlyOptions;

export const trustlyTrustlySchema: Schema<TrustlyTrustly> = s.of<TrustlyTrustly>(
  s.union([s.lazy(() => trustlyOptionsSchema)]),
);
