import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Font family used for the frame label text. `sans` = Arial / Helvetica (default). `sans-condensed`
 * = Arial Narrow. `serif` = Georgia / Times New Roman. `serif-elegant` = Palatino Linotype / Book
 * Antiqua. `mono` = Courier New. Values resolve to safe system font stacks on the rendered SVG.
 */
export const Family1 = {
  Sans: "sans",
  SansCondensed: "sans-condensed",
  Serif: "serif",
  SerifElegant: "serif-elegant",
  Mono: "mono",
} as const;
export type Family1 = (typeof Family1)[keyof typeof Family1] | (string & {});

export const family1Schema: EnumSchema<Family1> = s.enumOf<Family1>(Family1);
