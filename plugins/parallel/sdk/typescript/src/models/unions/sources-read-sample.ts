import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** A sample of URLs of sources read in processing the task. */
export type SourcesReadSample = string[];

export const sourcesReadSampleSchema: Schema<SourcesReadSample> = s.of<SourcesReadSample>(
  s.union([s.array(s.string())]),
);
