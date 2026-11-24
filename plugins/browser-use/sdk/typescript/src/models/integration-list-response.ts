import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { integrationResponseSchema, type IntegrationResponse } from "./integration-response.js";

/** Paginated response for integrations list. */
export type IntegrationListResponse = {
  integrations: IntegrationResponse[];
  total: number;
  limit: number;
  offset: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integrationListResponseSchema: Schema<IntegrationListResponse> =
  s.object<IntegrationListResponse>(
    {
      integrations: s.array(s.lazy(() => integrationResponseSchema)),
      total: s.int(),
      limit: s.int(),
      offset: s.int(),
    },
    { additionalProperties: s.json() },
  );
