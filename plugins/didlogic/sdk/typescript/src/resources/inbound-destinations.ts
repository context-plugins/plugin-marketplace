import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  apiV1PurchasesDestinationsRequestSchema,
  type ApiV1PurchasesDestinationsRequest,
} from "../models/api-v1-purchases-destinations-request.js";
import {
  apiV1PurchasesDestinationsRequest1Schema,
  type ApiV1PurchasesDestinationsRequest1,
} from "../models/api-v1-purchases-destinations-request1.js";
import {
  apiV1PurchasesDestinationsResponseSchema,
  type ApiV1PurchasesDestinationsResponse,
} from "../models/api-v1-purchases-destinations-response.js";
import {
  apiV1PurchasesDestinationsResponse1Schema,
  type ApiV1PurchasesDestinationsResponse1,
} from "../models/api-v1-purchases-destinations-response1.js";
import {
  apiV1PurchasesDestinationsResponse2Schema,
  type ApiV1PurchasesDestinationsResponse2,
} from "../models/api-v1-purchases-destinations-response2.js";
import {
  apiV1PurchasesDestinations403Error1Schema,
  type ApiV1PurchasesDestinations403Error1,
} from "../models/api-v1-purchases-destinations403-error1.js";
import { errorSchema, type Error } from "../models/error.js";
import {
  apiV1PurchasesDestinationsResponse31Schema,
  type ApiV1PurchasesDestinationsResponse31,
} from "../models/unions/api-v1-purchases-destinations-response31.js";
import type { Servers } from "../servers.js";

