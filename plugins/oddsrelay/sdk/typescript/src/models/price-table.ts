import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { recentSchema, type Recent } from "./recent.js";

/**
 * The price table the feed prices every call from, byte for byte. A call costs max(1, ceil(whole x
 * each named filter's points / 100)).
 */
export type PriceTable = {
  rateCard: string;
  provisional?: boolean;
  capturedAt?: string;
  recent: Recent;
  regions: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const priceTableSchema: Schema<PriceTable> = s.object<PriceTable>(
  {
    rateCard: s.string(),
    provisional: s.optional(s.boolean()),
    capturedAt: s.optional(s.string()),
    recent: recentSchema,
    regions: s.record(s.string(), s.unknown()),
    _keysMap: {
      rateCard: "rate_card",
      capturedAt: "captured_at",
    },
  },
  { additionalProperties: s.json() },
);
