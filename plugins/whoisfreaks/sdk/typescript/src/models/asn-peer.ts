import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AsnPeer = {
  asNumber?: string;
  description?: string;
  country?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const asnPeerSchema: Schema<AsnPeer> = s.object<AsnPeer>(
  {
    asNumber: s.optional(s.string()),
    description: s.optional(s.string()),
    country: s.optional(s.string()),
    _keysMap: {
      asNumber: "as_number",
    },
  },
  { additionalProperties: s.json() },
);
