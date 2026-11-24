import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a location */
export type CreateClassificationLocationRequestDto = {
  /** Location name */
  name: string;
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

const createClassificationLocationRequestDtoProperties: s.Shape<CreateClassificationLocationRequestDto> = {
  name: s.string(),
  shortName: s.optional(s.string()),
  description: s.optional(s.string()),
  parentId: s.optional(s.string()),
};

export const createClassificationLocationRequestDtoInternalSchema: Schema<CreateClassificationLocationRequestDto> =
  s.object<CreateClassificationLocationRequestDto>(createClassificationLocationRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createClassificationLocationRequestDtoSchema: Schema<CreateClassificationLocationRequestDto> =
  s.lazySchema(() =>
    s.object<CreateClassificationLocationRequestDto>(
      {
        ...createClassificationLocationRequestDtoProperties,
        name: s.string().check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
