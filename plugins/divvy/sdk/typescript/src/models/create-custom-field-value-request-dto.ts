import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a custom field value (value added to existing list) */
export type CreateCustomFieldValueRequestDto = {
  /** List of custom field values */
  values: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createCustomFieldValueRequestDtoProperties: s.Shape<CreateCustomFieldValueRequestDto> = {
  values: s.array(s.string()),
};

export const createCustomFieldValueRequestDtoInternalSchema: Schema<CreateCustomFieldValueRequestDto> =
  s.object<CreateCustomFieldValueRequestDto>(createCustomFieldValueRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const createCustomFieldValueRequestDtoSchema: Schema<CreateCustomFieldValueRequestDto> = s.lazySchema(
  () =>
    s.object<CreateCustomFieldValueRequestDto>(
      {
        ...createCustomFieldValueRequestDtoProperties,
        values: s.array(s.string()).check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
);
