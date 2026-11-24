import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const FailedRowsCollectionStrategyTypeDto = {
  UseDefaultMaxRowCount: "useDefaultMaxRowCount",
  Absolute: "absolute",
  Percentage: "percentage",
} as const;
export type FailedRowsCollectionStrategyTypeDto =
  | (typeof FailedRowsCollectionStrategyTypeDto)[keyof typeof FailedRowsCollectionStrategyTypeDto]
  | (string & {});

export const failedRowsCollectionStrategyTypeDtoSchema: EnumSchema<FailedRowsCollectionStrategyTypeDto> =
  s.enumOf<FailedRowsCollectionStrategyTypeDto>(FailedRowsCollectionStrategyTypeDto);
