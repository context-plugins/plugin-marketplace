import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1SeoscraperRequest = {
  /** The URL of the web page to scrape SEO data from */
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1SeoscraperRequestSchema: Schema<V1SeoscraperRequest> = s.object<V1SeoscraperRequest>(
  {
    url: s.string(),
  },
  { additionalProperties: s.json() },
);
