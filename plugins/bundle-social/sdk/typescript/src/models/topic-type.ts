import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TopicType = {
  Standard: "STANDARD",
  Event: "EVENT",
  Offer: "OFFER",
  Alert: "ALERT",
} as const;
export type TopicType = (typeof TopicType)[keyof typeof TopicType] | (string & {});

export const topicTypeSchema: EnumSchema<TopicType> = s.enumOf<TopicType>(TopicType);
