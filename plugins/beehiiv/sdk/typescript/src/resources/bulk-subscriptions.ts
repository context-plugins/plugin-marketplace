import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  bulkSubscriptionCreateResponseSchema,
  type BulkSubscriptionCreateResponse,
} from "../models/bulk-subscription-create-response.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsBulkSubscriptionsRequestSchema,
  type PublicationsBulkSubscriptionsRequest,
} from "../models/publications-bulk-subscriptions-request.js";
import type { Servers } from "../servers.js";

export class BulkSubscriptions {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Bulk create subscription OAuth Scope: subscriptions:write
   *
   * @remarks
   * Create new subscriptions for a publication.
   *
   * @returns Subscriptions created
   *
   * @throws {@link BulkSubscriptions.Create3Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create3(
    request: BulkSubscriptions.Create3Request,
    options?: RequestOptions,
  ): ApiPromise<BulkSubscriptionCreateResponse, BulkSubscriptions.Create3Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/publications/{publicationId}/bulk_subscriptions"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsBulkSubscriptionsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: bulkSubscriptionCreateResponseSchema },
        errorFactory: BulkSubscriptions.Create3Error,
      },
      options,
    );
  }
}

export namespace BulkSubscriptions {
  export type Create3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsBulkSubscriptionsRequest;
  };

  export class Create3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
