import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AvgReward = number;

export const avgRewardSchema: Schema<AvgReward> = s.of<AvgReward>(s.union([s.float64()]));
