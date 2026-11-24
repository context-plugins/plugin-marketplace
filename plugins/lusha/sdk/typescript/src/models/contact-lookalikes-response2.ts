import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactLookalikesMetaSchema, type ContactLookalikesMeta } from "./contact-lookalikes-meta.js";
import { lookalikeContactResultSchema, type LookalikeContactResult } from "./lookalike-contact-result.js";

export type ContactLookalikesResponse2 = {
  dedupeSessionId: string | null;
  results: LookalikeContactResult[];
  meta: ContactLookalikesMeta;
  creditsCharged?: number;
};

const contactLookalikesResponse2Properties: s.Shape<ContactLookalikesResponse2> = {
  dedupeSessionId: s.nullable(s.string()),
  results: s.array(s.lazy(() => lookalikeContactResultSchema)),
  meta: contactLookalikesMetaSchema,
  creditsCharged: s.optional(s.int()),
};

export const contactLookalikesResponse2InternalSchema: Schema<ContactLookalikesResponse2> =
  s.object<ContactLookalikesResponse2>(contactLookalikesResponse2Properties);

export const contactLookalikesResponse2Schema: Schema<ContactLookalikesResponse2> = s.lazySchema(() =>
  s.object<ContactLookalikesResponse2>({
    ...contactLookalikesResponse2Properties,
    creditsCharged: s.optional(s.int().check(s.gte(0))),
  }),
);
