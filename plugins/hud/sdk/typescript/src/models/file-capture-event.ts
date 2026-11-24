import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { capturedFileSchema, type CapturedFile } from "./captured-file.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/** Final changed-file artifacts captured from ``filetracking.capture``. */
export type FileCaptureEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "file_capture" */
  kind?: "file_capture";
  /** @default 0 */
  filesScanned?: number;
  /** @default 0 */
  filesChanged?: number;
  /** @default 0 */
  filesEligible?: number;
  /** @default 0 */
  filesCaptured?: number;
  /** @default 0 */
  filesSkipped?: number;
  /** @default false */
  truncated?: boolean;
  files?: CapturedFile[];
};

export const fileCaptureEventSchema: Schema<FileCaptureEvent> = s.object<FileCaptureEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("file_capture"), "file_capture"),
  filesScanned: s.defaulted(s.int(), 0),
  filesChanged: s.defaulted(s.int(), 0),
  filesEligible: s.defaulted(s.int(), 0),
  filesCaptured: s.defaulted(s.int(), 0),
  filesSkipped: s.defaulted(s.int(), 0),
  truncated: s.defaulted(s.boolean(), false),
  files: s.optional(s.array(s.lazy(() => capturedFileSchema))),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
    filesScanned: "files_scanned",
    filesChanged: "files_changed",
    filesEligible: "files_eligible",
    filesCaptured: "files_captured",
    filesSkipped: "files_skipped",
  },
});
