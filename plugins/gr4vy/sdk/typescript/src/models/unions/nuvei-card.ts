import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nuveiOptionsSchema, type NuveiOptions } from "../nuvei-options.js";

/** Custom options to be passed to the `nuvei-card` connector. */
export type NuveiCard = NuveiOptions;

export const nuveiCardSchema: Schema<NuveiCard> = s.of<NuveiCard>(
  s.union([s.lazy(() => nuveiOptionsSchema)]),
);
