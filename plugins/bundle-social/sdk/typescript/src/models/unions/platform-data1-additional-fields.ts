import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PlatformData1AdditionalFields = string | number | boolean | null;

export const platformData1AdditionalFieldsSchema: Schema<PlatformData1AdditionalFields> =
  s.of<PlatformData1AdditionalFields>(s.nullable(s.union([s.string(), s.float64(), s.boolean()])));
