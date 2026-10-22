import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { auditLogEntrySchema, type AuditLogEntry } from "./audit-log-entry.js";

export type AuditEntriesGetResponse = {
  /**
   * The audit log entries on this page, in reverse chronological order. Entries sharing the same
   * timestamp are never split across pages, so a page may contain more than `limit` entries.
   */
  entries?: AuditLogEntry[];
  /**
   * An opaque cursor pointing at the next page. Pass this value as the `cursor` parameter of the
   * next request to fetch the following page. Absent or `null` on the last page.
   */
  nextCursor?: string | null;
  /**
   * The effective page size limit applied to this response. May differ from the requested `limit`
   * if the requested value was outside the allowed range.
   */
  limit?: number;
};

export const auditEntriesGetResponseSchema: Schema<AuditEntriesGetResponse> =
  s.object<AuditEntriesGetResponse>({
    entries: s.optional(s.array(s.lazy(() => auditLogEntrySchema))),
    nextCursor: s.optionalNullable(s.string()),
    limit: s.optional(s.int()),
  });
