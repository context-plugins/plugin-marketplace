import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const CommunicationChannel = {
  CommunicationChannelEmail: "COMMUNICATION_CHANNEL_EMAIL",
  CommunicationChannelSlack: "COMMUNICATION_CHANNEL_SLACK",
} as const;
export type CommunicationChannel =
  | (typeof CommunicationChannel)[keyof typeof CommunicationChannel]
  | (string & {});

export const communicationChannelSchema: EnumSchema<CommunicationChannel> =
  s.enumOf<CommunicationChannel>(CommunicationChannel);
