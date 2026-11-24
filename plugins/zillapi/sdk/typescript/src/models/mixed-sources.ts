import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jpegSchema, type Jpeg } from "./jpeg.js";
import { webpSchema, type Webp } from "./webp.js";

export type MixedSources = {
  jpeg?: Jpeg[];
  webp?: Webp[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mixedSourcesSchema: Schema<MixedSources> = s.object<MixedSources>(
  {
    jpeg: s.optional(s.array(s.lazy(() => jpegSchema))),
    webp: s.optional(s.array(s.lazy(() => webpSchema))),
  },
  { additionalProperties: s.json() },
);
