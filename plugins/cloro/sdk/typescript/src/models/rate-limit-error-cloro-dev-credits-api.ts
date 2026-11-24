import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error2CloroDevCreditsApiSchema,
  type Error2CloroDevCreditsApi,
} from "./error2-cloro-dev-credits-api.js";

export type RateLimitErrorCloroDevCreditsApi = {
  success?: boolean;
  error?: Error2CloroDevCreditsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitErrorCloroDevCreditsApiSchema: Schema<RateLimitErrorCloroDevCreditsApi> =
  s.object<RateLimitErrorCloroDevCreditsApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error2CloroDevCreditsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
