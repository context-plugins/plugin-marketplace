import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Reward = number;

export const rewardSchema: Schema<Reward> = s.of<Reward>(s.union([s.float64()]));
