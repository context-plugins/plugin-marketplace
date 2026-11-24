import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { registryDetailResponseSchema, type RegistryDetailResponse } from "./registry-detail-response.js";

export type PaginatedResponseRegistryDetailResponse = {
  items: RegistryDetailResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const paginatedResponseRegistryDetailResponseSchema: Schema<PaginatedResponseRegistryDetailResponse> =
  s.object<PaginatedResponseRegistryDetailResponse>(
    {
      items: s.array(s.lazy(() => registryDetailResponseSchema)),
      total: s.int(),
      limit: s.int(),
      offset: s.int(),
    },
    { additionalProperties: s.json() },
  );
