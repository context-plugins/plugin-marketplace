import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { briefSignalDtoSchema, type BriefSignalDto } from "./brief-signal-dto.js";
import { actionability1Schema, type Actionability1 } from "./unions/actionability1.js";
import { informationNoveltySchema, type InformationNovelty } from "./unions/information-novelty.js";

export type BriefEventDto = {
  uid: string;
  storyId: string;
  title: string;
  summary: string;
  url: string;
  articleUrl: string;
  sourceDomain: string;
  sourceType: string;
  timePublished: Date;
  matchedTickers: string[];
  category: string;
  relevanceScore: number;
  informationNovelty?: InformationNovelty;
  actionability?: Actionability1;
  signals?: BriefSignalDto[];
  /** @default false */
  earningsAvailable?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const briefEventDtoSchema: Schema<BriefEventDto> = s.object<BriefEventDto>(
  {
    uid: s.string(),
    storyId: s.string(),
    title: s.string(),
    summary: s.string(),
    url: s.string(),
    articleUrl: s.string(),
    sourceDomain: s.string(),
    sourceType: s.string(),
    timePublished: s.dateTime(),
    matchedTickers: s.array(s.string()),
    category: s.string(),
    relevanceScore: s.int(),
    informationNovelty: s.optional(s.lazy(() => informationNoveltySchema)),
    actionability: s.optional(s.lazy(() => actionability1Schema)),
    signals: s.optional(s.array(s.lazy(() => briefSignalDtoSchema))),
    earningsAvailable: s.defaulted(s.boolean(), false),
    _keysMap: {
      storyId: "story_id",
      articleUrl: "article_url",
      sourceDomain: "source_domain",
      sourceType: "source_type",
      timePublished: "time_published",
      matchedTickers: "matched_tickers",
      relevanceScore: "relevance_score",
      informationNovelty: "information_novelty",
      earningsAvailable: "earnings_available",
    },
  },
  { additionalProperties: s.json() },
);
