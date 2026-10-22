import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The name of method used to surface relevant data for a given calendar event. */
export const EventStrategyName = {
  CustomerCard: "customerCard",
  News: "news",
  Call: "call",
  Email: "email",
  MeetingNotes: "meetingNotes",
  LinkedIn: "linkedIn",
  RelevantDocuments: "relevantDocuments",
  ChatFollowUps: "chatFollowUps",
  Conversations: "conversations",
} as const;
export type EventStrategyName = (typeof EventStrategyName)[keyof typeof EventStrategyName] | (string & {});

export const eventStrategyNameSchema: EnumSchema<EventStrategyName> =
  s.enumOf<EventStrategyName>(EventStrategyName);
