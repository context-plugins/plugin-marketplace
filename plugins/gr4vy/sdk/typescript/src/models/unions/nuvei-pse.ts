import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { nuveiPseOptionsSchema, type NuveiPseOptions } from "../nuvei-pse-options.js";

/** Custom options to be passed to the `nuvei-pse` connector. */
export type NuveiPse = NuveiPseOptions;

export const nuveiPseSchema: Schema<NuveiPse> = s.of<NuveiPse>(
  s.union([s.lazy(() => nuveiPseOptionsSchema)]),
);
