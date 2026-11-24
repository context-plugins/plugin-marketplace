import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { apiSchema, type Api } from "./api.js";

export type GetApiResponse = {
  api?: Api;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getApiResponseSchema: Schema<GetApiResponse> = s.object<GetApiResponse>(
  {
    api: s.optional(s.lazy(() => apiSchema)),
  },
  { additionalProperties: s.json() },
);
