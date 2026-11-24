import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompaniesKrsTendersResponse = {
  krs?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesKrsTendersResponseSchema: Schema<CompaniesKrsTendersResponse> =
  s.object<CompaniesKrsTendersResponse>(
    {
      krs: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
