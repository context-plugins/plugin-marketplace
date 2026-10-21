import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The model of the terminal. For example for a PAX A920, this field's value will be `A920`. */
export const TerminalModel = {
  A35: "A35",
  A77: "A77",
  A920: "A920",
  A920Pro: "A920Pro",
  Im30: "IM30",
  Tap: "Tap",
} as const;
export type TerminalModel = (typeof TerminalModel)[keyof typeof TerminalModel] | (string & {});

export const terminalModelSchema: EnumSchema<TerminalModel> = s.enumOf<TerminalModel>(TerminalModel);
