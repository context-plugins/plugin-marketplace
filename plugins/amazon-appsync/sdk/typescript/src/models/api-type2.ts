import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ApiType2 = {
  Graphql: "GRAPHQL",
  Merged: "MERGED",
} as const;
export type ApiType2 = (typeof ApiType2)[keyof typeof ApiType2] | (string & {});

export const apiType2Schema: EnumSchema<ApiType2> = s.enumOf<ApiType2>(ApiType2);
