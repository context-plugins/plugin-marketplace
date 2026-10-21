import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Default = {
  Asc: "asc",
  Desc: "desc",
} as const;
export type Default = (typeof Default)[keyof typeof Default] | (string & {});

export const defaultSchema: EnumSchema<Default> = s.enumOf<Default>(Default);
