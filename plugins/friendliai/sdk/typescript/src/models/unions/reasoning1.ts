import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  responsesReasoningConfigSchema,
  type ResponsesReasoningConfig,
} from "../responses-reasoning-config.js";

/** Configuration options for reasoning models. */
export type Reasoning1 = ResponsesReasoningConfig;

export const reasoning1Schema: Schema<Reasoning1> = s.of<Reasoning1>(
  s.union([s.lazy(() => responsesReasoningConfigSchema)]),
);
