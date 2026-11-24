import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyNameSearchRequest = {
  /** Search text for company name */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyNameSearchRequestSchema: Schema<CompanyNameSearchRequest> =
  s.object<CompanyNameSearchRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
