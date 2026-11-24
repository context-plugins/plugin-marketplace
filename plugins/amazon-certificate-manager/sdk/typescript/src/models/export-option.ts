import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Indicates whether the certificate can be exported. */
export const ExportOption = {
  Enabled: "ENABLED",
  Disabled: "DISABLED",
} as const;
export type ExportOption = (typeof ExportOption)[keyof typeof ExportOption] | (string & {});

export const exportOptionSchema: EnumSchema<ExportOption> = s.enumOf<ExportOption>(ExportOption);
