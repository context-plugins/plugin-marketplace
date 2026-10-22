import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of this datasource. It is an important signal for relevance and must be specified and
 * cannot be UNCATEGORIZED. Please refer to
 * [this](https://developers.glean.com/docs/indexing_api_datasource_category/) for more details.
 */
export const DatasourceCategory = {
  Uncategorized: "UNCATEGORIZED",
  Tickets: "TICKETS",
  Crm: "CRM",
  PublishedContent: "PUBLISHED_CONTENT",
  CollaborativeContent: "COLLABORATIVE_CONTENT",
  QuestionAnswer: "QUESTION_ANSWER",
  Messaging: "MESSAGING",
  CodeRepository: "CODE_REPOSITORY",
  ChangeManagement: "CHANGE_MANAGEMENT",
  People: "PEOPLE",
  Email: "EMAIL",
  Sso: "SSO",
  Ats: "ATS",
  KnowledgeHub: "KNOWLEDGE_HUB",
  ExternalShortcut: "EXTERNAL_SHORTCUT",
  Entity: "ENTITY",
  Calendar: "CALENDAR",
  Agents: "AGENTS",
  AiConversation: "AI_CONVERSATION",
  AiArtifact: "AI_ARTIFACT",
} as const;
export type DatasourceCategory = (typeof DatasourceCategory)[keyof typeof DatasourceCategory] | (string & {});

export const datasourceCategorySchema: EnumSchema<DatasourceCategory> =
  s.enumOf<DatasourceCategory>(DatasourceCategory);
