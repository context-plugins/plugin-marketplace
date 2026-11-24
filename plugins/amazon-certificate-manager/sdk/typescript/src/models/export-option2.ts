import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates if export is enabled for the certificate. */
export const ExportOption2 = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type ExportOption2 = (typeof ExportOption2)[keyof typeof ExportOption2] | (string & {});

export const exportOption2Schema: EnumSchema<ExportOption2> = s.enumOf<ExportOption2>(ExportOption2);
