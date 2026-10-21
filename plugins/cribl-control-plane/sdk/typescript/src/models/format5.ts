import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format5 = {
  Ndjson: "ndjson",
  JsonArray: "json_array",
  Custom: "custom",
  Advanced: "advanced",
} as const;
export type Format5 = (typeof Format5)[keyof typeof Format5] | (string & {});

export const format5Schema: EnumSchema<Format5> = s.enumOf<Format5>(Format5);
