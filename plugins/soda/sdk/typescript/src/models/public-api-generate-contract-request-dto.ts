import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiGenerateContractRequestDto = {
  datasetIds?: string[];
  datasetQualifiedNames?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiGenerateContractRequestDtoSchema: Schema<PublicApiGenerateContractRequestDto> =
  s.object<PublicApiGenerateContractRequestDto>(
    {
      datasetIds: s.optional(s.array(s.string())),
      datasetQualifiedNames: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
