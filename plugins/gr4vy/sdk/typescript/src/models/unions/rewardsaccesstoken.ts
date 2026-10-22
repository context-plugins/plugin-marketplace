import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** The access token for the Everyday Rewards account. */
export type Rewardsaccesstoken = string;

export const rewardsaccesstokenSchema: Schema<Rewardsaccesstoken> = s.of<Rewardsaccesstoken>(
  s.union([s.string()]),
);
