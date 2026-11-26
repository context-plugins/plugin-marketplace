import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { summaryStateSchema, type SummaryState } from "./summary-state.js";

/**
 * A story in a list (`/api/stories/top/`, `/api/stories/`): the summary's title and lead, the
 * story's importance, breadth and timing.
 */
export type StoryCard = {
  /**
   * Permanent story key — the `uid` of the story's first root article; the same value article rows
   * carry in their `story_id`. Opens `/api/stories/{story_id}/`.
   */
  storyId: string;
  /**
   * The summary's headline, written by AlphAI from the articles. In `preparing` state, the lead
   * article's own headline.
   */
  title: string;
  /**
   * One paragraph: what happened, with the figures. In `preparing` state, the lead article's
   * collector summary.
   */
  summary: string;
  /**
   * How much the event matters, on the feed's 1-10 relevance scale: the median of each publisher's
   * best-scored article on the event, rounded down — so one outlet's 9 does not lift a story every
   * other outlet scored 7. Stories below 7 are not listed and carry no summary.
   */
  importance: number;
  /** The feed category of the story's root article (same 14 values as `enrichment.category`). */
  category: string;
  /** Active tickers the story's articles are tagged with. Macro stories carry an empty list. */
  tickers: string[];
  /** Distinct publishers (source domains) covering the story — always 2 or more. */
  publishers: number;
  /** Articles in the story that the feed shows (`relevance_score >= 4`), reprints included. */
  materials: number;
  /** Publication time of the story's earliest article. */
  firstPublishedAt: Date | null;
  /** Publication time of the story's latest article; `/api/stories/` is ordered by it. */
  lastMaterialAt: Date | null;
  /**
   * When the story's key facts last changed — a rewrite that only reworded the summary does not
   * move it. The freshness Top stories rank by.
   */
  updatedAt: Date | null;
  /**
   * `published`: the summary covers every article the story had when it was written. `stale`:
   * articles joined since; the rewrite is queued. `preparing`: no summary yet — the texts are the
   * lead article's own.
   */
  summaryState: SummaryState;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storyCardProperties: s.Shape<StoryCard> = {
  storyId: s.string(),
  title: s.string(),
  summary: s.string(),
  importance: s.int(),
  category: s.string(),
  tickers: s.array(s.string()),
  publishers: s.int(),
  materials: s.int(),
  firstPublishedAt: s.nullable(s.dateTime()),
  lastMaterialAt: s.nullable(s.dateTime()),
  updatedAt: s.nullable(s.dateTime()),
  summaryState: summaryStateSchema,
  _keysMap: {
    storyId: "story_id",
    firstPublishedAt: "first_published_at",
    lastMaterialAt: "last_material_at",
    updatedAt: "updated_at",
    summaryState: "summary_state",
  },
};

export const storyCardInternalSchema: Schema<StoryCard> = s.object<StoryCard>(storyCardProperties, {
  additionalProperties: s.json(),
});

export const storyCardSchema: Schema<StoryCard> = s.lazySchema(() =>
  s.object<StoryCard>(
    {
      ...storyCardProperties,
      importance: s.int().check(s.gte(1), s.lte(10)),
    },
    { additionalProperties: s.json() },
  ),
);
