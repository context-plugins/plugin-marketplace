import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleRpcPreconditionFailureViolationSchema,
  type GoogleRpcPreconditionFailureViolation,
} from "./google-rpc-precondition-failure-violation.js";

/** Validation errors that would cause the deployment change request to be rejected. */
export type GoogleRpcPreconditionFailure2 = {
  /** Describes all precondition violations. */
  violations?: GoogleRpcPreconditionFailureViolation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleRpcPreconditionFailure2Schema: Schema<GoogleRpcPreconditionFailure2> =
  s.object<GoogleRpcPreconditionFailure2>(
    {
      violations: s.optional(s.array(s.lazy(() => googleRpcPreconditionFailureViolationSchema))),
    },
    { additionalProperties: s.json() },
  );
