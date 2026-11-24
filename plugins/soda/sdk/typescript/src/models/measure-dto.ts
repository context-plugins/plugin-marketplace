import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const MeasureDto = {
  Time: "time",
} as const;
export type MeasureDto = (typeof MeasureDto)[keyof typeof MeasureDto] | (string & {});

export const measureDtoSchema: EnumSchema<MeasureDto> = s.enumOf<MeasureDto>(MeasureDto);
