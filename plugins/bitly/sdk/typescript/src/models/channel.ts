import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Channel = {
  name?: string;
  guid?: string;
  /** ISO TIMESTAMP */
  created?: string;
  /** ISO_TIMESTAMP */
  modified?: string;
  groupGuid?: string;
  references?: Record<string, string>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const channelSchema: Schema<Channel> = s.object<Channel>(
  {
    name: s.optional(s.string()),
    guid: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    references: s.optional(s.record(s.string(), s.string())),
    _keysMap: {
      groupGuid: "group_guid",
    },
  },
  { additionalProperties: s.json() },
);
