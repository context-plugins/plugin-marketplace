import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSourceEntrySchema, type BuildSourceEntry } from "./build-source-entry.js";
import { statusSchema, type Status } from "./status.js";
import { errorSchema, type Error } from "./unions/error.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

export type BuildSourceListResponse = {
  buildId: string;
  status: Status;
  error?: Error;
  path: string;
  entries?: BuildSourceEntry[];
  nextCursor?: NextCursor;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildSourceListResponseSchema: Schema<BuildSourceListResponse> =
  s.object<BuildSourceListResponse>(
    {
      buildId: s.string(),
      status: statusSchema,
      error: s.optional(s.lazy(() => errorSchema)),
      path: s.string(),
      entries: s.optional(s.array(s.lazy(() => buildSourceEntrySchema))),
      nextCursor: s.optional(s.lazy(() => nextCursorSchema)),
      _keysMap: {
        buildId: "build_id",
        nextCursor: "next_cursor",
      },
    },
    { additionalProperties: s.json() },
  );
