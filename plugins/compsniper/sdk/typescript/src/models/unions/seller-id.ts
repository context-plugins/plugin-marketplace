import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SellerId = number | string;

export const sellerIdSchema: Schema<SellerId> = s.of<SellerId>(s.union([s.int(), s.string()]));
