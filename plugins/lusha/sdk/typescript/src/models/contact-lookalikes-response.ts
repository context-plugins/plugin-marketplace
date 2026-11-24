import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contactLookalikesMetaSchema, type ContactLookalikesMeta } from "./contact-lookalikes-meta.js";
import { tableWriteSchema, type TableWrite } from "./table-write.js";
import { v3BillingSchema, type V3Billing } from "./v3-billing.js";
import {
  v3LookAlikeContactResultSchema,
  type V3LookAlikeContactResult,
} from "./v3-look-alike-contact-result.js";

export type ContactLookalikesResponse = {
  dedupeSessionId: string | null;
  results: V3LookAlikeContactResult[];
  meta: ContactLookalikesMeta;
  /**
   * Added to a Prospecting, Enrich, Signals, or Lookalike response when `tableId` is passed on the
   * request. The primary response is unaffected even if the table write fails.
   */
  tableWrite?: TableWrite;
  /** Credit usage summary for a V3 API request */
  billing?: V3Billing;
};

export const contactLookalikesResponseSchema: Schema<ContactLookalikesResponse> =
  s.object<ContactLookalikesResponse>({
    dedupeSessionId: s.nullable(s.string()),
    results: s.array(s.lazy(() => v3LookAlikeContactResultSchema)),
    meta: contactLookalikesMetaSchema,
    tableWrite: s.optional(s.lazy(() => tableWriteSchema)),
    billing: s.optional(s.lazy(() => v3BillingSchema)),
  });
