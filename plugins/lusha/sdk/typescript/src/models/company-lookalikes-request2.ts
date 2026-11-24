import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyIdentifiersBatchInternalSchema,
  companyIdentifiersBatchSchema,
  type CompanyIdentifiersBatch,
} from "./company-identifiers-batch.js";

export type CompanyLookalikesRequest2 = {
  dedupeSessionId?: string;
  seeds: CompanyIdentifiersBatch;
  exclude?: CompanyIdentifiersBatch;
  /** @default 25 */
  limit?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyLookalikesRequest2Properties: s.Shape<CompanyLookalikesRequest2> = {
  dedupeSessionId: s.optional(s.string()),
  seeds: companyIdentifiersBatchInternalSchema,
  exclude: s.optional(s.lazy(() => companyIdentifiersBatchInternalSchema)),
  limit: s.defaulted(s.int(), 25),
};

export const companyLookalikesRequest2InternalSchema: Schema<CompanyLookalikesRequest2> =
  s.object<CompanyLookalikesRequest2>(companyLookalikesRequest2Properties, {
    additionalProperties: s.json(),
  });

export const companyLookalikesRequest2Schema: Schema<CompanyLookalikesRequest2> = s.lazySchema(() =>
  s.object<CompanyLookalikesRequest2>(
    {
      ...companyLookalikesRequest2Properties,
      seeds: companyIdentifiersBatchSchema,
      exclude: s.optional(s.lazy(() => companyIdentifiersBatchSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
    },
    { additionalProperties: s.json() },
  ),
);
