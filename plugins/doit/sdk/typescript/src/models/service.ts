import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Commitment type this projection belongs to (`compute` or `database`). */
export const Service = {
  Compute: "compute",
  Database: "database",
} as const;
export type Service = (typeof Service)[keyof typeof Service] | (string & {});

export const serviceSchema: EnumSchema<Service> = s.enumOf<Service>(Service);
