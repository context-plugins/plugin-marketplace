import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { numSourcesConsideredSchema, type NumSourcesConsidered } from "./unions/num-sources-considered.js";
import { numSourcesReadSchema, type NumSourcesRead } from "./unions/num-sources-read.js";
import { sourcesReadSampleSchema, type SourcesReadSample } from "./unions/sources-read-sample.js";

/** Source stats for a task run. */
export type TaskRunSourceStats = {
  /** Number of sources considered in processing the task. */
  numSourcesConsidered: NumSourcesConsidered;
  /** Number of sources read in processing the task. */
  numSourcesRead: NumSourcesRead;
  /** A sample of URLs of sources read in processing the task. */
  sourcesReadSample: SourcesReadSample;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskRunSourceStatsSchema: Schema<TaskRunSourceStats> = s.object<TaskRunSourceStats>(
  {
    numSourcesConsidered: numSourcesConsideredSchema,
    numSourcesRead: numSourcesReadSchema,
    sourcesReadSample: sourcesReadSampleSchema,
    _keysMap: {
      numSourcesConsidered: "num_sources_considered",
      numSourcesRead: "num_sources_read",
      sourcesReadSample: "sources_read_sample",
    },
  },
  { additionalProperties: s.json() },
);
