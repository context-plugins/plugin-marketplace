import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update an employee (lastName updated) */
export type UpdateClassificationEmployeeRequestDto = {
  /** Employee first name */
  firstName?: string;
  /** Employee last name */
  lastName?: string;
  /** Employee short name */
  shortName?: string;
  /**
   * BILL-generated ID of the parent employee. You can set this field if this employee is a child
   * object.
   */
  parentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateClassificationEmployeeRequestDtoSchema: Schema<UpdateClassificationEmployeeRequestDto> =
  s.object<UpdateClassificationEmployeeRequestDto>(
    {
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      shortName: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
