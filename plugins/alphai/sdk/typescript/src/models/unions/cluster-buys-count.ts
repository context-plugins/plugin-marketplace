import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ClusterBuysCount = number;

export const clusterBuysCountSchema: Schema<ClusterBuysCount> = s.of<ClusterBuysCount>(s.union([s.int()]));
