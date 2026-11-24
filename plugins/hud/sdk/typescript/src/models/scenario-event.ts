import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  kindHudPlatformQaAgentsApiSchema,
  type KindHudPlatformQaAgentsApi,
} from "./kind-hud-platform-qa-agents-api.js";
import { endedAtSchema, type EndedAt } from "./unions/ended-at.js";
import { errorSchema, type Error } from "./unions/error.js";
import { parentIdSchema, type ParentId } from "./unions/parent-id.js";
import { result1Schema, type Result1 } from "./unions/result1.js";
import { startedAtSchema, type StartedAt } from "./unions/started-at.js";

/**
 * A task-lifecycle RPC (``tasks.start`` / ``tasks.grade``).
 *
 * Projected from the ``task``-sourced step the SDK harness records around the run. Kept under the
 * legacy ``scenario_*`` kinds the viewer consumes.
 */
export type ScenarioEvent = {
  id: string;
  parentId?: ParentId;
  startedAt?: StartedAt;
  endedAt?: EndedAt;
  /** @default 0 */
  seq?: number;
  kind: KindHudPlatformQaAgentsApi;
  name: string;
  arguments?: Record<string, unknown>;
  result?: Result1;
  error?: Error;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const scenarioEventSchema: Schema<ScenarioEvent> = s.object<ScenarioEvent>(
  {
    id: s.string(),
    parentId: s.optional(s.lazy(() => parentIdSchema)),
    startedAt: s.optional(s.lazy(() => startedAtSchema)),
    endedAt: s.optional(s.lazy(() => endedAtSchema)),
    seq: s.defaulted(s.int(), 0),
    kind: kindHudPlatformQaAgentsApiSchema,
    name: s.string(),
    arguments: s.optional(s.record(s.string(), s.unknown())),
    result: s.optional(s.lazy(() => result1Schema)),
    error: s.optional(s.lazy(() => errorSchema)),
    _keysMap: {
      parentId: "parent_id",
      startedAt: "started_at",
      endedAt: "ended_at",
    },
  },
  { additionalProperties: s.json() },
);
