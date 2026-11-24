import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  generateContractOperationStateDtoSchema,
  type GenerateContractOperationStateDto,
} from "./generate-contract-operation-state-dto.js";

export type PublicApiCreateSkeletonContractStatusResponse = {
  created?: Date;
  datasetId?: string;
  datasetQualifiedName?: string;
  operationId?: string;
  state?: GenerateContractOperationStateDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateSkeletonContractStatusResponseSchema: Schema<PublicApiCreateSkeletonContractStatusResponse> =
  s.object<PublicApiCreateSkeletonContractStatusResponse>(
    {
      created: s.optional(s.dateTime()),
      datasetId: s.optional(s.string()),
      datasetQualifiedName: s.optional(s.string()),
      operationId: s.optional(s.string()),
      state: s.optional(s.lazy(() => generateContractOperationStateDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
