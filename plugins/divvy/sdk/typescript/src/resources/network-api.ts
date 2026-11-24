import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  acceptInvitationRequestDtoInternalSchema,
  type AcceptInvitationRequestDto,
} from "../models/accept-invitation-request-dto.js";
import { bdcErrorInternalSchema, type BdcError } from "../models/bdc-error.js";
import {
  createInvitationRequestDtoInternalSchema,
  createInvitationRequestDtoSchema,
  type CreateInvitationRequestDto,
} from "../models/create-invitation-request-dto.js";
import {
  getInvitationResponseDtoSchema,
  type GetInvitationResponseDto,
} from "../models/get-invitation-response-dto.js";
import {
  inviteVendorNotInBillNetworkRequestDtoInternalSchema,
  inviteVendorNotInBillNetworkRequestDtoSchema,
  type InviteVendorNotInBillNetworkRequestDto,
} from "../models/invite-vendor-not-in-bill-network-request-dto.js";
import {
  networkSearchResponseDtoSchema,
  type NetworkSearchResponseDto,
} from "../models/network-search-response-dto.js";
import { scopeTypeSchema, type ScopeType } from "../models/scope-type.js";
import type { Servers } from "../servers.js";

export class NetworkApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Accept connection request
   *
   * @remarks
   * Accept a connection request sent by a vendor or customer.
   *
   * The organization receiving the connection request must have auto-connections disabled. If
   * auto-connections are not disabled, BILL automatically connects the organizations in the BILL
   * Network.
   *
   * When the invitation is accepted, BILL connects the two organizations in the BILL Network.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Accept connection request response
   *
   * @throws {@link NetworkApi.AcceptInvitationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  acceptInvitation(
    request: NetworkApi.AcceptInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkApi.AcceptInvitationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/network/invitation/accept"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: acceptInvitationRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkApi.AcceptInvitationError,
      },
      options,
    );
  }

  /**
   * Send connection request to a customer
   *
   * @remarks
   * Send a connection request to a customer organization in the BILL Network. BILL automatically
   * connects the customer organization with the customer record in your BILL organization.
   *
   * If the customer organization has auto-connections disabled, BILL sends an invitation email to
   * the customer email address. When the customer accepts the invitation, BILL connects the
   * customer organization with the customer record in your BILL organization.
   *
   * If the customer does not respond, you can delete the connection request (with `DELETE
   * /v3/network/invitation/customer/{customerId}`) before sending a new connection request.
   *
   * **Note**: If the customer does not respond to a connection request for 60 days, the request
   * expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Send connection request to a customer response
   *
   * @throws {@link NetworkApi.CreateCustomerInvitationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createCustomerInvitation(
    request: NetworkApi.CreateCustomerInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkApi.CreateCustomerInvitationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/network/invitation/customer/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createInvitationRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkApi.CreateCustomerInvitationError,
      },
      options,
    );
  }

  /**
   * Send connection request to a vendor
   *
   * @remarks
   * Send a connection request to a vendor organization in the BILL Network. BILL automatically
   * connects the vendor organization with the vendor record in your BILL organization.
   *
   * If the vendor organization has auto-connections disabled, BILL sends an invitation email to the
   * vendor email address. When the vendor accepts the invitation, BILL connects the vendor
   * organization with the vendor record in your BILL organization.
   *
   * If the vendor does not respond, you can delete the connection request (with `DELETE
   * /v3/network/invitation/vendor/{vendorId}`) before sending a new connection request.
   *
   * **Note**: If the vendor does not respond to the connection request for 60 days, the request
   * expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Send connection request to a vendor response
   *
   * @throws {@link NetworkApi.CreateVendorInvitationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createVendorInvitation(
    request: NetworkApi.CreateVendorInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkApi.CreateVendorInvitationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/network/invitation/vendor/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "json", value: request.body, schema: createInvitationRequestDtoInternalSchema },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkApi.CreateVendorInvitationError,
      },
      options,
    );
  }

  /**
   * Delete customer connection
   *
   * @remarks
   * Delete an existing Network connection with a customer organization. Delete customer connection
   * follows a set of rules.
   * * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must
   *   be canceled before you can disconnect.
   * * **No in-process payments**: There should be no in-progress payments. All in-progress payments
   *   must clear before you can disconnect.
   *
   * You can use this endpoint to cancel a pending connection request sent to a customer that has
   * auto-connections disabled. You can send a new connection request after an existing connection
   * or connection request is canceled.
   *
   * **Note**: If the customer does not respond to a connection request for 60 days, the request
   * expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Delete customer connection response
   *
   * @throws {@link NetworkApi.DeleteCustomerInvitationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteCustomerInvitation(
    request: NetworkApi.DeleteCustomerInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkApi.DeleteCustomerInvitationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/network/invitation/customer/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkApi.DeleteCustomerInvitationError,
      },
      options,
    );
  }

  /**
   * Delete vendor connection
   *
   * @remarks
   * Delete an existing Network connection with a vendor organization. Delete vendor connection
   * follows a set of rules.
   * * **No scheduled payments**: There should be no scheduled payments. All scheduled payments must
   *   be canceled before you can disconnect.
   * * **No in-process payments**: There should be no in-progress payments. All in-progress payments
   *   must clear before you can disconnect.
   *
   * You can use this endpoint to cancel a pending connection request sent to a vendor that has
   * auto-connections disabled. You can send a new connection request after an existing connection
   * or connection request is canceled.
   *
   * **Note**: If the vendor does not respond to a connection request for 60 days, the request
   * expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Delete vendor connection response
   *
   * @throws {@link NetworkApi.DeleteVendorInvitationError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  deleteVendorInvitation(
    request: NetworkApi.DeleteVendorInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkApi.DeleteVendorInvitationError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/v3/network/invitation/vendor/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkApi.DeleteVendorInvitationError,
      },
      options,
    );
  }

  /**
   * Get customer connection request status
   *
   * @remarks
   * Get the status of an existing connection request sent with `POST
   * /v3/network/invitation/customer/{customerId}`.
   *
   * When you send a connection request to a customer organization that has auto-connections
   * enabled, BILL automatically connects you with the organization. If the organization has
   * auto-connections disabled, the connection request status changes when the customer accepts the
   * request.
   *
   * **Note**: If the customer does not respond to the connection request for 60 days, the request
   * expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Get customer connection request status response
   *
   * @throws {@link NetworkApi.GetCustomerInvitationError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCustomerInvitation(
    request: NetworkApi.GetCustomerInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetInvitationResponseDto, NetworkApi.GetCustomerInvitationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/network/invitation/customer/{customerId}"),
        auth: noneAuth,
        pathParams: [{ name: "customerId", value: request.customerId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getInvitationResponseDtoSchema },
        errorFactory: NetworkApi.GetCustomerInvitationError,
      },
      options,
    );
  }

  /**
   * Get vendor connection request status
   *
   * @remarks
   * Get the status of an existing connection request sent with `POST
   * /v3/network/invitation/vendor/{vendorId}`.
   *
   * When you send a connection request to a vendor organization that has auto-connections enabled,
   * BILL automatically connects you with the organization. If the organization has auto-connections
   * disabled, the connection request status changes when the vendor accepts the request.
   *
   * **Note**: If the vendor does not respond to the connection request for 60 days, the request
   * expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Get vendor connection request status response
   *
   * @throws {@link NetworkApi.GetVendorInvitationError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVendorInvitation(
    request: NetworkApi.GetVendorInvitationRequest,
    options?: RequestOptions,
  ): ApiPromise<GetInvitationResponseDto, NetworkApi.GetVendorInvitationError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/network/invitation/vendor/{vendorId}"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getInvitationResponseDtoSchema },
        errorFactory: NetworkApi.GetVendorInvitationError,
      },
      options,
    );
  }

  /**
   * Send connection request to a vendor not in the BILL Network
   *
   * @remarks
   * Send a connection request to a vendor not in the BILL Network.
   *
   * BILL sends an invitation email to the provided vendor email address. When the vendor accepts
   * the invitation and sets up a BILL account, BILL connects the vendor organization with the
   * vendor record in your BILL organization.
   *
   * **Note**:
   * * The vendor organization must exist before BILL can send an invitation email.
   * * If the vendor does not respond to a connection request for 60 days, the request expires.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Send connection request to a vendor not in the BILL Network response
   *
   * @throws {@link NetworkApi.InviteVendorNotInBillNetworkError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  inviteVendorNotInBillNetwork(
    request: NetworkApi.InviteVendorNotInBillNetworkRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, NetworkApi.InviteVendorNotInBillNetworkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v3/network/invitation/vendor/{vendorId}/email"),
        auth: noneAuth,
        pathParams: [{ name: "vendorId", value: request.vendorId, schema: s.string() }],
        query: [],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: {
          kind: "json",
          value: request.body,
          schema: inviteVendorNotInBillNetworkRequestDtoInternalSchema,
        },
      },
      {
        success: { kind: "empty" },
        errorFactory: NetworkApi.InviteVendorNotInBillNetworkError,
      },
      options,
    );
  }

  /**
   * Search for an organization in the BILL Network
   *
   * @remarks
   * Search for a customer, vendor, or verified national vendor organization. You can search in the
   * BILL Network and verified national vendor (`RPPS`) network.
   *
   * When you search in the BILL Network, there are two `name` requirements for getting search
   * results.
   * * Your search term must have a minimum of three characters.
   * * Your search term must be a complete word. You will not get search results when your search
   *   term is a partial word.
   *
   * When you search in the verified national vendor (`RPPS`) network, search results are based on
   * both a complete and partial match on `name` and `zipOrPostalCode`. You can further filter your
   * search by the billing statement `accountNumber` with the vendor. For example, your Verizon
   * internet bill account number.
   *
   * See BILL Network in the Guides section for more information, sample requests, and responses.
   *
   * @returns Search for an organization in the BILL Network response
   *
   * @throws {@link NetworkApi.SearchError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link DivvyError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  search(
    request: NetworkApi.SearchRequest,
    options?: RequestOptions,
  ): ApiPromise<NetworkSearchResponseDto, NetworkApi.SearchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3/network"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "name", value: request.name, schema: s.string() },
          { name: "scope", value: request.scope, schema: s.optional(s.lazy(() => scopeTypeSchema)) },
          { name: "zipOrPostalCode", value: request.zipOrPostalCode, schema: s.optionalNullable(s.string()) },
          { name: "accountNumber", value: request.accountNumber, schema: s.optionalNullable(s.string()) },
        ],
        headers: [
          { name: "sessionId", value: request.sessionId, schema: s.optionalNullable(s.string()) },
          { name: "devKey", value: request.devKey, schema: s.optionalNullable(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: networkSearchResponseDtoSchema },
        errorFactory: NetworkApi.SearchError,
      },
      options,
    );
  }
}

export namespace NetworkApi {
  export type AcceptInvitationRequest = {
    sessionId?: string | null;
    devKey?: string | null;
    body: AcceptInvitationRequestDto;
  };

  export class AcceptInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<AcceptInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateCustomerInvitationRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateInvitationRequestDto;
  };

  export const createCustomerInvitationRequestSchema: Schema<CreateCustomerInvitationRequest> = s.lazySchema(
    () =>
      s.object<CreateCustomerInvitationRequest>({
        customerId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: createInvitationRequestDtoSchema,
      }),
  );

  export class CreateCustomerInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateCustomerInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type CreateVendorInvitationRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: CreateInvitationRequestDto;
  };

  export const createVendorInvitationRequestSchema: Schema<CreateVendorInvitationRequest> = s.lazySchema(() =>
    s.object<CreateVendorInvitationRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
      body: createInvitationRequestDtoSchema,
    }),
  );

  export class CreateVendorInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateVendorInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteCustomerInvitationRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const deleteCustomerInvitationRequestSchema: Schema<DeleteCustomerInvitationRequest> = s.lazySchema(
    () =>
      s.object<DeleteCustomerInvitationRequest>({
        customerId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
      }),
  );

  export class DeleteCustomerInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteCustomerInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type DeleteVendorInvitationRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const deleteVendorInvitationRequestSchema: Schema<DeleteVendorInvitationRequest> = s.lazySchema(() =>
    s.object<DeleteVendorInvitationRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class DeleteVendorInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVendorInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetCustomerInvitationRequest = {
    customerId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getCustomerInvitationRequestSchema: Schema<GetCustomerInvitationRequest> = s.lazySchema(() =>
    s.object<GetCustomerInvitationRequest>({
      customerId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetCustomerInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCustomerInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type GetVendorInvitationRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const getVendorInvitationRequestSchema: Schema<GetVendorInvitationRequest> = s.lazySchema(() =>
    s.object<GetVendorInvitationRequest>({
      vendorId: s.string().check(s.minLength(1)),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class GetVendorInvitationError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVendorInvitationError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type InviteVendorNotInBillNetworkRequest = {
    vendorId: string;
    sessionId?: string | null;
    devKey?: string | null;
    body: InviteVendorNotInBillNetworkRequestDto;
  };

  export const inviteVendorNotInBillNetworkRequestSchema: Schema<InviteVendorNotInBillNetworkRequest> =
    s.lazySchema(() =>
      s.object<InviteVendorNotInBillNetworkRequest>({
        vendorId: s.string().check(s.minLength(1)),
        sessionId: s.optionalNullable(s.string()),
        devKey: s.optionalNullable(s.string()),
        body: inviteVendorNotInBillNetworkRequestDtoSchema,
      }),
    );

  export class InviteVendorNotInBillNetworkError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<InviteVendorNotInBillNetworkError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }

  export type SearchRequest = {
    name: string;
    scope?: ScopeType;
    zipOrPostalCode?: string | null;
    accountNumber?: string | null;
    sessionId?: string | null;
    devKey?: string | null;
  };

  export const searchRequestSchema: Schema<SearchRequest> = s.lazySchema(() =>
    s.object<SearchRequest>({
      name: s.string().check(s.minLength(1)),
      scope: s.optional(s.lazy(() => scopeTypeSchema)),
      zipOrPostalCode: s.optionalNullable(s.string()),
      accountNumber: s.optionalNullable(s.string()),
      sessionId: s.optionalNullable(s.string()),
      devKey: s.optionalNullable(s.string()),
    }),
  );

  export class SearchError extends ApiError {
    declare readonly payload:
      | Declared<"error4XX", BdcError[]>
      | Declared<"error5XX", BdcError[]>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchError> = [
      {
        on: [400, 499],
        kind: "error4XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
      {
        on: [500, 599],
        kind: "error5XX",
        decode: { kind: "json", schema: s.array(s.lazy(() => bdcErrorInternalSchema)) },
      },
    ];
  }
}
