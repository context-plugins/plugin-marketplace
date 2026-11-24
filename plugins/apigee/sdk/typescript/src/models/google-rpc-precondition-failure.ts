import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleRpcPreconditionFailureViolationSchema,
  type GoogleRpcPreconditionFailureViolation,
} from "./google-rpc-precondition-failure-violation.js";

/**
 * Describes what preconditions have failed. For example, if an RPC failed because it required the
 * Terms of Service to be acknowledged, it could list the terms of service violation in the
 * PreconditionFailure message.
 */
export type GoogleRpcPreconditionFailure = {
  /** Describes all precondition violations. */
  violations?: GoogleRpcPreconditionFailureViolation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleRpcPreconditionFailureSchema: Schema<GoogleRpcPreconditionFailure> =
  s.object<GoogleRpcPreconditionFailure>(
    {
      violations: s.optional(s.array(s.lazy(() => googleRpcPreconditionFailureViolationSchema))),
    },
    { additionalProperties: s.json() },
  );
