import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompaniesKrsEuFundsResponse = {
  krs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesKrsEuFundsResponseSchema: Schema<CompaniesKrsEuFundsResponse> =
  s.object<CompaniesKrsEuFundsResponse>(
    {
      krs: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
