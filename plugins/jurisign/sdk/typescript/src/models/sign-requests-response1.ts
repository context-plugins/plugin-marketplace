import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { signRequestInternalSchema, signRequestSchema, type SignRequest } from "./sign-request.js";

export type SignRequestsResponse1 = {
  data?: SignRequest;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestsResponse1Properties: s.Shape<SignRequestsResponse1> = {
  data: s.optional(s.lazy(() => signRequestInternalSchema)),
};

export const signRequestsResponse1InternalSchema: Schema<SignRequestsResponse1> =
  s.object<SignRequestsResponse1>(signRequestsResponse1Properties, { additionalProperties: s.json() });

export const signRequestsResponse1Schema: Schema<SignRequestsResponse1> = s.lazySchema(() =>
  s.object<SignRequestsResponse1>(
    {
      ...signRequestsResponse1Properties,
      data: s.optional(s.lazy(() => signRequestSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
