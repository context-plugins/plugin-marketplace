import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { objectTypeSchema, type ObjectType } from "./object-type.js";

/** Object identifier and type used for label assignments. */
export type LabelAssignmentObject = {
  /** The ID of the object to assign/unassign. */
  objectId: string;
  /** The type of the object. */
  objectType: ObjectType;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelAssignmentObjectSchema: Schema<LabelAssignmentObject> = s.object<LabelAssignmentObject>(
  {
    objectId: s.string(),
    objectType: objectTypeSchema,
  },
  { additionalProperties: s.json() },
);