export class InboundDestinations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create destination
   *
   * @remarks
   * Add a new inbound destination for a DID number.
   *
   * **Destination Types:**
   * - SIP addresses (e.g., `sip:user@domain.com`)
   * - Phone numbers (e.g., `18005551234`)
   * - Extensions (SIP accounts created within didlogic)
   *
   * **Parameters:**
   * - `destination` - The forwarding target (SIP URI or phone number)
   * - `dialing_type` - Dialing mode: `sequence`, `ring_all` or `random`
   * - `callhunt` - Legacy two-state mirror of `dialing_type` (boolean); ignored when `dialing_type`
   *   is sent
   * - `active` - Enable/disable this destination (boolean)
   * - `transport` - Transport type code (1 = SIP URI, 4 = Phone number, 5 = SIP device, 10 =
   *   Webphone, 12 = WebSocket)
   *
   * `transport: 12` streams the call to a WebSocket endpoint of your own instead of ringing a phone
   * or a SIP device, and `destination` is then its public `wss://` URL. It is available only to
   * accounts enabled for voice streaming; any other account is refused with `422`. The endpoint has
   * to speak our protocol — see WebSocket Calls.
   *
   * `did_destination.id` feeds purchases_destinations_update and purchases_destinations_destroy as
   * `id`. Rows: purchases_destinations_index.
   *
   * @returns Successfully creates destination and returns destination details
   *
   * @throws {@link InboundDestinations.PurchasesDestinationsCreateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchasesDestinationsCreate(
    request: InboundDestinations.PurchasesDestinationsCreateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PurchasesDestinationsResponse1, InboundDestinations.PurchasesDestinationsCreateError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/v1/purchases/{purchase_id}/destinations"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "purchase_id", value: request.purchaseId, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1PurchasesDestinationsRequestSchema },
      },
      {
        success: { kind: "json", schema: apiV1PurchasesDestinationsResponse1Schema },
        errorFactory: InboundDestinations.PurchasesDestinationsCreateError,
      },
      options,
    );
  }

  /**
   * Delete destination
   *
   * @remarks
   * Delete an existing inbound destination from a DID number.
   *
   * **Important:**
   * - Destination is permanently removed from the DID configuration
   * - Deletion is logged for audit purposes
   *
   * @returns Successfully deletes destination and returns 204 No Content
   *
   * @throws {@link InboundDestinations.PurchasesDestinationsDestroyError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchasesDestinationsDestroy(
    request: InboundDestinations.PurchasesDestinationsDestroyRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, InboundDestinations.PurchasesDestinationsDestroyError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "purchase_id", value: request.purchaseId, schema: s.string() },
          { name: "id", value: request.id, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: InboundDestinations.PurchasesDestinationsDestroyError,
      },
      options,
    );
  }

  /**
   * List destinations
   *
   * @remarks
   * Retrieve the list of inbound destinations configured for a specific DID number.
   *
   * **Destinations** define where incoming calls to a DID should be routed (SIP addresses, phone
   * numbers, etc.).
   *
   * **Features:**
   * - Returns only current (non-deleted) destinations
   * - Each destination includes active status and its dialing mode (`dialing_type`, with the legacy
   *   `callhunt` mirror)
   *
   * `destination[].id` feeds purchases_destinations_update and purchases_destinations_destroy as
   * `id`.
   *
   * @returns Successfully returns all current destinations for the specified DID
   *
   * @throws {@link InboundDestinations.PurchasesDestinationsIndexError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchasesDestinationsIndex(
    request: InboundDestinations.PurchasesDestinationsIndexRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PurchasesDestinationsResponse, InboundDestinations.PurchasesDestinationsIndexError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/purchases/{purchase_id}/destinations"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "purchase_id", value: request.purchaseId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1PurchasesDestinationsResponseSchema },
        errorFactory: InboundDestinations.PurchasesDestinationsIndexError,
      },
      options,
    );
  }

  /**
   * Update destination
   *
   * @remarks
   * Update an existing inbound destination for a DID number.
   *
   * **Updatable Fields:**
   * - `dialing_type` - Dialing mode: `sequence`, `ring_all` or `random`
   * - `callhunt` - Legacy two-state mirror of `dialing_type`; ignored when `dialing_type` is sent
   * - `active` - Enable/disable this destination
   *
   * **Note:** The destination address and transport protocol cannot be changed. To change these,
   * delete and create a new destination.
   *
   * @returns Successfully updates destination settings and returns updated destination
   *
   * @throws {@link InboundDestinations.PurchasesDestinationsUpdateError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link DidLogicError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  purchasesDestinationsUpdate(
    request: InboundDestinations.PurchasesDestinationsUpdateRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1PurchasesDestinationsResponse2, InboundDestinations.PurchasesDestinationsUpdateError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/api/v1/purchases/{purchase_id}/destinations/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "purchase_id", value: request.purchaseId, schema: s.string() },
          { name: "id", value: request.id, schema: s.int() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: apiV1PurchasesDestinationsRequest1Schema },
      },
      {
        success: { kind: "json", schema: apiV1PurchasesDestinationsResponse2Schema },
        errorFactory: InboundDestinations.PurchasesDestinationsUpdateError,
      },
      options,
    );
  }
}

export namespace InboundDestinations {
  export type PurchasesDestinationsCreateRequest = {
    /**
     * Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
     * `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID.
     */
    purchaseId: string;
    body: ApiV1PurchasesDestinationsRequest;
  };

  export class PurchasesDestinationsCreateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PurchasesDestinations403Error1", ApiV1PurchasesDestinations403Error1>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurchasesDestinationsCreateError> = [
      {
        on: 403,
        kind: "apiV1PurchasesDestinations403Error1",
        decode: { kind: "json", schema: apiV1PurchasesDestinations403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 422, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PurchasesDestinationsDestroyRequest = {
    /**
     * Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
     * `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID.
     */
    purchaseId: string;
    /** Destination id from purchases_destinations_index, purchases_destinations_create */
    id: number;
  };

  export class PurchasesDestinationsDestroyError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PurchasesDestinations403Error1", ApiV1PurchasesDestinations403Error1>
      | Declared<"apiV1PurchasesDestinationsResponse31", ApiV1PurchasesDestinationsResponse31>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurchasesDestinationsDestroyError> = [
      {
        on: 403,
        kind: "apiV1PurchasesDestinations403Error1",
        decode: { kind: "json", schema: apiV1PurchasesDestinations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PurchasesDestinationsResponse31",
        decode: { kind: "json", schema: apiV1PurchasesDestinationsResponse31Schema },
      },
    ];
  }

  export type PurchasesDestinationsIndexRequest = {
    /**
     * Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
     * `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID.
     */
    purchaseId: string;
  };

  export class PurchasesDestinationsIndexError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PurchasesDestinations403Error1", ApiV1PurchasesDestinations403Error1>
      | Declared<"error", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurchasesDestinationsIndexError> = [
      {
        on: 403,
        kind: "apiV1PurchasesDestinations403Error1",
        decode: { kind: "json", schema: apiV1PurchasesDestinations403Error1Schema },
      },
      { on: 404, kind: "error", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type PurchasesDestinationsUpdateRequest = {
    /**
     * Purchased number id or number from numbers_index, purchases_index: the phone **number** (e.g.
     * `43800327987`) or the numeric **inventory id** (e.g. `21869`). Both resolve the same DID.
     */
    purchaseId: string;
    /** Destination id from purchases_destinations_index, purchases_destinations_create */
    id: number;
    body: ApiV1PurchasesDestinationsRequest1;
  };

  export class PurchasesDestinationsUpdateError extends ApiError {
    declare readonly payload:
      | Declared<"apiV1PurchasesDestinations403Error1", ApiV1PurchasesDestinations403Error1>
      | Declared<"apiV1PurchasesDestinationsResponse31", ApiV1PurchasesDestinationsResponse31>
      | Undeclared;

    static readonly errors: ErrorDecoders<PurchasesDestinationsUpdateError> = [
      {
        on: 403,
        kind: "apiV1PurchasesDestinations403Error1",
        decode: { kind: "json", schema: apiV1PurchasesDestinations403Error1Schema },
      },
      {
        on: 404,
        kind: "apiV1PurchasesDestinationsResponse31",
        decode: { kind: "json", schema: apiV1PurchasesDestinationsResponse31Schema },
      },
    ];
  }
}
