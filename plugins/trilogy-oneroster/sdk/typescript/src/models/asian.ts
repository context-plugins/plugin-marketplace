import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Asian = {
  True: "true",
  False: "false",
} as const;
export type Asian = (typeof Asian)[keyof typeof Asian] | (string & {});

export const asianSchema: EnumSchema<Asian> = s.enumOf<Asian>(Asian);
