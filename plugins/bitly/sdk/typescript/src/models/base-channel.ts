import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BaseChannel = {
  name?: string;
  guid?: string;
  /** ISO TIMESTAMP */
  created?: string;
  /** ISO_TIMESTAMP */
  modified?: string;
  groupGuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const baseChannelSchema: Schema<BaseChannel> = s.object<BaseChannel>(
  {
    name: s.optional(s.string()),
    guid: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    _keysMap: {
      groupGuid: "group_guid",
    },
  },
  { additionalProperties: s.json() },
);
