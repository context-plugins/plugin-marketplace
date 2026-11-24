import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** RFC 9457 problem details for the Signup operations. */
export type SignupProblem = {
  type: string;
  title: string;
  status: number;
  detail?: string;
  /** Machine-readable problem code (see each response description). */
  code: string;
  retryable: boolean;
  /** The already-pending request for this domain (signup_already_pending). */
  signupRequestId?: string;
  /** Where an existing DoiT user or customer should sign in instead. */
  signInUrl?: string;
  /** Where a blocked signup (code signup_blocked) can ask DoiT to review the decision. */
  appealUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signupProblemProperties: s.Shape<SignupProblem> = {
  type: s.string(),
  title: s.string(),
  status: s.int(),
  detail: s.optional(s.string()),
  code: s.string(),
  retryable: s.boolean(),
  signupRequestId: s.optional(s.string()),
  signInUrl: s.optional(s.string()),
  appealUrl: s.optional(s.string()),
};

export const signupProblemInternalSchema: Schema<SignupProblem> = s.object<SignupProblem>(
  signupProblemProperties,
  { additionalProperties: s.json() },
);

export const signupProblemSchema: Schema<SignupProblem> = s.lazySchema(() =>
  s.object<SignupProblem>(
    {
      ...signupProblemProperties,
      type: s.string().check(s.url()),
      signInUrl: s.optional(s.string().check(s.url())),
      appealUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
