import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AsOf = Date;

export const asOfSchema: Schema<AsOf> = s.of<AsOf>(s.union([s.dateTime()]));
