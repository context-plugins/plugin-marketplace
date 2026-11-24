import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Optional. Indicates if the user archived this incident. */
export const Observability = {
  ObservabilityUnspecified: "OBSERVABILITY_UNSPECIFIED",
  Active: "ACTIVE",
  Archived: "ARCHIVED",
} as const;
export type Observability = (typeof Observability)[keyof typeof Observability] | (string & {});

export const observabilitySchema: EnumSchema<Observability> = s.enumOf<Observability>(Observability);
