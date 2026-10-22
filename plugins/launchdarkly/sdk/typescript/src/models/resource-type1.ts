import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the resource that failed to link. */
export const ResourceType1 = {
  Flag: "flag",
  Segment: "segment",
  Metric: "metric",
  AiConfig: "aiConfig",
} as const;
export type ResourceType1 = (typeof ResourceType1)[keyof typeof ResourceType1] | (string & {});

export const resourceType1Schema: EnumSchema<ResourceType1> = s.enumOf<ResourceType1>(ResourceType1);
