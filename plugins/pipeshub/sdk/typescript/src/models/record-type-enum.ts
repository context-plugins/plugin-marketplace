import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of content. Mirrors the backend `RecordType` enum (`backend/python/app/models/entities.py`);
 * connector-sourced records may use any of the connector-specific types below.
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
export const RecordTypeEnum = {
  File: "FILE",
  Drive: "DRIVE",
  Webpage: "WEBPAGE",
  Database: "DATABASE",
  Datasource: "DATASOURCE",
  Message: "MESSAGE",
  Mail: "MAIL",
  GroupMail: "GROUP_MAIL",
  Ticket: "TICKET",
  Comment: "COMMENT",
  InlineComment: "INLINE_COMMENT",
  ConfluencePage: "CONFLUENCE_PAGE",
  ConfluenceBlogpost: "CONFLUENCE_BLOGPOST",
  SharepointPage: "SHAREPOINT_PAGE",
  SharepointList: "SHAREPOINT_LIST",
  SharepointListItem: "SHAREPOINT_LIST_ITEM",
  SharepointDocumentLibrary: "SHAREPOINT_DOCUMENT_LIBRARY",
  Link: "LINK",
  Project: "PROJECT",
  PullRequest: "PULL_REQUEST",
  Meeting: "MEETING",
  Product: "PRODUCT",
  Deal: "DEAL",
  Case: "CASE",
  Task: "TASK",
  Artifact: "ARTIFACT",
  CodeFile: "CODE_FILE",
  SqlTable: "SQL_TABLE",
  SqlView: "SQL_VIEW",
  Others: "OTHERS",
} as const;
export type RecordTypeEnum = (typeof RecordTypeEnum)[keyof typeof RecordTypeEnum] | (string & {});

export const recordTypeEnumSchema: EnumSchema<RecordTypeEnum> = s.enumOf<RecordTypeEnum>(RecordTypeEnum);
