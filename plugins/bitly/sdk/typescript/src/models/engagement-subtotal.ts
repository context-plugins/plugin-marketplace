import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Engagement-count subtotal for a single bitlink or decoupled QR code. The `id` references either a
 * bitlink (`<domain>/<hash>`) or a QR code guid, and `engagements` is the combined count of bitlink
 * clicks or QR code scans for that entity.
 */
export type EngagementSubtotal = {
  engagements?: number;
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const engagementSubtotalSchema: Schema<EngagementSubtotal> = s.object<EngagementSubtotal>(
  {
    engagements: s.optional(s.int()),
    id: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
