import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyKeyFactSchema, type StoryKeyFact } from "./story-key-fact.js";
import { storyTickerTakeSchema, type StoryTickerTake } from "./story-ticker-take.js";
import { summaryStateSchema, type SummaryState } from "./summary-state.js";

/** The full story — a `StoryCard` plus the summary's body. */
export type Story = {
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
  /** Why the event matters to the market, one short paragraph. Empty in `preparing` state. */
  whyItMatters: string;
  /** Up to six facts, each attributed to the article it was read from. */
  keyFacts: StoryKeyFact[];
  /** The read per ticker — direction and a one-line note. */
  tickerTakes: StoryTickerTake[];
  /** What the articles leave open or disagree on. */
  uncertainties: string[];
  /**
   * Articles whose text the model read when writing the summary. Shown as "based on N of M sources"
   * next to `materials_at_build`.
   */
  basedOn: number;
  /** The story's visible article count when the summary was written. */
  materialsAtBuild: number;
  /** Articles that joined after the summary was written (non-zero only in `stale` state). */
  newMaterials: number;
  /** When the published summary was written; `null` in `preparing` state. */
  revisionGeneratedAt: Date | null;
  /** The model that wrote the published summary; empty in `preparing` state. */
  model: string;
  /**
   * Whether alphai.io lets search engines index this story's page (a published summary, `importance
   * >= 8` and at least five publishers). Informational — it says nothing about the API's own
   * access.
   */
  indexable: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const storyProperties: s.Shape<Story> = {
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
  whyItMatters: s.string(),
  keyFacts: s.array(s.lazy(() => storyKeyFactSchema)),
  tickerTakes: s.array(s.lazy(() => storyTickerTakeSchema)),
  uncertainties: s.array(s.string()),
  basedOn: s.int(),
  materialsAtBuild: s.int(),
  newMaterials: s.int(),
  revisionGeneratedAt: s.nullable(s.dateTime()),
  model: s.string(),
  indexable: s.boolean(),
  _keysMap: {
    storyId: "story_id",
    firstPublishedAt: "first_published_at",
    lastMaterialAt: "last_material_at",
    updatedAt: "updated_at",
    summaryState: "summary_state",
    whyItMatters: "why_it_matters",
    keyFacts: "key_facts",
    tickerTakes: "ticker_takes",
    basedOn: "based_on",
    materialsAtBuild: "materials_at_build",
    newMaterials: "new_materials",
    revisionGeneratedAt: "revision_generated_at",
  },
};

export const storyInternalSchema: Schema<Story> = s.object<Story>(storyProperties, {
  additionalProperties: s.json(),
});

export const storySchema: Schema<Story> = s.lazySchema(() =>
  s.object<Story>(
    {
      ...storyProperties,
      importance: s.int().check(s.gte(1), s.lte(10)),
      keyFacts: s.array(s.lazy(() => storyKeyFactSchema)).check(s.maxLength(6)),
    },
    { additionalProperties: s.json() },
  ),
);
