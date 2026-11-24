import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeContentDtoSchema, type AttributeContentDto } from "./attribute-content-dto.js";

export type PublicApiUpdateAttributeResponse = {
  attribute: AttributeContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiUpdateAttributeResponseSchema: Schema<PublicApiUpdateAttributeResponse> =
  s.object<PublicApiUpdateAttributeResponse>(
    {
      attribute: attributeContentDtoSchema,
    },
    { additionalProperties: s.json() },
  );
