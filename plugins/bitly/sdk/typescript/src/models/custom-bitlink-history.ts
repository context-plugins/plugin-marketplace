import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CustomBitlinkHistory = {
  groupGuid?: string;
  keyword?: string;
  bsd?: string;
  hash?: string;
  login?: string;
  longUrl?: string;
  created?: string;
  firstCreated?: string;
  deactivated?: string;
  isActive?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customBitlinkHistorySchema: Schema<CustomBitlinkHistory> = s.object<CustomBitlinkHistory>(
  {
    groupGuid: s.optional(s.string()),
    keyword: s.optional(s.string()),
    bsd: s.optional(s.string()),
    hash: s.optional(s.string()),
    login: s.optional(s.string()),
    longUrl: s.optional(s.string()),
    created: s.optional(s.string()),
    firstCreated: s.optional(s.string()),
    deactivated: s.optional(s.string()),
    isActive: s.optional(s.boolean()),
    _keysMap: {
      groupGuid: "group_guid",
      longUrl: "long_url",
      firstCreated: "first_created",
      isActive: "is_active",
    },
  },
  { additionalProperties: s.json() },
);
