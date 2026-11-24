import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contractContentDtoSchema, type ContractContentDto } from "./contract-content-dto.js";

export type PublicApiPublishContractResponse = {
  contract?: ContractContentDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiPublishContractResponseSchema: Schema<PublicApiPublishContractResponse> =
  s.object<PublicApiPublishContractResponse>(
    {
      contract: s.optional(s.lazy(() => contractContentDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
