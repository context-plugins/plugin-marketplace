import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { mixedSourcesSchema, type MixedSources } from "./mixed-sources.js";

export type Photo = {
  /** Default-resolution JPEG URL. */
  url?: string;
  caption?: string | null;
  subjectType?: string | null;
  mixedSources?: MixedSources;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const photoSchema: Schema<Photo> = s.object<Photo>(
  {
    url: s.optional(s.string()),
    caption: s.optionalNullable(s.string()),
    subjectType: s.optionalNullable(s.string()),
    mixedSources: s.optional(s.lazy(() => mixedSourcesSchema)),
  },
  { additionalProperties: s.json() },
);
