import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { filePatchSchema, type FilePatch } from "./file-patch.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/** Workspace changes made by scenario setup before the agent starts. */
export type FileSetupEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "file_setup" */
  kind?: "file_setup";
  /** @default 0 */
  filesScanned?: number;
  /** @default 0 */
  filesChanged?: number;
  /** @default false */
  truncated?: boolean;
  patches?: FilePatch[];
};

export const fileSetupEventSchema: Schema<FileSetupEvent> = s.object<FileSetupEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("file_setup"), "file_setup"),
  filesScanned: s.defaulted(s.int(), 0),
  filesChanged: s.defaulted(s.int(), 0),
  truncated: s.defaulted(s.boolean(), false),
  patches: s.optional(s.array(s.lazy(() => filePatchSchema))),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
    filesScanned: "files_scanned",
    filesChanged: "files_changed",
  },
});
