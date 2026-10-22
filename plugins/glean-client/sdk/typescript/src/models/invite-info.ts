import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { channelInviteInfoSchema, type ChannelInviteInfo } from "./channel-invite-info.js";
import { personSchema, type Person } from "./person.js";

/** Information regarding the invite status of a person. */
export type InviteInfo = {
  /** The time this person signed up in ISO format (ISO 8601). */
  signUpTime?: Date;
  /** Latest invites received by the user for each channel */
  invites?: ChannelInviteInfo[];
  inviter?: Person;
  /**
   * The time this person was invited in ISO format (ISO 8601).
   *
   * @deprecated
   */
  inviteTime?: Date;
  /**
   * The time this person was reminded in ISO format (ISO 8601) if a reminder was sent.
   *
   * @deprecated
   */
  reminderTime?: Date;
};

export const inviteInfoSchema: Schema<InviteInfo> = s.object<InviteInfo>({
  signUpTime: s.optional(s.dateTime()),
  invites: s.optional(s.array(s.lazy(() => channelInviteInfoSchema))),
  inviter: s.optional(s.lazy(() => personSchema)),
  inviteTime: s.optional(s.dateTime()),
  reminderTime: s.optional(s.dateTime()),
});
