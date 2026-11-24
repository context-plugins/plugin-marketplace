import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Shorten = {
  longUrl: string;
  /** @default "bit.ly" */
  domain?: string;
  groupGuid?: string;
  forceNewLink?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const shortenSchema: Schema<Shorten> = s.object<Shorten>(
  {
    longUrl: s.string(),
    domain: s.defaulted(s.string(), "bit.ly"),
    groupGuid: s.optional(s.string()),
    forceNewLink: s.optional(s.boolean()),
    _keysMap: {
      longUrl: "long_url",
      groupGuid: "group_guid",
      forceNewLink: "force_new_link",
    },
  },
  { additionalProperties: s.json() },
);
