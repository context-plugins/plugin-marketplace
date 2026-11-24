import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update ClassificationEmployee with id request Dto. */
export type UpdateClassificationEmployeeWithIdRequestDto = {
  /** BILL-generated ID of the employee. The value begins with `emp`. */
  id: string;
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

export const updateClassificationEmployeeWithIdRequestDtoSchema: Schema<UpdateClassificationEmployeeWithIdRequestDto> =
  s.object<UpdateClassificationEmployeeWithIdRequestDto>(
    {
      id: s.string(),
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      shortName: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
