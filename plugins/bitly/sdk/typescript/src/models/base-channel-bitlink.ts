import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BaseChannelBitlink = {
  campaignGuid?: string;
  bitlinkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseChannelBitlinkSchema: Schema<BaseChannelBitlink> = s.object<BaseChannelBitlink>(
  {
    campaignGuid: s.optional(s.string()),
    bitlinkId: s.optional(s.string()),
    _keysMap: {
      campaignGuid: "campaign_guid",
      bitlinkId: "bitlink_id",
    },
  },
  { additionalProperties: s.json() },
);
