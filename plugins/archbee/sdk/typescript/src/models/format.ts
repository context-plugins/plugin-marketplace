import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * OPTIONAL. Specify the format of the content. Default is markdown. Use mdx when the content
 * contains JSX-style Archbee components (<hint>, <CtaButton />, <Tabs>); directive-style components
 * (:::hint{type="info"}) work in both markdown and mdx.
 */
export const Format = {
  Markdown: "markdown",
  Mdx: "mdx",
  Json: "json",
} as const;
export type Format = (typeof Format)[keyof typeof Format] | (string & {});

export const formatSchema: EnumSchema<Format> = s.enumOf<Format>(Format);
