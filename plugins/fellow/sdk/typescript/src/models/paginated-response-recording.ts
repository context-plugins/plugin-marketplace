import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { pageInfoSchema, type PageInfo } from "./page-info.js";
import { recordingSchema, type Recording } from "./recording.js";

export type PaginatedResponseRecording = {
  /** Information about a page returned in a paginated response. */
  pageInfo: PageInfo;
  data: Recording[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseRecordingSchema: Schema<PaginatedResponseRecording> =
  s.object<PaginatedResponseRecording>(
    {
      pageInfo: pageInfoSchema,
      data: s.array(s.lazy(() => recordingSchema)),
      _keysMap: {
        pageInfo: "page_info",
      },
    },
    { additionalProperties: s.json() },
  );
