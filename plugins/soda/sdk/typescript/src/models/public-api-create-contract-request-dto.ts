import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiCreateContractRequestDto = {
  contents: string;
  datasetId?: string;
  datasetQualifiedName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateContractRequestDtoSchema: Schema<PublicApiCreateContractRequestDto> =
  s.object<PublicApiCreateContractRequestDto>(
    {
      contents: s.string(),
      datasetId: s.optional(s.string()),
      datasetQualifiedName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
