import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageProjectIdentityResponse = {
  enabled: boolean;
  protectedFormCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageProjectIdentityResponseSchema: Schema<ApiV1ManageProjectIdentityResponse> =
  s.object<ApiV1ManageProjectIdentityResponse>(
    {
      enabled: s.boolean(),
      protectedFormCount: s.int(),
    },
    { additionalProperties: s.json() },
  );
