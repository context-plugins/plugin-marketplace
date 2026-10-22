import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BuyerId25 = string;

export const buyerId25Schema: Schema<BuyerId25> = s.of<BuyerId25>(s.union([s.string()]));
