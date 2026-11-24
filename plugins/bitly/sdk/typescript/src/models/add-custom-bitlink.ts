import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddCustomBitlink = {
  customBitlink?: string;
  bitlinkId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addCustomBitlinkSchema: Schema<AddCustomBitlink> = s.object<AddCustomBitlink>(
  {
    customBitlink: s.optional(s.string()),
    bitlinkId: s.optional(s.string()),
    _keysMap: {
      customBitlink: "custom_bitlink",
      bitlinkId: "bitlink_id",
    },
  },
  { additionalProperties: s.json() },
);
