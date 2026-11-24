import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  crawlParametersInternalSchema,
  crawlParametersSchema,
  type CrawlParameters,
} from "./crawl-parameters.js";
import { crawlResultInternalSchema, crawlResultSchema, type CrawlResult } from "./crawl-result.js";

export type CrawlResponse = {
  crawlParameters: CrawlParameters;
  results: CrawlResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const crawlResponseProperties: s.Shape<CrawlResponse> = {
  crawlParameters: crawlParametersInternalSchema,
  results: crawlResultInternalSchema,
};

export const crawlResponseInternalSchema: Schema<CrawlResponse> = s.object<CrawlResponse>(
  crawlResponseProperties,
  { additionalProperties: s.json() },
);

export const crawlResponseSchema: Schema<CrawlResponse> = s.lazySchema(() =>
  s.object<CrawlResponse>(
    {
      ...crawlResponseProperties,
      crawlParameters: crawlParametersSchema,
      results: crawlResultSchema,
    },
    { additionalProperties: s.json() },
  ),
);
