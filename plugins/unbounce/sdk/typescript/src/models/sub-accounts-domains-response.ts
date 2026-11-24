import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { domainSchema, type Domain } from "./domain.js";

export type SubAccountsDomainsResponse = {
  domains?: Domain[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const subAccountsDomainsResponseSchema: Schema<SubAccountsDomainsResponse> =
  s.object<SubAccountsDomainsResponse>(
    {
      domains: s.optional(s.array(s.lazy(() => domainSchema))),
    },
    { additionalProperties: s.json() },
  );
