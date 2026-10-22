import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformActionSummary = {
  /** Unique identifier of the action. */
  toolId: string;
  /** Display name of the action. */
  displayName: string;
  /** Tool type. */
  type?: string;
  /** Authentication type required by the action. */
  authType?: string;
  /** Write-action execution type. */
  writeActionType?: string;
  /** Whether this action has been fully configured. */
  isSetupFinished?: boolean;
  /** Kind of knowledge the action accesses or modifies. */
  dataSource?: string;
};

export const platformActionSummarySchema: Schema<PlatformActionSummary> = s.object<PlatformActionSummary>({
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
