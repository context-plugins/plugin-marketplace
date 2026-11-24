import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * An HttpData resource specifies a list of objects on the web to be transferred over HTTP. The
 * information of the objects to be transferred is contained in a file referenced by a URL. The
 * first line in the file must be `"TsvHttpData-1.0"`, which specifies the format of the file.
 * Subsequent lines specify the information of the list of objects, one object per list entry. Each
 * entry has the following tab-delimited fields: * **HTTP URL** — The location of the object. *
 * **Length** — The size of the object in bytes. * **MD5** — The base64-encoded MD5 hash of the
 * object. For an example of a valid TSV file, see [Transferring data from
 * URLs](https://cloud.google.com/storage-transfer/docs/create-url-list). When transferring data
 * based on a URL list, keep the following in mind: * When an object located at
 * `http(s)://hostname:port/` is transferred to a data sink, the name of the object at the data sink
 * is `/`. * If the specified size of an object does not match the actual size of the object
 * fetched, the object is not transferred. * If the specified MD5 does not match the MD5 computed
 * from the transferred bytes, the object transfer fails. * Ensure that each URL you specify is
 * publicly accessible. For example, in Cloud Storage you can [share an object publicly]
 * (/storage/docs/cloud-console#_sharingdata) and get a link to it. * Storage Transfer Service obeys
 * `robots.txt` rules and requires the source HTTP server to support `Range` requests and to return
 * a `Content-Length` header in each response. * ObjectConditions have no effect when filtering
 * objects to transfer.
 */
export type HttpData = {
  /**
   * Required. The URL that points to the file that stores the object list entries. This file must
   * allow public access. The URL is either an HTTP/HTTPS address (e.g.
   * `https://example.com/urllist.tsv`) or a Cloud Storage path (e.g. `gs://my-bucket/urllist.tsv`).
   */
  listUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const httpDataSchema: Schema<HttpData> = s.object<HttpData>(
  {
    listUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
