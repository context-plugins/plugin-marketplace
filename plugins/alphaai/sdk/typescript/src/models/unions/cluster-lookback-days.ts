import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ClusterLookbackDays = number;

export const clusterLookbackDaysSchema: Schema<ClusterLookbackDays> = s.of<ClusterLookbackDays>(
  s.union([s.int()]),
);
