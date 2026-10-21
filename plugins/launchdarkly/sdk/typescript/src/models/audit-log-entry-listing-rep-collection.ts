import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  auditLogEntryListingRepSchema,
  type AuditLogEntryListingRep,
} from "./audit-log-entry-listing-rep.js";
import { linkSchema, type Link } from "./link.js";

export type AuditLogEntryListingRepCollection = {
  /** An array of audit log entries */
  items: AuditLogEntryListingRep[];
  /** The location and content type of related resources */
  links: Record<string, Link>;
};

export const auditLogEntryListingRepCollectionSchema: Schema<AuditLogEntryListingRepCollection> =
  s.object<AuditLogEntryListingRepCollection>({
    items: s.array(s.lazy(() => auditLogEntryListingRepSchema)),
    links: s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
    _keysMap: {
      links: "_links",
    },
  });
