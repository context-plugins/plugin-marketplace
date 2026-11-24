import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type LotNumber = string | number;

export const lotNumberSchema: Schema<LotNumber> = s.of<LotNumber>(s.union([s.string(), s.int()]));
