import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pendingStatusSchema, type PendingStatus } from "./pending-status.js";

/**
 * Normalized auction sale/title document metadata. issuing_state is the document/title issuer state
 * and is distinct from the auction yard/location state.
 */
export type SaleDocument = {
  /** Normalized sale document name. */
  name?: string | null;
  /** Source-style display label preserving the title issuing state when available. */
  rawName?: string | null;
  /**
   * State that issued the title/document when explicitly supplied by the auction source. This is
   * not the auction yard state.
   */
  issuingState?: string | null;
  type?: string | null;
  export?: boolean | null;
  registration?: boolean | null;
  isPending?: boolean;
  pendingStatus?: PendingStatus;
  pendingSource?: string | null;
  pageId?: number | null;
  saleDocumentGroup?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const saleDocumentSchema: Schema<SaleDocument> = s.object<SaleDocument>(
  {
    name: s.optionalNullable(s.string()),
    rawName: s.optionalNullable(s.string()),
    issuingState: s.optionalNullable(s.string()),
    type: s.optionalNullable(s.string()),
    export: s.optionalNullable(s.boolean()),
    registration: s.optionalNullable(s.boolean()),
    isPending: s.optional(s.boolean()),
    pendingStatus: s.optional(s.lazy(() => pendingStatusSchema)),
    pendingSource: s.optionalNullable(s.string()),
    pageId: s.optionalNullable(s.int()),
    saleDocumentGroup: s.optionalNullable(s.string()),
    _keysMap: {
      rawName: "raw_name",
      issuingState: "issuing_state",
      isPending: "is_pending",
      pendingStatus: "pending_status",
      pendingSource: "pending_source",
      pageId: "page_id",
      saleDocumentGroup: "sale_document_group",
    },
  },
  { additionalProperties: s.json() },
);
