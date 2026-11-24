import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signRequestInternalSchema, signRequestSchema, type SignRequest } from "./sign-request.js";

export type SignRequestsCancelResponse = {
  data?: SignRequest;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestsCancelResponseProperties: s.Shape<SignRequestsCancelResponse> = {
  data: s.optional(s.lazy(() => signRequestInternalSchema)),
  message: s.optional(s.string()),
};

export const signRequestsCancelResponseInternalSchema: Schema<SignRequestsCancelResponse> =
  s.object<SignRequestsCancelResponse>(signRequestsCancelResponseProperties, {
    additionalProperties: s.json(),
  });

export const signRequestsCancelResponseSchema: Schema<SignRequestsCancelResponse> = s.lazySchema(() =>
  s.object<SignRequestsCancelResponse>(
    {
      ...signRequestsCancelResponseProperties,
      data: s.optional(s.lazy(() => signRequestSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
