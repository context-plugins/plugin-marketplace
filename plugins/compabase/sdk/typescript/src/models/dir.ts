import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Dir = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Dir = (typeof Dir)[keyof typeof Dir] | (string & {});

export const dirSchema: EnumSchema<Dir> = s.enumOf<Dir>(Dir);
