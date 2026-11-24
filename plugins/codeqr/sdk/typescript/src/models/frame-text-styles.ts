import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { familySchema, type Family } from "./family.js";
import { sizeSchema, type Size } from "./size.js";
import { styleSchema, type Style } from "./style.js";
import { weightSchema, type Weight } from "./weight.js";

/**
 * Typographic styles applied to the frame label text. Object with optional keys: `weight` (`normal`
 * | `bold`), `style` (`normal` | `italic`), `family` (`sans` | `sans-condensed` | `serif` |
 * `serif-elegant` | `mono`), `size` (`s` | `m` | `l` | `xl`). Every field is enum-gated on write;
 * omitted keys render with defaults.
 */
export type FrameTextStyles = {
  weight?: Weight;
  style?: Style;
  family?: Family;
  size?: Size;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const frameTextStylesSchema: Schema<FrameTextStyles> = s.object<FrameTextStyles>(
  {
    weight: s.optional(s.lazy(() => weightSchema)),
    style: s.optional(s.lazy(() => styleSchema)),
    family: s.optional(s.lazy(() => familySchema)),
    size: s.optional(s.lazy(() => sizeSchema)),
  },
  { additionalProperties: s.json() },
);
