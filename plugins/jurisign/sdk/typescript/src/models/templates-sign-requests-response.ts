import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  signRequestJuriSignTemplatesApiInternalSchema,
  signRequestJuriSignTemplatesApiSchema,
  type SignRequestJuriSignTemplatesApi,
} from "./sign-request-juri-sign-templates-api.js";

export type TemplatesSignRequestsResponse = {
  data?: SignRequestJuriSignTemplatesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const templatesSignRequestsResponseProperties: s.Shape<TemplatesSignRequestsResponse> = {
  data: s.optional(s.lazy(() => signRequestJuriSignTemplatesApiInternalSchema)),
};

export const templatesSignRequestsResponseInternalSchema: Schema<TemplatesSignRequestsResponse> =
  s.object<TemplatesSignRequestsResponse>(templatesSignRequestsResponseProperties, {
    additionalProperties: s.json(),
  });

export const templatesSignRequestsResponseSchema: Schema<TemplatesSignRequestsResponse> = s.lazySchema(() =>
  s.object<TemplatesSignRequestsResponse>(
    {
      ...templatesSignRequestsResponseProperties,
      data: s.optional(s.lazy(() => signRequestJuriSignTemplatesApiSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
