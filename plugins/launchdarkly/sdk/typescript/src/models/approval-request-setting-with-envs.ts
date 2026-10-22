import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { approvalRequestSettingSchema, type ApprovalRequestSetting } from "./approval-request-setting.js";

export type ApprovalRequestSettingWithEnvs = {
  /** Environment-specific overrides. */
  environments?: Record<string, ApprovalRequestSetting>;
  /** Configuration that controls how changes to a resource are gated by approvals. */
  default?: ApprovalRequestSetting;
  /** Configuration that controls how changes to a resource are gated by approvals. */
  strict?: ApprovalRequestSetting;
};

export const approvalRequestSettingWithEnvsSchema: Schema<ApprovalRequestSettingWithEnvs> =
  s.object<ApprovalRequestSettingWithEnvs>({
    environments: s.optional(
      s.record(
        s.string(),
        s.lazy(() => approvalRequestSettingSchema),
      ),
    ),
    default: s.optional(s.lazy(() => approvalRequestSettingSchema)),
    strict: s.optional(s.lazy(() => approvalRequestSettingSchema)),
    _keysMap: {
      default: "_default",
      strict: "_strict",
    },
  });
