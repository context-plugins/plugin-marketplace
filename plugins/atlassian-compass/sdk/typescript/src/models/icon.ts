import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The icon for the custom event. */
export const Icon = {
  Info: "INFO",
  Warning: "WARNING",
  Checkpoint: "CHECKPOINT",
} as const;
export type Icon = (typeof Icon)[keyof typeof Icon] | (string & {});

export const iconSchema: EnumSchema<Icon> = s.enumOf<Icon>(Icon);
