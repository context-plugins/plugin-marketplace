import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { step1Schema, type Step1 } from "./unions/step1.js";

export type ScrollRequest = {
  x: number;
  y: number;
  /** Horizontal scroll amount @default 0 */
  scrollX?: number;
  /** Vertical scroll amount @default 0 */
  scrollY?: number;
  /** Optional step size for scroll movements. If not provided, movement will be continuous. */
  step?: Step1;
};

export const scrollRequestSchema: Schema<ScrollRequest> = s.object<ScrollRequest>({
  x: s.int(),
  y: s.int(),
  scrollX: s.defaulted(s.int(), 0),
  scrollY: s.defaulted(s.int(), 0),
  step: s.optional(s.lazy(() => step1Schema)),
  _keysMap: {
    scrollX: "scroll_x",
    scrollY: "scroll_y",
  },
});
