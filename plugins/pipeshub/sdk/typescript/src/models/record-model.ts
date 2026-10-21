import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { connectorNameEnumSchema, type ConnectorNameEnum } from "./connector-name-enum.js";
import { fileRecordSchema, type FileRecord } from "./file-record.js";
import { indexingStatusSchema, type IndexingStatus } from "./indexing-status.js";
import { originSchema, type Origin } from "./origin.js";
import { parsingStatusSchema, type ParsingStatus } from "./parsing-status.js";
import { recordTypeEnumSchema, type RecordTypeEnum } from "./record-type-enum.js";

/**
 * A record represents a single document, file, or content item within a knowledge base. Records can
 * originate from file uploads or external connectors (Google Drive, OneDrive, etc.).
 */
export type RecordModel = {
  /** Unique record identifier (UUID format) */
  id?: string;
  /** Display name of the record */
  recordName: string;
  /** Display name (alias for recordName) */
  name?: string;
  /** External storage document ID (links to Storage module) */
  externalRecordId?: string;
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
  /**
   * Source of the record:
   * - UPLOAD: Manually uploaded via API/UI
   * - CONNECTOR: Synced from external connector
   */
  origin: Origin;
  /** ID of the connector that synced this record (null for uploads) */
  connectorId?: string;
  /**
   * Name of the source connector. Mirrors the values of the backend `Connectors` enum
   * (`backend/python/app/config/constants/arangodb.py`); records store the enum value (e.g. Google
   * Drive is `DRIVE`, SharePoint Online is `SHAREPOINT ONLINE`), not the enum member name.
   */
  connectorName?: ConnectorNameEnum;
  /** Organization ID that owns this record */
  orgId: string;
  /** Knowledge base ID containing this record */
  kbId?: string;
  /** Parent folder ID (null if at KB root) */
  folderId?: string | null;
  /** Current version number (increments on updates) @default 0 */
  version?: number;
  /** Whether this is the latest version */
  isLatestVersion?: boolean;
  /** Creation timestamp in milliseconds */
  createdAtTimestamp?: number;
  /** Last update timestamp in milliseconds */
  updatedAtTimestamp?: number;
  /** Source creation timestamp (from connector) */
  sourceCreatedAtTimestamp?: number;
  /** Source last modified timestamp (from connector) */
  sourceLastModifiedTimestamp?: number;
  /** Epoch ms when parse/index processing began for the current attempt; null when idle */
  processingStartedAt?: number | null;
  /**
   * Epoch ms the platform last queued this record for indexing; absent until first queued.
   * Platform-owned, unlike updatedAtTimestamp
   */
  queuedAtTimestamp?: number | null;
  /**
   * Parse-phase status (ahead of indexing/extraction):
   * - NOT_STARTED: Awaiting parsing
   * - QUEUED: In parsing queue
   * - IN_PROGRESS: Currently being parsed
   * - COMPLETED: Successfully parsed
   * - FAILED: Parsing failed
   * - FILE_TYPE_NOT_SUPPORTED: Unsupported file format
   * - AUTO_INDEX_OFF: Auto-indexing disabled for this record
   * - EMPTY: File has no extractable content
   */
  parsingStatus?: ParsingStatus;
  /**
   * True after the record is indexed (every COMPLETED write, including the upgrade backfill for
   * records indexed earlier), and false once it is marked EMPTY. A later re-queue or a failed
   * re-index leaves it as it is, so search keeps returning the previous indexed copy until the new
   * version is indexed. Absent until the first COMPLETED or EMPTY write sets it.
   */
  hasIndexedCopy?: boolean;
  /**
   * Current indexing/processing status:
   * - NOT_STARTED: Awaiting indexing
   * - QUEUED: In indexing queue
   * - IN_PROGRESS: Currently being indexed
   * - COMPLETED: Successfully indexed and searchable
   * - FAILED: Indexing failed (check error details)
   * - PAUSED: Indexing paused by user
   * - FILE_TYPE_NOT_SUPPORTED: Unsupported file format
   * - AUTO_INDEX_OFF: Auto-indexing disabled for this record
   * - EMPTY: File has no extractable content
   * - ENABLE_MULTIMODAL_MODELS: Requires multimodal AI models
   */
  indexingStatus?: IndexingStatus;
  /** Soft delete flag @default false */
  isDeleted?: boolean;
  /** Archive flag for inactive records @default false */
  isArchived?: boolean;
  /** Direct URL to access the original content */
  webUrl?: string;
  /** MIME type of the file content */
  mimeType?: string;
  /** File size in bytes */
  sizeInBytes?: number;
  /** File extension (without dot) */
  extension?: string;
  /** SHA-256 hash for content deduplication */
  sha256Hash?: string;
  /** Node type identifier */
  type?: string;
  /** File-specific metadata (present when recordType is FILE) */
  fileRecord?: FileRecord | null;
  /** Email-specific metadata (present when recordType is MAIL or GROUP_MAIL) */
  mailRecord?: Record<string, unknown> | null;
  /** Ticket-specific metadata (present when recordType is TICKET) */
  ticketRecord?: Record<string, unknown> | null;
};

export const recordModelSchema: Schema<RecordModel> = s.object<RecordModel>({
  id: s.optional(s.string()),
  recordName: s.string(),
  name: s.optional(s.string()),
  externalRecordId: s.optional(s.string()),
  recordType: recordTypeEnumSchema,
  origin: originSchema,
  connectorId: s.optional(s.string()),
  connectorName: s.optional(s.lazy(() => connectorNameEnumSchema)),
  orgId: s.string(),
  kbId: s.optional(s.string()),
  folderId: s.optionalNullable(s.string()),
  version: s.defaulted(s.int(), 0),
  isLatestVersion: s.optional(s.boolean()),
  createdAtTimestamp: s.optional(s.int()),
  updatedAtTimestamp: s.optional(s.int()),
  sourceCreatedAtTimestamp: s.optional(s.int()),
  sourceLastModifiedTimestamp: s.optional(s.int()),
  processingStartedAt: s.optionalNullable(s.int()),
  queuedAtTimestamp: s.optionalNullable(s.int()),
  parsingStatus: s.optional(s.lazy(() => parsingStatusSchema)),
  hasIndexedCopy: s.optional(s.boolean()),
  indexingStatus: s.optional(s.lazy(() => indexingStatusSchema)),
  isDeleted: s.defaulted(s.boolean(), false),
  isArchived: s.defaulted(s.boolean(), false),
  webUrl: s.optional(s.string()),
  mimeType: s.optional(s.string()),
  sizeInBytes: s.optional(s.int()),
  extension: s.optional(s.string()),
  sha256Hash: s.optional(s.string()),
  type: s.optional(s.string()),
  fileRecord: s.optionalNullable(s.lazy(() => fileRecordSchema)),
  mailRecord: s.optionalNullable(s.record(s.string(), s.unknown())),
  ticketRecord: s.optionalNullable(s.record(s.string(), s.unknown())),
});
