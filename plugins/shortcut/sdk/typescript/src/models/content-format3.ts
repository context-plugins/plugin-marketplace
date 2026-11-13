import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ContentFormat3 = {
  Markdown: "markdown",
  Html: "html",
} as const;
export type ContentFormat3 = (typeof ContentFormat3)[keyof typeof ContentFormat3] | (string & {});

export const contentFormat3Schema: EnumSchema<ContentFormat3> = s.enumOf<ContentFormat3>(ContentFormat3);
