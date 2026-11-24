import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bitlinkBodySchema, type BitlinkBody } from "./bitlink-body.js";
import { customBitlinkHistorySchema, type CustomBitlinkHistory } from "./custom-bitlink-history.js";

export type CustomBitlinkBitlyCustomBitlinksApi = {
  customBitlink?: string;
  bitlink?: BitlinkBody;
  bitlinkHistory?: CustomBitlinkHistory[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customBitlinkBitlyCustomBitlinksApiSchema: Schema<CustomBitlinkBitlyCustomBitlinksApi> =
  s.object<CustomBitlinkBitlyCustomBitlinksApi>(
    {
      customBitlink: s.optional(s.string()),
      bitlink: s.optional(s.lazy(() => bitlinkBodySchema)),
      bitlinkHistory: s.optional(s.array(s.lazy(() => customBitlinkHistorySchema))),
      _keysMap: {
        customBitlink: "custom_bitlink",
        bitlinkHistory: "bitlink_history",
      },
    },
    { additionalProperties: s.json() },
  );
