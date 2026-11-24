import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditGrant = {
  available: number;
  used: number;
  total: number;
  rolloverAmount: number | null;
  periodStart: Date;
  periodEnd: Date | null;
  rolloverEndDate: Date | null;
  expiresAt: Date | null;
  isInRolloverWindow: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditGrantSchema: Schema<CreditGrant> = s.object<CreditGrant>(
  {
    available: s.float64(),
    used: s.float64(),
    total: s.float64(),
    rolloverAmount: s.nullable(s.float64()),
    periodStart: s.dateTime(),
    periodEnd: s.nullable(s.dateTime()),
    rolloverEndDate: s.nullable(s.dateTime()),
    expiresAt: s.nullable(s.dateTime()),
    isInRolloverWindow: s.boolean(),
  },
  { additionalProperties: s.json() },
);
