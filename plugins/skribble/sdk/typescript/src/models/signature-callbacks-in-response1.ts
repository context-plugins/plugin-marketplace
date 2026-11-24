import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { callbackStateSchema, type CallbackState } from "./callback-state.js";
import { callbackType1Schema, type CallbackType1 } from "./callback-type1.js";

export type SignatureCallbacksInResponse1 = {
  /** Signature request's unique ID on Skribble. */
  signatureRequestId?: string;
  /**
   * The type of this callback.
   *
   * Possible values:
   *   - **SUCCESS** Is triggered when the document has been successfully signed by all parties
   *     involved.
   *   - **UPDATE** Is triggered on changes on the `SignatureRequest` object like when one person of
   *     all involved parties has signed.
   *   - **ERROR** Is triggered when a person declines the signature or when the `SignatureRequest`
   *     is withdrawn.
   *   - **START_SIGN** Is triggered when a person starts the signature process (only for Express
   *     QES).
   *   - **IDENT_PENDING** Is triggered when the identification of a person within a signature
   *     process requires manual review.
   *   - **IDENT_ERROR** Is triggered when the identification of a person within a signature process
   *     ended in an error.
   */
  type?: CallbackType1;
  /**
   * The state of the callback.
   *
   * Possible values:
   *   - **OPEN** The callback request will be executed in the next execution cycle.
   *   - **COMPLETED** The callback request was executed successfully. The API received an HTTP 2xx
   *     success code in response.
   *   - **RESIGNATED** The callback request has been attempted `attempts` times but was
   *     unsuccessful. The API did not receive a valid HTTP 2xx response.
   */
  state?: CallbackState;
  /** The called URL of this callback. */
  url?: string;
  /** The attempts this callback was carried out. */
  attempts?: number;
  /** Error messages in case that the callback failed. */
  messages?: string[];
  /** The time at which the object was created. */
  createdAt?: Date;
  /** The time at which the object was last changed. */
  updatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const signatureCallbacksInResponse1Properties: s.Shape<SignatureCallbacksInResponse1> = {
  signatureRequestId: s.optional(s.string()),
  type: s.optional(s.lazy(() => callbackType1Schema)),
  state: s.optional(s.lazy(() => callbackStateSchema)),
  url: s.optional(s.string()),
  attempts: s.optional(s.int()),
  messages: s.optional(s.array(s.string())),
  createdAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    signatureRequestId: "signature_request_id",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const signatureCallbacksInResponse1InternalSchema: Schema<SignatureCallbacksInResponse1> =
  s.object<SignatureCallbacksInResponse1>(signatureCallbacksInResponse1Properties, {
    additionalProperties: s.json(),
  });

export const signatureCallbacksInResponse1Schema: Schema<SignatureCallbacksInResponse1> = s.lazySchema(() =>
  s.object<SignatureCallbacksInResponse1>(
    {
      ...signatureCallbacksInResponse1Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
