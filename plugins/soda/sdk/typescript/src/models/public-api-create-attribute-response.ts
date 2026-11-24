import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeContentDtoSchema, type AttributeContentDto } from "./attribute-content-dto.js";

export type PublicApiCreateAttributeResponse = {
  attribute: AttributeContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateAttributeResponseSchema: Schema<PublicApiCreateAttributeResponse> =
  s.object<PublicApiCreateAttributeResponse>(
    {
      attribute: attributeContentDtoSchema,
    },
    { additionalProperties: s.json() },
  );
