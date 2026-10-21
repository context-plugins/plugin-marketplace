import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Code = {
  DesktopOffline: "DESKTOP_OFFLINE",
  DesktopUnclaimed: "DESKTOP_UNCLAIMED",
  DesktopOwnedByOtherDevice: "DESKTOP_OWNED_BY_OTHER_DEVICE",
} as const;
export type Code = (typeof Code)[keyof typeof Code] | (string & {});

export const codeSchema: EnumSchema<Code> = s.enumOf<Code>(Code);
