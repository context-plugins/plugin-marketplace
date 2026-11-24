import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status13 = {
  Open: "open",
  Resolved: "resolved",
} as const;
export type Status13 = (typeof Status13)[keyof typeof Status13] | (string & {});

export const status13Schema: EnumSchema<Status13> = s.enumOf<Status13>(Status13);
