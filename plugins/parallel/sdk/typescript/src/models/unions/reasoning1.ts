import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseReasoningConfigSchema, type ResponseReasoningConfig } from "../response-reasoning-config.js";

/**
 * Reasoning configuration. `effort` (low/medium/high) controls how much research is performed;
 * defaults to `medium`.
 */
export type Reasoning1 = ResponseReasoningConfig;

export const reasoning1Schema: Schema<Reasoning1> = s.of<Reasoning1>(
  s.union([s.lazy(() => responseReasoningConfigSchema)]),
);
