import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { environmentSchema, type Environment } from "./environment.js";
import {
  insightGroupCollectionScoreMetadataSchema,
  type InsightGroupCollectionScoreMetadata,
} from "./insight-group-collection-score-metadata.js";
import { insightGroupScoresSchema, type InsightGroupScores } from "./insight-group-scores.js";

export type InsightGroup = {
  environment?: Environment;
  scores?: InsightGroupScores;
  scoreMetadata?: InsightGroupCollectionScoreMetadata;
  /** The insight group key */
  key: string;
  /** The insight group name */
  name: string;
  /** The project key */
  projectKey: string;
  /** The environment key */
  environmentKey: string;
  /** The application keys */
  applicationKeys?: string[];
  createdAt: number;
};

export const insightGroupSchema: Schema<InsightGroup> = s.object<InsightGroup>({
  environment: s.optional(s.lazy(() => environmentSchema)),
  scores: s.optional(s.lazy(() => insightGroupScoresSchema)),
  scoreMetadata: s.optional(s.lazy(() => insightGroupCollectionScoreMetadataSchema)),
  key: s.string(),
  name: s.string(),
  projectKey: s.string(),
  environmentKey: s.string(),
  applicationKeys: s.optional(s.array(s.string())),
  createdAt: s.int(),
});
