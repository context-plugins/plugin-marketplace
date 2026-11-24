import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PlatformData8AdditionalFields = string | number | boolean | null;

export const platformData8AdditionalFieldsSchema: Schema<PlatformData8AdditionalFields> =
  s.of<PlatformData8AdditionalFields>(s.nullable(s.union([s.string(), s.float64(), s.boolean()])));
