import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  workspacePlanLimitSettingsSchema,
  type WorkspacePlanLimitSettings,
} from "./workspace-plan-limit-settings.js";

/** Current and next plan limits returned for a workspace in sync responses. */
export type WorkspaceLimitsSyncView = {
  /** Limits of the workspace's current plan. */
  current: WorkspacePlanLimitSettings;
  /** Limits of the next upgrade plan, or `null` if the workspace is already on the highest plan. */
  next: WorkspacePlanLimitSettings | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceLimitsSyncViewSchema: Schema<WorkspaceLimitsSyncView> =
  s.object<WorkspaceLimitsSyncView>(
    {
      current: workspacePlanLimitSettingsSchema,
      next: s.nullable(s.lazy(() => workspacePlanLimitSettingsSchema)),
    },
    { additionalProperties: s.json() },
  );
