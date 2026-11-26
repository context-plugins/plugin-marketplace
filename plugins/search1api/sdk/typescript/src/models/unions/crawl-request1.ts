import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { crawlRequestInternalSchema, crawlRequestSchema, type CrawlRequest } from "../crawl-request.js";

export type CrawlRequest1 = CrawlRequest | CrawlRequest[];

export const crawlRequest1InternalSchema: Schema<CrawlRequest1> = s.of<CrawlRequest1>(
  s.union([s.lazy(() => crawlRequestInternalSchema), s.array(s.lazy(() => crawlRequestInternalSchema))]),
);

export const crawlRequest1Schema: Schema<CrawlRequest1> = s.lazySchema(() =>
  s.of<CrawlRequest1>(
    s.union([
      s.lazy(() => crawlRequestSchema),
      s.array(s.lazy(() => crawlRequestSchema)).check(s.minLength(1)),
    ]),
  ),
);
