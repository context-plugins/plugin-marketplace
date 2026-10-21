import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authStatusSchema, type AuthStatus } from "./auth-status.js";

/**
 * A datasource instance that could not return results for this request because the user has not
 * completed or has expired per-user OAuth.
 */
export type UnauthorizedDatasourceInstance = {
  /**
   * The instance identifier (e.g. "github", "github_enterprise_0", "slack_0"). Matches the instance
   * names used in datasource configuration.
   */
  datasourceInstance?: string;
  /** Human-readable name of the datasource instance for display. */
  displayName?: string;
  /** The per-user authorization status for a datasource. */
  authStatus?: AuthStatus;
  /**
   * Relative path to initiate or resume OAuth for the current user and instance, including a
   * one-time authentication token as a query parameter. Clients should prepend their configured
   * Glean backend base URL.
   */
  authUrlRelativePath?: string;
};

export const unauthorizedDatasourceInstanceSchema: Schema<UnauthorizedDatasourceInstance> =
  s.object<UnauthorizedDatasourceInstance>({
    datasourceInstance: s.optional(s.string()),
    displayName: s.optional(s.string()),
    authStatus: s.optional(s.lazy(() => authStatusSchema)),
    authUrlRelativePath: s.optional(s.string()),
  });
