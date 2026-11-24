import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Format3 = {
  Markdown: "markdown",
  Json: "json",
  Html: "html",
  Text: "text",
} as const;
export type Format3 = (typeof Format3)[keyof typeof Format3] | (string & {});

export const format3Schema: EnumSchema<Format3> = s.enumOf<Format3>(Format3);
