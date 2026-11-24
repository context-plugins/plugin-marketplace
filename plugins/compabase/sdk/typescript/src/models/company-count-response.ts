import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyCountResponse = {
  /** Number of companies matching the filters. */
  count: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyCountResponseProperties: s.Shape<CompanyCountResponse> = {
  count: s.int(),
};

export const companyCountResponseInternalSchema: Schema<CompanyCountResponse> =
  s.object<CompanyCountResponse>(companyCountResponseProperties, { additionalProperties: s.json() });

export const companyCountResponseSchema: Schema<CompanyCountResponse> = s.lazySchema(() =>
  s.object<CompanyCountResponse>(
    {
      ...companyCountResponseProperties,
      count: s.int().check(s.gte(0)),
    },
    { additionalProperties: s.json() },
  ),
);
