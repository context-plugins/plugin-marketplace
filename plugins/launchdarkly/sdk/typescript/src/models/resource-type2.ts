import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResourceType2 = {
  Flags: "flags",
  Segments: "segments",
  AiConfigs: "aiConfigs",
  Metrics: "metrics",
} as const;
export type ResourceType2 = (typeof ResourceType2)[keyof typeof ResourceType2] | (string & {});

export const resourceType2Schema: EnumSchema<ResourceType2> = s.enumOf<ResourceType2>(ResourceType2);
