import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const RuntimeProvider = {
  Hud: "hud",
  Modal: "modal",
} as const;
export type RuntimeProvider = (typeof RuntimeProvider)[keyof typeof RuntimeProvider] | (string & {});

export const runtimeProviderSchema: EnumSchema<RuntimeProvider> = s.enumOf<RuntimeProvider>(RuntimeProvider);
