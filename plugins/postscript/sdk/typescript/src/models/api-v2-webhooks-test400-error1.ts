import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  errorPostscriptPartnerIdentityApiSchema,
  type ErrorPostscriptPartnerIdentityApi,
} from "./error-postscript-partner-identity-api.js";

export type ApiV2WebhooksTest400Error1 = {
  errors?: ErrorPostscriptPartnerIdentityApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV2WebhooksTest400Error1Schema: Schema<ApiV2WebhooksTest400Error1> =
  s.object<ApiV2WebhooksTest400Error1>(
    {
      errors: s.optional(s.array(s.lazy(() => errorPostscriptPartnerIdentityApiSchema))),
    },
    { additionalProperties: s.json() },
  );
