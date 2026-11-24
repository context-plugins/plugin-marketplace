import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mode1Schema, type Mode1 } from "./mode1.js";

export type BatchRequest = {
  /**
   * Video URLs or bare YouTube IDs, from any supported platform. Up to your plan's batch cap: 50 on
   * free/Basic/Pro, 500 on Mega/Scale. Also accepted as the legacy key videoIds (send one or the
   * other, not both).
   */
  videoIds: string[];
  /**
   * Where each entry's text may come from. "auto" (the default) reads captions and transcribes the
   * audio when there are none. "captions" reads an existing caption track only, so a captionless
   * video fails as no_transcript - the behaviour batch had before audio fallback existed. Note
   * "audio" is not accepted here: skipping captions for 50 videos at once is a job queue, not a
   * batch fetch.
   */
  mode?: Mode1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const batchRequestProperties: s.Shape<BatchRequest> = {
  videoIds: s.array(s.string()),
  mode: s.optional(s.lazy(() => mode1Schema)),
  _keysMap: {
    videoIds: "video_ids",
  },
};

export const batchRequestInternalSchema: Schema<BatchRequest> = s.object<BatchRequest>(
  batchRequestProperties,
  { additionalProperties: s.json() },
);

export const batchRequestSchema: Schema<BatchRequest> = s.lazySchema(() =>
  s.object<BatchRequest>(
    {
      ...batchRequestProperties,
      videoIds: s
        .array(s.string().check(s.minLength(1), s.maxLength(200)))
        .check(s.minLength(1), s.maxLength(500)),
    },
    { additionalProperties: s.json() },
  ),
);
