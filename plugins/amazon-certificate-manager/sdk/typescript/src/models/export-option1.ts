import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Filter by certificate export option. */
export const ExportOption1 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type ExportOption1 = (typeof ExportOption1)[keyof typeof ExportOption1] | (string & {});

export const exportOption1Schema: EnumSchema<ExportOption1> = s.enumOf<ExportOption1>(ExportOption1);
