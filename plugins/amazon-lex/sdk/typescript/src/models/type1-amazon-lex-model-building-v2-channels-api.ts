import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the messaging platform. */
export const Type1AmazonLexModelBuildingV2ChannelsApi = {
  Facebook: "Facebook",
  Slack: "Slack",
  TwilioSms: "Twilio-Sms",
  Kik: "Kik",
} as const;
export type Type1AmazonLexModelBuildingV2ChannelsApi =
  | (typeof Type1AmazonLexModelBuildingV2ChannelsApi)[keyof typeof Type1AmazonLexModelBuildingV2ChannelsApi]
  | (string & {});

export const type1AmazonLexModelBuildingV2ChannelsApiSchema: EnumSchema<Type1AmazonLexModelBuildingV2ChannelsApi> =
  s.enumOf<Type1AmazonLexModelBuildingV2ChannelsApi>(Type1AmazonLexModelBuildingV2ChannelsApi);
