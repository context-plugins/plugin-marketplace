import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ClassificationEmployee response Dto. */
export type ClassificationEmployeeResponseDto = {
  /** BILL-generated ID of the employee. The value begins with `emp`. */
  id?: string;
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
  /** Set as `true` if the employee is archived */
  archived?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationEmployeeResponseDtoSchema: Schema<ClassificationEmployeeResponseDto> =
  s.object<ClassificationEmployeeResponseDto>(
    {
      id: s.optional(s.string()),
      firstName: s.optional(s.string()),
      lastName: s.optional(s.string()),
      shortName: s.optional(s.string()),
      parentId: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
