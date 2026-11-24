import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PoliciesVersionsResponse = {
  id: string;
  version: number;
  active: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesVersionsResponseSchema: Schema<ApiV1PoliciesVersionsResponse> =
  s.object<ApiV1PoliciesVersionsResponse>(
    {
      id: s.string(),
      version: s.float64(),
      active: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
