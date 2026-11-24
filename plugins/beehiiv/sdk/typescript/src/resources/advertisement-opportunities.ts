import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  advertisementOpportunitiesGetResponseSchema,
  type AdvertisementOpportunitiesGetResponse,
} from "../models/advertisement-opportunities-get-response.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class AdvertisementOpportunities {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get advertisement opportunities OAuth Scope: posts:read
   *
   * @remarks
   * Retrieve a list of accepted advertisement opportunities for the publication.
   *
   * @returns OK
   *
   * @throws {@link AdvertisementOpportunities.Index3Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link BeehiivError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  index3(
    request: AdvertisementOpportunities.Index3Request,
    options?: RequestOptions,
  ): ApiPromise<AdvertisementOpportunitiesGetResponse, AdvertisementOpportunities.Index3Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/publications/{publicationId}/advertisement_opportunities"),
        auth: noneAuth,
        pathParams: [{ name: "publicationId", value: request.publicationId, schema: s.string() }],
        query: [],
        headers: [{ name: "Authorization", value: request.authorization, schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: advertisementOpportunitiesGetResponseSchema },
        errorFactory: AdvertisementOpportunities.Index3Error,
      },
      options,
    );
  }
}

export namespace AdvertisementOpportunities {
  export type Index3Request = {
    /** The prefixed ID of the publication object */
    publicationId: string;
    /** Bearer authentication */
    authorization: string;
  };

  export class Index3Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<Index3Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
