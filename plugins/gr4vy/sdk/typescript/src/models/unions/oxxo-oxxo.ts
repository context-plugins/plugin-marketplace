import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { oxxoOptionsSchema, type OxxoOptions } from "../oxxo-options.js";

/** Custom options to be passed to the `oxxo-oxxo` connector. */
export type OxxoOxxo = OxxoOptions;

export const oxxoOxxoSchema: Schema<OxxoOxxo> = s.of<OxxoOxxo>(s.union([s.lazy(() => oxxoOptionsSchema)]));
