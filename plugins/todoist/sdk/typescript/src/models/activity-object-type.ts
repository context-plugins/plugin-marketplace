import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ActivityObjectType = {
  Project: "project",
  Item: "item",
  Note: "note",
  Section: "section",
} as const;
export type ActivityObjectType = (typeof ActivityObjectType)[keyof typeof ActivityObjectType] | (string & {});

export const activityObjectTypeSchema: EnumSchema<ActivityObjectType> =
  s.enumOf<ActivityObjectType>(ActivityObjectType);
