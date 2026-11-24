import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { rcaResourceTypeDtoSchema, type RcaResourceTypeDto } from "./rca-resource-type-dto.js";

export type PublicApiRcaResourceRefDto = {
  id: string;
  name?: string;
  type: RcaResourceTypeDto;
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaResourceRefDtoSchema: Schema<PublicApiRcaResourceRefDto> =
  s.object<PublicApiRcaResourceRefDto>(
    {
      id: s.string(),
      name: s.optional(s.string()),
      type: rcaResourceTypeDtoSchema,
      url: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
