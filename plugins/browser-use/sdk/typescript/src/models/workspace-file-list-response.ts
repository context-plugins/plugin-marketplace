import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { nextcursorSchema, type Nextcursor } from "./unions/nextcursor.js";
import { workspaceFileInfoSchema, type WorkspaceFileInfo } from "./workspace-file-info.js";

export type WorkspaceFileListResponse = {
  files: WorkspaceFileInfo[];
  nextCursor?: Nextcursor;
  /** @default false */
  hasMore?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceFileListResponseSchema: Schema<WorkspaceFileListResponse> =
  s.object<WorkspaceFileListResponse>(
    {
      files: s.array(s.lazy(() => workspaceFileInfoSchema)),
      nextCursor: s.optional(s.lazy(() => nextcursorSchema)),
      hasMore: s.defaulted(s.boolean(), false),
    },
    { additionalProperties: s.json() },
  );
