import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyErrorResponse = {
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyErrorResponseSchema: Schema<CompanyErrorResponse> = s.object<CompanyErrorResponse>(
  {
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
