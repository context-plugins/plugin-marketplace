import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { audioSchema, type Audio } from "./audio.js";

export type ApiV1MiscInstagramAudioResponse = {
  audio?: Audio[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscInstagramAudioResponseSchema: Schema<ApiV1MiscInstagramAudioResponse> =
  s.object<ApiV1MiscInstagramAudioResponse>(
    {
      audio: s.optional(s.array(s.lazy(() => audioSchema))),
    },
    { additionalProperties: s.json() },
  );
