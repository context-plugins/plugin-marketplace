import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Always `monitoring.incident`. */
export const Type42 = {
  MonitoringIncident: "monitoring.incident",
} as const;
export type Type42 = (typeof Type42)[keyof typeof Type42] | (string & {});

export const type42Schema: EnumSchema<Type42> = s.enumOf<Type42>(Type42);
