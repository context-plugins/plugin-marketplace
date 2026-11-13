import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Object type for the IDs to translate. */
export const ObjName = {
  Sections: "sections",
  Tasks: "tasks",
  Comments: "comments",
  Reminders: "reminders",
  LocationReminders: "location_reminders",
  Projects: "projects",
} as const;
export type ObjName = (typeof ObjName)[keyof typeof ObjName] | (string & {});

export const objNameSchema: EnumSchema<ObjName> = s.enumOf<ObjName>(ObjName);
