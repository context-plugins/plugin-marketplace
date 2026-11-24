import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. The table format. */
export const TableFormat = {
  TableFormatUnspecified: "TABLE_FORMAT_UNSPECIFIED",
  Iceberg: "ICEBERG",
} as const;
export type TableFormat = (typeof TableFormat)[keyof typeof TableFormat] | (string & {});

export const tableFormatSchema: EnumSchema<TableFormat> = s.enumOf<TableFormat>(TableFormat);
