import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  createDraftTransferRequestSchema,
  type CreateDraftTransferRequest,
} from "../models/create-draft-transfer-request.js";
import {
  deleteValuesSalesInvoiceSchema,
  type DeleteValuesSalesInvoice,
} from "../models/delete-values-sales-invoice.js";
import { draftTransferStatusSchema, type DraftTransferStatus } from "../models/draft-transfer-status.js";
import type { Servers } from "../servers.js";

/**
 * Operations related to the Draft Transfers API
 */
export class DraftTransfersApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Cancel draft transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Cancels a draft transfer created via this API. Transitions the draft transfer to `declined`
   * with `statusReason.code` set to `deleted-by-creator`.
   *
   * Only draft transfers created via this API, and still in `pending-review`, can be cancelled this
   * way. A `422` is returned if the initiator has already started approving it.
   *
   * In test mode, this always returns a synthetic `declined` draft. See [Create draft
   * transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.
   *
   * @returns The cancelled (declined) draft transfer object.
   *
   * @throws {@link DraftTransfersApi.CancelDraftTransferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cancelDraftTransfer(
    request: DraftTransfersApi.CancelDraftTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DraftTransfersApi.CancelDraftTransferError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v2/business-accounts/draft-transfers/{draftTransferId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "draftTransferId", value: request.draftTransferId, schema: s.string() }],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => deleteValuesSalesInvoiceSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DraftTransfersApi.CancelDraftTransferError,
      },
      options,
    );
  }

  /**
   * Create draft transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Creates a draft transfer. The draft transfer immediately enters `pending-review` and appears in
   * the initiator's queue in Mollie Apps. It carries no legal weight and moves no funds until a
   * human initiator approves it there.
   *
   * ### Test mode
   *
   * Creating a draft transfer always returns a synthetic draft in `pending-review` status, using
   * synthetic data, same as in live mode. No real funds move and nothing is sent to Mollie Apps.
   *
   * Editing a draft transfer after creation is not supported via the API. Instead, depending on the
   * amount, you can simulate different outcomes for the initiator's decision at creation time:
   *
   * | Amount  | Simulated outcome                                    | Webhook sequence                                                                                  |
   * |---------|-------------------------------------------------------|----------------------------------------------------------------------------------------------------|
   * | `13.00` | Declined by the initiator, with a free-text reason     | `business-account-draft-transfer.created` → `business-account-draft-transfer.declined`             |
   * | `14.00` | Approved                                               | `business-account-draft-transfer.created` → `business-account-draft-transfer.approved`             |
   * | Other   | Default behavior (pending review)                      | `business-account-draft-transfer.created`                                                          |
   *
   * The webhooks fire asynchronously, with a short delay between them to mimic real timing.
   * [Get](get-draft-transfer) and [list](list-draft-transfers) reflect the simulated outcome once
   * it lands.
   *
   * Cancelling (via `DELETE`) is unaffected by the amount: it always transitions the draft to
   * `declined` with `statusReason.code` set to `deleted-by-creator`, the same as in live mode.
   *
   * @returns The newly created draft transfer object.
   *
   * @throws {@link DraftTransfersApi.CreateDraftTransferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createDraftTransfer(
    request: DraftTransfersApi.CreateDraftTransferRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, DraftTransfersApi.CreateDraftTransferError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v2/business-accounts/draft-transfers"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.optional(s.lazy(() => createDraftTransferRequestSchema)),
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: DraftTransfersApi.CreateDraftTransferError,
      },
      options,
    );
  }

  /**
   * Get draft transfer
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Retrieves a single draft transfer by its identifier.
   *
   * Only draft transfers created via this API are visible via this endpoint. Draft transfers
   * created in Mollie Apps return a `404`, even though they appear in the [list
   * endpoint](list-draft-transfers).
   *
   * In test mode, this returns synthetic data only, not your real draft transfer. See [Create draft
   * transfer](create-draft-transfer) for how to simulate `approved` and `declined` outcomes.
   *
   * @returns The draft transfer object.
   *
   * @throws {@link DraftTransfersApi.GetDraftTransferError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getDraftTransfer(
    request: DraftTransfersApi.GetDraftTransferRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DraftTransfersApi.GetDraftTransferError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/business-accounts/draft-transfers/{draftTransferId}"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [{ name: "draftTransferId", value: request.draftTransferId, schema: s.string() }],
        query: [{ name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) }],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DraftTransfersApi.GetDraftTransferError,
      },
      options,
    );
  }

  /**
   * List draft transfers
   *
   * @remarks
   * > 🚧 Beta feature > > This feature is currently in beta testing, and the final specification
   * may still change.
   *
   * Retrieves a list of draft transfers created via this API for the organization.
   *
   * The results are paginated.
   *
   * In test mode, this returns synthetic draft transfers only, not your real data.
   *
   * @returns A list of draft transfer objects.
   *
   * @throws {@link DraftTransfersApi.ListDraftTransfersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link MollieApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listDraftTransfers(
    request: DraftTransfersApi.ListDraftTransfersRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, DraftTransfersApi.ListDraftTransfersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v2/business-accounts/draft-transfers"),
        auth: anyAuth(this.#auth.advancedAccessToken, this.#auth.oAuth),
        pathParams: [],
        query: [
          { name: "from", value: request.from, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.optionalNullable(s.int()) },
          {
            name: "status",
            value: request.status,
            schema: s.optional(s.lazy(() => draftTransferStatusSchema)),
          },
          { name: "testmode", value: request.testmode, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "idempotency-key", value: request.idempotencyKey, schema: s.optional(s.string()) }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: DraftTransfersApi.ListDraftTransfersError,
      },
      options,
    );
  }
}

export namespace DraftTransfersApi {
  export type CancelDraftTransferRequest = {
    /** Provide the ID of the related draft transfer. */
    draftTransferId: string;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: DeleteValuesSalesInvoice;
  };

  export class CancelDraftTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error404", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CancelDraftTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type CreateDraftTransferRequestParams = {
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
    body?: CreateDraftTransferRequest;
  };

  export class CreateDraftTransferError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error422", undefined>
      | Declared<"error429", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateDraftTransferError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 422, kind: "error422", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type GetDraftTransferRequest = {
    /** Provide the ID of the related draft transfer. */
    draftTransferId: string;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class GetDraftTransferError extends ApiError {
    declare readonly payload: Declared<"error404", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<GetDraftTransferError> = [
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }

  export type ListDraftTransfersRequest = {
    /**
     * Provide an ID to start the result set from the item with the given ID and onwards. This
     * allows you to paginate the result set.
     */
    from?: string | null;
    /** The maximum number of items to return. Defaults to 50 items. */
    limit?: number | null;
    /** Filter the list by draft transfer status. Omit to return draft transfers in any status. */
    status?: DraftTransferStatus;
    /**
     * Most API credentials are specifically created for either live mode or test mode. In those
     * cases the `testmode` query parameter must not be sent. For organization-level credentials
     * such as OAuth access tokens, you can enable test mode by setting the `testmode` query
     * parameter to `true`.
     *
     * Test entities cannot be retrieved when the endpoint is set to live mode, and vice versa.
     */
    testmode?: boolean;
    /** A unique key to ensure idempotent requests. This key should be a UUID v4 string. */
    idempotencyKey?: string;
  };

  export class ListDraftTransfersError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error429", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListDraftTransfersError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 429, kind: "error429", decode: { kind: "empty" } },
    ];
  }
}
