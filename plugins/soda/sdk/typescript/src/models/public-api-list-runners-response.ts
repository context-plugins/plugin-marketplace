import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicApiRunnerDtoSchema, type PublicApiRunnerDto } from "./public-api-runner-dto.js";

export type PublicApiListRunnersResponse = {
  content: PublicApiRunnerDto[];
  first: boolean;
  last: boolean;
  number: number;
  size: number;
  totalElements: number;
  totalPages: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiListRunnersResponseSchema: Schema<PublicApiListRunnersResponse> =
  s.object<PublicApiListRunnersResponse>(
    {
      content: s.array(s.lazy(() => publicApiRunnerDtoSchema)),
      first: s.boolean(),
      last: s.boolean(),
      number: s.int(),
      size: s.int(),
      totalElements: s.int(),
      totalPages: s.int(),
    },
    { additionalProperties: s.json() },
  );
