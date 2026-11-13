import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of object to filter activities by. Must be one of "project", "item" (task), "note"
 * (comment), or "section". When specified with `object_id`, returns activities for that specific
 * object.
 */
export const ObjectType = {
  Project: "project",
  Item: "item",
  Note: "note",
  Section: "section",
} as const;
export type ObjectType = (typeof ObjectType)[keyof typeof ObjectType] | (string & {});

export const objectTypeSchema: EnumSchema<ObjectType> = s.enumOf<ObjectType>(ObjectType);
