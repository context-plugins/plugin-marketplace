import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const UnitOfTimeDto = {
  Hours: "hours",
  Days: "days",
  Weeks: "weeks",
} as const;
export type UnitOfTimeDto = (typeof UnitOfTimeDto)[keyof typeof UnitOfTimeDto] | (string & {});

export const unitOfTimeDtoSchema: EnumSchema<UnitOfTimeDto> = s.enumOf<UnitOfTimeDto>(UnitOfTimeDto);
