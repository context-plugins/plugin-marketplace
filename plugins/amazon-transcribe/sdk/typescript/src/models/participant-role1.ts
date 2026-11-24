import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify the participant that you want to flag. Omitting this parameter is equivalent to
 * specifying both participants.
 */
export const ParticipantRole1 = {
  Agent: "AGENT",
  Customer: "CUSTOMER",
} as const;
export type ParticipantRole1 = (typeof ParticipantRole1)[keyof typeof ParticipantRole1] | (string & {});

export const participantRole1Schema: EnumSchema<ParticipantRole1> =
  s.enumOf<ParticipantRole1>(ParticipantRole1);
