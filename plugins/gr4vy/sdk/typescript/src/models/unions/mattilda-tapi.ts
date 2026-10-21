import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mattildaTapiOptionsSchema, type MattildaTapiOptions } from "../mattilda-tapi-options.js";

/** Custom options to be passed to the `mattilda-tapi` connector. */
export type MattildaTapi = MattildaTapiOptions;

export const mattildaTapiSchema: Schema<MattildaTapi> = s.of<MattildaTapi>(
  s.union([s.lazy(() => mattildaTapiOptionsSchema)]),
);
