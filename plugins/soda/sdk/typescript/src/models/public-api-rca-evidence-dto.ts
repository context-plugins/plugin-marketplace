import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiRcaResourceRefDtoSchema,
  type PublicApiRcaResourceRefDto,
} from "./public-api-rca-resource-ref-dto.js";

export type PublicApiRcaEvidenceDto = {
  kind?: string;
  resource?: PublicApiRcaResourceRefDto;
  text?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiRcaEvidenceDtoSchema: Schema<PublicApiRcaEvidenceDto> =
  s.object<PublicApiRcaEvidenceDto>(
    {
      kind: s.optional(s.string()),
      resource: s.optional(s.lazy(() => publicApiRcaResourceRefDtoSchema)),
      text: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
