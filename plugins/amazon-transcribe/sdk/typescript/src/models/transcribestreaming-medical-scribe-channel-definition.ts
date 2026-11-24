import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { participantRole2Schema, type ParticipantRole2 } from "./participant-role2.js";

export type TranscribestreamingMedicalScribeChannelDefinition = {
  /** Specify the audio channel you want to define. */
  channelId: number;
  /**
   * Specify the participant that you want to flag. The allowed options are CLINICIAN and PATIENT.
   */
  participantRole: ParticipantRole2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcribestreamingMedicalScribeChannelDefinitionSchema: Schema<TranscribestreamingMedicalScribeChannelDefinition> =
  s.object<TranscribestreamingMedicalScribeChannelDefinition>(
    {
      channelId: s.int(),
      participantRole: participantRole2Schema,
      _keysMap: {
        channelId: "ChannelId",
        participantRole: "ParticipantRole",
      },
    },
    { additionalProperties: s.json() },
  );
