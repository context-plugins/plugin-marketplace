import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { stackTraceSchema, type StackTrace } from "./stack-trace.js";

export type Suppressed = {
  stackTrace?: StackTrace[];
  message?: string;
  localizedMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const suppressedSchema: Schema<Suppressed> = s.object<Suppressed>(
  {
    stackTrace: s.optional(s.array(s.lazy(() => stackTraceSchema))),
    message: s.optional(s.string()),
    localizedMessage: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
