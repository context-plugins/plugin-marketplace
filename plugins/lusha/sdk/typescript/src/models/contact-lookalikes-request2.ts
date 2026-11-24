import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  contactIdentifiersBatch2InternalSchema,
  contactIdentifiersBatch2Schema,
  type ContactIdentifiersBatch2,
} from "./contact-identifiers-batch2.js";

export type ContactLookalikesRequest2 = {
  dedupeSessionId?: string;
  seeds: ContactIdentifiersBatch2 | null;
  exclude?: ContactIdentifiersBatch2 | null;
  /** @default 25 */
  limit?: number;
};

const contactLookalikesRequest2Properties: s.Shape<ContactLookalikesRequest2> = {
  dedupeSessionId: s.optional(s.string()),
  seeds: s.nullable(s.lazy(() => contactIdentifiersBatch2InternalSchema)),
  exclude: s.optionalNullable(s.lazy(() => contactIdentifiersBatch2InternalSchema)),
  limit: s.defaulted(s.int(), 25),
};

export const contactLookalikesRequest2InternalSchema: Schema<ContactLookalikesRequest2> =
  s.object<ContactLookalikesRequest2>(contactLookalikesRequest2Properties);

export const contactLookalikesRequest2Schema: Schema<ContactLookalikesRequest2> = s.lazySchema(() =>
  s.object<ContactLookalikesRequest2>({
    ...contactLookalikesRequest2Properties,
    seeds: s.nullable(s.lazy(() => contactIdentifiersBatch2Schema)),
    exclude: s.optionalNullable(s.lazy(() => contactIdentifiersBatch2Schema)),
    limit: s.defaulted(s.int().check(s.gte(1), s.lte(100)), 25),
  }),
);
