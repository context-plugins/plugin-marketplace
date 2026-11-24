import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DowntimeInstrument = {
  bank?: string;
  network?: string;
  issuer?: string;
  psp?: string;
  vpaHandle?: string;
  cardType?: string;
  flow?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const downtimeInstrumentSchema: Schema<DowntimeInstrument> = s.object<DowntimeInstrument>(
  {
    bank: s.optional(s.string()),
    network: s.optional(s.string()),
    issuer: s.optional(s.string()),
    psp: s.optional(s.string()),
    vpaHandle: s.optional(s.string()),
    cardType: s.optional(s.string()),
    flow: s.optional(s.string()),
    _keysMap: {
      vpaHandle: "vpa_handle",
      cardType: "card_type",
    },
  },
  { additionalProperties: s.json() },
);
