import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type MinAmt = string;

export const minAmtSchema: Schema<MinAmt> = s.of<MinAmt>(s.union([s.string()]));
