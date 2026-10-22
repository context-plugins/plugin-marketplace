import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The updated number of replicas. */
export type UpdatedReplicaCount = number;

export const updatedReplicaCountSchema: Schema<UpdatedReplicaCount> = s.of<UpdatedReplicaCount>(
  s.union([s.int()]),
);
