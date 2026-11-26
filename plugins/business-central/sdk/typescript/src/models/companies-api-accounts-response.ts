import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { accountInternalSchema, accountSchema, type Account } from "./account.js";

export type CompaniesApiAccountsResponse = {
  value?: Account[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companiesApiAccountsResponseProperties: s.Shape<CompaniesApiAccountsResponse> = {
  value: s.optional(s.array(s.lazy(() => accountInternalSchema))),
};

export const companiesApiAccountsResponseInternalSchema: Schema<CompaniesApiAccountsResponse> =
  s.object<CompaniesApiAccountsResponse>(companiesApiAccountsResponseProperties, {
    additionalProperties: s.json(),
  });

export const companiesApiAccountsResponseSchema: Schema<CompaniesApiAccountsResponse> = s.lazySchema(() =>
  s.object<CompaniesApiAccountsResponse>(
    {
      ...companiesApiAccountsResponseProperties,
      value: s.optional(s.array(s.lazy(() => accountSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
