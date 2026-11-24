import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  error1CloroDevCreditsApiSchema,
  type Error1CloroDevCreditsApi,
} from "./error1-cloro-dev-credits-api.js";

export type InternalErrorErrorCloroDevCreditsApi = {
  success?: boolean;
  error?: Error1CloroDevCreditsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const internalErrorErrorCloroDevCreditsApiSchema: Schema<InternalErrorErrorCloroDevCreditsApi> =
  s.object<InternalErrorErrorCloroDevCreditsApi>(
    {
      success: s.optional(s.boolean()),
      error: s.optional(s.lazy(() => error1CloroDevCreditsApiSchema)),
    },
    { additionalProperties: s.json() },
  );
