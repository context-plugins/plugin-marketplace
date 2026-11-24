import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  attributeResourceTypeDtoSchema,
  type AttributeResourceTypeDto,
} from "./attribute-resource-type-dto.js";
import { attributeTypeDtoSchema, type AttributeTypeDto } from "./attribute-type-dto.js";

export type PublicApiCreateAttributeRequestDto = {
  allowedValues?: string[];
  description?: string;
  label: string;
  name: string;
  resourceType: AttributeResourceTypeDto;
  type: AttributeTypeDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateAttributeRequestDtoSchema: Schema<PublicApiCreateAttributeRequestDto> =
  s.object<PublicApiCreateAttributeRequestDto>(
    {
      allowedValues: s.optional(s.array(s.string())),
      description: s.optional(s.string()),
      label: s.string(),
      name: s.string(),
      resourceType: attributeResourceTypeDtoSchema,
      type: attributeTypeDtoSchema,
    },
    { additionalProperties: s.json() },
  );
