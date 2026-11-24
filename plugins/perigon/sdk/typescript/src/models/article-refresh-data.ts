import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companyHolderSchema, type CompanyHolder } from "./company-holder.js";
import { entityHolderSchema, type EntityHolder } from "./entity-holder.js";
import { idNameHolderSchema, type IdNameHolder } from "./id-name-holder.js";
import { personHolderSchema, type PersonHolder } from "./person-holder.js";
import { sourceHolderSchema, type SourceHolder } from "./source-holder.js";

export type ArticleRefreshData = {
  articleId?: string | null;
  url?: string | null;
  authorsByline?: string | null;
  imageUrl?: string | null;
  country?: string | null;
  language?: string | null;
  pubDate?: string | null;
  title?: string | null;
  description?: string | null;
  content?: string | null;
  source?: SourceHolder;
  links?: string[] | null;
  medium?: string | null;
  claim?: string | null;
  verdict?: string | null;
  translation?: string | null;
  translatedTitle?: string | null;
  translatedDescription?: string | null;
  entities?: EntityHolder[] | null;
  people?: PersonHolder[] | null;
  companies?: CompanyHolder[] | null;
  matchedAuthors?: IdNameHolder[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const articleRefreshDataSchema: Schema<ArticleRefreshData> = s.object<ArticleRefreshData>(
  {
    articleId: s.optionalNullable(s.string()),
    url: s.optionalNullable(s.string()),
    authorsByline: s.optionalNullable(s.string()),
    imageUrl: s.optionalNullable(s.string()),
    country: s.optionalNullable(s.string()),
    language: s.optionalNullable(s.string()),
    pubDate: s.optionalNullable(s.string()),
    title: s.optionalNullable(s.string()),
    description: s.optionalNullable(s.string()),
    content: s.optionalNullable(s.string()),
    source: s.optional(s.lazy(() => sourceHolderSchema)),
    links: s.optionalNullable(s.array(s.string())),
    medium: s.optionalNullable(s.string()),
    claim: s.optionalNullable(s.string()),
    verdict: s.optionalNullable(s.string()),
    translation: s.optionalNullable(s.string()),
    translatedTitle: s.optionalNullable(s.string()),
    translatedDescription: s.optionalNullable(s.string()),
    entities: s.optionalNullable(s.array(s.lazy(() => entityHolderSchema))),
    people: s.optionalNullable(s.array(s.lazy(() => personHolderSchema))),
    companies: s.optionalNullable(s.array(s.lazy(() => companyHolderSchema))),
    matchedAuthors: s.optionalNullable(s.array(s.lazy(() => idNameHolderSchema))),
  },
  { additionalProperties: s.json() },
);
