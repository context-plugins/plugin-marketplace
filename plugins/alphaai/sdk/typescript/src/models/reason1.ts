import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Reason1 = {
  SearchUnavailable: "search_unavailable",
} as const;
export type Reason1 = (typeof Reason1)[keyof typeof Reason1] | (string & {});

export const reason1Schema: EnumSchema<Reason1> = s.enumOf<Reason1>(Reason1);
