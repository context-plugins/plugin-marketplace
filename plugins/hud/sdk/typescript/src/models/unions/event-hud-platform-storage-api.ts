import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fileCaptureEventSchema, type FileCaptureEvent } from "../file-capture-event.js";
import { fileChangeEventSchema, type FileChangeEvent } from "../file-change-event.js";
import { fileSetupEventSchema, type FileSetupEvent } from "../file-setup-event.js";
import { fileSnapshotEventSchema, type FileSnapshotEvent } from "../file-snapshot-event.js";

export type EventHudPlatformStorageApi =
  | FileSnapshotEvent
  | FileSetupEvent
  | FileChangeEvent
  | FileCaptureEvent;

export const eventHudPlatformStorageApiSchema: Schema<EventHudPlatformStorageApi> =
  s.of<EventHudPlatformStorageApi>(
    s.union([
      s.lazy(() => fileSnapshotEventSchema),
      s.lazy(() => fileSetupEventSchema),
      s.lazy(() => fileChangeEventSchema),
      s.lazy(() => fileCaptureEventSchema),
    ]),
  );
