import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The brand of the terminal. */
export const TerminalBrand = {
  Pax: "PAX",
  Tap: "Tap",
} as const;
export type TerminalBrand = (typeof TerminalBrand)[keyof typeof TerminalBrand] | (string & {});

export const terminalBrandSchema: EnumSchema<TerminalBrand> = s.enumOf<TerminalBrand>(TerminalBrand);
