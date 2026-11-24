import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The dataset type. Valid values depend on the chosen Domain. */
export const DatasetType = {
  TargetTimeSeries: "TARGET_TIME_SERIES",
  RelatedTimeSeries: "RELATED_TIME_SERIES",
  ItemMetadata: "ITEM_METADATA",
} as const;
export type DatasetType = (typeof DatasetType)[keyof typeof DatasetType] | (string & {});

export const datasetTypeSchema: EnumSchema<DatasetType> = s.enumOf<DatasetType>(DatasetType);
