import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceType = {
  Flag: "flag",
  Segment: "segment",
  Metric: "metric",
  AiConfig: "aiConfig",
} as const;
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType] | (string & {});

export const resourceTypeSchema: EnumSchema<ResourceType> = s.enumOf<ResourceType>(ResourceType);
