import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Campaign = {
  references?: Record<string, string>;
  guid?: string;
  groupGuid?: string;
  createdBy?: string;
  name?: string;
  description?: string;
  /** ISO timestamp */
  created?: string;
  /** ISO timestamp */
  modified?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const campaignSchema: Schema<Campaign> = s.object<Campaign>(
  {
    references: s.optional(s.record(s.string(), s.string())),
    guid: s.optional(s.string()),
    groupGuid: s.optional(s.string()),
    createdBy: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    created: s.optional(s.string()),
    modified: s.optional(s.string()),
    _keysMap: {
      groupGuid: "group_guid",
      createdBy: "created_by",
    },
  },
  { additionalProperties: s.json() },
);
