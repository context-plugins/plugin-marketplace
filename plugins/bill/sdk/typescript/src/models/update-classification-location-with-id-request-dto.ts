import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update ClassificationLocation request Dto. */
export type UpdateClassificationLocationWithIdRequestDto = {
  /** BILL-generated ID of the location. The value begins with `loc`. */
  id: string;
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
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateClassificationLocationWithIdRequestDtoSchema: Schema<UpdateClassificationLocationWithIdRequestDto> =
  s.object<UpdateClassificationLocationWithIdRequestDto>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
