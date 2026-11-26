import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ActivePromotion = {
  /** Promotion start date */
  startDate?: Date;
  /** Promotion end date */
  endDate?: Date;
  /** Credit card rate */
  creditCardRate?: number;
  /** Debit card rate */
  debitCardRate?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const activePromotionSchema: Schema<ActivePromotion> = s.object<ActivePromotion>(
  {
    startDate: s.optional(s.dateTime()),
    endDate: s.optional(s.dateTime()),
    creditCardRate: s.optional(s.float64()),
    debitCardRate: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
