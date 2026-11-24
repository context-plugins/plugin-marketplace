import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  linkedinActivityIntentCompanyMentionSchema,
  type LinkedinActivityIntentCompanyMention,
} from "./linkedin-activity-intent-company-mention.js";
import {
  linkedinActivityIntentPersonSchema,
  type LinkedinActivityIntentPerson,
} from "./linkedin-activity-intent-person.js";
import {
  linkedinActivityIntentTopicSchema,
  type LinkedinActivityIntentTopic,
} from "./linkedin-activity-intent-topic.js";

export type LinkedinActivityIntentItem = {
  /** Lusha company ID this activity belongs to. */
  companyId?: number;
  /** Date the post was published. */
  activityPublicationDate?: string;
  /** Post classification. */
  signalCategory?: string;
  /** Detected Bombora topics and their category. */
  intentTopics?: LinkedinActivityIntentTopic[];
  /** A person referenced in a LinkedIn activity intent post (author or mention). */
  author?: LinkedinActivityIntentPerson;
  contactsMentioned?: LinkedinActivityIntentPerson[];
  companiesMentioned?: LinkedinActivityIntentCompanyMention[];
  /** URL of the source post. */
  activityUrl?: string;
  /** AI-generated summary. Never contains the raw post text. */
  activitySummary?: string | null;
  /** @default 0 */
  activityLikes?: number;
  /** @default 0 */
  activityComments?: number;
  /** @default 0 */
  activityShares?: number;
  activityType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkedinActivityIntentItemSchema: Schema<LinkedinActivityIntentItem> =
  s.object<LinkedinActivityIntentItem>(
    {
      companyId: s.optional(s.float64()),
      activityPublicationDate: s.optional(s.dateOnly()),
      signalCategory: s.optional(s.string()),
      intentTopics: s.optional(s.array(s.lazy(() => linkedinActivityIntentTopicSchema))),
      author: s.optional(s.lazy(() => linkedinActivityIntentPersonSchema)),
      contactsMentioned: s.optional(s.array(s.lazy(() => linkedinActivityIntentPersonSchema))),
      companiesMentioned: s.optional(s.array(s.lazy(() => linkedinActivityIntentCompanyMentionSchema))),
      activityUrl: s.optional(s.string()),
      activitySummary: s.optionalNullable(s.string()),
      activityLikes: s.defaulted(s.int(), 0),
      activityComments: s.defaulted(s.int(), 0),
      activityShares: s.defaulted(s.int(), 0),
      activityType: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
