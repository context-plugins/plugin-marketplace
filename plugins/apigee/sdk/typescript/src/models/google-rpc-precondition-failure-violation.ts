import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A message type used to describe a single precondition failure. */
export type GoogleRpcPreconditionFailureViolation = {
  /**
   * A description of how the precondition failed. Developers can use this description to understand
   * how to fix the failure. For example: "Terms of service not accepted".
   */
  description?: string;
  /**
   * The type of PreconditionFailure. We recommend using a service-specific enum type to define the
   * supported precondition violation subjects. For example, "TOS" for "Terms of Service violation".
   */
  type?: string;
  /**
   * The subject, relative to the type, that failed. For example, "google.com/cloud" relative to the
   * "TOS" type would indicate which terms of service is being referenced.
   */
  subject?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleRpcPreconditionFailureViolationSchema: Schema<GoogleRpcPreconditionFailureViolation> =
  s.object<GoogleRpcPreconditionFailureViolation>(
    {
      description: s.optional(s.string()),
      type: s.optional(s.string()),
      subject: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
