import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { folderSchema, type Folder } from "./folder.js";

export type AnalyticsV1FoldersResponse = {
  /** Page token, returned by a previous call, to request the next page of results. */
  pageToken?: string;
  /** Number of folders returned in this page. */
  rowCount?: number;
  folders?: Folder[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsV1FoldersResponseSchema: Schema<AnalyticsV1FoldersResponse> =
  s.object<AnalyticsV1FoldersResponse>(
    {
      pageToken: s.optional(s.string()),
      rowCount: s.optional(s.int()),
      folders: s.optional(s.array(s.lazy(() => folderSchema))),
    },
    { additionalProperties: s.json() },
  );
