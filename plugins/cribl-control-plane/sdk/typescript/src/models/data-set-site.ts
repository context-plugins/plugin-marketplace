import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** DataSet site to which events should be sent */
export const DataSetSite = {
  Us: "us",
  Eu: "eu",
  Custom: "custom",
} as const;
export type DataSetSite = (typeof DataSetSite)[keyof typeof DataSetSite] | (string & {});

export const dataSetSiteSchema: EnumSchema<DataSetSite> = s.enumOf<DataSetSite>(DataSetSite);
