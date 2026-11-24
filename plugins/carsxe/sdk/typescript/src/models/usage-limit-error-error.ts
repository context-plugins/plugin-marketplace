import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { usageSchema, type Usage } from "./usage.js";

export type UsageLimitErrorError = {
  /** @default "False" */
  success?: "False";
  message: string;
  usage?: Usage;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const usageLimitErrorErrorSchema: Schema<UsageLimitErrorError> = s.object<UsageLimitErrorError>(
  {
    success: s.defaulted(s.literal("False"), "False"),
    message: s.string(),
    usage: s.optional(s.lazy(() => usageSchema)),
  },
  { additionalProperties: s.json() },
);
