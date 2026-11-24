import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ExpandBitlink = {
  bitlinkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const expandBitlinkSchema: Schema<ExpandBitlink> = s.object<ExpandBitlink>(
  {
    bitlinkId: s.optional(s.string()),
    _keysMap: {
      bitlinkId: "bitlink_id",
    },
  },
  { additionalProperties: s.json() },
);
