import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Item commodity code. Generally a UNSPSC code. */
export type CommodityCode = string;

export const commodityCodeSchema: Schema<CommodityCode> = s.of<CommodityCode>(s.union([s.string()]));
