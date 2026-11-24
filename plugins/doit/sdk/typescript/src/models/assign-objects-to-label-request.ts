import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelAssignmentObjectSchema, type LabelAssignmentObject } from "./label-assignment-object.js";

/** Request to assign or remove objects from a label. */
export type AssignObjectsToLabelRequest = {
  /** Array of objects to assign to the label. */
  add?: LabelAssignmentObject[];
  /** Array of objects to unassign from the label. */
  remove?: LabelAssignmentObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const assignObjectsToLabelRequestSchema: Schema<AssignObjectsToLabelRequest> =
  s.object<AssignObjectsToLabelRequest>(
    {
      add: s.optional(s.array(s.lazy(() => labelAssignmentObjectSchema))),
      remove: s.optional(s.array(s.lazy(() => labelAssignmentObjectSchema))),
    },
    { additionalProperties: s.json() },
  );
