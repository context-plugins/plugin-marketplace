import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Placeholder data block on a 202: identifies what is being transcribed while the job runs. */
export type TranscriptJobData = {
  /** @default "transcript_job" */
  kind?: "transcript_job";
  videoId?: string;
  platform?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const transcriptJobDataSchema: Schema<TranscriptJobData> = s.object<TranscriptJobData>(
  {
    kind: s.defaulted(s.literal("transcript_job"), "transcript_job"),
    videoId: s.optional(s.string()),
    platform: s.optional(s.string()),
    _keysMap: {
      videoId: "video_id",
    },
  },
  { additionalProperties: s.json() },
);
