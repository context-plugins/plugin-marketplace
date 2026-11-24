import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update ClassificationAccountingClass request Dto. */
export type UpdateClassificationAccountingClassWithIdRequestDto = {
  /** BILL-generated ID of the accounting class. The value begins with `cls`. */
  id: string;
  /** Accounting class name */
  name?: string;
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

export const updateClassificationAccountingClassWithIdRequestDtoSchema: Schema<UpdateClassificationAccountingClassWithIdRequestDto> =
  s.object<UpdateClassificationAccountingClassWithIdRequestDto>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
