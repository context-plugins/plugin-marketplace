import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a department */
export type CreateClassificationDepartmentRequestDto = {
  /** Department name */
  name: string;
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

const createClassificationDepartmentRequestDtoProperties: s.Shape<CreateClassificationDepartmentRequestDto> =
  {
    name: s.string(),
    shortName: s.optional(s.string()),
    description: s.optional(s.string()),
    parentId: s.optional(s.string()),
  };

export const createClassificationDepartmentRequestDtoInternalSchema: Schema<CreateClassificationDepartmentRequestDto> =
  s.object<CreateClassificationDepartmentRequestDto>(createClassificationDepartmentRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createClassificationDepartmentRequestDtoSchema: Schema<CreateClassificationDepartmentRequestDto> =
  s.lazySchema(() =>
    s.object<CreateClassificationDepartmentRequestDto>(
      {
        ...createClassificationDepartmentRequestDtoProperties,
        name: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
