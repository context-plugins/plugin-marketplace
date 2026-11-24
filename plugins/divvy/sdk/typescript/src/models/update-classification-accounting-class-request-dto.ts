import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update an accounting class (description updated) */
export type UpdateClassificationAccountingClassRequestDto = {
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

export const updateClassificationAccountingClassRequestDtoSchema: Schema<UpdateClassificationAccountingClassRequestDto> =
  s.object<UpdateClassificationAccountingClassRequestDto>(
    {
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
