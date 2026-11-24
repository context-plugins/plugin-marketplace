import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildSourceEntrySchema, type BuildSourceEntry } from "./build-source-entry.js";
import { nextCursorSchema, type NextCursor } from "./unions/next-cursor.js";

export type BuildWorkspaceListResponse = {
  buildId: string;
  path: string;
  entries?: BuildSourceEntry[];
  nextCursor?: NextCursor;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const buildWorkspaceListResponseSchema: Schema<BuildWorkspaceListResponse> =
  s.object<BuildWorkspaceListResponse>(
    {
      buildId: s.string(),
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
