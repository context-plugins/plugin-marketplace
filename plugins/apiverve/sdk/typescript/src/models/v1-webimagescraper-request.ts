import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1WebimagescraperRequest = {
  /** The URL of the website you want to scrape images from */
  url: string;
  /** The limit of image URLs returned from your query */
  maxlinks?: number;
  /** Keep query strings on the scraped image URLs instead of trimming them */
  includequery?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WebimagescraperRequestSchema: Schema<V1WebimagescraperRequest> =
  s.object<V1WebimagescraperRequest>(
    {
      url: s.string(),
      maxlinks: s.optional(s.int()),
      includequery: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
