import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { baseChannelBitlinkSchema, type BaseChannelBitlink } from "./base-channel-bitlink.js";

export type ChannelModify = {
  name?: string;
  guid?: string;
  /** ISO TIMESTAMP */
  created?: string;
  /** ISO_TIMESTAMP */
  modified?: string;
  groupGuid?: string;
  bitlinks?: BaseChannelBitlink[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelModifySchema: Schema<ChannelModify> = s.object<ChannelModify>(
  {
    name: s.optional(s.string()),
    guid: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    bitlinks: s.optional(s.array(s.lazy(() => baseChannelBitlinkSchema))),
    _keysMap: {
      groupGuid: "group_guid",
    },
  },
  { additionalProperties: s.json() },
);
