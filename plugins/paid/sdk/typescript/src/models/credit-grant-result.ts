import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreditGrantResult = {
  amount: number;
  /** When these credits become spendable, as an RFC3339 datetime with timezone. */
  startsAt: Date;
  /**
   * When these credits expire, as an RFC3339 datetime with timezone. Null when the credits do not
   * expire.
   */
  expiresAt: Date | null;
  /** Credit grants are active immediately when created. @default "active" */
  status?: "active";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditGrantResultSchema: Schema<CreditGrantResult> = s.object<CreditGrantResult>(
  {
    amount: s.int(),
    startsAt: s.dateTime(),
    expiresAt: s.nullable(s.dateTime()),
    status: s.defaulted(s.literal("active"), "active"),
  },
  { additionalProperties: s.json() },
);
