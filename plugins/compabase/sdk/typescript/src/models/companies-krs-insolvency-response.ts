import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompaniesKrsInsolvencyResponse = {
  krs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesKrsInsolvencyResponseSchema: Schema<CompaniesKrsInsolvencyResponse> =
  s.object<CompaniesKrsInsolvencyResponse>(
    {
      krs: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
