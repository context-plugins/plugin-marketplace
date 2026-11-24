import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storyHistoryRecordSchema, type StoryHistoryRecord } from "./story-history-record.js";

/** Story history result */
export type StoryHistoryResult = {
  /** HTTP status code for the response. */
  status: number;
  /** Total number of matching history records. */
  numResults: number;
  /** History records returned for the requested page. */
  results: StoryHistoryRecord[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const storyHistoryResultSchema: Schema<StoryHistoryResult> = s.object<StoryHistoryResult>(
  {
    status: s.int(),
    numResults: s.int(),
    results: s.array(s.lazy(() => storyHistoryRecordSchema)),
  },
  { additionalProperties: s.json() },
);
