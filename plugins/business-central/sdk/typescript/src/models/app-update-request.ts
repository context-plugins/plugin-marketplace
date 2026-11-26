import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AppUpdateRequest = {
  /** Target version to update to */
  targetVersion?: string;
  /** Whether to allow preview versions */
  allowPreviewVersion?: boolean;
  /** Whether to ignore the update window */
  ignoreUpgradeWindow?: boolean;
  /** Whether to also update dependent apps */
  allowDependencyUpdate?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const appUpdateRequestSchema: Schema<AppUpdateRequest> = s.object<AppUpdateRequest>(
  {
    targetVersion: s.optional(s.string()),
    allowPreviewVersion: s.optional(s.boolean()),
    ignoreUpgradeWindow: s.optional(s.boolean()),
    allowDependencyUpdate: s.optional(s.boolean()),
  },
  { additionalProperties: s.json() },
);
