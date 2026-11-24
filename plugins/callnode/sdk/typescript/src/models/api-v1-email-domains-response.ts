import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { emailDomainSchema, type EmailDomain } from "./email-domain.js";

export type ApiV1EmailDomainsResponse = {
  data?: EmailDomain[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EmailDomainsResponseSchema: Schema<ApiV1EmailDomainsResponse> =
  s.object<ApiV1EmailDomainsResponse>(
    {
      data: s.optional(s.array(s.lazy(() => emailDomainSchema))),
    },
    { additionalProperties: s.json() },
  );
