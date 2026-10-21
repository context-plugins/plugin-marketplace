import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Comments from the merchant about this transaction. */
export type MerchantComments = string;

export const merchantCommentsSchema: Schema<MerchantComments> = s.of<MerchantComments>(s.union([s.string()]));
