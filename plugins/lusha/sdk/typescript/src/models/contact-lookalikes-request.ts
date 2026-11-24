import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contactIdentifiersBatchInternalSchema,
  contactIdentifiersBatchSchema,
  type ContactIdentifiersBatch,
} from "./contact-identifiers-batch.js";

export type ContactLookalikesRequest = {
  dedupeSessionId?: string;
  seeds: ContactIdentifiersBatch | null;
  exclude?: ContactIdentifiersBatch | null;
  /** @default 25 */
  limit?: number;
  /** Optional. If provided, results are also persisted to this table. See the Tables API. */
  tableId?: string;
};

const contactLookalikesRequestProperties: s.Shape<ContactLookalikesRequest> = {
  dedupeSessionId: s.optional(s.string()),
  seeds: s.nullable(s.lazy(() => contactIdentifiersBatchInternalSchema)),
  exclude: s.optionalNullable(s.lazy(() => contactIdentifiersBatchInternalSchema)),
  limit: s.defaulted(s.int(), 25),
  tableId: s.optional(s.string()),
};

export const contactLookalikesRequestInternalSchema: Schema<ContactLookalikesRequest> =
  s.object<ContactLookalikesRequest>(contactLookalikesRequestProperties);

export const contactLookalikesRequestSchema: Schema<ContactLookalikesRequest> = s.lazySchema(() =>
  s.object<ContactLookalikesRequest>({
    ...contactLookalikesRequestProperties,
    seeds: s.nullable(s.lazy(() => contactIdentifiersBatchSchema)),
    exclude: s.optionalNullable(s.lazy(() => contactIdentifiersBatchSchema)),
    limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
  }),
);
