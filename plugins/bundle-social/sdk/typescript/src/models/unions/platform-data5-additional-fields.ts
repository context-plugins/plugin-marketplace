import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type PlatformData5AdditionalFields = string | number | boolean | null;

export const platformData5AdditionalFieldsSchema: Schema<PlatformData5AdditionalFields> =
  s.of<PlatformData5AdditionalFields>(s.nullable(s.union([s.string(), s.float64(), s.boolean()])));
