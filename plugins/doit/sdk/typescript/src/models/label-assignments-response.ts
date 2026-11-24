import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { labelAssignmentObjectSchema, type LabelAssignmentObject } from "./label-assignment-object.js";

/** Response containing the list of objects assigned to a label. */
export type LabelAssignmentsResponse = {
  /** Array of objects currently assigned to the label. */
  assignments?: LabelAssignmentObject[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelAssignmentsResponseSchema: Schema<LabelAssignmentsResponse> =
  s.object<LabelAssignmentsResponse>(
    {
      assignments: s.optional(s.array(s.lazy(() => labelAssignmentObjectSchema))),
    },
    { additionalProperties: s.json() },
  );
