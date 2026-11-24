import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the product is rendered in the response. Absent for a gpt-6 product card. */
export const RenderAs1 = {
  Inline: "inline",
  Hero: "hero",
  Block: "block",
} as const;
export type RenderAs1 = (typeof RenderAs1)[keyof typeof RenderAs1] | (string & {});

export const renderAs1Schema: EnumSchema<RenderAs1> = s.enumOf<RenderAs1>(RenderAs1);
