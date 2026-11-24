import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Alert type for ALERT posts. */
export const AlertType = {
  Covid19: "COVID_19",
} as const;
export type AlertType = (typeof AlertType)[keyof typeof AlertType] | (string & {});

export const alertTypeSchema: EnumSchema<AlertType> = s.enumOf<AlertType>(AlertType);
