import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Optional. An HTTP URL data source. */
export type HttpData2 = {
  /**
   * Required. The URL that points to the file that stores the object list entries. This file must
   * allow public access. The URL is either an HTTP/HTTPS address (e.g.
   * `https://example.com/urllist.tsv`) or a Cloud Storage path (e.g. `gs://my-bucket/urllist.tsv`).
   */
  listUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpData2Schema: Schema<HttpData2> = s.object<HttpData2>(
  {
    listUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
