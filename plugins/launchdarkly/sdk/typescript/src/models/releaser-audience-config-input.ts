import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  releaseGuardianConfigurationInputSchema,
  type ReleaseGuardianConfigurationInput,
} from "./release-guardian-configuration-input.js";

export type ReleaserAudienceConfigInput = {
  /** UUID of the audience. */
  audienceId?: string;
  releaseGuardianConfiguration?: ReleaseGuardianConfigurationInput;
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: string[];
  /**
   * An array of team keys. The members of these teams are notified to review the approval request.
   */
  notifyTeamKeys?: string[];
};

export const releaserAudienceConfigInputSchema: Schema<ReleaserAudienceConfigInput> =
  s.object<ReleaserAudienceConfigInput>({
    audienceId: s.optional(s.string()),
    releaseGuardianConfiguration: s.optional(s.lazy(() => releaseGuardianConfigurationInputSchema)),
    notifyMemberIds: s.optional(s.array(s.string())),
    notifyTeamKeys: s.optional(s.array(s.string())),
  });
