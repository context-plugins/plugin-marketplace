import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  releaseGuardianConfigurationSchema,
  type ReleaseGuardianConfiguration,
} from "./release-guardian-configuration.js";

export type AudienceConfiguration = {
  releaseStrategy: string;
  /** Whether or not the audience requires approval */
  requireApproval: boolean;
  /** An array of member IDs. These members are notified to review the approval request. */
  notifyMemberIds?: string[];
  /**
   * An array of team keys. The members of these teams are notified to review the approval request.
   */
  notifyTeamKeys?: string[];
  releaseGuardianConfiguration?: ReleaseGuardianConfiguration;
};

export const audienceConfigurationSchema: Schema<AudienceConfiguration> = s.object<AudienceConfiguration>({
  releaseStrategy: s.string(),
  requireApproval: s.boolean(),
  notifyMemberIds: s.optional(s.array(s.string())),
  notifyTeamKeys: s.optional(s.array(s.string())),
  releaseGuardianConfiguration: s.optional(s.lazy(() => releaseGuardianConfigurationSchema)),
});
