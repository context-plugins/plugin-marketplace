import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { stateFeatureSchema, type StateFeature } from "./state-feature.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/**
 * One robot observation tick (``step.observation`` under ``hud.robot.step.v1``):
 *
 * the numeric state the policy saw at ``tick`` (camera frames travel as ``VideoSegmentEvent``
 * streams).
 *
 * ``state`` maps each env-contract feature group -> its :class:`StateFeature` (per-dim names +
 * values). Pairs with the :class:`InferenceEvent` at the same ``tick``.
 */
export type ObservationEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  /** @default "robot_observation" */
  kind?: "robot_observation";
  /** @default 0 */
  tick?: number;
  state?: Record<string, StateFeature>;
};

export const observationEventSchema: Schema<ObservationEvent> = s.object<ObservationEvent>({
  id: s.string(),
  parentId: s.optional(s.lazy(() => parentIdSchema)),
  startedAt: s.optional(s.lazy(() => startedAtSchema)),
  endedAt: s.optional(s.lazy(() => endedAtSchema)),
  seq: s.defaulted(s.int(), 0),
  kind: s.defaulted(s.literal("robot_observation"), "robot_observation"),
  tick: s.defaulted(s.int(), 0),
  state: s.optional(
    s.record(
      s.string(),
      s.lazy(() => stateFeatureSchema),
    ),
  ),
  _keysMap: {
    parentId: "parent_id",
    startedAt: "started_at",
    endedAt: "ended_at",
  },
});
