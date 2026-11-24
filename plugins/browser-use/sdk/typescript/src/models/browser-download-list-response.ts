import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { browserDownloadFileSchema, type BrowserDownloadFile } from "./browser-download-file.js";
import { nextcursorSchema, type Nextcursor } from "./unions/nextcursor.js";

/** Paginated list of browser downloads with optional presigned URLs. */
export type BrowserDownloadListResponse = {
  /** List of files downloaded by the browser */
  files: BrowserDownloadFile[];
  /** Cursor for the next page. Pass as the `cursor` query parameter to fetch the next page. */
  nextCursor?: Nextcursor;
  /** Whether there are more files beyond this page. @default false */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const browserDownloadListResponseSchema: Schema<BrowserDownloadListResponse> =
  s.object<BrowserDownloadListResponse>(
    {
      files: s.array(s.lazy(() => browserDownloadFileSchema)),
      nextCursor: s.optional(s.lazy(() => nextcursorSchema)),
      hasMore: s.defaulted(s.boolean(), false),
    },
    { additionalProperties: s.json() },
  );
