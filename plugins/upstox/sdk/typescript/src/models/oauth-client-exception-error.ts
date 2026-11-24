import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { causeSchema, type Cause } from "./cause.js";
import { stackTraceSchema, type StackTrace } from "./stack-trace.js";
import { suppressedSchema, type Suppressed } from "./suppressed.js";

export type OAuthClientExceptionError = {
  cause?: Cause;
  stackTrace?: StackTrace[];
  message?: string;
  suppressed?: Suppressed[];
  localizedMessage?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oAuthClientExceptionErrorSchema: Schema<OAuthClientExceptionError> =
  s.object<OAuthClientExceptionError>(
    {
      cause: s.optional(s.lazy(() => causeSchema)),
      stackTrace: s.optional(s.array(s.lazy(() => stackTraceSchema))),
      message: s.optional(s.string()),
      suppressed: s.optional(s.array(s.lazy(() => suppressedSchema))),
      localizedMessage: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
