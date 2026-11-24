import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1MiscTwitterRetweetResponse = {
  success: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1MiscTwitterRetweetResponseSchema: Schema<ApiV1MiscTwitterRetweetResponse> =
  s.object<ApiV1MiscTwitterRetweetResponse>(
    {
      success: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
