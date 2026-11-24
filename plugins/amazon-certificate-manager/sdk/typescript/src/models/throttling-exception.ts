import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { throttlingReasonSchema, type ThrottlingReason } from "./throttling-reason.js";

export type ThrottlingException = {
  message?: string;
  /** One or more reasons why the request was throttled. */
  throttlingReasons?: ThrottlingReason[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const throttlingExceptionSchema: Schema<ThrottlingException> = s.object<ThrottlingException>(
  {
    message: s.optional(s.string()),
    throttlingReasons: s.optional(s.array(s.lazy(() => throttlingReasonSchema))),
  },
  { additionalProperties: s.json() },
);
