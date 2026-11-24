import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type EnumValues = string[];

export const enumValuesSchema: Schema<EnumValues> = s.of<EnumValues>(s.union([s.array(s.string())]));
