import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  SeverityHudPlatformTasksApi,
  severityHudPlatformTasksApiSchema,
} from "./severity-hud-platform-tasks-api.js";

/**
 * One requirement check result with pre-formatted display strings.
 *
 * ``required`` and ``current`` are pre-formatted strings — the UI renders them verbatim to avoid
 * format drift between flyout / dialog / audit views. ``key`` is open (QA checks use
 * ``qa.<agent_id>``).
 */
export type RequirementCheck = {
  key: string;
  label: string;
  passed: boolean;
  /** @default SeverityHudPlatformTasksApi.Error */
  severity?: SeverityHudPlatformTasksApi;
  required: string;
  current: string;
  howToFix: string;
  offendingTraceIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const requirementCheckSchema: Schema<RequirementCheck> = s.object<RequirementCheck>(
  {
    key: s.string(),
    label: s.string(),
    passed: s.boolean(),
    severity: s.defaulted(severityHudPlatformTasksApiSchema, SeverityHudPlatformTasksApi.Error),
    required: s.string(),
    current: s.string(),
    howToFix: s.string(),
    offendingTraceIds: s.optional(s.array(s.string())),
    _keysMap: {
      howToFix: "how_to_fix",
      offendingTraceIds: "offending_trace_ids",
    },
  },
  { additionalProperties: s.json() },
);
