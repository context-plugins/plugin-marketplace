import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  transcriptDataInternalSchema,
  transcriptDataSchema,
  type TranscriptData,
} from "../transcript-data.js";
import { transcriptJobDataSchema, type TranscriptJobData } from "../transcript-job-data.js";

/**
 * Either a transcript_job placeholder, or a transcript block with null text/segments, depending on
 * how the request escalated.
 */
export type Data1 = TranscriptJobData | TranscriptData;

export const data1InternalSchema: Schema<Data1> = s.of<Data1>(
  s.union([s.lazy(() => transcriptJobDataSchema), s.lazy(() => transcriptDataInternalSchema)]),
);

export const data1Schema: Schema<Data1> = s.lazySchema(() =>
  s.of<Data1>(s.union([s.lazy(() => transcriptJobDataSchema), s.lazy(() => transcriptDataSchema)])),
);
