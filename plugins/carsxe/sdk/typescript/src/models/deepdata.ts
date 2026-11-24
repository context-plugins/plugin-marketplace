import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Deepdata = {
  _1: "1",
} as const;
export type Deepdata = (typeof Deepdata)[keyof typeof Deepdata] | (string & {});

export const deepdataSchema: EnumSchema<Deepdata> = s.enumOf<Deepdata>(Deepdata);
