import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeContentDtoSchema, type AttributeContentDto } from "./attribute-content-dto.js";

export type PublicApiListAttributesResponse = {
  content: AttributeContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListAttributesResponseSchema: Schema<PublicApiListAttributesResponse> =
  s.object<PublicApiListAttributesResponse>(
    {
      content: s.array(s.lazy(() => attributeContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
