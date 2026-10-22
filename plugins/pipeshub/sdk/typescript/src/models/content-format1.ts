import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentFormat1 = {
  Markdown: "MARKDOWN",
  Json: "JSON",
  Html: "HTML",
} as const;
export type ContentFormat1 = (typeof ContentFormat1)[keyof typeof ContentFormat1] | (string & {});

export const contentFormat1Schema: EnumSchema<ContentFormat1> = s.enumOf<ContentFormat1>(ContentFormat1);
