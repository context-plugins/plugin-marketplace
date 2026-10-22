import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Represents a minimal summary of an action. */
export type ActionSummary = {
  /** The unique identifier of the action. */
  toolId: string;
  /** The display name of the action. */
  displayName: string;
  /**
   * The type of tool - RETRIEVAL for read-only operations, ACTION for operations that modify data.
   */
  type?: string;
  /**
   * The authentication type required - OAUTH_USER, OAUTH_ADMIN, API_KEY, BASIC_AUTH, DWD
   * (domain-wide delegation), or NONE.
   */
  authType?: string;
  /** For write actions only - REDIRECT (client renders URL) or EXECUTION (external server call). */
  writeActionType?: string;
  /** Whether this action has been fully configured and validated. */
  isSetupFinished?: boolean;
  /**
   * Indicates the kind of knowledge a tool would access or modify. Company knowledge:
   *   - Glean search, and any native tools that derive from it (e.g., expert search, code search)
   *   - Native federated tools to company data sources (e.g., outlook search) World knowledge:
   *   - Platform action like bravewebsearch, geminiwebsearch, etc Neutral knowledge:
   *   - Native tools that don't access or modify content via APIs (e.g., file analyst, think)
   *   - Platform read or write tools (creator has to determine their knowledge implications)
   */
  dataSource?: string;
};

export const actionSummarySchema: Schema<ActionSummary> = s.object<ActionSummary>({
  toolId: s.string(),
  displayName: s.string(),
  type: s.optional(s.string()),
  authType: s.optional(s.string()),
  writeActionType: s.optional(s.string()),
  isSetupFinished: s.optional(s.boolean()),
  dataSource: s.optional(s.string()),
  _keysMap: {
    toolId: "tool_id",
    displayName: "display_name",
    authType: "auth_type",
    writeActionType: "write_action_type",
    isSetupFinished: "is_setup_finished",
    dataSource: "data_source",
  },
});
