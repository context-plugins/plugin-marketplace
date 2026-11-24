import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entityRefSchema, type EntityRef } from "./entity-ref.js";
import { episodeFullSchema, type EpisodeFull } from "./episode-full.js";
import { podcastRef2Schema, type PodcastRef2 } from "./podcast-ref2.js";
import { transcriptInternalSchema, transcriptSchema, type Transcript } from "./transcript.js";

export type EpisodeDetail = {
  entities: EntityRef[];
  episode: EpisodeFull;
  podcast?: PodcastRef2 | null;
  transcript?: Transcript | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const episodeDetailProperties: s.Shape<EpisodeDetail> = {
  entities: s.array(s.lazy(() => entityRefSchema)),
  episode: episodeFullSchema,
  podcast: s.optionalNullable(s.lazy(() => podcastRef2Schema)),
  transcript: s.optionalNullable(s.lazy(() => transcriptInternalSchema)),
};

export const episodeDetailInternalSchema: Schema<EpisodeDetail> = s.object<EpisodeDetail>(
  episodeDetailProperties,
  { additionalProperties: s.json() },
);

export const episodeDetailSchema: Schema<EpisodeDetail> = s.lazySchema(() =>
  s.object<EpisodeDetail>(
    {
      ...episodeDetailProperties,
      transcript: s.optionalNullable(s.lazy(() => transcriptSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
