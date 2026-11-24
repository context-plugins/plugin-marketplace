import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Required. The data source on which the addon operates. This determines which field in the
 * `config` oneof is used.
 */
export const DataSource = {
  DataSourceUnspecified: "DATA_SOURCE_UNSPECIFIED",
  PluginInstance: "PLUGIN_INSTANCE",
  AllData: "ALL_DATA",
} as const;
export type DataSource = (typeof DataSource)[keyof typeof DataSource] | (string & {});

export const dataSourceSchema: EnumSchema<DataSource> = s.enumOf<DataSource>(DataSource);
