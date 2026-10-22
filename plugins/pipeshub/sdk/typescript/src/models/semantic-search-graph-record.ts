import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  semanticSearchLinkedRecordSchema,
  type SemanticSearchLinkedRecord,
} from "./semantic-search-linked-record.js";

/**
 * Graph record vertex returned in `records` and as values of `virtual_to_record_map`. All listed
 * fields are optional in the schema so partial or evolving documents validate; typical Arango
 * documents usually include `_key`, `_id`, `_rev`, `orgId`, `recordName`, `externalRecordId`,
 * `recordType`, `origin`, `createdAtTimestamp`, and `connectorId`. Extend this schema when new
 * stable fields appear on Record vertices.
 */
export type SemanticSearchGraphRecord = {
  key?: string | null;
  id?: string | null;
  rev?: string | null;
  recordName?: string | null;
  externalRecordId?: string | null;
  recordType?: string | null;
  origin?: string | null;
  createdAtTimestamp?: number | null;
  connectorId?: string | null;
  orgId?: string | null;
  updatedAtTimestamp?: number | null;
  externalGroupId?: string | null;
  externalParentId?: string | null;
  externalRevisionId?: string | null;
  externalRootGroupId?: string | null;
  recordGroupId?: string | null;
  version?: number | null;
  connectorName?: string | null;
  mimeType?: string | null;
  webUrl?: string | null;
  lastSyncTimestamp?: number | null;
  sourceCreatedAtTimestamp?: number | null;
  sourceLastModifiedTimestamp?: number | null;
  isDeleted?: boolean | null;
  isArchived?: boolean | null;
  isVlmOcrProcessed?: boolean | null;
  deletedByUserId?: string | null;
  processingStartedAt?: number | null;
  queuedAtTimestamp?: number | null;
  parsingStatus?: string | null;
  indexingStatus?: string | null;
  extractionStatus?: string | null;
  isLatestVersion?: boolean | null;
  isDirty?: boolean | null;
  reason?: string | null;
  lastIndexTimestamp?: number | null;
  lastExtractionTimestamp?: number | null;
  summaryDocumentId?: string | null;
  storageDocumentId?: string | null;
  virtualRecordId?: string | null;
  previewRenderable?: boolean | null;
  isShared?: boolean | null;
  isDependentNode?: boolean | null;
  parentNodeId?: string | null;
  hideWeburl?: boolean | null;
  isInternal?: boolean | null;
  md5Checksum?: string | null;
  sizeInBytes?: number | null;
  definition?: string | null;
  sourceTables?: string[] | null;
  rowCount?: number | null;
  /**
   * Where a ticket, pull request or project stands, in one short phrase, on `records` entries only:
   * for example `Merged 2026-09-25 by alice`, `Closed without merging 2026-09-26`, or `DONE (Jira:
   * Done), resolved 2026-06-06, assignee Bo, priority HIGH`. Dates are days in UTC. Absent for
   * record types with no state of their own.
   */
  statusSummary?: string;
  /**
   * On `records` entries only: the records that name this one (`mentionedIn`) and that it names
   * (`linksTo`) by web address or issue key, across connectors, limited to records the caller may
   * read, at most 10 per relation. Absent when there are none.
   */
  linkedRecords?: SemanticSearchLinkedRecord[];
};

export const semanticSearchGraphRecordSchema: Schema<SemanticSearchGraphRecord> =
  s.object<SemanticSearchGraphRecord>({
    key: s.optionalNullable(s.string()),
    id: s.optionalNullable(s.string()),
    rev: s.optionalNullable(s.string()),
    recordName: s.optionalNullable(s.string()),
    externalRecordId: s.optionalNullable(s.string()),
    recordType: s.optionalNullable(s.string()),
    origin: s.optionalNullable(s.string()),
    createdAtTimestamp: s.optionalNullable(s.float64()),
    connectorId: s.optionalNullable(s.string()),
    orgId: s.optionalNullable(s.string()),
    updatedAtTimestamp: s.optionalNullable(s.float64()),
    externalGroupId: s.optionalNullable(s.string()),
    externalParentId: s.optionalNullable(s.string()),
    externalRevisionId: s.optionalNullable(s.string()),
    externalRootGroupId: s.optionalNullable(s.string()),
    recordGroupId: s.optionalNullable(s.string()),
    version: s.optionalNullable(s.float64()),
    connectorName: s.optionalNullable(s.string()),
    mimeType: s.optionalNullable(s.string()),
    webUrl: s.optionalNullable(s.string()),
    lastSyncTimestamp: s.optionalNullable(s.float64()),
    sourceCreatedAtTimestamp: s.optionalNullable(s.float64()),
    sourceLastModifiedTimestamp: s.optionalNullable(s.float64()),
    isDeleted: s.optionalNullable(s.boolean()),
    isArchived: s.optionalNullable(s.boolean()),
    isVlmOcrProcessed: s.optionalNullable(s.boolean()),
    deletedByUserId: s.optionalNullable(s.string()),
    processingStartedAt: s.optionalNullable(s.float64()),
    queuedAtTimestamp: s.optionalNullable(s.float64()),
    parsingStatus: s.optionalNullable(s.string()),
    indexingStatus: s.optionalNullable(s.string()),
    extractionStatus: s.optionalNullable(s.string()),
    isLatestVersion: s.optionalNullable(s.boolean()),
    isDirty: s.optionalNullable(s.boolean()),
    reason: s.optionalNullable(s.string()),
    lastIndexTimestamp: s.optionalNullable(s.float64()),
    lastExtractionTimestamp: s.optionalNullable(s.float64()),
    summaryDocumentId: s.optionalNullable(s.string()),
    storageDocumentId: s.optionalNullable(s.string()),
    virtualRecordId: s.optionalNullable(s.string()),
    previewRenderable: s.optionalNullable(s.boolean()),
    isShared: s.optionalNullable(s.boolean()),
    isDependentNode: s.optionalNullable(s.boolean()),
    parentNodeId: s.optionalNullable(s.string()),
    hideWeburl: s.optionalNullable(s.boolean()),
    isInternal: s.optionalNullable(s.boolean()),
    md5Checksum: s.optionalNullable(s.string()),
    sizeInBytes: s.optionalNullable(s.float64()),
    definition: s.optionalNullable(s.string()),
    sourceTables: s.optionalNullable(s.array(s.string())),
    rowCount: s.optionalNullable(s.float64()),
    statusSummary: s.optional(s.string()),
    linkedRecords: s.optional(s.array(s.lazy(() => semanticSearchLinkedRecordSchema))),
    _keysMap: {
      key: "_key",
      id: "_id",
      rev: "_rev",
      isVlmOcrProcessed: "isVLMOcrProcessed",
    },
  });
