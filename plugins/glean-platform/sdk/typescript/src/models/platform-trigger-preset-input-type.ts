import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of a preset input. */
export const PlatformTriggerPresetInputType = {
  Picklist: "PICKLIST",
  Text: "TEXT",
  User: "USER",
} as const;
export type PlatformTriggerPresetInputType =
  | (typeof PlatformTriggerPresetInputType)[keyof typeof PlatformTriggerPresetInputType]
  | (string & {});

export const platformTriggerPresetInputTypeSchema: EnumSchema<PlatformTriggerPresetInputType> =
  s.enumOf<PlatformTriggerPresetInputType>(PlatformTriggerPresetInputType);
