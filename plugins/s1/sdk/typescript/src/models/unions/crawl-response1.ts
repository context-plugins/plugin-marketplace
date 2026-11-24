import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { crawlResponseInternalSchema, crawlResponseSchema, type CrawlResponse } from "../crawl-response.js";

export type CrawlResponse1 = CrawlResponse | CrawlResponse[];

export const crawlResponse1InternalSchema: Schema<CrawlResponse1> = s.of<CrawlResponse1>(
  s.union([s.lazy(() => crawlResponseInternalSchema), s.array(s.lazy(() => crawlResponseInternalSchema))]),
);

export const crawlResponse1Schema: Schema<CrawlResponse1> = s.lazySchema(() =>
  s.of<CrawlResponse1>(
    s.union([s.lazy(() => crawlResponseSchema), s.array(s.lazy(() => crawlResponseSchema))]),
  ),
);
