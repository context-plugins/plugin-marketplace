import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** DTO representing a custom field value response. */
export type CustomFieldValueResponseDto = {
  /**
   * BILL-generated ID of the custom field value
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the custom field value */
  uuid?: string;
  /** Custom field value */
  value?: string;
  /** Set as `true` if the custom field value is retired */
  deleted?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldValueResponseDtoSchema: Schema<CustomFieldValueResponseDto> =
  s.object<CustomFieldValueResponseDto>(
    {
      id: s.optional(s.string()),
      uuid: s.optional(s.string()),
      value: s.optional(s.string()),
      deleted: s.optional(s.boolean()),
    },
    { additionalProperties: s.json() },
  );
