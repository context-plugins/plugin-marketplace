import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessRuleSchema, type AccessRule } from "./access-rule.js";
import { connectorNameEnumSchema, type ConnectorNameEnum } from "./connector-name-enum.js";
import { fileRecord1Schema, type FileRecord1 } from "./file-record1.js";
import { recordTypeEnumSchema, type RecordTypeEnum } from "./record-type-enum.js";

export type Record1 = {
  id: string;
  orgId: string;
  recordName: string;
  externalRecordId: string;
  externalRootGroupId?: string | null;
  externalGroupId?: string | null;
  externalParentId?: string | null;
  externalRevisionId?: string | null;
  recordGroupId?: string | null;
  /**
   * Internal identifier of the top-most record group in this record's chain. A group with no parent
   * is its own root, so this is null only for records written before the field existed, or by
   * connectors that do not set it.
   */
  rootRecordGroupId?: string | null;
  /**
   * How this record's own permissions combine with its ancestors'. OPEN: an accessible parent, or a
   * direct grant, is enough. STRICT: every ancestor up to the connector must be accessible too.
   * RESTRICTED: strict, and a grant on the record itself is required. Absent on records written
   * before the field existed; read as OPEN.
   */
  accessRule?: AccessRule;
  /**
   * User id of whoever uploaded the file to the knowledge base. Absent for connector records and
   * for files uploaded before the field existed.
   */
  uploadedBy?: string | null;
  connectorId: string;
  /**
   * Name of the source connector. Mirrors the values of the backend `Connectors` enum
   * (`backend/python/app/config/constants/arangodb.py`); records store the enum value (e.g. Google
   * Drive is `DRIVE`, SharePoint Online is `SHAREPOINT ONLINE`), not the enum member name.
   */
  connectorName: ConnectorNameEnum;
  /**
   * Type of content. Mirrors the backend `RecordType` enum
   * (`backend/python/app/models/entities.py`); connector-sourced records may use any of the
   * connector-specific types below.
   * - FILE: Uploaded or synced documents (PDF, DOCX, etc.)
   * - DRIVE: Drive/folder container (Google Drive, OneDrive, etc.)
   * - WEBPAGE: Web pages crawled or bookmarked
   * - DATABASE: Database object (e.g. Notion database)
   * - DATASOURCE: Data source object
   * - MESSAGE: Chat/messaging content (Slack, Teams)
   * - MAIL: Email messages (Gmail, Outlook)
   * - GROUP_MAIL: Group/shared mailbox email messages
   * - TICKET: Support/issue tickets (Jira, ServiceNow)
   * - COMMENT: Comments from collaboration tools
   * - INLINE_COMMENT: Inline comments anchored to content (e.g. Confluence)
   * - CONFLUENCE_PAGE: Confluence page
   * - CONFLUENCE_BLOGPOST: Confluence blog post
   * - SHAREPOINT_PAGE: SharePoint page
   * - SHAREPOINT_LIST: SharePoint list
   * - SHAREPOINT_LIST_ITEM: SharePoint list item
   * - SHAREPOINT_DOCUMENT_LIBRARY: SharePoint document library
   * - LINK: Web link / bookmark
   * - PROJECT: Project entity (e.g. Jira project)
   * - PULL_REQUEST: Source-control pull request
   * - MEETING: Meeting record (e.g. Zoom)
   * - PRODUCT: Product entity (CRM)
   * - DEAL: Deal/opportunity entity (CRM)
   * - CASE: Case entity (CRM/support)
   * - TASK: Task entity
   * - ARTIFACT: Generated/derived artifact
   * - CODE_FILE: Source-code file
   * - SQL_TABLE: SQL table object
   * - SQL_VIEW: SQL view object
   * - OTHERS: Miscellaneous content types
   */
  recordType: RecordTypeEnum;
  origin: string;
  version: number;
  isLatestVersion?: boolean | null;
  createdAtTimestamp: number;
  updatedAtTimestamp: number;
  sourceCreatedAtTimestamp: number;
  sourceLastModifiedTimestamp: number;
  lastSyncTimestamp?: number | null;
  lastIndexTimestamp?: number;
  lastExtractionTimestamp?: number;
  processingStartedAt?: number | null;
  queuedAtTimestamp?: number | null;
  parsingStatus?: string | null;
  indexingStatus: string;
  /**
   * True after the record is indexed (every COMPLETED write, including the upgrade backfill for
   * records indexed earlier), and false once it is marked EMPTY. A later re-queue or a failed
   * re-index leaves it as it is, so search keeps returning the previous indexed copy until the new
   * version is indexed. Absent until the first COMPLETED or EMPTY write sets it.
   */
  hasIndexedCopy?: boolean;
  extractionStatus: string;
  reason?: string | null;
  isDeleted: boolean;
  isArchived: boolean;
  deletedByUserId?: string | null;
  isDirty?: boolean | null;
  isVlmOcrProcessed: boolean | null;
  mimeType: string | null;
  sizeInBytes: number | null;
  md5Checksum?: string | null;
  virtualRecordId?: string | null;
  summaryDocumentId?: string | null;
  storageDocumentId?: string | null;
  webUrl: string | null;
  previewRenderable?: boolean | null;
  isShared?: boolean | null;
  isDependentNode?: boolean | null;
  parentNodeId?: string | null;
  hideWeburl?: boolean | null;
  isInternal?: boolean | null;
  /**
   * True for placeholder/stub records standing in for an out-of-scope ancestor (rendered read-only,
   * no content actions; excluded from search and indexing).
   */
  isPlaceholder?: boolean | null;
  fileRecord: FileRecord1 | null;
  mailRecord: Record<string, unknown> | null;
  ticketRecord: Record<string, unknown> | null;
};

