import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a location (name updated) */
export type UpdateClassificationLocationRequestDto = {
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

export const updateClassificationLocationRequestDtoSchema: Schema<UpdateClassificationLocationRequestDto> =
  s.object<UpdateClassificationLocationRequestDto>(
    {
      name: s.optional(s.string()),
      shortName: s.optional(s.string()),
      description: s.optional(s.string()),
      parentId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
