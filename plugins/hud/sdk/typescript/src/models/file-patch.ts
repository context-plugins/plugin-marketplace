import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  statusHudPlatformQaAgentsApiSchema,
  type StatusHudPlatformQaAgentsApi,
} from "./status-hud-platform-qa-agents-api.js";
import { contentHashAfterSchema, type ContentHashAfter } from "./unions/content-hash-after.js";
import { contentHashBeforeSchema, type ContentHashBefore } from "./unions/content-hash-before.js";

/**
 * A unified-diff patch for one file in a workspace change.
 *
 * Byte-identical to the legacy ``tool_call.result_data.file_diff`` patch shape so the frontend's
 * existing diff parsing/reconstruction ports unchanged. ``patch`` may be a placeholder string for
 * over-cap files when ``truncated``.
 */
export type FilePatch = {
  path: string;
  status: StatusHudPlatformQaAgentsApi;
  patch?: string;
  /** @default 0 */
  sizeBefore?: number;
  /** @default 0 */
  sizeAfter?: number;
  contentHashBefore?: ContentHashBefore;
  contentHashAfter?: ContentHashAfter;
};

export const filePatchSchema: Schema<FilePatch> = s.object<FilePatch>({
  path: s.string(),
  status: statusHudPlatformQaAgentsApiSchema,
  patch: s.optional(s.string()),
  sizeBefore: s.defaulted(s.int(), 0),
  sizeAfter: s.defaulted(s.int(), 0),
  contentHashBefore: s.optional(s.lazy(() => contentHashBeforeSchema)),
  contentHashAfter: s.optional(s.lazy(() => contentHashAfterSchema)),
  _keysMap: {
    sizeBefore: "size_before",
    sizeAfter: "size_after",
    contentHashBefore: "content_hash_before",
    contentHashAfter: "content_hash_after",
  },
});
