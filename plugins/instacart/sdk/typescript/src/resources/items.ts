import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  itemSubmissionRequestInternalSchema,
  type ItemSubmissionRequest,
} from "../models/item-submission-request.js";
import { submissionResponseSchema, type SubmissionResponse } from "../models/submission-response.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints for updating item-level attributes such as pricing and availability at specific store
 * locations. Items contain information that can vary from one store to another.
 */
export class Items {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create or update items
   *
   * @remarks
   * Updates or sets item-level attributes for a product at a specific store location. Items contain
   * information that can vary from one retailer store to another, such as pricing, availability,
   * and inventory levels. Changes can take around two to three hours before they are displayed on
   * the storefront.
   *
   * @returns Items submitted successfully
   *
   * @throws {@link Items.SubmitItemsError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link InstacartError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  submitItems(
    request: Items.SubmitItemsRequest,
    options?: RequestOptions,
  ): ApiPromise<SubmissionResponse, Items.SubmitItemsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/data_ingestion/catalog/item/submission"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: itemSubmissionRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: submissionResponseSchema },
        errorFactory: Items.SubmitItemsError,
      },
      options,
    );
  }
}

export namespace Items {
  export type SubmitItemsRequest = {
    body: ItemSubmissionRequest;
  };

  export class SubmitItemsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<SubmitItemsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
