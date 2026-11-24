import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The CAS (Collateral Auction Session / Closing Auction Session) status of the segment. */
export const Status1OpenApiDefinitionMarketHolidaysAndTimingsApi = {
  NormalOpen: "NORMAL_OPEN",
  NormalClose: "NORMAL_CLOSE",
  PreOpenStart: "PRE_OPEN_START",
  PreOpenEnd: "PRE_OPEN_END",
  ClosingStart: "CLOSING_START",
  ClosingEnd: "CLOSING_END",
  CtsClose: "CTS_CLOSE",
  CasLmStart: "CAS_LM_START",
  CasMStop: "CAS_M_STOP",
  CasStop: "CAS_STOP",
} as const;
export type Status1OpenApiDefinitionMarketHolidaysAndTimingsApi =
  | (typeof Status1OpenApiDefinitionMarketHolidaysAndTimingsApi)[keyof typeof Status1OpenApiDefinitionMarketHolidaysAndTimingsApi]
  | (string & {});

export const status1OpenApiDefinitionMarketHolidaysAndTimingsApiSchema: EnumSchema<Status1OpenApiDefinitionMarketHolidaysAndTimingsApi> =
  s.enumOf<Status1OpenApiDefinitionMarketHolidaysAndTimingsApi>(
    Status1OpenApiDefinitionMarketHolidaysAndTimingsApi,
  );
