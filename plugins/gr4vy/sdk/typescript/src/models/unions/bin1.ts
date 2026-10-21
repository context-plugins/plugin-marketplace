import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Bin1 = string;

export const bin1Schema: Schema<Bin1> = s.of<Bin1>(s.union([s.string()]));
