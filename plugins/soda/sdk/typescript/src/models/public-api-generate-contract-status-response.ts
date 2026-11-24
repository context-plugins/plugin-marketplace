import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  generateContractOperationStateDtoSchema,
  type GenerateContractOperationStateDto,
} from "./generate-contract-operation-state-dto.js";
import {
  publicApiGenerateContractStatusResponseDatasetGenerationStatusSchema,
  type PublicApiGenerateContractStatusResponseDatasetGenerationStatus,
} from "./public-api-generate-contract-status-response-dataset-generation-status.js";

export type PublicApiGenerateContractStatusResponse = {
  created?: Date;
  datasets?: PublicApiGenerateContractStatusResponseDatasetGenerationStatus[];
  operationId?: string;
  state?: GenerateContractOperationStateDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiGenerateContractStatusResponseSchema: Schema<PublicApiGenerateContractStatusResponse> =
  s.object<PublicApiGenerateContractStatusResponse>(
    {
      created: s.optional(s.dateTime()),
      datasets: s.optional(
        s.array(s.lazy(() => publicApiGenerateContractStatusResponseDatasetGenerationStatusSchema)),
      ),
      operationId: s.optional(s.string()),
      state: s.optional(s.lazy(() => generateContractOperationStateDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
