import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The document category of this object type. */
export const DocCategory = {
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
export type DocCategory = (typeof DocCategory)[keyof typeof DocCategory] | (string & {});

export const docCategorySchema: EnumSchema<DocCategory> = s.enumOf<DocCategory>(DocCategory);
