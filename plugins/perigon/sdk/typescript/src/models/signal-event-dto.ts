import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fillbotMetadataSchema, type FillbotMetadata } from "./fillbot-metadata.js";
import { fillbotStatusSchema, type FillbotStatus } from "./fillbot-status.js";
import { matchedEntityDataSchema, type MatchedEntityData } from "./matched-entity-data.js";
import { signalArticlePartialDtoSchema, type SignalArticlePartialDto } from "./signal-article-partial-dto.js";
import { xPostSchema, type XPost } from "./xpost.js";

/** Events returned for the requested page. */
export type SignalEventDto = {
  /** Unique identifier for the monitor event. */
  uuid?: string | null;
  /** Date and time the event was created, in ISO 8601 format. */
  createdAt?: Date | null;
  /** Date and time the event was last updated, in ISO 8601 format. */
  updatedAt?: Date | null;
  /** Date and time the detected event occurred, in ISO 8601 format when available. */
  eventDate?: Date | null;
  /** Detected event category produced by the monitor. */
  eventType?: string | null;
  /** Structured event fields defined by the monitor's data schema. */
  data?: Record<string, unknown> | null;
  /** Perigon article IDs related to the event. */
  relatedArticleIds?: string[] | null;
  /** Article details keyed by article ID for articles related to the event. */
  articles?: Record<string, SignalArticlePartialDto> | null;
  /** Entities matched in the content that produced the event. */
  entities?: MatchedEntityData[] | null;
  /** AI-generated summary of the event, when available. */
  summary?: string | null;
  fillbotMetadata?: FillbotMetadata;
  /** Date and time enrichment is scheduled to run, in ISO 8601 format. */
  fillbotScheduleAt?: Date | null;
  /** Date and time enrichment last ran, in ISO 8601 format. */
  fillbotLastRunAt?: Date | null;
  /** Current event enrichment status. Accepts PENDING, IN_PROGRESS, COMPLETE, or EXHAUSTED. */
  fillbotStatus?: FillbotStatus | null;
  duplicate?: boolean | null;
  xPosts?: XPost[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalEventDtoSchema: Schema<SignalEventDto> = s.object<SignalEventDto>(
  {
    uuid: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.dateTime()),
    updatedAt: s.optionalNullable(s.dateTime()),
    eventDate: s.optionalNullable(s.dateTime()),
    eventType: s.optionalNullable(s.string()),
    data: s.optionalNullable(s.record(s.string(), s.unknown())),
    relatedArticleIds: s.optionalNullable(s.array(s.string())),
    articles: s.optionalNullable(
      s.record(
        s.string(),
        s.lazy(() => signalArticlePartialDtoSchema),
      ),
    ),
    entities: s.optionalNullable(s.array(s.lazy(() => matchedEntityDataSchema))),
    summary: s.optionalNullable(s.string()),
    fillbotMetadata: s.optional(s.lazy(() => fillbotMetadataSchema)),
    fillbotScheduleAt: s.optionalNullable(s.dateTime()),
    fillbotLastRunAt: s.optionalNullable(s.dateTime()),
    fillbotStatus: s.optionalNullable(s.lazy(() => fillbotStatusSchema)),
    duplicate: s.optionalNullable(s.boolean()),
    xPosts: s.optionalNullable(s.array(s.lazy(() => xPostSchema))),
  },
  { additionalProperties: s.json() },
);
