import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { quoteVariant1Schema, type QuoteVariant1 } from "./quote-variant1.js";
import { textAlignment14Schema, type TextAlignment14 } from "./text-alignment14.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type Block13 = {
  /** Discriminator value: quote @default "quote" */
  type?: "quote";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The type of quote block. Defaults to "block". */
  variant?: QuoteVariant1;
  /** The text of the quote. */
  quote: string;
  /** The text alignment of the quote. Defaults depend on the variant. */
  alignment?: TextAlignment14;
  /** The author of the quote. */
  author?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block13Schema: Schema<Block13> = s.object<Block13>(
  {
    type: s.defaulted(s.literal("quote"), "quote"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    variant: s.optional(s.lazy(() => quoteVariant1Schema)),
    quote: s.string(),
    alignment: s.optional(s.lazy(() => textAlignment14Schema)),
    author: s.optional(s.string()),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
