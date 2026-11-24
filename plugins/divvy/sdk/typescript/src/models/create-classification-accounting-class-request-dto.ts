import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create an accounting class */
export type CreateClassificationAccountingClassRequestDto = {
  /** Accounting class name */
  name: string;
  /** Accounting class short name */
  shortName?: string;
  /** Accounting class description */
  description?: string;
  /**
   * BILL-generated ID of the parent accounting class. You can set this field if this accounting
   * class is a child object.
   */
  parentId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createClassificationAccountingClassRequestDtoProperties: s.Shape<CreateClassificationAccountingClassRequestDto> =
  {
    name: s.string(),
    shortName: s.optional(s.string()),
    description: s.optional(s.string()),
    parentId: s.optional(s.string()),
  };

export const createClassificationAccountingClassRequestDtoInternalSchema: Schema<CreateClassificationAccountingClassRequestDto> =
  s.object<CreateClassificationAccountingClassRequestDto>(
    createClassificationAccountingClassRequestDtoProperties,
    { additionalProperties: s.json() },
  );

export const createClassificationAccountingClassRequestDtoSchema: Schema<CreateClassificationAccountingClassRequestDto> =
  s.lazySchema(() =>
    s.object<CreateClassificationAccountingClassRequestDto>(
      {
        ...createClassificationAccountingClassRequestDtoProperties,
        name: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
