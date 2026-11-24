import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specify the interrupter that you want to flag. Omitting this parameter is equivalent to
 * specifying both participants.
 */
export const ParticipantRole = {
  Agent: "AGENT",
  Customer: "CUSTOMER",
} as const;
export type ParticipantRole = (typeof ParticipantRole)[keyof typeof ParticipantRole] | (string & {});

export const participantRoleSchema: EnumSchema<ParticipantRole> = s.enumOf<ParticipantRole>(ParticipantRole);
