import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** How many connector types each scope offers */
export type RegistryCountsByScope = {
  team?: number;
  personal?: number;
};

export const registryCountsByScopeSchema: Schema<RegistryCountsByScope> = s.object<RegistryCountsByScope>({
  team: s.optional(s.int()),
  personal: s.optional(s.int()),
});
