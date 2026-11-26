import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create an employee */
export type CreateClassificationEmployeeRequestDto = {
  /** Employee first name */
  firstName: string;
  /** Employee last name */
  lastName: string;
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

const createClassificationEmployeeRequestDtoProperties: s.Shape<CreateClassificationEmployeeRequestDto> = {
  firstName: s.string(),
  lastName: s.string(),
  shortName: s.optional(s.string()),
  parentId: s.optional(s.string()),
};

export const createClassificationEmployeeRequestDtoInternalSchema: Schema<CreateClassificationEmployeeRequestDto> =
  s.object<CreateClassificationEmployeeRequestDto>(createClassificationEmployeeRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createClassificationEmployeeRequestDtoSchema: Schema<CreateClassificationEmployeeRequestDto> =
  s.lazySchema(() =>
    s.object<CreateClassificationEmployeeRequestDto>(
      {
        ...createClassificationEmployeeRequestDtoProperties,
        firstName: s.string().check(s.minLength(1)),
        lastName: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
