import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const IncludePosts1 = {
  False: "false",
} as const;
export type IncludePosts1 = (typeof IncludePosts1)[keyof typeof IncludePosts1] | (string & {});

export const includePosts1Schema: EnumSchema<IncludePosts1> = s.enumOf<IncludePosts1>(IncludePosts1);
