import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  participantRoleAmazonTranscribeServiceCallAnalyticsJobApiSchema,
  type ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi,
} from "./participant-role-amazon-transcribe-service-call-analytics-job-api.js";

export type TranscribestreamingChannelDefinition = {
  /** Specify the audio channel you want to define. */
  channelId: number;
  /**
   * Specify the speaker you want to define. Omitting this parameter is equivalent to specifying
   * both participants.
   */
  participantRole: ParticipantRoleAmazonTranscribeServiceCallAnalyticsJobApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcribestreamingChannelDefinitionSchema: Schema<TranscribestreamingChannelDefinition> =
  s.object<TranscribestreamingChannelDefinition>(
    {
      channelId: s.int(),
      participantRole: participantRoleAmazonTranscribeServiceCallAnalyticsJobApiSchema,
      _keysMap: {
        channelId: "ChannelId",
        participantRole: "ParticipantRole",
      },
    },
    { additionalProperties: s.json() },
  );
