import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { family1Schema, type Family1 } from "./family1.js";
import { size1Schema, type Size1 } from "./size1.js";
import { style1Schema, type Style1 } from "./style1.js";
import { weight1Schema, type Weight1 } from "./weight1.js";

/**
 * Typographic styles applied to the frame label text. Every key is enum-gated — unknown keys or
 * out-of-enum values are rejected to prevent SVG attribute injection. All fields are optional;
 * omitted keys fall back to the default (normal weight, normal style, sans family, medium size).
 */
export type FrameTextStyles1 = {
  /**
   * Font weight of the frame label text. `bold` renders at SVG `font-weight="700"`, `normal` at
   * `400`.
   */
  weight?: Weight1;
  /** Font style of the frame label text. `italic` applies `font-style="italic"`. */
  style?: Style1;
  /**
   * Font family used for the frame label text. `sans` = Arial / Helvetica (default).
   * `sans-condensed` = Arial Narrow. `serif` = Georgia / Times New Roman. `serif-elegant` =
   * Palatino Linotype / Book Antiqua. `mono` = Courier New. Values resolve to safe system font
   * stacks on the rendered SVG.
   */
  family?: Family1;
  /**
   * Font size preset for the frame label. `s` = 60 viewBox units, `m` = 89.1 (default), `l` = 120,
   * `xl` = 150. Larger sizes grow the frame bar vertically to fit. Extremely long text auto-shrinks
   * to keep within 4 lines (floor 48).
   */
  size?: Size1;
};

export const frameTextStyles1Schema: Schema<FrameTextStyles1> = s.object<FrameTextStyles1>({
  weight: s.optional(s.lazy(() => weight1Schema)),
  style: s.optional(s.lazy(() => style1Schema)),
  family: s.optional(s.lazy(() => family1Schema)),
  size: s.optional(s.lazy(() => size1Schema)),
});
