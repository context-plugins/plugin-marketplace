import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  companyIdentifiersBatchInternalSchema,
  companyIdentifiersBatchSchema,
  type CompanyIdentifiersBatch,
} from "./company-identifiers-batch.js";

export type CompanyLookalikesRequest = {
  dedupeSessionId?: string;
  seeds: CompanyIdentifiersBatch;
  exclude?: CompanyIdentifiersBatch;
  /** @default 25 */
  limit?: number;
  /** Optional. If provided, results are also persisted to this table. See the Tables API. */
  tableId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const companyLookalikesRequestProperties: s.Shape<CompanyLookalikesRequest> = {
  dedupeSessionId: s.optional(s.string()),
  seeds: companyIdentifiersBatchInternalSchema,
  exclude: s.optional(s.lazy(() => companyIdentifiersBatchInternalSchema)),
  limit: s.defaulted(s.int(), 25),
  tableId: s.optional(s.string()),
};

export const companyLookalikesRequestInternalSchema: Schema<CompanyLookalikesRequest> =
  s.object<CompanyLookalikesRequest>(companyLookalikesRequestProperties, { additionalProperties: s.json() });

export const companyLookalikesRequestSchema: Schema<CompanyLookalikesRequest> = s.lazySchema(() =>
  s.object<CompanyLookalikesRequest>(
    {
      ...companyLookalikesRequestProperties,
      seeds: companyIdentifiersBatchSchema,
      exclude: s.optional(s.lazy(() => companyIdentifiersBatchSchema)),
      limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
    },
    { additionalProperties: s.json() },
  ),
);
