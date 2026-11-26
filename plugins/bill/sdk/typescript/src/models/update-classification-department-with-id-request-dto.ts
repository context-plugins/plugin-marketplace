import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update ClassificationDepartment with id request Dto. */
export type UpdateClassificationDepartmentWithIdRequestDto = {
  /** BILL-generated ID of the department. The value begins with `dep`. */
  id: string;
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateClassificationDepartmentWithIdRequestDtoSchema: Schema<UpdateClassificationDepartmentWithIdRequestDto> =
  s.object<UpdateClassificationDepartmentWithIdRequestDto>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
