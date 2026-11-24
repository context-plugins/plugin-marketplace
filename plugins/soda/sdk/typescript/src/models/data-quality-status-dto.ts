import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const DataQualityStatusDto = {
  Pass: "pass",
  Warn: "warn",
  Fail: "fail",
} as const;
export type DataQualityStatusDto =
  | (typeof DataQualityStatusDto)[keyof typeof DataQualityStatusDto]
  | (string & {});

export const dataQualityStatusDtoSchema: EnumSchema<DataQualityStatusDto> =
  s.enumOf<DataQualityStatusDto>(DataQualityStatusDto);
