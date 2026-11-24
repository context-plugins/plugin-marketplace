import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Sandbox runtime provider for HUD-managed instances. */
export const RuntimeProviderName = {
  Ec2: "ec2",
  Modal: "modal",
} as const;
export type RuntimeProviderName =
  | (typeof RuntimeProviderName)[keyof typeof RuntimeProviderName]
  | (string & {});

export const runtimeProviderNameSchema: EnumSchema<RuntimeProviderName> =
  s.enumOf<RuntimeProviderName>(RuntimeProviderName);
