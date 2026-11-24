import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateCreditCurrencyRequest = {
  /** Human-readable name shown for this credit currency. */
  name: string;
  /**
   * Stable machine-readable key for this credit currency. Use lowercase letters, numbers,
   * underscores, and hyphens. Keys are unique within an organization.
   */
  key: string;
  /** Optional description for this credit currency. */
  description?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCreditCurrencyRequestSchema: Schema<CreateCreditCurrencyRequest> =
  s.object<CreateCreditCurrencyRequest>(
    {
      name: s.string(),
      key: s.string(),
      description: s.optionalNullable(s.string()),
    },
    { additionalProperties: s.json() },
  );
