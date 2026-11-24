import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RcaAssetTypeDto = {
  Dataset: "dataset",
  Datasource: "datasource",
} as const;
export type RcaAssetTypeDto = (typeof RcaAssetTypeDto)[keyof typeof RcaAssetTypeDto] | (string & {});

export const rcaAssetTypeDtoSchema: EnumSchema<RcaAssetTypeDto> = s.enumOf<RcaAssetTypeDto>(RcaAssetTypeDto);
