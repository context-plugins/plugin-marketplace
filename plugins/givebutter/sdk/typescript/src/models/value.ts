import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Value = {
  OrderAsc: "order_asc",
  NameAsc: "name_asc",
  CreatedAtDesc: "created_at_desc",
} as const;
export type Value = (typeof Value)[keyof typeof Value] | (string & {});

export const valueSchema: EnumSchema<Value> = s.enumOf<Value>(Value);
