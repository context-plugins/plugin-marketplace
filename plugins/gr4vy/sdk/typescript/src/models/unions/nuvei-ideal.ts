import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nuveiIDealOptionsSchema, type NuveiIDealOptions } from "../nuvei-ideal-options.js";

/** Custom options to be passed to the `nuvei-ideal` connector. */
export type NuveiIdeal = NuveiIDealOptions;

export const nuveiIdealSchema: Schema<NuveiIdeal> = s.of<NuveiIdeal>(
  s.union([s.lazy(() => nuveiIDealOptionsSchema)]),
);
