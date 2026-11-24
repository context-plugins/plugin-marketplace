import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { vendorInternalSchema, vendorSchema, type Vendor } from "./vendor.js";

export type CompaniesApiVendorsResponse = {
  value?: Vendor[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiVendorsResponseProperties: s.Shape<CompaniesApiVendorsResponse> = {
  value: s.optional(s.array(s.lazy(() => vendorInternalSchema))),
};

export const companiesApiVendorsResponseInternalSchema: Schema<CompaniesApiVendorsResponse> =
  s.object<CompaniesApiVendorsResponse>(companiesApiVendorsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiVendorsResponseSchema: Schema<CompaniesApiVendorsResponse> = s.lazySchema(() =>
  s.object<CompaniesApiVendorsResponse>(
    {
      ...companiesApiVendorsResponseProperties,
      value: s.optional(s.array(s.lazy(() => vendorSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
