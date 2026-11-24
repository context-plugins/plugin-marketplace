import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Mode = {
  LocalDockerLayerCache: "LOCAL_DOCKER_LAYER_CACHE",
  LocalSourceCache: "LOCAL_SOURCE_CACHE",
  LocalCustomCache: "LOCAL_CUSTOM_CACHE",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
