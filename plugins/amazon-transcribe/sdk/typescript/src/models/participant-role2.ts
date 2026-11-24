import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specify the participant that you want to flag. The allowed options are CLINICIAN and PATIENT. */
export const ParticipantRole2 = {
  Patient: "PATIENT",
  Clinician: "CLINICIAN",
} as const;
export type ParticipantRole2 = (typeof ParticipantRole2)[keyof typeof ParticipantRole2] | (string & {});

export const participantRole2Schema: EnumSchema<ParticipantRole2> =
  s.enumOf<ParticipantRole2>(ParticipantRole2);
