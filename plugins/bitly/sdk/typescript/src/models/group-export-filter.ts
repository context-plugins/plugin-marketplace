import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { archivedBitlyGroupsApiSchema, type ArchivedBitlyGroupsApi } from "./archived-bitly-groups-api.js";

/**
 * Search constraints used to resolve links or QR codes for export. Required for links_list and
 * qr_codes_list.
 */
export type GroupExportFilter = {
  tags?: string[];
  domain?: string;
  /** Filter by archive state. */
  archived?: ArchivedBitlyGroupsApi;
  /** Free-text search query. */
  query?: string;
  /** Include items created at or after this Unix timestamp (UTC). */
  createdAfter?: number;
  /** Include items created before this Unix timestamp (UTC). */
  createdBefore?: number;
  /** Filter links by campaign GUID. Ignored for qr_codes_list. */
  campaignGuid?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupExportFilterSchema: Schema<GroupExportFilter> = s.object<GroupExportFilter>(
  {
    tags: s.optional(s.array(s.string())),
    domain: s.optional(s.string()),
    archived: s.optional(s.lazy(() => archivedBitlyGroupsApiSchema)),
    query: s.optional(s.string()),
    createdAfter: s.optional(s.int()),
    createdBefore: s.optional(s.int()),
    campaignGuid: s.optional(s.string()),
    _keysMap: {
      createdAfter: "created_after",
      createdBefore: "created_before",
      campaignGuid: "campaign_guid",
    },
  },
  { additionalProperties: s.json() },
);
