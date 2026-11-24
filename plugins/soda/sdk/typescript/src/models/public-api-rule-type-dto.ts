import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiRuleTypeDto = {
  Check: "check",
  Monitor: "monitor",
} as const;
export type PublicApiRuleTypeDto =
  | (typeof PublicApiRuleTypeDto)[keyof typeof PublicApiRuleTypeDto]
  | (string & {});

export const publicApiRuleTypeDtoSchema: EnumSchema<PublicApiRuleTypeDto> =
  s.enumOf<PublicApiRuleTypeDto>(PublicApiRuleTypeDto);
