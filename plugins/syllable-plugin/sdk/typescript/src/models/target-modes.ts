import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Available modes (communication methods) for channel targets. */
export const TargetModes = {
  Voice: "voice",
  Chat: "chat",
  Sms: "sms",
  Email: "email",
  Whatsapp: "whatsapp",
} as const;
export type TargetModes = (typeof TargetModes)[keyof typeof TargetModes] | (string & {});

export const targetModesSchema: EnumSchema<TargetModes> = s.enumOf<TargetModes>(TargetModes);
