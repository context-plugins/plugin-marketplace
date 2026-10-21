import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformAuthenticationSuggestionSchema,
  type PlatformAuthenticationSuggestion,
} from "./platform-authentication-suggestion.js";
import { platformProblemDetail1Schema, type PlatformProblemDetail1 } from "./platform-problem-detail1.js";

/**
 * Terminal failure event carrying the failure as a problem detail. Most GitHub authorization
 * failures return HTTP 422 before the stream opens. If authorization fails after the stream opens,
 * `error.code` is `tools_unauthorized` and `authentication_suggestions` is present.
 */
export type PlatformSkillSourcePreviewStreamError = {
  /** Event type, also sent as the SSE `event` name. @default "ERROR" */
  type?: "ERROR";
  /** The failure as a problem detail. */
  error: PlatformProblemDetail1;
  /**
   * Present only when `error.code` is `tools_unauthorized`. Names the GitHub action pack to
   * authorize, with the same retry flow as the 422 response.
   */
  authenticationSuggestions?: PlatformAuthenticationSuggestion[];
};

export const platformSkillSourcePreviewStreamErrorSchema: Schema<PlatformSkillSourcePreviewStreamError> =
  s.object<PlatformSkillSourcePreviewStreamError>({
    type: s.defaulted(s.literal("ERROR"), "ERROR"),
    error: platformProblemDetail1Schema,
    authenticationSuggestions: s.optional(s.array(s.lazy(() => platformAuthenticationSuggestionSchema))),
    _keysMap: {
      authenticationSuggestions: "authentication_suggestions",
    },
  });
