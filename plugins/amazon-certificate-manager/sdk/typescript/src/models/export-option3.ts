import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Specify ENABLED or DISABLED to identify certificates that can be exported. */
export const ExportOption3 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type ExportOption3 = (typeof ExportOption3)[keyof typeof ExportOption3] | (string & {});

export const exportOption3Schema: EnumSchema<ExportOption3> = s.enumOf<ExportOption3>(ExportOption3);
