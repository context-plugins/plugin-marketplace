import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { serverToolRequestSchema, type ServerToolRequest } from "./server-tool-request.js";

/**
 * Returned when the agent has tools the caller must authorize before the run can start. Each entry
 * in `authenticationSuggestions` names one such tool; POST its `serverId` to
 * `/tool-servers/{serverId}/auth` with `returnUrl` in the request body to obtain an
 * `authorizationUrl` to redirect the end user to, then retry the run once OAuth completes.
 */
export type UnauthorizedAgentToolsErrorError = {
  /** Human-readable description of the failure. */
  message: string;
  /** One entry per tool the caller must authorize. */
  authenticationSuggestions: ServerToolRequest[];
};

export const unauthorizedAgentToolsErrorErrorSchema: Schema<UnauthorizedAgentToolsErrorError> =
  s.object<UnauthorizedAgentToolsErrorError>({
    message: s.string(),
    authenticationSuggestions: s.array(s.lazy(() => serverToolRequestSchema)),
  });
