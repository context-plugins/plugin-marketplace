import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Content type */
export const ContentType5 = {
  UsageReport: "Usage Report",
  CostReport: "Cost Report",
} as const;
export type ContentType5 = (typeof ContentType5)[keyof typeof ContentType5] | (string & {});

export const contentType5Schema: EnumSchema<ContentType5> = s.enumOf<ContentType5>(ContentType5);
