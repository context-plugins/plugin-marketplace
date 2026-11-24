import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the type of association by indicating the type of channel being established between the
 * Amazon Lex bot and the external messaging platform.
 */
export const TypeAmazonLexModelBuildingV2ChannelsApi = {
  Facebook: "Facebook",
  Slack: "Slack",
  TwilioSms: "Twilio-Sms",
  Kik: "Kik",
} as const;
export type TypeAmazonLexModelBuildingV2ChannelsApi =
  | (typeof TypeAmazonLexModelBuildingV2ChannelsApi)[keyof typeof TypeAmazonLexModelBuildingV2ChannelsApi]
  | (string & {});

export const typeAmazonLexModelBuildingV2ChannelsApiSchema: EnumSchema<TypeAmazonLexModelBuildingV2ChannelsApi> =
  s.enumOf<TypeAmazonLexModelBuildingV2ChannelsApi>(TypeAmazonLexModelBuildingV2ChannelsApi);
