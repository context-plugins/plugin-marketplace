import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Resources used per task created by the application. */
export type TaskResourceRequest = {
  resourceName?: string;
  amount?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskResourceRequestSchema: Schema<TaskResourceRequest> = s.object<TaskResourceRequest>(
  {
    resourceName: s.optional(s.string()),
    amount: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
