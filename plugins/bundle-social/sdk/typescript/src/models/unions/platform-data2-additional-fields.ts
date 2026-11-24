import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PlatformData2AdditionalFields = string | number | boolean | null;

export const platformData2AdditionalFieldsSchema: Schema<PlatformData2AdditionalFields> =
  s.of<PlatformData2AdditionalFields>(s.nullable(s.union([s.string(), s.float64(), s.boolean()])));
