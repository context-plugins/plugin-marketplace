import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Header = {
  ColId: "colId",
  Label: "label",
} as const;
export type Header = (typeof Header)[keyof typeof Header] | (string & {});

export const headerSchema: EnumSchema<Header> = s.enumOf<Header>(Header);
