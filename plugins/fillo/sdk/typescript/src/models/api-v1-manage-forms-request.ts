import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsRequest = {
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1ManageFormsRequestProperties: s.Shape<ApiV1ManageFormsRequest> = {
  name: s.string(),
};

export const apiV1ManageFormsRequestInternalSchema: Schema<ApiV1ManageFormsRequest> =
  s.object<ApiV1ManageFormsRequest>(apiV1ManageFormsRequestProperties, { additionalProperties: s.json() });

export const apiV1ManageFormsRequestSchema: Schema<ApiV1ManageFormsRequest> = s.lazySchema(() =>
  s.object<ApiV1ManageFormsRequest>(
    {
      ...apiV1ManageFormsRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(120)),
    },
    { additionalProperties: s.json() },
  ),
);
