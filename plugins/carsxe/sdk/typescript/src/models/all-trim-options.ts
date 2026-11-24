import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const AllTrimOptions = {
  _1: "1",
} as const;
export type AllTrimOptions = (typeof AllTrimOptions)[keyof typeof AllTrimOptions] | (string & {});

export const allTrimOptionsSchema: EnumSchema<AllTrimOptions> = s.enumOf<AllTrimOptions>(AllTrimOptions);
