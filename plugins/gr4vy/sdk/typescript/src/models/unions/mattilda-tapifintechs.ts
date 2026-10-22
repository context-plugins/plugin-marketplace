import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { mattildaTapiOptionsSchema, type MattildaTapiOptions } from "../mattilda-tapi-options.js";

/** Custom options to be passed to the `mattilda-tapifintechs` connector. */
export type MattildaTapifintechs = MattildaTapiOptions;

export const mattildaTapifintechsSchema: Schema<MattildaTapifintechs> = s.of<MattildaTapifintechs>(
  s.union([s.lazy(() => mattildaTapiOptionsSchema)]),
);
