import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MeanReward = number;

export const meanRewardSchema: Schema<MeanReward> = s.of<MeanReward>(s.union([s.float64()]));
