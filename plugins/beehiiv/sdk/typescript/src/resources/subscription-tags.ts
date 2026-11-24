import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  publicationsSubscriptionsTagsRequestSchema,
  type PublicationsSubscriptionsTagsRequest,
} from "../models/publications-subscriptions-tags-request.js";
import {
  subscriptionTagsCreateResponseInternalSchema,
  type SubscriptionTagsCreateResponse,
} from "../models/subscription-tags-create-response.js";
import type { Servers } from "../servers.js";

export class SubscriptionTags {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Add subscription tag OAuth Scope: subscriptions:write
   *
   * @remarks
   * Adds tags to a subscription. If the tag does not exist on the publication, it will be created
   * automatically.
   *
   * @returns OK
   *
   * @throws {@link SubscriptionTags.Create10Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  create10(
    request: SubscriptionTags.Create10Request,
    options?: RequestOptions,
  ): ApiPromise<SubscriptionTagsCreateResponse, SubscriptionTags.Create10Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/publications/{publicationId}/subscriptions/{subscriptionId}/tags",
        ),
        auth: noneAuth,
        pathParams: [
          { name: "publicationId", value: request.publicationId, schema: s.string() },
          { name: "subscriptionId", value: request.subscriptionId, schema: s.string() },
        ],
        query: [],
        headers: [
          { name: "Authorization", value: request.authorization, schema: s.string() },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => publicationsSubscriptionsTagsRequestSchema)),
        },
      },
      {
        success: { kind: "json", schema: subscriptionTagsCreateResponseInternalSchema },
        errorFactory: SubscriptionTags.Create10Error,
      },
      options,
    );
  }
}

export namespace SubscriptionTags {
  export type Create10Request = {
    publicationId: string;
    subscriptionId: string;
    /** Bearer authentication */
    authorization: string;
    body?: PublicationsSubscriptionsTagsRequest;
  };

  export class Create10Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Create10Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
