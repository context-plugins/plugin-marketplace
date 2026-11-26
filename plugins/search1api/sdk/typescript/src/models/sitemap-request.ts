import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type SitemapRequest = {
  url: string;
  type?: Type;
};

const sitemapRequestProperties: s.Shape<SitemapRequest> = {
  url: s.string(),
  type: s.optional(s.lazy(() => typeSchema)),
};

export const sitemapRequestInternalSchema: Schema<SitemapRequest> =
  s.object<SitemapRequest>(sitemapRequestProperties);

export const sitemapRequestSchema: Schema<SitemapRequest> = s.lazySchema(() =>
  s.object<SitemapRequest>({
    ...sitemapRequestProperties,
    url: s.string().check(s.url()),
  }),
);
