import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify the speaker you want to define. Omitting this parameter is equivalent to specifying both
 * participants.
 */
export const ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi = {
  Agent: "AGENT",
  Customer: "CUSTOMER",
} as const;
export type ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi =
  | (typeof ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi)[keyof typeof ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi]
  | (string & {});

export const participantRoleAmazonTranscribeServiceCallAnalyticsJobApiSchema: EnumSchema<ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi> =
  s.enumOf<ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi>(
    ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi,
  );
