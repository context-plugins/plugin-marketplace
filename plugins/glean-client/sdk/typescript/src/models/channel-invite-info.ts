import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { communicationChannelSchema, type CommunicationChannel } from "./communication-channel.js";
import { personSchema, type Person } from "./person.js";

/** Information regarding the invite status of a person for a particular channel. */
export type ChannelInviteInfo = {
  channel?: CommunicationChannel;
  /** Bit that tracks if this invite was automatically sent or user-sent */
  isAutoInvite?: boolean;
  inviter?: Person;
  /** The time this person was invited in ISO format (ISO 8601). */
  inviteTime?: Date;
  /** The time this person was reminded in ISO format (ISO 8601) if a reminder was sent. */
  reminderTime?: Date;
};

export const channelInviteInfoSchema: Schema<ChannelInviteInfo> = s.object<ChannelInviteInfo>({
  channel: s.optional(s.lazy(() => communicationChannelSchema)),
  isAutoInvite: s.optional(s.boolean()),
  inviter: s.optional(s.lazy(() => personSchema)),
  inviteTime: s.optional(s.dateTime()),
  reminderTime: s.optional(s.dateTime()),
});
