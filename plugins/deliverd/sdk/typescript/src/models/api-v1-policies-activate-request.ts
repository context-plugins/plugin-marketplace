import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1PoliciesActivateRequest = {
  /** The version number to put in force. The one it replaces is superseded */
  version: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1PoliciesActivateRequestProperties: s.Shape<ApiV1PoliciesActivateRequest> = {
  version: s.int(),
};

export const apiV1PoliciesActivateRequestInternalSchema: Schema<ApiV1PoliciesActivateRequest> =
  s.object<ApiV1PoliciesActivateRequest>(apiV1PoliciesActivateRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1PoliciesActivateRequestSchema: Schema<ApiV1PoliciesActivateRequest> = s.lazySchema(() =>
  s.object<ApiV1PoliciesActivateRequest>(
    {
      ...apiV1PoliciesActivateRequestProperties,
      version: s.int().check(s.gte(1)),
    },
    { additionalProperties: s.json() },
  ),
);
