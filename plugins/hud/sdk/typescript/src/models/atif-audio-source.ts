import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mediaType1Schema, type MediaType1 } from "./media-type1.js";
import { durationSecInternalSchema, durationSecSchema, type DurationSec } from "./unions/duration-sec.js";

export type AtifAudioSource = {
  mediaType: MediaType1;
  path: string;
  durationSec?: DurationSec;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const atifAudioSourceProperties: s.Shape<AtifAudioSource> = {
  mediaType: mediaType1Schema,
  path: s.string(),
  durationSec: s.optional(s.lazy(() => durationSecInternalSchema)),
  _keysMap: {
    mediaType: "media_type",
    durationSec: "duration_sec",
  },
};

export const atifAudioSourceInternalSchema: Schema<AtifAudioSource> = s.object<AtifAudioSource>(
  atifAudioSourceProperties,
  { additionalProperties: s.json() },
);

export const atifAudioSourceSchema: Schema<AtifAudioSource> = s.lazySchema(() =>
  s.object<AtifAudioSource>(
    {
      ...atifAudioSourceProperties,
      durationSec: s.optional(s.lazy(() => durationSecSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
