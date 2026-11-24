import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fileManifestEntrySchema, type FileManifestEntry } from "./file-manifest-entry.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/**
 * A post-setup workspace manifest of paths + hashes captured before the agent starts.
 *
 * Emitted as ``filetracking.snapshot`` under ``hud.filetracking.v1``.
 *
 * Build source plus :class:`FileSetupEvent` patches derive this state; applying subsequent
 * :class:`FileChangeEvent` patches reconstructs the agent timeline.
 */
export type FileSnapshotEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "file_snapshot" */
  kind?: "file_snapshot";
  /** @default 0 */
  filesScanned?: number;
  /** @default false */
  truncated?: boolean;
  files?: FileManifestEntry[];
};

export const fileSnapshotEventSchema: Schema<FileSnapshotEvent> = s.object<FileSnapshotEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("file_snapshot"), "file_snapshot"),
  filesScanned: s.defaulted(s.int(), 0),
  truncated: s.defaulted(s.boolean(), false),
  files: s.optional(s.array(s.lazy(() => fileManifestEntrySchema))),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
    filesScanned: "files_scanned",
  },
});
