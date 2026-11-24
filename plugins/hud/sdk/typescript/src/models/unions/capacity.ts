import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { modelCapacityInternalSchema, modelCapacitySchema, type ModelCapacity } from "../model-capacity.js";

/**
 * Hosted rollout capacity, on serving global models in signed-in list responses. Null otherwise, or
 * while no scheduler pass has run recently.
 */
export type Capacity = ModelCapacity;

export const capacityInternalSchema: Schema<Capacity> = s.of<Capacity>(
  s.union([s.lazy(() => modelCapacityInternalSchema)]),
);

export const capacitySchema: Schema<Capacity> = s.lazySchema(() =>
  s.of<Capacity>(s.union([s.lazy(() => modelCapacitySchema)])),
);
