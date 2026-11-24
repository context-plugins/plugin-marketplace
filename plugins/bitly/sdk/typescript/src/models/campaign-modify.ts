import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CampaignModify = {
  groupGuid?: string;
  name?: string;
  description?: string;
  channelGuids?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignModifySchema: Schema<CampaignModify> = s.object<CampaignModify>(
  {
    groupGuid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    channelGuids: s.optional(s.array(s.string())),
    _keysMap: {
      groupGuid: "group_guid",
      channelGuids: "channel_guids",
    },
  },
  { additionalProperties: s.json() },
);
