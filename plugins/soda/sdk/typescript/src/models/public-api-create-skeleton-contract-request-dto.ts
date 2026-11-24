import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PublicApiCreateSkeletonContractRequestDto = {
  datasetId?: string;
  datasetQualifiedName?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateSkeletonContractRequestDtoSchema: Schema<PublicApiCreateSkeletonContractRequestDto> =
  s.object<PublicApiCreateSkeletonContractRequestDto>(
    {
      datasetId: s.optional(s.string()),
      datasetQualifiedName: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
