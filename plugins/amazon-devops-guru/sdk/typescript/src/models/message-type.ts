import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MessageType = {
  NewInsight: "NEW_INSIGHT",
  ClosedInsight: "CLOSED_INSIGHT",
  NewAssociation: "NEW_ASSOCIATION",
  SeverityUpgraded: "SEVERITY_UPGRADED",
  NewRecommendation: "NEW_RECOMMENDATION",
} as const;
export type MessageType = (typeof MessageType)[keyof typeof MessageType] | (string & {});

export const messageTypeSchema: EnumSchema<MessageType> = s.enumOf<MessageType>(MessageType);
