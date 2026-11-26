import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CrawlRequest = {
  url: string;
  /** @default true */
  enableFallback?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const crawlRequestProperties: s.Shape<CrawlRequest> = {
  url: s.string(),
  enableFallback: s.defaulted(s.boolean(), true),
};

export const crawlRequestInternalSchema: Schema<CrawlRequest> = s.object<CrawlRequest>(
  crawlRequestProperties,
  { additionalProperties: s.json() },
);

export const crawlRequestSchema: Schema<CrawlRequest> = s.lazySchema(() =>
  s.object<CrawlRequest>(
    {
      ...crawlRequestProperties,
      url: s.string().check(s.minLength(1), s.url()),
    },
    { additionalProperties: s.json() },
  ),
);
