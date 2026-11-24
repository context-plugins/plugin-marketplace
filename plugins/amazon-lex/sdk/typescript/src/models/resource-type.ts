import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of resource to export. */
export const ResourceType = {
  Bot: "BOT",
  Intent: "INTENT",
  SlotType: "SLOT_TYPE",
} as const;
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType] | (string & {});

export const resourceTypeSchema: EnumSchema<ResourceType> = s.enumOf<ResourceType>(ResourceType);
