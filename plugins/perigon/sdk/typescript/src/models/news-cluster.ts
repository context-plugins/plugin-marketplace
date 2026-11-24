import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { articleSchema, type Article } from "./article.js";
import { categoryHolderSchema, type CategoryHolder } from "./category-holder.js";
import { companyCountSchema, type CompanyCount } from "./company-count.js";
import { companyHolderSchema, type CompanyHolder } from "./company-holder.js";
import { keyPointSchema, type KeyPoint } from "./key-point.js";
import { locationCountSchema, type LocationCount } from "./location-count.js";
import { locationHolderSchema, type LocationHolder } from "./location-holder.js";
import { personCountSchema, type PersonCount } from "./person-count.js";
import { personHolderSchema, type PersonHolder } from "./person-holder.js";
import { questionSchema, type Question } from "./question.js";
import { recordStatHolderSchema, type RecordStatHolder } from "./record-stat-holder.js";
import { sentimentHolderSchema, type SentimentHolder } from "./sentiment-holder.js";
import { sourceHolderSchema, type SourceHolder } from "./source-holder.js";
import { topicHolderSchema, type TopicHolder } from "./topic-holder.js";

/** Expanded story cluster details, when requested and available. */
export type NewsCluster = {
  /** Date and time the story was created, in ISO 8601 format. */
  createdAt?: string | null;
  /** Date and time the story was last updated, in ISO 8601 format. */
  updatedAt?: string | null;
  /** Date and time the story became initialized and visible, in ISO 8601 format. */
  initializedAt?: string | null;
  /** Unique identifier for the story cluster. */
  id?: string | null;
  /** Identifier of the original story when this story is a duplicate. */
  duplicateOf?: string | null;
  /** URL-safe identifier for the story. */
  slug?: string | null;
  /** Generated story title. */
  name?: string | null;
  /** Generated story summary. */
  summary?: string | null;
  /** Short generated story summary, when available. */
  shortSummary?: string | null;
  /** Article IDs supporting the story summary. */
  summaryReferences?: string[] | null;
  imageSource?: SourceHolder;
  /** Primary image URL selected for the story. */
  imageUrl?: string | null;
  /** Key facts and developments identified in the story. */
  keyPoints?: KeyPoint[] | null;
  /** Questions and answers generated from the story content. */
  questions?: Question[] | null;
  /** Distinct publisher domains represented in the story. */
  uniqueSources?: string[] | null;
  /** Representative articles selected for the story. */
  selectedArticles?: Article[] | null;
  sentiment?: SentimentHolder;
  /** Number of unique articles in the story. */
  uniqueCount?: number | null;
  /** Number of reprinted articles in the story. */
  reprintCount?: number | null;
  /** Total article count including reprints. */
  totalCount?: number | null;
  /** Countries associated with the story and their article counts. */
  countries?: RecordStatHolder[] | null;
  /** Countries most strongly associated with the story. */
  topCountries?: string[] | null;
  /** Topics associated with the story and their article counts. */
  topics?: RecordStatHolder[] | null;
  /** Topics most strongly associated with the story. */
  topTopics?: TopicHolder[] | null;
  /** Categories associated with the story and their article counts. */
  categories?: RecordStatHolder[] | null;
  /** Categories most strongly associated with the story. */
  topCategories?: CategoryHolder[] | null;
  /** Google Content Categories associated with the story and their article counts. */
  taxonomies?: RecordStatHolder[] | null;
  /** Google Content Categories most strongly associated with the story. */
  topTaxonomies?: CategoryHolder[] | null;
  /** People associated with the story and their article counts. */
  people?: PersonCount[] | null;
  /** People most strongly associated with the story. */
  topPeople?: PersonHolder[] | null;
  /** Companies associated with the story and their article counts. */
  companies?: CompanyCount[] | null;
  /** Companies most strongly associated with the story. */
  topCompanies?: CompanyHolder[] | null;
  /** Locations associated with the story and their article counts. */
  locations?: LocationCount[] | null;
  /** Locations most strongly associated with the story. */
  topLocations?: LocationHolder[] | null;
  /** Matched text fragments grouped by story field. */
  highlights?: Record<string, unknown> | null;
  /** Ratio of unique publisher domains to total articles in the story. */
  sourceDiversity?: number | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const newsClusterSchema: Schema<NewsCluster> = s.object<NewsCluster>(
  {
    createdAt: s.optionalNullable(s.string()),
    updatedAt: s.optionalNullable(s.string()),
    initializedAt: s.optionalNullable(s.string()),
    id: s.optionalNullable(s.string()),
    duplicateOf: s.optionalNullable(s.string()),
    slug: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    summary: s.optionalNullable(s.string()),
    shortSummary: s.optionalNullable(s.string()),
    summaryReferences: s.optionalNullable(s.array(s.string())),
    imageSource: s.optional(s.lazy(() => sourceHolderSchema)),
    imageUrl: s.optionalNullable(s.string()),
    keyPoints: s.optionalNullable(s.array(s.lazy(() => keyPointSchema))),
    questions: s.optionalNullable(s.array(s.lazy(() => questionSchema))),
    uniqueSources: s.optionalNullable(s.array(s.string())),
    selectedArticles: s.optionalNullable(s.array(s.lazy(() => articleSchema))),
    sentiment: s.optional(s.lazy(() => sentimentHolderSchema)),
    uniqueCount: s.optionalNullable(s.int()),
    reprintCount: s.optionalNullable(s.int()),
    totalCount: s.optionalNullable(s.int()),
    countries: s.optionalNullable(s.array(s.lazy(() => recordStatHolderSchema))),
    topCountries: s.optionalNullable(s.array(s.string())),
    topics: s.optionalNullable(s.array(s.lazy(() => recordStatHolderSchema))),
    topTopics: s.optionalNullable(s.array(s.lazy(() => topicHolderSchema))),
    categories: s.optionalNullable(s.array(s.lazy(() => recordStatHolderSchema))),
    topCategories: s.optionalNullable(s.array(s.lazy(() => categoryHolderSchema))),
    taxonomies: s.optionalNullable(s.array(s.lazy(() => recordStatHolderSchema))),
    topTaxonomies: s.optionalNullable(s.array(s.lazy(() => categoryHolderSchema))),
    people: s.optionalNullable(s.array(s.lazy(() => personCountSchema))),
    topPeople: s.optionalNullable(s.array(s.lazy(() => personHolderSchema))),
    companies: s.optionalNullable(s.array(s.lazy(() => companyCountSchema))),
    topCompanies: s.optionalNullable(s.array(s.lazy(() => companyHolderSchema))),
    locations: s.optionalNullable(s.array(s.lazy(() => locationCountSchema))),
    topLocations: s.optionalNullable(s.array(s.lazy(() => locationHolderSchema))),
    highlights: s.optionalNullable(s.record(s.string(), s.unknown())),
    sourceDiversity: s.optionalNullable(s.float64()),
  },
  { additionalProperties: s.json() },
);
