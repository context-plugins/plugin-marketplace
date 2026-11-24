import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  xAmzTargetAwsDirectConnectOperationsApiSchema,
  type XAmzTargetAwsDirectConnectOperationsApi,
} from "../models/xamz-target-aws-direct-connect-operations-api.js";
import {
  xAmzTarget1AwsDirectConnectOperationsApiSchema,
  type XAmzTarget1AwsDirectConnectOperationsApi,
} from "../models/xamz-target1-aws-direct-connect-operations-api.js";
import {
  xAmzTarget10AwsDirectConnectOperationsApiSchema,
  type XAmzTarget10AwsDirectConnectOperationsApi,
} from "../models/xamz-target10-aws-direct-connect-operations-api.js";
import {
  xAmzTarget11AwsDirectConnectOperationsApiSchema,
  type XAmzTarget11AwsDirectConnectOperationsApi,
} from "../models/xamz-target11-aws-direct-connect-operations-api.js";
import {
  xAmzTarget12AwsDirectConnectOperationsApiSchema,
  type XAmzTarget12AwsDirectConnectOperationsApi,
} from "../models/xamz-target12-aws-direct-connect-operations-api.js";
import {
  xAmzTarget13AwsDirectConnectOperationsApiSchema,
  type XAmzTarget13AwsDirectConnectOperationsApi,
} from "../models/xamz-target13-aws-direct-connect-operations-api.js";
import {
  xAmzTarget14AwsDirectConnectOperationsApiSchema,
  type XAmzTarget14AwsDirectConnectOperationsApi,
} from "../models/xamz-target14-aws-direct-connect-operations-api.js";
import {
  xAmzTarget2AwsDirectConnectOperationsApiSchema,
  type XAmzTarget2AwsDirectConnectOperationsApi,
} from "../models/xamz-target2-aws-direct-connect-operations-api.js";
import {
  xAmzTarget3AwsDirectConnectOperationsApiSchema,
  type XAmzTarget3AwsDirectConnectOperationsApi,
} from "../models/xamz-target3-aws-direct-connect-operations-api.js";
import {
  xAmzTarget4AwsDirectConnectOperationsApiSchema,
  type XAmzTarget4AwsDirectConnectOperationsApi,
} from "../models/xamz-target4-aws-direct-connect-operations-api.js";
import {
  xAmzTarget5AwsDirectConnectOperationsApiSchema,
  type XAmzTarget5AwsDirectConnectOperationsApi,
} from "../models/xamz-target5-aws-direct-connect-operations-api.js";
import {
  xAmzTarget6AwsDirectConnectOperationsApiSchema,
  type XAmzTarget6AwsDirectConnectOperationsApi,
} from "../models/xamz-target6-aws-direct-connect-operations-api.js";
import {
  xAmzTarget7AwsDirectConnectOperationsApiSchema,
  type XAmzTarget7AwsDirectConnectOperationsApi,
} from "../models/xamz-target7-aws-direct-connect-operations-api.js";
import {
  xAmzTarget8AwsDirectConnectOperationsApiSchema,
  type XAmzTarget8AwsDirectConnectOperationsApi,
} from "../models/xamz-target8-aws-direct-connect-operations-api.js";
import {
  xAmzTarget9AwsDirectConnectOperationsApiSchema,
  type XAmzTarget9AwsDirectConnectOperationsApi,
} from "../models/xamz-target9-aws-direct-connect-operations-api.js";
import type { Servers } from "../servers.js";

