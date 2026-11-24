import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contractVersionDtoSchema, type ContractVersionDto } from "./contract-version-dto.js";

export type PublicApiListContractVersionsResponse = {
  content: ContractVersionDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListContractVersionsResponseSchema: Schema<PublicApiListContractVersionsResponse> =
  s.object<PublicApiListContractVersionsResponse>(
    {
      content: s.array(s.lazy(() => contractVersionDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
