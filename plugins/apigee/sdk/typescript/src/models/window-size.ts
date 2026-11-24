import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Time buckets to group the stats by. */
export const WindowSize = {
  WindowSizeUnspecified: "WINDOW_SIZE_UNSPECIFIED",
  Minute: "MINUTE",
  Hour: "HOUR",
  Day: "DAY",
  Month: "MONTH",
} as const;
export type WindowSize = (typeof WindowSize)[keyof typeof WindowSize] | (string & {});

export const windowSizeSchema: EnumSchema<WindowSize> = s.enumOf<WindowSize>(WindowSize);
