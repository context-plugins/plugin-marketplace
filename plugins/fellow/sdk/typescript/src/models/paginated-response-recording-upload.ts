import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";
import { recordingUploadSchema, type RecordingUpload } from "./recording-upload.js";

export type PaginatedResponseRecordingUpload = {
  /** Information about a page returned in a paginated response. */
  pageInfo: PageInfo;
  data: RecordingUpload[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseRecordingUploadSchema: Schema<PaginatedResponseRecordingUpload> =
  s.object<PaginatedResponseRecordingUpload>(
    {
      pageInfo: pageInfoSchema,
      data: s.array(s.lazy(() => recordingUploadSchema)),
      _keysMap: {
        pageInfo: "page_info",
      },
    },
    { additionalProperties: s.json() },
  );
