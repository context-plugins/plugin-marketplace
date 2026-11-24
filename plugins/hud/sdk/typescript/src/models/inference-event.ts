import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/**
 * One robot inference (``step.inference`` under ``hud.robot.step.v1``).
 *
 * Carries the ``[T, A]`` action chunk the policy produced at a re-infer ``tick``.
 *
 * Emitted only on re-infer ticks (a chunk boundary), so it marks the decision points the viewer
 * renders on its episode slider. ``tick`` matches the paired :class:`ObservationEvent`.
 */
export type InferenceEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "robot_inference" */
  kind?: "robot_inference";
  /** @default 0 */
  tick?: number;
  chunk?: number[][];
  /** @default 1 */
  chunkLength?: number;
  names?: string[];
};

export const inferenceEventSchema: Schema<InferenceEvent> = s.object<InferenceEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("robot_inference"), "robot_inference"),
  tick: s.defaulted(s.int(), 0),
  chunk: s.optional(s.array(s.array(s.float64()))),
  chunkLength: s.defaulted(s.int(), 1),
  names: s.optional(s.array(s.string())),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
    chunkLength: "chunk_length",
  },
});
