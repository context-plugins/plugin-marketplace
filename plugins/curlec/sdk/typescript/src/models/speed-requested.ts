import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** normal: 5-7 business days. optimum: instant if available, falls back to normal. */
export const SpeedRequested = {
  Normal: "normal",
  Optimum: "optimum",
} as const;
export type SpeedRequested = (typeof SpeedRequested)[keyof typeof SpeedRequested] | (string & {});

export const speedRequestedSchema: EnumSchema<SpeedRequested> = s.enumOf<SpeedRequested>(SpeedRequested);
