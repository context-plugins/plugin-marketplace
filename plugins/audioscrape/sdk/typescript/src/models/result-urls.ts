import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResultUrls = {
  episode: string;
  segment: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resultUrlsSchema: Schema<ResultUrls> = s.object<ResultUrls>(
  {
    episode: s.string(),
    segment: s.string(),
  },
  { additionalProperties: s.json() },
);
