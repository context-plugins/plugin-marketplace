import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type IndexStatus = {
  /** When the document was last crawled */
  lastCrawledTime?: Date;
  /** When the document was last indexed */
  lastIndexedTime?: Date;
};

export const indexStatusSchema: Schema<IndexStatus> = s.object<IndexStatus>({
  lastCrawledTime: s.optional(s.dateTime()),
  lastIndexedTime: s.optional(s.dateTime()),
});
