import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customerInternalSchema, customerSchema, type Customer } from "./customer.js";

export type CompaniesApiCustomersResponse = {
  value?: Customer[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiCustomersResponseProperties: s.Shape<CompaniesApiCustomersResponse> = {
  value: s.optional(s.array(s.lazy(() => customerInternalSchema))),
};

export const companiesApiCustomersResponseInternalSchema: Schema<CompaniesApiCustomersResponse> =
  s.object<CompaniesApiCustomersResponse>(companiesApiCustomersResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiCustomersResponseSchema: Schema<CompaniesApiCustomersResponse> = s.lazySchema(() =>
  s.object<CompaniesApiCustomersResponse>(
    {
      ...companiesApiCustomersResponseProperties,
      value: s.optional(s.array(s.lazy(() => customerSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
