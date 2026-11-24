import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type QrCodeDestination = {
  bitlinkId?: string;
  longUrl?: string;
  siteId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const qrCodeDestinationSchema: Schema<QrCodeDestination> = s.object<QrCodeDestination>(
  {
    bitlinkId: s.optional(s.string()),
    longUrl: s.optional(s.string()),
    siteId: s.optional(s.string()),
    _keysMap: {
      bitlinkId: "bitlink_id",
      longUrl: "long_url",
      siteId: "site_id",
    },
  },
  { additionalProperties: s.json() },
);
