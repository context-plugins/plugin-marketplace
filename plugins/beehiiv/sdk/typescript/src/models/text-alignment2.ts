import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Legacy paragraph alignment field. Use `textAlignment` for new integrations. */
export const TextAlignment2 = {
  Left: "left",
  Center: "center",
  Right: "right",
} as const;
export type TextAlignment2 = (typeof TextAlignment2)[keyof typeof TextAlignment2] | (string & {});

export const textAlignment2Schema: EnumSchema<TextAlignment2> = s.enumOf<TextAlignment2>(TextAlignment2);
