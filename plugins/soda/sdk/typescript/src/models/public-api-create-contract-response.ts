import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contractContentDtoSchema, type ContractContentDto } from "./contract-content-dto.js";

export type PublicApiCreateContractResponse = {
  contract?: ContractContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiCreateContractResponseSchema: Schema<PublicApiCreateContractResponse> =
  s.object<PublicApiCreateContractResponse>(
    {
      contract: s.optional(s.lazy(() => contractContentDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
