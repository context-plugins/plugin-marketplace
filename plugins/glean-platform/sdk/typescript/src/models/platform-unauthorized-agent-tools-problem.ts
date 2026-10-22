import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformAuthenticationSuggestionSchema,
  type PlatformAuthenticationSuggestion,
} from "./platform-authentication-suggestion.js";
import {
  platformProblemDetailCodeSchema,
  type PlatformProblemDetailCode,
} from "./platform-problem-detail-code.js";
import {
  platformProblemDetailErrorSchema,
  type PlatformProblemDetailError,
} from "./platform-problem-detail-error.js";

/**
 * Problem detail extended with `authentication_suggestions` naming each tool the caller must
 * authorize.
 */
export type PlatformUnauthorizedAgentToolsProblem = {
  /** URI identifying the error type. */
  type: string;
  /** Short, human-readable summary of the error. */
  title: string;
  /** HTTP status code mirrored from the response. */
  status: number;
  /** Human-readable explanation specific to this occurrence. */
  detail: string;
  /** Stable machine-readable error code. */
  code: PlatformProblemDetailCode;
  /** Direct URL to documentation for this error code. */
  documentationUrl?: string;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
  /** Field-level validation problems, one entry per offending field. */
  errors?: PlatformProblemDetailError[];
  /** One entry per tool the caller must authorize. */
  authenticationSuggestions: PlatformAuthenticationSuggestion[];
};

export const platformUnauthorizedAgentToolsProblemSchema: Schema<PlatformUnauthorizedAgentToolsProblem> =
  s.object<PlatformUnauthorizedAgentToolsProblem>({
    type: s.string(),
    title: s.string(),
    status: s.int(),
    detail: s.string(),
    code: platformProblemDetailCodeSchema,
    documentationUrl: s.optional(s.string()),
    requestId: s.string(),
    errors: s.optional(s.array(s.lazy(() => platformProblemDetailErrorSchema))),
    authenticationSuggestions: s.array(s.lazy(() => platformAuthenticationSuggestionSchema)),
    _keysMap: {
      documentationUrl: "documentation_url",
      requestId: "request_id",
      authenticationSuggestions: "authentication_suggestions",
    },
  });
