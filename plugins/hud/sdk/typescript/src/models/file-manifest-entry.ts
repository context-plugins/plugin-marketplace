import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { contentHashSchema, type ContentHash } from "./unions/content-hash.js";

/**
 * One file in a workspace snapshot manifest: path + size + content hash.
 *
 * The manifest carries identity, not content. The viewer derives unchanged content from immutable
 * build source and applies setup changes separately.
 */
export type FileManifestEntry = {
  path: string;
  /** @default 0 */
  size?: number;
  contentHash?: ContentHash;
};

export const fileManifestEntrySchema: Schema<FileManifestEntry> = s.object<FileManifestEntry>({
  path: s.string(),
  size: s.defaulted(s.int(), 0),
  contentHash: s.optional(s.lazy(() => contentHashSchema)),
  _keysMap: {
    contentHash: "content_hash",
  },
});
