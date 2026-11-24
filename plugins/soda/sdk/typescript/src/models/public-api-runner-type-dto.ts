import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiRunnerTypeDto = {
  SelfHosted: "SELF_HOSTED",
  SodaHosted: "SODA_HOSTED",
} as const;
export type PublicApiRunnerTypeDto =
  | (typeof PublicApiRunnerTypeDto)[keyof typeof PublicApiRunnerTypeDto]
  | (string & {});

export const publicApiRunnerTypeDtoSchema: EnumSchema<PublicApiRunnerTypeDto> =
  s.enumOf<PublicApiRunnerTypeDto>(PublicApiRunnerTypeDto);
