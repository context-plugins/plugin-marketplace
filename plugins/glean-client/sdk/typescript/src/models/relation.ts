import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How this document relates to the including entity. */
export const Relation = {
  Attachment: "ATTACHMENT",
  Canonical: "CANONICAL",
  Case: "CASE",
  Contact: "contact",
  Contact2: "CONTACT",
  ConversationMessages: "CONVERSATION_MESSAGES",
  Expert: "EXPERT",
  From: "FROM",
  Highlight: "HIGHLIGHT",
  Opportunity: "opportunity",
  Opportunity2: "OPPORTUNITY",
  Recent: "RECENT",
  Source: "SOURCE",
  Ticket: "TICKET",
  Transcript: "TRANSCRIPT",
  With: "WITH",
} as const;
export type Relation = (typeof Relation)[keyof typeof Relation] | (string & {});

export const relationSchema: EnumSchema<Relation> = s.enumOf<Relation>(Relation);
