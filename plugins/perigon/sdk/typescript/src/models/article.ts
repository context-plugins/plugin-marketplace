import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryHolderSchema, type CategoryHolder } from "./category-holder.js";
import { categoryWithScoreHolderSchema, type CategoryWithScoreHolder } from "./category-with-score-holder.js";
import { companyHolderSchema, type CompanyHolder } from "./company-holder.js";
import { entityHolderSchema, type EntityHolder } from "./entity-holder.js";
import { eventTypeHolderSchema, type EventTypeHolder } from "./event-type-holder.js";
import { idNameHolderSchema, type IdNameHolder } from "./id-name-holder.js";
import { journalistSchema, type Journalist } from "./journalist.js";
import { keywordHolderSchema, type KeywordHolder } from "./keyword-holder.js";
import { labelHolderSchema, type LabelHolder } from "./label-holder.js";
import { locationHolderSchema, type LocationHolder } from "./location-holder.js";
import { newsClusterSchema, type NewsCluster } from "./news-cluster.js";
import { personHolderSchema, type PersonHolder } from "./person-holder.js";
import { placeSchema, type Place } from "./place.js";
import { sentimentHolderSchema, type SentimentHolder } from "./sentiment-holder.js";
import { sourceHolderSchema, type SourceHolder } from "./source-holder.js";
import { topicHolderSchema, type TopicHolder } from "./topic-holder.js";
import { vectorDataSchema, type VectorData } from "./vector-data.js";

