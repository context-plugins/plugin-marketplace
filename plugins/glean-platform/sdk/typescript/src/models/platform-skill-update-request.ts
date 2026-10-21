import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  platformSkillUpdateStatusSchema,
  type PlatformSkillUpdateStatus,
} from "./platform-skill-update-status.js";

export type PlatformSkillUpdateRequest = {
  /**
   * Activation to apply for the authenticated caller. For the owner, this updates the skill's
   * stored status. For any other caller, it updates only that caller's setting.
   */
  status: PlatformSkillUpdateStatus;
};

export const platformSkillUpdateRequestSchema: Schema<PlatformSkillUpdateRequest> =
  s.object<PlatformSkillUpdateRequest>({
    status: platformSkillUpdateStatusSchema,
  });
