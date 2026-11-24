import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Template = {
  B0101: "B_01.01",
  B0201: "B_02.01",
  B0202: "B_02.02",
  B0501: "B_05.01",
  B0601: "B_06.01",
  B0701: "B_07.01",
} as const;
export type Template = (typeof Template)[keyof typeof Template] | (string & {});

export const templateSchema: EnumSchema<Template> = s.enumOf<Template>(Template);
