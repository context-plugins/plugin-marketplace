import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FlowCheck = {
  success?: boolean;
  statusCode?: number;
  durationMs?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const flowCheckSchema: Schema<FlowCheck> = s.object<FlowCheck>(
  {
    success: s.optional(s.boolean()),
    statusCode: s.optional(s.int()),
    durationMs: s.optional(s.int()),
  },
  { additionalProperties: s.json() },
);
