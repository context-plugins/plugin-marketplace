import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RcaResourceTypeDto = {
  Dataset: "dataset",
  Datasource: "datasource",
  Check: "check",
  CheckResult: "checkResult",
} as const;
export type RcaResourceTypeDto = (typeof RcaResourceTypeDto)[keyof typeof RcaResourceTypeDto] | (string & {});

export const rcaResourceTypeDtoSchema: EnumSchema<RcaResourceTypeDto> =
  s.enumOf<RcaResourceTypeDto>(RcaResourceTypeDto);
