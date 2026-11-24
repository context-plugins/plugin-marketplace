import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CrawlParameters = {
  url: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const crawlParametersProperties: s.Shape<CrawlParameters> = {
  url: s.string(),
};

export const crawlParametersInternalSchema: Schema<CrawlParameters> = s.object<CrawlParameters>(
  crawlParametersProperties,
  { additionalProperties: s.json() },
);

export const crawlParametersSchema: Schema<CrawlParameters> = s.lazySchema(() =>
  s.object<CrawlParameters>(
    {
      ...crawlParametersProperties,
      url: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
