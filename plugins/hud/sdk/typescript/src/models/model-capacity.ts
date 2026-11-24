import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  effectiveMaxRolloutsInternalSchema,
  effectiveMaxRolloutsSchema,
  type EffectiveMaxRollouts,
} from "./unions/effective-max-rollouts.js";

/**
 * Hosted rollout capacity of a catalog model's scheduler group, from the last pass.
 *
 * Models in one scheduler group report the same values.
 */
export type ModelCapacity = {
  /** No new hosted rollouts start on the model. */
  paused: boolean;
  /** Hosted rollouts currently holding this model group's pooled capacity. */
  currentRollouts: number;
  /**
   * Current rollouts plus the additional pooled rollouts the last scheduler pass allowed after
   * model, provider, and quota gates. Null when that pass did not plan the group because it had no
   * queued or scheduler-launched rollouts.
   */
  effectiveMaxRollouts: EffectiveMaxRollouts;
  /** Current rollouts divided by effective max rollouts; 0 with none running. */
  utilization: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const modelCapacityProperties: s.Shape<ModelCapacity> = {
  paused: s.boolean(),
  currentRollouts: s.int(),
  effectiveMaxRollouts: effectiveMaxRolloutsInternalSchema,
  utilization: s.float64(),
  _keysMap: {
    currentRollouts: "current_rollouts",
    effectiveMaxRollouts: "effective_max_rollouts",
  },
};

export const modelCapacityInternalSchema: Schema<ModelCapacity> = s.object<ModelCapacity>(
  modelCapacityProperties,
  { additionalProperties: s.json() },
);

export const modelCapacitySchema: Schema<ModelCapacity> = s.lazySchema(() =>
  s.object<ModelCapacity>(
    {
      ...modelCapacityProperties,
      currentRollouts: s.int().check(s.gte(0)),
      effectiveMaxRollouts: effectiveMaxRolloutsSchema,
      utilization: s.float64().check(s.gte(0), s.lte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
