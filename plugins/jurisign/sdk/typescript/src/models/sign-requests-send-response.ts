import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signRequestInternalSchema, signRequestSchema, type SignRequest } from "./sign-request.js";

export type SignRequestsSendResponse = {
  data?: SignRequest;
  message?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestsSendResponseProperties: s.Shape<SignRequestsSendResponse> = {
  data: s.optional(s.lazy(() => signRequestInternalSchema)),
  message: s.optional(s.string()),
};

export const signRequestsSendResponseInternalSchema: Schema<SignRequestsSendResponse> =
  s.object<SignRequestsSendResponse>(signRequestsSendResponseProperties, { additionalProperties: s.json() });

export const signRequestsSendResponseSchema: Schema<SignRequestsSendResponse> = s.lazySchema(() =>
  s.object<SignRequestsSendResponse>(
    {
      ...signRequestsSendResponseProperties,
      data: s.optional(s.lazy(() => signRequestSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
