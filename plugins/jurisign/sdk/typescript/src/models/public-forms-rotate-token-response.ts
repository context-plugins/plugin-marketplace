import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicFormInternalSchema, publicFormSchema, type PublicForm } from "./public-form.js";

export type PublicFormsRotateTokenResponse = {
  data?: PublicForm;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicFormsRotateTokenResponseProperties: s.Shape<PublicFormsRotateTokenResponse> = {
  data: s.optional(s.lazy(() => publicFormInternalSchema)),
  message: s.optional(s.string()),
};

export const publicFormsRotateTokenResponseInternalSchema: Schema<PublicFormsRotateTokenResponse> =
  s.object<PublicFormsRotateTokenResponse>(publicFormsRotateTokenResponseProperties, {
    additionalProperties: s.json(),
  });

export const publicFormsRotateTokenResponseSchema: Schema<PublicFormsRotateTokenResponse> = s.lazySchema(() =>
  s.object<PublicFormsRotateTokenResponse>(
    {
      ...publicFormsRotateTokenResponseProperties,
      data: s.optional(s.lazy(() => publicFormSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
