import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contractContentDtoSchema, type ContractContentDto } from "./contract-content-dto.js";

export type PublicApiListContractsResponse = {
  content: ContractContentDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListContractsResponseSchema: Schema<PublicApiListContractsResponse> =
  s.object<PublicApiListContractsResponse>(
    {
      content: s.array(s.lazy(() => contractContentDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
