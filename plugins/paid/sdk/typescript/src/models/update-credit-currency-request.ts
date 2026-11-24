import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  updateCreditCurrencyRequestStatusSchema,
  type UpdateCreditCurrencyRequestStatus,
} from "./update-credit-currency-request-status.js";

export type UpdateCreditCurrencyRequest = {
  /** Updated description for this credit currency. Use null to clear the description. */
  description?: string | null;
  /** Set to `archived` to archive this credit currency, or `active` to restore it. */
  status?: UpdateCreditCurrencyRequestStatus;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCreditCurrencyRequestSchema: Schema<UpdateCreditCurrencyRequest> =
  s.object<UpdateCreditCurrencyRequest>(
    {
      description: s.optionalNullable(s.string()),
      status: s.optional(s.lazy(() => updateCreditCurrencyRequestStatusSchema)),
    },
    { additionalProperties: s.json() },
  );
