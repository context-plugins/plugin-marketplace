import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiUpdateAttributeRequestDto = {
  allowedValues?: string[];
  description?: string;
  label?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateAttributeRequestDtoSchema: Schema<PublicApiUpdateAttributeRequestDto> =
  s.object<PublicApiUpdateAttributeRequestDto>(
    {
      allowedValues: s.optional(s.array(s.string())),
      description: s.optional(s.string()),
      label: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
