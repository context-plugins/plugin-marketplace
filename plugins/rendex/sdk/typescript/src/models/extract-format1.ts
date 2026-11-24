import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ExtractFormat1 = {
  Markdown: "markdown",
  Json: "json",
  Html: "html",
  Text: "text",
} as const;
export type ExtractFormat1 = (typeof ExtractFormat1)[keyof typeof ExtractFormat1] | (string & {});

export const extractFormat1Schema: EnumSchema<ExtractFormat1> = s.enumOf<ExtractFormat1>(ExtractFormat1);
