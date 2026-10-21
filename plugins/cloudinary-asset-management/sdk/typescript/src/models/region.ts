import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Region = {
  Api: "api",
  ApiEu: "api-eu",
  ApiAp: "api-ap",
} as const;
export type Region = (typeof Region)[keyof typeof Region] | (string & {});

export const regionSchema: EnumSchema<Region> = s.enumOf<Region>(Region);
