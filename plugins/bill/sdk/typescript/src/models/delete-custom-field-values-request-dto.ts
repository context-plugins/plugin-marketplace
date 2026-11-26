import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Delete custom field values request */
export type DeleteCustomFieldValuesRequestDto = {
  /** List of custom field value IDs or UUIDs */
  customFieldValueIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const deleteCustomFieldValuesRequestDtoProperties: s.Shape<DeleteCustomFieldValuesRequestDto> = {
  customFieldValueIds: s.array(s.string()),
};

export const deleteCustomFieldValuesRequestDtoInternalSchema: Schema<DeleteCustomFieldValuesRequestDto> =
  s.object<DeleteCustomFieldValuesRequestDto>(deleteCustomFieldValuesRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const deleteCustomFieldValuesRequestDtoSchema: Schema<DeleteCustomFieldValuesRequestDto> =
  s.lazySchema(() =>
    s.object<DeleteCustomFieldValuesRequestDto>(
      {
        ...deleteCustomFieldValuesRequestDtoProperties,
        customFieldValueIds: s.array(s.string()).check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
  );
