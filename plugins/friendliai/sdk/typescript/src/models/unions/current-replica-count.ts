import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The current number of replicas. */
export type CurrentReplicaCount = number;

export const currentReplicaCountSchema: Schema<CurrentReplicaCount> = s.of<CurrentReplicaCount>(
  s.union([s.int()]),
);
