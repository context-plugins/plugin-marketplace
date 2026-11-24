import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. The cluster engine. */
export const Engine = {
  EngineUnspecified: "ENGINE_UNSPECIFIED",
  Default: "DEFAULT",
  Lightning: "LIGHTNING",
} as const;
export type Engine = (typeof Engine)[keyof typeof Engine] | (string & {});

export const engineSchema: EnumSchema<Engine> = s.enumOf<Engine>(Engine);
