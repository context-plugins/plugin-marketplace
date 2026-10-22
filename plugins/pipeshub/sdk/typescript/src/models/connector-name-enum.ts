import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Name of the source connector. Mirrors the values of the backend `Connectors` enum
 * (`backend/python/app/config/constants/arangodb.py`); records store the enum value (e.g. Google
 * Drive is `DRIVE`, SharePoint Online is `SHAREPOINT ONLINE`), not the enum member name.
 */
export const ConnectorNameEnum = {
  Drive: "DRIVE",
  DriveWorkspace: "DRIVE WORKSPACE",
  Gmail: "GMAIL",
  GmailWorkspace: "GMAIL WORKSPACE",
  Calendar: "CALENDAR",
  Onedrive: "ONEDRIVE",
  SharepointOnline: "SHAREPOINT ONLINE",
  Outlook: "OUTLOOK",
  OutlookPersonal: "OUTLOOK PERSONAL",
  OutlookCalendar: "OUTLOOK CALENDAR",
  MicrosoftTeams: "MICROSOFT TEAMS",
  Notion: "NOTION",
  NotionPersonal: "NOTION PERSONAL",
  Slack: "SLACK",
  SlackWorkspace: "SLACK WORKSPACE",
  Kb: "KB",
  Confluence: "CONFLUENCE",
  ConfluenceDataCenter: "CONFLUENCE DATA CENTER",
  ConfluenceDataCenterPersonal: "CONFLUENCE DATA CENTER PERSONAL",
  Jira: "JIRA",
  JiraPersonal: "JIRA PERSONAL",
  JiraDataCenter: "JIRA DATA CENTER",
  JiraDataCenterPersonal: "JIRA DATA CENTER PERSONAL",
  Box: "BOX",
  Nextcloud: "NEXTCLOUD",
  Dropbox: "DROPBOX",
  DropboxPersonal: "DROPBOX PERSONAL",
  Web: "WEB",
  Bookstack: "BOOKSTACK",
  DrupalWiki: "DRUPAL WIKI",
  Github: "GITHUB",
  GithubTeams: "GITHUB TEAMS",
  Servicenow: "SERVICENOW",
  Salesforce: "SALESFORCE",
  S3: "S3",
  Minio: "MINIO",
  Gcs: "GCS",
  AzureBlob: "AZURE BLOB",
  AzureFiles: "AZURE FILES",
  Linear: "LINEAR",
  Zammad: "ZAMMAD",
  Zendesk: "ZENDESK",
  Zoom: "ZOOM",
  Gitlab: "GITLAB",
  GitlabPersonal: "GITLAB PERSONAL",
  Snowflake: "SNOWFLAKE",
  Postgresql: "POSTGRESQL",
  Mariadb: "MARIADB",
  Unknown: "UNKNOWN",
  Rss: "RSS",
  LocalFs: "LOCAL_FS",
  CodingSandbox: "CODING_SANDBOX",
  DatabaseSandbox: "DATABASE_SANDBOX",
  ImageGeneration: "IMAGE_GENERATION",
  Attachments: "ATTACHMENTS",
} as const;
export type ConnectorNameEnum = (typeof ConnectorNameEnum)[keyof typeof ConnectorNameEnum] | (string & {});

export const connectorNameEnumSchema: EnumSchema<ConnectorNameEnum> =
  s.enumOf<ConnectorNameEnum>(ConnectorNameEnum);
