import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { podcastShowSchema, type PodcastShow } from "./podcast-show.js";

export type PodcastShowGetResponse = {
  data: PodcastShow;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const podcastShowGetResponseSchema: Schema<PodcastShowGetResponse> = s.object<PodcastShowGetResponse>(
  {
    data: podcastShowSchema,
  },
  { additionalProperties: s.json() },
);
