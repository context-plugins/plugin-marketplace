import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { kindSchema, type Kind } from "./kind.js";

export type SearchResult = {
  title: string;
  link: string;
  snippet: string;
  content?: string;
  /**
   * When the page was published, as ISO 8601: `YYYY-MM-DD` when only the day is known (web search
   * engines), or `YYYY-MM-DDTHH:MM:SSZ` in UTC when the source carries a time (x, reddit, github,
   * arxiv, youtube, bilibili, wechat, news feeds). Omitted when the source exposes no date, so
   * treat it as optional per result.
   */
  publishedDate?: string;
  /**
   * What a `github` result is: a repository, an issue, a pull request, or a discussion. Only
   * present for `search_service: "github"`.
   */
  kind?: Kind;
  /** Stargazer count of a `github` repository result (`kind: "repo"`). */
  stars?: number;
  /**
   * Primary language of a `github` repository result (`kind: "repo"`). Omitted when GitHub reports
   * none.
   */
  language?: string;
  /**
   * Comment count on a `github` issue, pull request or discussion, or on a `hackernews` thread
   * (POST /news).
   */
  numComments?: number;
  /**
   * POST /news with `search_service: "hackernews"` only: the submitted article. `link` is the
   * Hacker News discussion thread; `story_url` is empty for Ask HN / Show HN text posts.
   */
  storyUrl?: string;
  /** POST /news with `search_service: "hackernews"` only: upvotes on the thread. */
  points?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const searchResultProperties: s.Shape<SearchResult> = {
  title: s.string(),
  link: s.string(),
  snippet: s.string(),
  content: s.optional(s.string()),
  publishedDate: s.optional(s.string()),
  kind: s.optional(s.lazy(() => kindSchema)),
  stars: s.optional(s.int()),
  language: s.optional(s.string()),
  numComments: s.optional(s.int()),
  storyUrl: s.optional(s.string()),
  points: s.optional(s.int()),
  _keysMap: {
    publishedDate: "published_date",
    numComments: "num_comments",
    storyUrl: "story_url",
  },
};

export const searchResultInternalSchema: Schema<SearchResult> = s.object<SearchResult>(
  searchResultProperties,
  { additionalProperties: s.json() },
);

export const searchResultSchema: Schema<SearchResult> = s.lazySchema(() =>
  s.object<SearchResult>(
    {
      ...searchResultProperties,
      link: s.string().check(s.url()),
      storyUrl: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
