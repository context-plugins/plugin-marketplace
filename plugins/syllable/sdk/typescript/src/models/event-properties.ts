import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const EventProperties = {
  Timestamp: "timestamp",
  SessionId: "session_id",
  ConversationId: "conversation_id",
  Source: "source",
  SourceId: "source_id",
  Category: "category",
  Type: "type",
  UserId: "user_id",
  Description: "description",
  Attributes: "attributes",
} as const;
export type EventProperties = (typeof EventProperties)[keyof typeof EventProperties] | (string & {});

export const eventPropertiesSchema: EnumSchema<EventProperties> = s.enumOf<EventProperties>(EventProperties);