export class Operations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Allocate Connection On Interconnect
   *
   * @remarks
   * Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an
   * interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted
   * connection on the specified interconnect. Intended for use by Direct Connect Partners only.
   *
   * @returns Success
   *
   * @throws {@link Operations.AllocateConnectionOnInterconnect2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  allocateConnectionOnInterconnect2(
    request: Operations.AllocateConnectionOnInterconnect2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AllocateConnectionOnInterconnect2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocateConnectionOnInterconnect"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTargetAwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AllocateConnectionOnInterconnect2Error,
      },
      options,
    );
  }

  /**
   * Allocate Hosted Connection
   *
   * @remarks
   * Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of
   * interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use
   * by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web
   * Services polices the hosted connection for the specified capacity and the Direct Connect
   * Partner must also police the hosted connection for the specified capacity. Intended for use by
   * Direct Connect Partners only.
   *
   * @returns Success
   *
   * @throws {@link Operations.AllocateHostedConnection2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocateHostedConnection2(
    request: Operations.AllocateHostedConnection2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AllocateHostedConnection2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocateHostedConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget1AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AllocateHostedConnection2Error,
      },
      options,
    );
  }

  /**
   * Allocate Private Virtual Interface
   *
   * @remarks
   * Provisions a private virtual interface to be owned by the specified Amazon Web Services
   * account. Virtual interfaces created using this action must be confirmed by the owner using
   * ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state
   * and is not available to handle traffic.
   *
   * @returns Success
   *
   * @throws {@link Operations.AllocatePrivateVirtualInterface2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocatePrivateVirtualInterface2(
    request: Operations.AllocatePrivateVirtualInterface2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AllocatePrivateVirtualInterface2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocatePrivateVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget2AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AllocatePrivateVirtualInterface2Error,
      },
      options,
    );
  }

  /**
   * Allocate Public Virtual Interface
   *
   * @remarks
   * Provisions a public virtual interface to be owned by the specified Amazon Web Services account.
   * The owner of a connection calls this function to provision a public virtual interface to be
   * owned by the specified Amazon Web Services account. Virtual interfaces created using this
   * function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step
   * has been completed, the virtual interface is in the confirming state and is not available to
   * handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and
   * customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6
   * addresses; you cannot specify custom IPv6 addresses.
   *
   * @returns Success
   *
   * @throws {@link Operations.AllocatePublicVirtualInterface2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocatePublicVirtualInterface2(
    request: Operations.AllocatePublicVirtualInterface2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AllocatePublicVirtualInterface2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocatePublicVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget3AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AllocatePublicVirtualInterface2Error,
      },
      options,
    );
  }

  /**
   * Allocate Transit Virtual Interface
   *
   * @remarks
   * Provisions a transit virtual interface to be owned by the specified Amazon Web Services
   * account. Use this type of interface to connect a transit gateway to your Direct Connect
   * gateway. The owner of a connection provisions a transit virtual interface to be owned by the
   * specified Amazon Web Services account. After you create a transit virtual interface, it must be
   * confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been
   * completed, the transit virtual interface is in the requested state and is not available to
   * handle traffic.
   *
   * @returns Success
   *
   * @throws {@link Operations.AllocateTransitVirtualInterface2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocateTransitVirtualInterface2(
    request: Operations.AllocateTransitVirtualInterface2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AllocateTransitVirtualInterface2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocateTransitVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget4AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AllocateTransitVirtualInterface2Error,
      },
      options,
    );
  }

  /**
   * Associate Connections To Resiliency Group
   *
   * @remarks
   * Associates one or more connections with the specified resiliency group. This operation is
   * atomic: either all of the specified connections are associated, or the operation fails and no
   * changes are made.
   *
   * @returns Success
   *
   * @throws {@link Operations.AssociateConnectionsToResiliencyGroupError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateConnectionsToResiliencyGroup(
    request: Operations.AssociateConnectionsToResiliencyGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.AssociateConnectionsToResiliencyGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateConnectionsToResiliencyGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget10AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.AssociateConnectionsToResiliencyGroupError,
      },
      options,
    );
  }

  /**
   * Confirm Connection
   *
   * @remarks
   * Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the
   * hosted connection is initially in the Ordering state, and remains in this state until the owner
   * confirms creation of the hosted connection.
   *
   * @returns Success
   *
   * @throws {@link Operations.ConfirmConnection2Error} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmConnection2(
    request: Operations.ConfirmConnection2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ConfirmConnection2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget5AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ConfirmConnection2Error,
      },
      options,
    );
  }

  /**
   * Confirm Customer Agreement
   *
   * @remarks
   * The confirmation of the terms of agreement when creating the connection/link aggregation group
   * (LAG).
   *
   * @returns Success
   *
   * @throws {@link Operations.ConfirmCustomerAgreement2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmCustomerAgreement2(
    request: Operations.ConfirmCustomerAgreement2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ConfirmCustomerAgreement2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmCustomerAgreement"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget6AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ConfirmCustomerAgreement2Error,
      },
      options,
    );
  }

  /**
   * Confirm Private Virtual Interface
   *
   * @remarks
   * Accepts ownership of a private virtual interface created by another Amazon Web Services
   * account. After the virtual interface owner makes this call, the virtual interface is created
   * and attached to the specified virtual private gateway or Direct Connect gateway, and is made
   * available to handle traffic.
   *
   * @returns Success
   *
   * @throws {@link Operations.ConfirmPrivateVirtualInterface2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmPrivateVirtualInterface2(
    request: Operations.ConfirmPrivateVirtualInterface2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ConfirmPrivateVirtualInterface2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmPrivateVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget7AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ConfirmPrivateVirtualInterface2Error,
      },
      options,
    );
  }

  /**
   * Confirm Public Virtual Interface
   *
   * @remarks
   * Accepts ownership of a public virtual interface created by another Amazon Web Services account.
   * After the virtual interface owner makes this call, the specified virtual interface is created
   * and made available to handle traffic.
   *
   * @returns Success
   *
   * @throws {@link Operations.ConfirmPublicVirtualInterface2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmPublicVirtualInterface2(
    request: Operations.ConfirmPublicVirtualInterface2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ConfirmPublicVirtualInterface2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmPublicVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget8AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ConfirmPublicVirtualInterface2Error,
      },
      options,
    );
  }

  /**
   * Confirm Transit Virtual Interface
   *
   * @remarks
   * Accepts ownership of a transit virtual interface created by another Amazon Web Services
   * account. After the owner of the transit virtual interface makes this call, the specified
   * transit virtual interface is created and made available to handle traffic.
   *
   * @returns Success
   *
   * @throws {@link Operations.ConfirmTransitVirtualInterface2Error} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmTransitVirtualInterface2(
    request: Operations.ConfirmTransitVirtualInterface2Request,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ConfirmTransitVirtualInterface2Error> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmTransitVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget9AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ConfirmTransitVirtualInterface2Error,
      },
      options,
    );
  }

  /**
   * Disassociate Connections From Resiliency Group
   *
   * @remarks
   * Disassociates one or more connections from the specified resiliency group. This operation is
   * atomic: either all of the specified connections are disassociated, or the operation fails and
   * no changes are made.
   *
   * @returns Success
   *
   * @throws {@link Operations.DisassociateConnectionsFromResiliencyGroupError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  disassociateConnectionsFromResiliencyGroup(
    request: Operations.DisassociateConnectionsFromResiliencyGroupRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.DisassociateConnectionsFromResiliencyGroupError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DisassociateConnectionsFromResiliencyGroup"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget11AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.DisassociateConnectionsFromResiliencyGroupError,
      },
      options,
    );
  }

  /**
   * List Resiliency Group Associations
   *
   * @remarks
   * Lists the connection associations for the specified resiliency group.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListResiliencyGroupAssociationsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listResiliencyGroupAssociations(
    request: Operations.ListResiliencyGroupAssociationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListResiliencyGroupAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListResiliencyGroupAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget12AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListResiliencyGroupAssociationsError,
      },
      options,
    );
  }

  /**
   * List Virtual Interface Routes
   *
   * @remarks
   * Lists the routes for the specified virtual interface. Use the routeDirection filter to control
   * which routes are returned: accepted: routes received from the customer network over the virtual
   * interface. advertised: routes advertised to the customer network over the virtual interface.
   *
   * @returns Success
   *
   * @throws {@link Operations.ListVirtualInterfaceRoutesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVirtualInterfaceRoutes(
    request: Operations.ListVirtualInterfaceRoutesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.ListVirtualInterfaceRoutesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVirtualInterfaceRoutes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget13AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.ListVirtualInterfaceRoutesError,
      },
      options,
    );
  }

  /**
   * Update Connections Billing Mode
   *
   * @remarks
   * Updates the billing mode for the specified Direct Connect connections. You can update the
   * billing mode for up to 200 connections in a single request.
   *
   * @returns Success
   *
   * @throws {@link Operations.UpdateConnectionsBillingModeError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateConnectionsBillingMode(
    request: Operations.UpdateConnectionsBillingModeRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, Operations.UpdateConnectionsBillingModeError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateConnectionsBillingMode"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          {
            name: "X-Amz-Target",
            value: request.xAmzTarget,
            schema: xAmzTarget14AwsDirectConnectOperationsApiSchema,
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Operations.UpdateConnectionsBillingModeError,
      },
      options,
    );
  }
}

export namespace Operations {
  export type AllocateConnectionOnInterconnect2Request = {
    xAmzTarget: XAmzTargetAwsDirectConnectOperationsApi;
  };

  export class AllocateConnectionOnInterconnect2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocateConnectionOnInterconnect2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocateHostedConnection2Request = {
    xAmzTarget: XAmzTarget1AwsDirectConnectOperationsApi;
  };

  export class AllocateHostedConnection2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocateHostedConnection2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocatePrivateVirtualInterface2Request = {
    xAmzTarget: XAmzTarget2AwsDirectConnectOperationsApi;
  };

  export class AllocatePrivateVirtualInterface2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocatePrivateVirtualInterface2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocatePublicVirtualInterface2Request = {
    xAmzTarget: XAmzTarget3AwsDirectConnectOperationsApi;
  };

  export class AllocatePublicVirtualInterface2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocatePublicVirtualInterface2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocateTransitVirtualInterface2Request = {
    xAmzTarget: XAmzTarget4AwsDirectConnectOperationsApi;
  };

  export class AllocateTransitVirtualInterface2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocateTransitVirtualInterface2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AssociateConnectionsToResiliencyGroupRequestParams = {
    xAmzTarget: XAmzTarget10AwsDirectConnectOperationsApi;
  };

  export class AssociateConnectionsToResiliencyGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateConnectionsToResiliencyGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmConnection2Request = {
    xAmzTarget: XAmzTarget5AwsDirectConnectOperationsApi;
  };

  export class ConfirmConnection2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmConnection2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmCustomerAgreement2Request = {
    xAmzTarget: XAmzTarget6AwsDirectConnectOperationsApi;
  };

  export class ConfirmCustomerAgreement2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmCustomerAgreement2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmPrivateVirtualInterface2Request = {
    xAmzTarget: XAmzTarget7AwsDirectConnectOperationsApi;
  };

  export class ConfirmPrivateVirtualInterface2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmPrivateVirtualInterface2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmPublicVirtualInterface2Request = {
    xAmzTarget: XAmzTarget8AwsDirectConnectOperationsApi;
  };

  export class ConfirmPublicVirtualInterface2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmPublicVirtualInterface2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmTransitVirtualInterface2Request = {
    xAmzTarget: XAmzTarget9AwsDirectConnectOperationsApi;
  };

  export class ConfirmTransitVirtualInterface2Error extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmTransitVirtualInterface2Error> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DisassociateConnectionsFromResiliencyGroupRequestParams = {
    xAmzTarget: XAmzTarget11AwsDirectConnectOperationsApi;
  };

  export class DisassociateConnectionsFromResiliencyGroupError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateConnectionsFromResiliencyGroupError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListResiliencyGroupAssociationsRequestParams = {
    xAmzTarget: XAmzTarget12AwsDirectConnectOperationsApi;
  };

  export class ListResiliencyGroupAssociationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListResiliencyGroupAssociationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListVirtualInterfaceRoutesRequestParams = {
    xAmzTarget: XAmzTarget13AwsDirectConnectOperationsApi;
  };

  export class ListVirtualInterfaceRoutesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListVirtualInterfaceRoutesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateConnectionsBillingModeRequestParams = {
    xAmzTarget: XAmzTarget14AwsDirectConnectOperationsApi;
  };

  export class UpdateConnectionsBillingModeError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateConnectionsBillingModeError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
