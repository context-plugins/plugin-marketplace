import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How the monitor presents its User-Agent. `auto` (default) identifies as RendexWatch and retries
 * once with a standard browser identity if the page looks blocked; `identify` always identifies as
 * RendexWatch and never falls back; `stealth` always presents a standard browser identity. See
 * https://rendex.dev/bot.
 */
export const UaMode = {
  Auto: "auto",
  Identify: "identify",
  Stealth: "stealth",
} as const;
export type UaMode = (typeof UaMode)[keyof typeof UaMode] | (string & {});

export const uaModeSchema: EnumSchema<UaMode> = s.enumOf<UaMode>(UaMode);
