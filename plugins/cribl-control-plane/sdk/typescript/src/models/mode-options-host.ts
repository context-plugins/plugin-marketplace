import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Select level of detail for host metrics */
export const ModeOptionsHost = {
  Basic: "basic",
  All: "all",
  Custom: "custom",
  Disabled: "disabled",
} as const;
export type ModeOptionsHost = (typeof ModeOptionsHost)[keyof typeof ModeOptionsHost] | (string & {});

export const modeOptionsHostSchema: EnumSchema<ModeOptionsHost> = s.enumOf<ModeOptionsHost>(ModeOptionsHost);
