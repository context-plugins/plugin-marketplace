import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CrawlResult = {
  title: string;
  link: string;
  content: string;
  metadata?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const crawlResultProperties: s.Shape<CrawlResult> = {
  title: s.string(),
  link: s.string(),
  content: s.string(),
  metadata: s.optional(s.record(s.string(), s.unknown())),
};

export const crawlResultInternalSchema: Schema<CrawlResult> = s.object<CrawlResult>(crawlResultProperties, {
  additionalProperties: s.json(),
});

export const crawlResultSchema: Schema<CrawlResult> = s.lazySchema(() =>
  s.object<CrawlResult>(
    {
      ...crawlResultProperties,
      link: s.string().check(s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
