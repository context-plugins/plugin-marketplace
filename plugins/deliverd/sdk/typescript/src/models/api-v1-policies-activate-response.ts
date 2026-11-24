import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PoliciesActivateResponse = {
  id: string;
  version: number;
  active: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1PoliciesActivateResponseSchema: Schema<ApiV1PoliciesActivateResponse> =
  s.object<ApiV1PoliciesActivateResponse>(
    {
      id: s.string(),
      version: s.float64(),
      active: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
