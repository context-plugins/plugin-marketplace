import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SalesHistory = {
  Full: "full",
  Limited: "limited",
} as const;
export type SalesHistory = (typeof SalesHistory)[keyof typeof SalesHistory] | (string & {});

export const salesHistorySchema: EnumSchema<SalesHistory> = s.enumOf<SalesHistory>(SalesHistory);
