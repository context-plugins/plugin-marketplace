import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Resources used per executor used by the application. */
export type ExecutorResourceRequest = {
  vendor?: string;
  resourceName?: string;
  amount?: string;
  discoveryScript?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const executorResourceRequestSchema: Schema<ExecutorResourceRequest> =
  s.object<ExecutorResourceRequest>(
    {
      vendor: s.optional(s.string()),
      resourceName: s.optional(s.string()),
      amount: s.optional(s.string()),
      discoveryScript: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
