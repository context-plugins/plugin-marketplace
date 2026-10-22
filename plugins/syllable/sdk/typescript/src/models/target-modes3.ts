import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The mode of the channel target */
export const TargetModes3 = {
  Voice: "voice",
  Chat: "chat",
  Sms: "sms",
  Email: "email",
  Whatsapp: "whatsapp",
} as const;
export type TargetModes3 = (typeof TargetModes3)[keyof typeof TargetModes3] | (string & {});

export const targetModes3Schema: EnumSchema<TargetModes3> = s.enumOf<TargetModes3>(TargetModes3);
