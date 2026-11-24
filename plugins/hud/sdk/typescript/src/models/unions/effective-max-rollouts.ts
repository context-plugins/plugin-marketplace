import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Current rollouts plus the additional pooled rollouts the last scheduler pass allowed after model,
 * provider, and quota gates. Null when that pass did not plan the group because it had no queued or
 * scheduler-launched rollouts.
 */
export type EffectiveMaxRollouts = number;

export const effectiveMaxRolloutsInternalSchema: Schema<EffectiveMaxRollouts> = s.of<EffectiveMaxRollouts>(
  s.union([s.int()]),
);

export const effectiveMaxRolloutsSchema: Schema<EffectiveMaxRollouts> = s.lazySchema(() =>
  s.of<EffectiveMaxRollouts>(s.union([s.int().check(s.gte(0))])),
);
