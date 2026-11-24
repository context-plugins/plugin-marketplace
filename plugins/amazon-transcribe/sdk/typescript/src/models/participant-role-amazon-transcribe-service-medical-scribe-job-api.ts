import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specify the participant that you want to flag. The options are CLINICIAN and PATIENT */
export const ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi = {
  Patient: "PATIENT",
  Clinician: "CLINICIAN",
} as const;
export type ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi =
  | (typeof ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi)[keyof typeof ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi]
  | (string & {});

export const participantRoleAmazonTranscribeServiceMedicalScribeJobApiSchema: EnumSchema<ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi> =
  s.enumOf<ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi>(
    ParticipantRoleAmazonTranscribeServiceMedicalScribeJobApi,
  );