export const record1Schema: Schema<Record1> = s.object<Record1>({
  id: s.string(),
  orgId: s.string(),
  recordName: s.string(),
  externalRecordId: s.string(),
  externalRootGroupId: s.optionalNullable(s.string()),
  externalGroupId: s.optionalNullable(s.string()),
  externalParentId: s.optionalNullable(s.string()),
  externalRevisionId: s.optionalNullable(s.string()),
  recordGroupId: s.optionalNullable(s.string()),
  rootRecordGroupId: s.optionalNullable(s.string()),
  accessRule: s.optional(s.lazy(() => accessRuleSchema)),
  uploadedBy: s.optionalNullable(s.string()),
  connectorId: s.string(),
  connectorName: connectorNameEnumSchema,
  recordType: recordTypeEnumSchema,
  origin: s.string(),
  version: s.int(),
  isLatestVersion: s.optionalNullable(s.boolean()),
  createdAtTimestamp: s.int(),
  updatedAtTimestamp: s.int(),
  sourceCreatedAtTimestamp: s.int(),
  sourceLastModifiedTimestamp: s.int(),
  lastSyncTimestamp: s.optionalNullable(s.int()),
  lastIndexTimestamp: s.optional(s.int()),
  lastExtractionTimestamp: s.optional(s.int()),
  processingStartedAt: s.optionalNullable(s.int()),
  queuedAtTimestamp: s.optionalNullable(s.int()),
  parsingStatus: s.optionalNullable(s.string()),
  indexingStatus: s.string(),
  hasIndexedCopy: s.optional(s.boolean()),
  extractionStatus: s.string(),
  reason: s.optionalNullable(s.string()),
  isDeleted: s.boolean(),
  isArchived: s.boolean(),
  deletedByUserId: s.optionalNullable(s.string()),
  isDirty: s.optionalNullable(s.boolean()),
  isVlmOcrProcessed: s.nullable(s.boolean()),
  mimeType: s.nullable(s.string()),
  sizeInBytes: s.nullable(s.int()),
  md5Checksum: s.optionalNullable(s.string()),
  virtualRecordId: s.optionalNullable(s.string()),
  summaryDocumentId: s.optionalNullable(s.string()),
  storageDocumentId: s.optionalNullable(s.string()),
  webUrl: s.nullable(s.string()),
  previewRenderable: s.optionalNullable(s.boolean()),
  isShared: s.optionalNullable(s.boolean()),
  isDependentNode: s.optionalNullable(s.boolean()),
  parentNodeId: s.optionalNullable(s.string()),
  hideWeburl: s.optionalNullable(s.boolean()),
  isInternal: s.optionalNullable(s.boolean()),
  isPlaceholder: s.optionalNullable(s.boolean()),
  fileRecord: s.nullable(s.lazy(() => fileRecord1Schema)),
  mailRecord: s.nullable(s.record(s.string(), s.unknown())),
  ticketRecord: s.nullable(s.record(s.string(), s.unknown())),
  _keysMap: {
    isVlmOcrProcessed: "isVLMOcrProcessed",
  },
});
