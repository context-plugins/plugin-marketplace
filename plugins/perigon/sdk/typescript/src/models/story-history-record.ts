import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { keyPointSchema, type KeyPoint } from "./key-point.js";
import { questionSchema, type Question } from "./question.js";

/** History records returned for the requested page. */
export type StoryHistoryRecord = {
  /** Unique identifier of the story associated with this history record. */
  clusterId?: string | null;
  /** Date and time the history record was created, in ISO 8601 format. */
  createdAt?: string | null;
  /** Story name captured in this history record, when available. */
  name?: string | null;
  /**
   * Date and time the story refresh that produced this record was triggered, in ISO 8601 format.
   */
  triggeredAt?: string | null;
  /** Story summary captured in this history record. */
  summary?: string | null;
  /** Short story summary captured in this history record, when available. */
  shortSummary?: string | null;
  /** Description of changes from the previous story version, when available. */
  changelog?: string | null;
  /** Key points captured for this version of the story. */
  keyPoints?: KeyPoint[] | null;
  /** Questions and answers generated for this version of the story. */
  questions?: Question[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyHistoryRecordSchema: Schema<StoryHistoryRecord> = s.object<StoryHistoryRecord>(
  {
    clusterId: s.optionalNullable(s.string()),
    createdAt: s.optionalNullable(s.string()),
    name: s.optionalNullable(s.string()),
    triggeredAt: s.optionalNullable(s.string()),
    summary: s.optionalNullable(s.string()),
    shortSummary: s.optionalNullable(s.string()),
    changelog: s.optionalNullable(s.string()),
    keyPoints: s.optionalNullable(s.array(s.lazy(() => keyPointSchema))),
    questions: s.optionalNullable(s.array(s.lazy(() => questionSchema))),
  },
  { additionalProperties: s.json() },
);
