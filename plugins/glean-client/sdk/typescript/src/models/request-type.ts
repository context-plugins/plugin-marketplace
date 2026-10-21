import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of request made to the user. */
export const RequestType = {
  Execution: "EXECUTION",
  AuthenticationSuggestion: "AUTHENTICATION_SUGGESTION",
  VoteSuggestion: "VOTE_SUGGESTION",
  SandboxEgress: "SANDBOX_EGRESS",
} as const;
export type RequestType = (typeof RequestType)[keyof typeof RequestType] | (string & {});

export const requestTypeSchema: EnumSchema<RequestType> = s.enumOf<RequestType>(RequestType);
