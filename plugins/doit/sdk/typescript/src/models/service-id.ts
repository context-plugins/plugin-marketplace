import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ServiceId = {
  Compute: "compute",
  Database: "database",
} as const;
export type ServiceId = (typeof ServiceId)[keyof typeof ServiceId] | (string & {});

export const serviceIdSchema: EnumSchema<ServiceId> = s.enumOf<ServiceId>(ServiceId);
