import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The mode of the channel target (must match one of the supported modes of the associated channel)
 */
export const TargetModes1 = {
  Voice: "voice",
  Chat: "chat",
  Sms: "sms",
  Email: "email",
  Whatsapp: "whatsapp",
} as const;
export type TargetModes1 = (typeof TargetModes1)[keyof typeof TargetModes1] | (string & {});

export const targetModes1Schema: EnumSchema<TargetModes1> = s.enumOf<TargetModes1>(TargetModes1);
