import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Prefix = {
  _800: "800",
  _822: "822",
  _833: "833",
  _844: "844",
  _855: "855",
  _866: "866",
  _877: "877",
  _888: "888",
} as const;
export type Prefix = (typeof Prefix)[keyof typeof Prefix] | (string & {});

export const prefixSchema: EnumSchema<Prefix> = s.enumOf<Prefix>(Prefix);
