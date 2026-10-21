import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authContextSchema, type AuthContext } from "./auth-context.js";
import { GrantScope, grantScopeSchema } from "./grant-scope.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";

/**
 * Response to a server tool request. The applicable fields depend on requestType:
 *
 * For EXECUTION requests:
 * - isGranted: whether tool execution is approved
 * - reason: optional explanation
 *
 * For AUTHENTICATION_SUGGESTION requests:
 * - isGranted: whether auth completed successfully (true=connected, false=skipped)
 * - authContext: contains serverId or actionPackId for identifying the authenticated entity
 * - reason: optional explanation for skip
 *
 * For VOTE_SUGGESTION requests:
 * - voted: whether the user voted for this tool
 *
 * For SANDBOX_EGRESS requests:
 * - isGranted: whether the sandbox egress call is approved
 */
export type ServerToolResponse = {
  /** The type of request made to the user. */
  requestType: RequestType;
  /** Unique identifier for this request. */
  requestId: string;
  /** Whether tool request is granted (indicates approval for execution, or completion for auth). */
  isGranted?: boolean;
  /**
   * Scope of the approval grant. Only applicable when isGranted is true and requestType is
   * EXECUTION.
   *
   * @default GrantScope.CurrentRequest
   */
  grantScope?: GrantScope;
  /**
   * Context for authentication responses, containing identifiers for the entity being
   * authenticated.
   */
  authContext?: AuthContext;
};

export const serverToolResponseSchema: Schema<ServerToolResponse> = s.object<ServerToolResponse>({
  requestType: requestTypeSchema,
  requestId: s.string(),
  isGranted: s.optional(s.boolean()),
  grantScope: s.defaulted(grantScopeSchema, GrantScope.CurrentRequest),
  authContext: s.optional(s.lazy(() => authContextSchema)),
});
