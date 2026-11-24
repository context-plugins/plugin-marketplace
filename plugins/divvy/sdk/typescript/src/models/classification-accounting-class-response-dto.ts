import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ClassificationAccountingClass response Dto. */
export type ClassificationAccountingClassResponseDto = {
  /** BILL-generated ID of the accounting class. The value begins with `cls`. */
  id?: string;
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
  /** Set as `true` if the accounting class is archived */
  archived?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationAccountingClassResponseDtoSchema: Schema<ClassificationAccountingClassResponseDto> =
  s.object<ClassificationAccountingClassResponseDto>(
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
