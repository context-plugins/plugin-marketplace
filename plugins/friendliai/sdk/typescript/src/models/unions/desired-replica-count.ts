import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The desired number of replicas. */
export type DesiredReplicaCount = number;

export const desiredReplicaCountSchema: Schema<DesiredReplicaCount> = s.of<DesiredReplicaCount>(
  s.union([s.int()]),
);
