import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ClassificationDepartment response Dto. */
export type ClassificationDepartmentResponseDto = {
  /** BILL-generated ID of the department. The value begins with `0de`. */
  id?: string;
  /** Department name */
  name?: string;
  /** Department short name */
  shortName?: string;
  /** Department description */
  description?: string;
  /**
   * BILL-generated ID of the parent department. You can set this field if this department is a
   * child object.
   */
  parentId?: string;
  /** Set as `true` if the department is archived */
  archived?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationDepartmentResponseDtoSchema: Schema<ClassificationDepartmentResponseDto> =
  s.object<ClassificationDepartmentResponseDto>(
    {
      id: s.optional(s.string()),
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
      archived: s.optional(s.boolean()),
      createdTime: s.optional(s.dateTime()),
      updatedTime: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
