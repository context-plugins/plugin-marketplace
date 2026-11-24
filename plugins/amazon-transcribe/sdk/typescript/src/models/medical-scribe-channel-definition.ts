import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  participantRoleAmazonTranscribeServiceMedicalScribeJobApiSchema,
  type ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi,
} from "./participant-role-amazon-transcribe-service-medical-scribe-job-api.js";

export type MedicalScribeChannelDefinition = {
  /** Specify the audio channel you want to define. */
  channelId: number;
  /** Specify the participant that you want to flag. The options are CLINICIAN and PATIENT */
  participantRole: ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const medicalScribeChannelDefinitionSchema: Schema<MedicalScribeChannelDefinition> =
  s.object<MedicalScribeChannelDefinition>(
    {
      channelId: s.int(),
      participantRole: participantRoleAmazonTranscribeServiceMedicalScribeJobApiSchema,
      _keysMap: {
        channelId: "ChannelId",
        participantRole: "ParticipantRole",
      },
    },
    { additionalProperties: s.json() },
  );
