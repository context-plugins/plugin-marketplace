import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponsibilityTypeDto = {
  User: "user",
  UserGroup: "userGroup",
} as const;
export type ResponsibilityTypeDto =
  | (typeof ResponsibilityTypeDto)[keyof typeof ResponsibilityTypeDto]
  | (string & {});

export const responsibilityTypeDtoSchema: EnumSchema<ResponsibilityTypeDto> =
  s.enumOf<ResponsibilityTypeDto>(ResponsibilityTypeDto);
