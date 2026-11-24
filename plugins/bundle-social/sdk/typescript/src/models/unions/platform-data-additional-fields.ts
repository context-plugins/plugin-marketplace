import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PlatformDataAdditionalFields = string | number | boolean | null;

export const platformDataAdditionalFieldsSchema: Schema<PlatformDataAdditionalFields> =
  s.of<PlatformDataAdditionalFields>(s.nullable(s.union([s.string(), s.float64(), s.boolean()])));
