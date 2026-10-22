import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Status5 = {
  Uncertified: "uncertified",
  Certified: "certified",
  Recertify: "recertify",
} as const;
export type Status5 = (typeof Status5)[keyof typeof Status5] | (string & {});

export const status5Schema: EnumSchema<Status5> = s.enumOf<Status5>(Status5);
