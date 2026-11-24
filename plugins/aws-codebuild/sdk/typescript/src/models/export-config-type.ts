import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The export configuration type. Valid values are: S3: The report results are exported to an S3
 * bucket. NO_EXPORT: The report results are not exported.
 */
export const ExportConfigType = {
  S3: "S3",
  NoExport: "NO_EXPORT",
} as const;
export type ExportConfigType = (typeof ExportConfigType)[keyof typeof ExportConfigType] | (string & {});

export const exportConfigTypeSchema: EnumSchema<ExportConfigType> =
  s.enumOf<ExportConfigType>(ExportConfigType);
