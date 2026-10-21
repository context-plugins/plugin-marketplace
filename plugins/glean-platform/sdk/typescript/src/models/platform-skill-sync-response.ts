import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformSkillSyncResponse = {
  /** Git commit SHA now associated with the skill. */
  commitSha: string;
  /** Whether this request created a new skill version. */
  isUpdated: boolean;
  /** Platform-generated request ID for support correlation. */
  requestId: string;
};

export const platformSkillSyncResponseSchema: Schema<PlatformSkillSyncResponse> =
  s.object<PlatformSkillSyncResponse>({
    commitSha: s.string(),
    isUpdated: s.boolean(),
    requestId: s.string(),
    _keysMap: {
      commitSha: "commit_sha",
      isUpdated: "is_updated",
      requestId: "request_id",
    },
  });