export type Article = {
  /** Canonical URL of the article. */
  url?: string | null;
  /** Author byline as published by the source. */
  authorsByline?: string | null;
  /** Unique Perigon identifier for the article. */
  articleId?: string | null;
  /** Identifier of the story cluster containing the article, when assigned. */
  clusterId?: string | null;
  source?: SourceHolder;
  /** Primary image URL associated with the article. */
  imageUrl?: string | null;
  /** Two-character country code associated with the article. */
  country?: string | null;
  /** ISO 639 two-letter language code for the article. */
  language?: string | null;
  /** Date and time the article was published, in ISO 8601 format. */
  pubDate?: string | null;
  /** Date and time the article was added to Perigon, in ISO 8601 format. */
  addDate?: string | null;
  /** Date and time the article was last refreshed by Perigon, in ISO 8601 format. */
  refreshDate?: string | null;
  /** Search relevance score for the article, when applicable. */
  score?: number | null;
  /** Article headline. */
  title?: string | null;
  /** Article description or publisher-provided excerpt. */
  description?: string | null;
  /** Full article body available to Perigon. */
  content?: string | null;
  /** Word count of the English article content, when available. */
  enContentWordCount?: number | null;
  /** Primary medium type, such as Article or Video. */
  medium?: string | null;
  /** URLs linked from the article content. */
  links?: string[] | null;
  /** Editorial labels assigned to the article. */
  labels?: LabelHolder[] | null;
  /** Event types detected in the article. */
  eventTypes?: EventTypeHolder[] | null;
  /** Known journalist records matched to the article byline. */
  matchedAuthors?: IdNameHolder[] | null;
  /** Claim identified in fact-check content, when applicable. */
  claim?: string | null;
  /** Verdict identified in fact-check content, when applicable. */
  verdict?: string | null;
  /** Keywords extracted from the article with their relevance weights. */
  keywords?: KeywordHolder[] | null;
  /** Topics assigned to the article. */
  topics?: TopicHolder[] | null;
  /** Broad content categories assigned to the article. */
  categories?: CategoryHolder[] | null;
  /** Google Content Categories assigned to the article with confidence scores. */
  taxonomies?: CategoryWithScoreHolder[] | null;
  /** Named entities extracted from the article. */
  entities?: EntityHolder[] | null;
  /** Companies identified in the article. */
  companies?: CompanyHolder[] | null;
  sentiment?: SentimentHolder;
  /** Generated summary of the article, when available. */
  summary?: string | null;
  /** Short generated summary of the article, when available. */
  shortSummary?: string | null;
  /** Translated article content, when available. */
  translation?: string | null;
  /** English translation of the article title, when available. */
  translatedTitle?: string | null;
  /** English translation of the article description, when available. */
  translatedDescription?: string | null;
  /** English translation of the article summary, when available. */
  translatedSummary?: string | null;
  /** Locations identified as central to the article. */
  locations?: LocationHolder[] | null;
  /** Whether the article is a reprint of previously published content. */
  reprint?: boolean | null;
  /** Identifier grouping the original article with its known reprints. */
  reprintGroupId?: string | null;
  /** Structured geographic places extracted from the article. */
  places?: Place[] | null;
  /** Known people identified in the article. */
  people?: PersonHolder[] | null;
  cluster?: NewsCluster;
  /** Expanded journalist details, when requested and available. */
  journalists?: Journalist[] | null;
  /** Matched text fragments grouped by article field. */
  highlights?: Record<string, unknown> | null;
  /** Vector embeddings associated with the article, when requested. */
  vectors?: VectorData[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleSchema: Schema<Article> = s.object<Article>(
  {
    url: s.optionalNullable(s.string()),
    authorsByline: s.optionalNullable(s.string()),
    articleId: s.optionalNullable(s.string()),
    clusterId: s.optionalNullable(s.string()),
    source: s.optional(s.lazy(() => sourceHolderSchema)),
    imageUrl: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    language: s.optionalNullable(s.string()),
    pubDate: s.optionalNullable(s.string()),
    addDate: s.optionalNullable(s.string()),
    refreshDate: s.optionalNullable(s.string()),
    score: s.optionalNullable(s.float64()),
    title: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    content: s.optionalNullable(s.string()),
    enContentWordCount: s.optionalNullable(s.int()),
    medium: s.optionalNullable(s.string()),
    links: s.optionalNullable(s.array(s.string())),
    labels: s.optionalNullable(s.array(s.lazy(() => labelHolderSchema))),
    eventTypes: s.optionalNullable(s.array(s.lazy(() => eventTypeHolderSchema))),
    matchedAuthors: s.optionalNullable(s.array(s.lazy(() => idNameHolderSchema))),
    claim: s.optionalNullable(s.string()),
    verdict: s.optionalNullable(s.string()),
    keywords: s.optionalNullable(s.array(s.lazy(() => keywordHolderSchema))),
    topics: s.optionalNullable(s.array(s.lazy(() => topicHolderSchema))),
    categories: s.optionalNullable(s.array(s.lazy(() => categoryHolderSchema))),
    taxonomies: s.optionalNullable(s.array(s.lazy(() => categoryWithScoreHolderSchema))),
    entities: s.optionalNullable(s.array(s.lazy(() => entityHolderSchema))),
    companies: s.optionalNullable(s.array(s.lazy(() => companyHolderSchema))),
    sentiment: s.optional(s.lazy(() => sentimentHolderSchema)),
    summary: s.optionalNullable(s.string()),
    shortSummary: s.optionalNullable(s.string()),
    translation: s.optionalNullable(s.string()),
    translatedTitle: s.optionalNullable(s.string()),
    translatedDescription: s.optionalNullable(s.string()),
    translatedSummary: s.optionalNullable(s.string()),
    locations: s.optionalNullable(s.array(s.lazy(() => locationHolderSchema))),
    reprint: s.optionalNullable(s.boolean()),
    reprintGroupId: s.optionalNullable(s.string()),
    places: s.optionalNullable(s.array(s.lazy(() => placeSchema))),
    people: s.optionalNullable(s.array(s.lazy(() => personHolderSchema))),
    cluster: s.optional(s.lazy(() => newsClusterSchema)),
    journalists: s.optionalNullable(s.array(s.lazy(() => journalistSchema))),
    highlights: s.optionalNullable(s.record(s.string(), s.unknown())),
    vectors: s.optionalNullable(s.array(s.lazy(() => vectorDataSchema))),
  },
  { additionalProperties: s.json() },
);
