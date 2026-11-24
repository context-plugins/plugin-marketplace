import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLinkedinResponse = {
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLinkedinResponseSchema: Schema<CompanyLinkedinResponse> =
  s.object<CompanyLinkedinResponse>(
    {
      url: s.string(),
    },
    { additionalProperties: s.json() },
  );
