import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** How the product is rendered in the response */
export const RenderAs = {
  Inline: "inline",
  Hero: "hero",
  Block: "block",
} as const;
export type RenderAs = (typeof RenderAs)[keyof typeof RenderAs] | (string & {});

export const renderAsSchema: EnumSchema<RenderAs> = s.enumOf<RenderAs>(RenderAs);
