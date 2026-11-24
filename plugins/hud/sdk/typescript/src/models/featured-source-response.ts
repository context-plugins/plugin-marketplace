import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Where a featured environment's source lives in the public SDK repository. */
export type FeaturedSourceResponse = {
  repositoryUrl: string;
  /** Directory of the environment within the repository */
  path: string;
  /** Browsable URL of that directory on the default branch */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featuredSourceResponseSchema: Schema<FeaturedSourceResponse> = s.object<FeaturedSourceResponse>(
  {
    repositoryUrl: s.string(),
    path: s.string(),
    url: s.string(),
    _keysMap: {
      repositoryUrl: "repository_url",
    },
  },
  { additionalProperties: s.json() },
);
