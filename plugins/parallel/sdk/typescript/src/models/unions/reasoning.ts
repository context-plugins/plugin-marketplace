import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseReasoningConfigSchema, type ResponseReasoningConfig } from "../response-reasoning-config.js";

export type Reasoning = ResponseReasoningConfig;

export const reasoningSchema: Schema<Reasoning> = s.of<Reasoning>(
  s.union([s.lazy(() => responseReasoningConfigSchema)]),
);
