import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { creditCurrencyStatusSchema, type CreditCurrencyStatus } from "./credit-currency-status.js";

export type CreditCurrency = {
  /** Unique identifier for this credit currency. */
  id: string;
  /** Human-readable name shown for this credit currency. */
  name: string;
  /**
   * Stable machine-readable key for this credit currency. Keys are unique within an organization.
   */
  key: string;
  /** Whether this credit currency is active or archived. */
  status: CreditCurrencyStatus;
  /** Optional description for this credit currency. */
  description: string | null;
  /** When this credit currency was archived. Null means the currency is active. */
  archivedAt: Date | null;
  /** When this credit currency was created. */
  createdAt: Date;
  /** When this credit currency was last updated. */
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const creditCurrencySchema: Schema<CreditCurrency> = s.object<CreditCurrency>(
  {
    id: s.string(),
    name: s.string(),
    key: s.string(),
    status: creditCurrencyStatusSchema,
    description: s.nullable(s.string()),
    archivedAt: s.nullable(s.dateTime()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
  },
  { additionalProperties: s.json() },
);
