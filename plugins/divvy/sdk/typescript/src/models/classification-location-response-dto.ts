import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** ClassificationLocation response Dto. */
export type ClassificationLocationResponseDto = {
  /** BILL-generated ID of the location. The value begins with `loc`. */
  id?: string;
  /** Location name */
  name?: string;
  /** Location short name */
  shortName?: string;
  /** Location description */
  description?: string;
  /**
   * BILL-generated ID of the parent location. You can set this field if this location is a child
   * object.
   */
  parentId?: string;
  /** Set as `true` if the location is archived */
  archived?: boolean;
  createdTime?: Date;
  /** Updated date and time */
  updatedTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classificationLocationResponseDtoSchema: Schema<ClassificationLocationResponseDto> =
  s.object<ClassificationLocationResponseDto>(
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
