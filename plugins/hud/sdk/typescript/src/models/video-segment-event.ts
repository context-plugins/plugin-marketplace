import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";
import { urlSchema, type Url } from "./unions/url.js";

/**
 * One CMAF fragment of a camera's H.264 stream.
 *
 * Projected from ``step.video_segment`` under ``hud.robot.step.v1``: camera frames stream as video
 * instead of a JPEG per tick.
 *
 * ``index`` orders the fragments per ``camera`` (``index`` 0 is the init segment); the viewer feeds
 * the ordered ``url``s to one ``<video>`` via MSE. ``fps`` maps a control tick onto video time.
 * ``url`` is the presigned S3 segment (``None`` only if offload/presign hasn't completed).
 */
export type VideoSegmentEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "robot_video_segment" */
  kind?: "robot_video_segment";
  camera?: string;
  /** @default 0 */
  index?: number;
  /** @default 10 */
  fps?: number;
  url?: Url;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const videoSegmentEventSchema: Schema<VideoSegmentEvent> = s.object<VideoSegmentEvent>(
  {
    id: s.string(),
    parentId: s.optional(s.lazy(() => parentIdSchema)),
    startedAt: s.optional(s.lazy(() => startedAtSchema)),
    endedAt: s.optional(s.lazy(() => endedAtSchema)),
    seq: s.defaulted(s.int(), 0),
    kind: s.defaulted(s.literal("robot_video_segment"), "robot_video_segment"),
    camera: s.optional(s.string()),
    index: s.defaulted(s.int(), 0),
    fps: s.defaulted(s.int(), 10),
    url: s.optional(s.lazy(() => urlSchema)),
    _keysMap: {
      parentId: "parent_id",
      startedAt: "started_at",
      endedAt: "ended_at",
    },
  },
  { additionalProperties: s.json() },
);
