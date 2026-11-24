import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Detail = {
  Full: "full",
  Slim: "slim",
} as const;
export type Detail = (typeof Detail)[keyof typeof Detail] | (string & {});

export const detailSchema: EnumSchema<Detail> = s.enumOf<Detail>(Detail);
