import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { radarCollectionSchema, type RadarCollection } from "./radar-collection.js";
import { radarEvidenceSchema, type RadarEvidence } from "./radar-evidence.js";
import { radarSentimentSchema, type RadarSentiment } from "./radar-sentiment.js";
import { anomalyReasonSchema, type AnomalyReason } from "./unions/anomaly-reason.js";
import { eventContextSchema, type EventContext } from "./unions/event-context.js";
import { market1Schema, type Market1 } from "./unions/market1.js";
import { nameSchema, type Name } from "./unions/name.js";
import { newsZSchema, type NewsZ } from "./unions/news-z.js";
import { sectorSchema, type Sector } from "./unions/sector.js";
import { sentDeltaSchema, type SentDelta } from "./unions/sent-delta.js";
import { storiesExpectedSchema, type StoriesExpected } from "./unions/stories-expected.js";
import { tailProbabilitySchema, type TailProbability } from "./unions/tail-probability.js";

export type RadarReading = {
  ticker: string;
  sector: Sector;
  market: Market1;
  marketExposureBaseline: number;
  marketExposureCurrent: number;
  collection: RadarCollection;
  stories: number;
  articles: number;
  outlets: number;
  modelStories: number;
  modelOutlets: number;
  baselineStories: number;
  baselineActiveDays: number;
  storiesPerWindowUnadjusted: number;
  storiesExpected: StoriesExpected;
  tailProbability: TailProbability;
  newsZ: NewsZ;
  anomalyReason: AnomalyReason;
  candidateNewsSpike: boolean;
  sent: RadarSentiment;
  sentPrev: RadarSentiment;
  sentDelta: SentDelta;
  evidenceUids: string[];
  name: Name;
  evidence: RadarEvidence[];
  eventContext?: EventContext;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const radarReadingSchema: Schema<RadarReading> = s.object<RadarReading>(
  {
    ticker: s.string(),
    sector: sectorSchema,
    market: market1Schema,
    marketExposureBaseline: s.int(),
    marketExposureCurrent: s.int(),
    collection: radarCollectionSchema,
    stories: s.int(),
    articles: s.int(),
    outlets: s.int(),
    modelStories: s.int(),
    modelOutlets: s.int(),
    baselineStories: s.int(),
    baselineActiveDays: s.int(),
    storiesPerWindowUnadjusted: s.float64(),
    storiesExpected: storiesExpectedSchema,
    tailProbability: tailProbabilitySchema,
    newsZ: newsZSchema,
    anomalyReason: anomalyReasonSchema,
    candidateNewsSpike: s.boolean(),
    sent: radarSentimentSchema,
    sentPrev: radarSentimentSchema,
    sentDelta: sentDeltaSchema,
    evidenceUids: s.array(s.string()),
    name: nameSchema,
    evidence: s.array(s.lazy(() => radarEvidenceSchema)),
    eventContext: s.optional(s.lazy(() => eventContextSchema)),
    _keysMap: {
      marketExposureBaseline: "market_exposure_baseline",
      marketExposureCurrent: "market_exposure_current",
      modelStories: "model_stories",
      modelOutlets: "model_outlets",
      baselineStories: "baseline_stories",
      baselineActiveDays: "baseline_active_days",
      storiesPerWindowUnadjusted: "stories_per_window_unadjusted",
      storiesExpected: "stories_expected",
      tailProbability: "tail_probability",
      newsZ: "news_z",
      anomalyReason: "anomaly_reason",
      candidateNewsSpike: "candidate_news_spike",
      sentPrev: "sent_prev",
      sentDelta: "sent_delta",
      evidenceUids: "evidence_uids",
      eventContext: "event_context",
    },
  },
  { additionalProperties: s.json() },
);
