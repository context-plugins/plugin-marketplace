import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error3CloroDevStatesApiSchema,
  type Error3CloroDevStatesApi,
} from "./error3-cloro-dev-states-api.js";

export type RateLimitErrorErrorCloroDevStatesApi = {
  success?: boolean;
  error?: Error3CloroDevStatesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const rateLimitErrorErrorCloroDevStatesApiSchema: Schema<RateLimitErrorErrorCloroDevStatesApi> =
  s.object<RateLimitErrorErrorCloroDevStatesApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error3CloroDevStatesApiSchema)),
    },
    { additionalProperties: s.json() },
  );
