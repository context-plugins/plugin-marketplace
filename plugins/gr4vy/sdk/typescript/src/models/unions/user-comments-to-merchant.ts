import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments from the user to the merchant. */
export type UserCommentsToMerchant = string;

export const userCommentsToMerchantSchema: Schema<UserCommentsToMerchant> = s.of<UserCommentsToMerchant>(
  s.union([s.string()]),
);
