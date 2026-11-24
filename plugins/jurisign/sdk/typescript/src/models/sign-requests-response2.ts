import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  signRequestDetailedInternalSchema,
  signRequestDetailedSchema,
  type SignRequestDetailed,
} from "./sign-request-detailed.js";

export type SignRequestsResponse2 = {
  data?: SignRequestDetailed;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signRequestsResponse2Properties: s.Shape<SignRequestsResponse2> = {
  data: s.optional(s.lazy(() => signRequestDetailedInternalSchema)),
};

export const signRequestsResponse2InternalSchema: Schema<SignRequestsResponse2> =
  s.object<SignRequestsResponse2>(signRequestsResponse2Properties, { additionalProperties: s.json() });

export const signRequestsResponse2Schema: Schema<SignRequestsResponse2> = s.lazySchema(() =>
  s.object<SignRequestsResponse2>(
    {
      ...signRequestsResponse2Properties,
      data: s.optional(s.lazy(() => signRequestDetailedSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
