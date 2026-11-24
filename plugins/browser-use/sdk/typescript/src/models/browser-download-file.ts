import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./unions/url.js";

/** A single file the browser downloaded during the session. */
export type BrowserDownloadFile = {
  /** File name (basename relative to the session downloads prefix) */
  path: string;
  /** File size in bytes */
  size: number;
  /** When the file was last modified in S3 */
  lastModified: Date;
  /** Presigned download URL (15 min expiry). Only included when `includeUrls=true`. */
  url?: Url;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const browserDownloadFileSchema: Schema<BrowserDownloadFile> = s.object<BrowserDownloadFile>(
  {
    path: s.string(),
    size: s.int(),
    lastModified: s.dateTime(),
    url: s.optional(s.lazy(() => urlSchema)),
  },
  { additionalProperties: s.json() },
);
