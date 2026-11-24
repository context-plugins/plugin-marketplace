import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { urlSchema, type Url } from "./unions/url.js";

/**
 * A file the agent has produced for the workspace. Shape mirrors V3 files (FileInfo) so a single UI
 * component can render both.
 */
export type WorkspaceFileInfo = {
  /** File path relative to the workspace root */
  path: string;
  /** File size in bytes */
  size: number;
  /** When the file was last modified */
  lastModified: Date;
  /** Presigned download URL (60s expiry). Only included when `includeUrls=true`. */
  url?: Url;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workspaceFileInfoSchema: Schema<WorkspaceFileInfo> = s.object<WorkspaceFileInfo>(
  {
    path: s.string(),
    size: s.int(),
    lastModified: s.dateTime(),
    url: s.optional(s.lazy(() => urlSchema)),
  },
  { additionalProperties: s.json() },
);
