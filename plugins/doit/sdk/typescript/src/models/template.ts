import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Template = {
  Component: "component",
  Statussheet: "statussheet",
} as const;
export type Template = (typeof Template)[keyof typeof Template] | (string & {});

export const templateSchema: EnumSchema<Template> = s.enumOf<Template>(Template);
