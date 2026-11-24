import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MaxAmt = string;

export const maxAmtSchema: Schema<MaxAmt> = s.of<MaxAmt>(s.union([s.string()]));
