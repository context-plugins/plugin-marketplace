import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SitemapResponse = {
  links: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const sitemapResponseProperties: s.Shape<SitemapResponse> = {
  links: s.array(s.string()),
};

export const sitemapResponseInternalSchema: Schema<SitemapResponse> = s.object<SitemapResponse>(
  sitemapResponseProperties,
  { additionalProperties: s.json() },
);

export const sitemapResponseSchema: Schema<SitemapResponse> = s.lazySchema(() =>
  s.object<SitemapResponse>(
    {
      ...sitemapResponseProperties,
      links: s.array(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
