import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How to format events before sending out */
export const Format4 = {
  Ndjson: "ndjson",
  JsonArray: "json_array",
  Custom: "custom",
  Advanced: "advanced",
} as const;
export type Format4 = (typeof Format4)[keyof typeof Format4] | (string & {});

export const format4Schema: EnumSchema<Format4> = s.enumOf<Format4>(Format4);
