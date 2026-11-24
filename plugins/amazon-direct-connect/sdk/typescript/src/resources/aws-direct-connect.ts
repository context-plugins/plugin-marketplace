import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { xAmzTargetSchema, type XAmzTarget } from "../models/xamz-target.js";
import { xAmzTarget1Schema, type XAmzTarget1 } from "../models/xamz-target1.js";
import { xAmzTarget10Schema, type XAmzTarget10 } from "../models/xamz-target10.js";
import { xAmzTarget11Schema, type XAmzTarget11 } from "../models/xamz-target11.js";
import { xAmzTarget12Schema, type XAmzTarget12 } from "../models/xamz-target12.js";
import { xAmzTarget13Schema, type XAmzTarget13 } from "../models/xamz-target13.js";
import { xAmzTarget14Schema, type XAmzTarget14 } from "../models/xamz-target14.js";
import { xAmzTarget15Schema, type XAmzTarget15 } from "../models/xamz-target15.js";
import { xAmzTarget16Schema, type XAmzTarget16 } from "../models/xamz-target16.js";
import { xAmzTarget17Schema, type XAmzTarget17 } from "../models/xamz-target17.js";
import { xAmzTarget18Schema, type XAmzTarget18 } from "../models/xamz-target18.js";
import { xAmzTarget19Schema, type XAmzTarget19 } from "../models/xamz-target19.js";
import { xAmzTarget2Schema, type XAmzTarget2 } from "../models/xamz-target2.js";
import { xAmzTarget20Schema, type XAmzTarget20 } from "../models/xamz-target20.js";
import { xAmzTarget21Schema, type XAmzTarget21 } from "../models/xamz-target21.js";
import { xAmzTarget22Schema, type XAmzTarget22 } from "../models/xamz-target22.js";
import { xAmzTarget23Schema, type XAmzTarget23 } from "../models/xamz-target23.js";
import { xAmzTarget24Schema, type XAmzTarget24 } from "../models/xamz-target24.js";
import { xAmzTarget25Schema, type XAmzTarget25 } from "../models/xamz-target25.js";
import { xAmzTarget26Schema, type XAmzTarget26 } from "../models/xamz-target26.js";
import { xAmzTarget27Schema, type XAmzTarget27 } from "../models/xamz-target27.js";
import { xAmzTarget28Schema, type XAmzTarget28 } from "../models/xamz-target28.js";
import { xAmzTarget29Schema, type XAmzTarget29 } from "../models/xamz-target29.js";
import { xAmzTarget3Schema, type XAmzTarget3 } from "../models/xamz-target3.js";
import { xAmzTarget30Schema, type XAmzTarget30 } from "../models/xamz-target30.js";
import { xAmzTarget31Schema, type XAmzTarget31 } from "../models/xamz-target31.js";
import { xAmzTarget32Schema, type XAmzTarget32 } from "../models/xamz-target32.js";
import { xAmzTarget33Schema, type XAmzTarget33 } from "../models/xamz-target33.js";
import { xAmzTarget34Schema, type XAmzTarget34 } from "../models/xamz-target34.js";
import { xAmzTarget35Schema, type XAmzTarget35 } from "../models/xamz-target35.js";
import { xAmzTarget36Schema, type XAmzTarget36 } from "../models/xamz-target36.js";
import { xAmzTarget37Schema, type XAmzTarget37 } from "../models/xamz-target37.js";
import { xAmzTarget38Schema, type XAmzTarget38 } from "../models/xamz-target38.js";
import { xAmzTarget39Schema, type XAmzTarget39 } from "../models/xamz-target39.js";
import { xAmzTarget4Schema, type XAmzTarget4 } from "../models/xamz-target4.js";
import { xAmzTarget40Schema, type XAmzTarget40 } from "../models/xamz-target40.js";
import { xAmzTarget41Schema, type XAmzTarget41 } from "../models/xamz-target41.js";
import { xAmzTarget42Schema, type XAmzTarget42 } from "../models/xamz-target42.js";
import { xAmzTarget43Schema, type XAmzTarget43 } from "../models/xamz-target43.js";
import { xAmzTarget44Schema, type XAmzTarget44 } from "../models/xamz-target44.js";
import { xAmzTarget45Schema, type XAmzTarget45 } from "../models/xamz-target45.js";
import { xAmzTarget46Schema, type XAmzTarget46 } from "../models/xamz-target46.js";
import { xAmzTarget47Schema, type XAmzTarget47 } from "../models/xamz-target47.js";
import { xAmzTarget48Schema, type XAmzTarget48 } from "../models/xamz-target48.js";
import { xAmzTarget49Schema, type XAmzTarget49 } from "../models/xamz-target49.js";
import { xAmzTarget5Schema, type XAmzTarget5 } from "../models/xamz-target5.js";
import { xAmzTarget50Schema, type XAmzTarget50 } from "../models/xamz-target50.js";
import { xAmzTarget51Schema, type XAmzTarget51 } from "../models/xamz-target51.js";
import { xAmzTarget52Schema, type XAmzTarget52 } from "../models/xamz-target52.js";
import { xAmzTarget53Schema, type XAmzTarget53 } from "../models/xamz-target53.js";
import { xAmzTarget54Schema, type XAmzTarget54 } from "../models/xamz-target54.js";
import { xAmzTarget55Schema, type XAmzTarget55 } from "../models/xamz-target55.js";
import { xAmzTarget56Schema, type XAmzTarget56 } from "../models/xamz-target56.js";
import { xAmzTarget57Schema, type XAmzTarget57 } from "../models/xamz-target57.js";
import { xAmzTarget58Schema, type XAmzTarget58 } from "../models/xamz-target58.js";
import { xAmzTarget59Schema, type XAmzTarget59 } from "../models/xamz-target59.js";
import { xAmzTarget6Schema, type XAmzTarget6 } from "../models/xamz-target6.js";
import { xAmzTarget60Schema, type XAmzTarget60 } from "../models/xamz-target60.js";
import { xAmzTarget61Schema, type XAmzTarget61 } from "../models/xamz-target61.js";
import { xAmzTarget62Schema, type XAmzTarget62 } from "../models/xamz-target62.js";
import { xAmzTarget7Schema, type XAmzTarget7 } from "../models/xamz-target7.js";
import { xAmzTarget8Schema, type XAmzTarget8 } from "../models/xamz-target8.js";
import { xAmzTarget9Schema, type XAmzTarget9 } from "../models/xamz-target9.js";
import type { Servers } from "../servers.js";

export class AwsDirectConnect {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Accept Direct Connect Gateway Association Proposal
   *
   * @remarks
   * Accepts a proposal request to attach a virtual private gateway or transit gateway to a Direct
   * Connect gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  acceptDirectConnectGatewayAssociationProposal(
    request: AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AcceptDirectConnectGatewayAssociationProposal"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTargetSchema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AcceptDirectConnectGatewayAssociationProposalError,
      },
      options,
    );
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
   * @throws {@link AwsDirectConnect.AllocateConnectionOnInterconnectError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  allocateConnectionOnInterconnect(
    request: AwsDirectConnect.AllocateConnectionOnInterconnectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AllocateConnectionOnInterconnectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocateConnectionOnInterconnect"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget4Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AllocateConnectionOnInterconnectError,
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
   * @throws {@link AwsDirectConnect.AllocateHostedConnectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocateHostedConnection(
    request: AwsDirectConnect.AllocateHostedConnectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AllocateHostedConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocateHostedConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget5Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AllocateHostedConnectionError,
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
   * @throws {@link AwsDirectConnect.AllocatePrivateVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocatePrivateVirtualInterface(
    request: AwsDirectConnect.AllocatePrivateVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AllocatePrivateVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocatePrivateVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget6Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AllocatePrivateVirtualInterfaceError,
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
   * @throws {@link AwsDirectConnect.AllocatePublicVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocatePublicVirtualInterface(
    request: AwsDirectConnect.AllocatePublicVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AllocatePublicVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocatePublicVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget7Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AllocatePublicVirtualInterfaceError,
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
   * @throws {@link AwsDirectConnect.AllocateTransitVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  allocateTransitVirtualInterface(
    request: AwsDirectConnect.AllocateTransitVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AllocateTransitVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AllocateTransitVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget8Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AllocateTransitVirtualInterfaceError,
      },
      options,
    );
  }

  /**
   * Associate Connection With Lag
   *
   * @remarks
   * Associates an existing connection with a link aggregation group (LAG). The connection is
   * interrupted and re-established as a member of the LAG (connectivity to Amazon Web Services is
   * interrupted). The connection must be hosted on the same Direct Connect endpoint as the LAG, and
   * its bandwidth must match the bandwidth for the LAG. You can re-associate a connection that's
   * currently associated with a different LAG; however, if removing the connection would cause the
   * original LAG to fall below its setting for minimum number of operational connections, the
   * request fails. Any virtual interfaces that are directly associated with the connection are
   * automatically re-associated with the LAG. If the connection was originally associated with a
   * different LAG, the virtual interfaces remain associated with the original LAG. For
   * interconnects, any hosted connections are automatically re-associated with the LAG. If the
   * interconnect was originally associated with a different LAG, the hosted connections remain
   * associated with the original LAG.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.AssociateConnectionWithLagError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateConnectionWithLag(
    request: AwsDirectConnect.AssociateConnectionWithLagRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AssociateConnectionWithLagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateConnectionWithLag"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget14Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AssociateConnectionWithLagError,
      },
      options,
    );
  }

  /**
   * Associate Hosted Connection
   *
   * @remarks
   * Associates a hosted connection and its virtual interfaces with a link aggregation group (LAG)
   * or interconnect. If the target interconnect or LAG has an existing hosted connection with a
   * conflicting VLAN number or IP address, the operation fails. This action temporarily interrupts
   * the hosted connection's connectivity to Amazon Web Services as it is being migrated. Intended
   * for use by Direct Connect Partners only.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.AssociateHostedConnectionError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateHostedConnection(
    request: AwsDirectConnect.AssociateHostedConnectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AssociateHostedConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateHostedConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget21Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AssociateHostedConnectionError,
      },
      options,
    );
  }

  /**
   * Associate Mac Sec Key
   *
   * @remarks
   * Associates a MAC Security (MACsec) Connection Key Name (CKN)/ Connectivity Association Key
   * (CAK) pair with a Direct Connect connection. You must supply either the secretARN, or the
   * CKN/CAK (ckn and cak) pair in the request. For information about MAC Security (MACsec) key
   * considerations, see MACsec pre-shared CKN/CAK key considerations in the Direct Connect User
   * Guide.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.AssociateMacSecKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateMacSecKey(
    request: AwsDirectConnect.AssociateMacSecKeyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AssociateMacSecKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateMacSecKey"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget23Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AssociateMacSecKeyError,
      },
      options,
    );
  }

  /**
   * Associate Virtual Interface
   *
   * @remarks
   * Associates a virtual interface with a specified link aggregation group (LAG) or connection.
   * Connectivity to Amazon Web Services is temporarily interrupted as the virtual interface is
   * being migrated. If the target connection or LAG has an associated virtual interface with a
   * conflicting VLAN number or a conflicting IP address, the operation fails. Virtual interfaces
   * associated with a hosted connection cannot be associated with a LAG; hosted connections must be
   * migrated along with their virtual interfaces using AssociateHostedConnection. To reassociate a
   * virtual interface to a new connection or LAG, the requester must own either the virtual
   * interface itself or the connection to which the virtual interface is currently associated.
   * Additionally, the requester must own the connection or LAG for the association.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.AssociateVirtualInterfaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  associateVirtualInterface(
    request: AwsDirectConnect.AssociateVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.AssociateVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#AssociateVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget25Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.AssociateVirtualInterfaceError,
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
   * @throws {@link AwsDirectConnect.ConfirmConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmConnection(
    request: AwsDirectConnect.ConfirmConnectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.ConfirmConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget9Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.ConfirmConnectionError,
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
   * @throws {@link AwsDirectConnect.ConfirmCustomerAgreementError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmCustomerAgreement(
    request: AwsDirectConnect.ConfirmCustomerAgreementRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.ConfirmCustomerAgreementError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmCustomerAgreement"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget10Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.ConfirmCustomerAgreementError,
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
   * @throws {@link AwsDirectConnect.ConfirmPrivateVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmPrivateVirtualInterface(
    request: AwsDirectConnect.ConfirmPrivateVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.ConfirmPrivateVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmPrivateVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget11Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.ConfirmPrivateVirtualInterfaceError,
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
   * @throws {@link AwsDirectConnect.ConfirmPublicVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmPublicVirtualInterface(
    request: AwsDirectConnect.ConfirmPublicVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.ConfirmPublicVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmPublicVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget12Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.ConfirmPublicVirtualInterfaceError,
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
   * @throws {@link AwsDirectConnect.ConfirmTransitVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  confirmTransitVirtualInterface(
    request: AwsDirectConnect.ConfirmTransitVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.ConfirmTransitVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ConfirmTransitVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget13Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.ConfirmTransitVirtualInterfaceError,
      },
      options,
    );
  }

  /**
   * Create BGPPeer
   *
   * @remarks
   * Creates a BGP peer on the specified virtual interface. You must create a BGP peer for the
   * corresponding address family (IPv4/IPv6) in order to access Amazon Web Services resources that
   * also use that address family. If logical redundancy is not supported by the connection,
   * interconnect, or LAG, the BGP peer cannot be in the same address family as an existing BGP peer
   * on the virtual interface. When creating a IPv6 BGP peer, omit the Amazon address and customer
   * address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you
   * cannot specify custom IPv6 addresses. If you let Amazon Web Services auto-assign IPv4
   * addresses, a /30 CIDR will be allocated from 169.254.0.0/16. Amazon Web Services does not
   * recommend this option if you intend to use the customer router peer IP address as the source
   * and destination for traffic. Instead you should use RFC 1918 or other addressing, and specify
   * the address yourself. For more information about RFC 1918 see Address Allocation for Private
   * Internets. For a public virtual interface, the Autonomous System Number (ASN) must be private
   * or already on the allow list for the virtual interface.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateBgpPeerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createBgpPeer(
    request: AwsDirectConnect.CreateBgpPeerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateBgpPeerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateBGPPeer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget28Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateBgpPeerError,
      },
      options,
    );
  }

  /**
   * Create Connection
   *
   * @remarks
   * Creates a connection between a customer network and a specific Direct Connect location. A
   * connection links your internal network to an Direct Connect location over a standard Ethernet
   * fiber-optic cable. One end of the cable is connected to your router, the other to an Direct
   * Connect router. To find the locations for your Region, use DescribeLocations. You can
   * automatically add the new connection to a link aggregation group (LAG) by specifying a LAG ID
   * in the request. This ensures that the new connection is allocated on the same Direct Connect
   * endpoint that hosts the specified LAG. If there are no available ports on the endpoint, the
   * request fails and no connection is created.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createConnection(
    request: AwsDirectConnect.CreateConnectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget15Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateConnectionError,
      },
      options,
    );
  }

  /**
   * Create Direct Connect Gateway
   *
   * @remarks
   * Creates a Direct Connect gateway, which is an intermediate object that enables you to connect a
   * set of virtual interfaces and virtual private gateways. A Direct Connect gateway is global and
   * visible in any Amazon Web Services Region after it is created. The virtual interfaces and
   * virtual private gateways that are connected through a Direct Connect gateway can be in
   * different Amazon Web Services Regions. This enables you to connect to a VPC in any Region,
   * regardless of the Region in which the virtual interfaces are located, and pass traffic between
   * them.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateDirectConnectGatewayError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDirectConnectGateway(
    request: AwsDirectConnect.CreateDirectConnectGatewayRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateDirectConnectGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDirectConnectGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget30Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateDirectConnectGatewayError,
      },
      options,
    );
  }

  /**
   * Create Direct Connect Gateway Association
   *
   * @remarks
   * Creates an association between a Direct Connect gateway and a virtual private gateway. The
   * virtual private gateway must be attached to a VPC and must not be associated with another
   * Direct Connect gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateDirectConnectGatewayAssociationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDirectConnectGatewayAssociation(
    request: AwsDirectConnect.CreateDirectConnectGatewayAssociationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDirectConnectGatewayAssociation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget34Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateDirectConnectGatewayAssociationError,
      },
      options,
    );
  }

  /**
   * Create Direct Connect Gateway Association Proposal
   *
   * @remarks
   * Creates a proposal to associate the specified virtual private gateway or transit gateway with
   * the specified Direct Connect gateway. You can associate a Direct Connect gateway and virtual
   * private gateway or transit gateway that is owned by any Amazon Web Services account.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createDirectConnectGatewayAssociationProposal(
    request: AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateDirectConnectGatewayAssociationProposal"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget1Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateDirectConnectGatewayAssociationProposalError,
      },
      options,
    );
  }

  /**
   * Create Interconnect
   *
   * @remarks
   * Creates an interconnect between an Direct Connect Partner's network and a specific Direct
   * Connect location. An interconnect is a connection that is capable of hosting other connections.
   * The Direct Connect Partner can use an interconnect to provide Direct Connect hosted connections
   * to customers through their own network services. Like a standard connection, an interconnect
   * links the partner's network to an Direct Connect location over a standard Ethernet fiber-optic
   * cable. One end is connected to the partner's router, the other to an Direct Connect router. You
   * can automatically add the new interconnect to a link aggregation group (LAG) by specifying a
   * LAG ID in the request. This ensures that the new interconnect is allocated on the same Direct
   * Connect endpoint that hosts the specified LAG. If there are no available ports on the endpoint,
   * the request fails and no interconnect is created. For each end customer, the Direct Connect
   * Partner provisions a connection on their interconnect by calling AllocateHostedConnection. The
   * end customer can then connect to Amazon Web Services resources by creating a virtual interface
   * on their connection, using the VLAN assigned to them by the Direct Co
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateInterconnectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createInterconnect(
    request: AwsDirectConnect.CreateInterconnectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateInterconnectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateInterconnect"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget38Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateInterconnectError,
      },
      options,
    );
  }

  /**
   * Create Lag
   *
   * @remarks
   * Creates a link aggregation group (LAG) with the specified number of bundled physical dedicated
   * connections between the customer network and a specific Direct Connect location. A LAG is a
   * logical interface that uses the Link Aggregation Control Protocol (LACP) to aggregate multiple
   * interfaces, enabling you to treat them as a single interface. All connections in a LAG must use
   * the same bandwidth (either 1Gbps, 10Gbps, 100Gbps, or 400Gbps) and must terminate at the same
   * Direct Connect endpoint. You can have up to 10 dedicated connections per location. Regardless
   * of this limit, if you request more connections for the LAG than Direct Connect can allocate on
   * a single endpoint, no LAG is created.. You can specify an existing physical dedicated
   * connection or interconnect to include in the LAG (which counts towards the total number of
   * connections). Doing so interrupts the current physical dedicated connection, and re-establishes
   * them as a member of the LAG. The LAG will be created on the same Direct Connect endpoint to
   * which the dedicated connection terminates. Any virtual interfaces associated with the dedicated
   * connection are automatically disassociated and re-associated with the LAG. The
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateLagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createLag(
    request: AwsDirectConnect.CreateLagRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateLagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateLag"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget41Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateLagError,
      },
      options,
    );
  }

  /**
   * Create Private Virtual Interface
   *
   * @remarks
   * Creates a private virtual interface. A virtual interface is the VLAN that transports Direct
   * Connect traffic. A private virtual interface can be connected to either a Direct Connect
   * gateway or a Virtual Private Gateway (VGW). Connecting the private virtual interface to a
   * Direct Connect gateway enables the possibility for connecting to multiple VPCs, including VPCs
   * in different Amazon Web Services Regions. Connecting the private virtual interface to a VGW
   * only provides access to a single VPC within the same Region. Setting the MTU of a virtual
   * interface to 8500 (jumbo frames) can cause an update to the underlying physical connection if
   * it wasn't updated to support jumbo frames. Updating the connection disrupts network
   * connectivity for all virtual interfaces associated with the connection for up to 30 seconds. To
   * check whether your connection supports jumbo frames, call DescribeConnections. To check whether
   * your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreatePrivateVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPrivateVirtualInterface(
    request: AwsDirectConnect.CreatePrivateVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreatePrivateVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreatePrivateVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget45Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreatePrivateVirtualInterfaceError,
      },
      options,
    );
  }

  /**
   * Create Public Virtual Interface
   *
   * @remarks
   * Creates a public virtual interface. A virtual interface is the VLAN that transports Direct
   * Connect traffic. A public virtual interface supports sending traffic to public services of
   * Amazon Web Services such as Amazon S3. When creating an IPv6 public virtual interface
   * (addressFamily is ipv6), leave the customer and amazon address fields blank to use
   * auto-assigned IPv6 space. Custom IPv6 addresses are not supported.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreatePublicVirtualInterfaceError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createPublicVirtualInterface(
    request: AwsDirectConnect.CreatePublicVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreatePublicVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreatePublicVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget46Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreatePublicVirtualInterfaceError,
      },
      options,
    );
  }

  /**
   * Create Transit Virtual Interface
   *
   * @remarks
   * Creates a transit virtual interface. A transit virtual interface should be used to access one
   * or more transit gateways associated with Direct Connect gateways. A transit virtual interface
   * enables the connection of multiple VPCs attached to a transit gateway to a Direct Connect
   * gateway. If you associate your transit gateway with one or more Direct Connect gateways, the
   * Autonomous System Number (ASN) used by the transit gateway and the Direct Connect gateway must
   * be different. For example, if you use the default ASN 64512 for both your the transit gateway
   * and Direct Connect gateway, the association request fails. A jumbo MTU value must be either
   * 1500 or 8500. No other values will be accepted. Setting the MTU of a virtual interface to 8500
   * (jumbo frames) can cause an update to the underlying physical connection if it wasn't updated
   * to support jumbo frames. Updating the connection disrupts network connectivity for all virtual
   * interfaces associated with the connection for up to 30 seconds. To check whether your
   * connection supports jumbo frames, call DescribeConnections. To check whether your virtual
   * interface supports jumbo frames, call DescribeVirtualInterfaces.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.CreateTransitVirtualInterfaceError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createTransitVirtualInterface(
    request: AwsDirectConnect.CreateTransitVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.CreateTransitVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#CreateTransitVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget47Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.CreateTransitVirtualInterfaceError,
      },
      options,
    );
  }

  /**
   * Delete BGPPeer
   *
   * @remarks
   * Deletes the specified BGP peer on the specified virtual interface with the specified customer
   * address and ASN. You cannot delete the last BGP peer from a virtual interface.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteBgpPeerError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteBgpPeer(
    request: AwsDirectConnect.DeleteBgpPeerRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteBgpPeerError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteBGPPeer"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget29Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteBgpPeerError,
      },
      options,
    );
  }

  /**
   * Delete Connection
   *
   * @remarks
   * Deletes the specified connection. Deleting a connection only stops the Direct Connect port hour
   * and data transfer charges. If you are partnering with any third parties to connect with the
   * Direct Connect location, you must cancel your service with them separately.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteConnection(
    request: AwsDirectConnect.DeleteConnectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget16Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteConnectionError,
      },
      options,
    );
  }

  /**
   * Delete Direct Connect Gateway
   *
   * @remarks
   * Deletes the specified Direct Connect gateway. You must first delete all virtual interfaces that
   * are attached to the Direct Connect gateway and disassociate all virtual private gateways
   * associated with the Direct Connect gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteDirectConnectGatewayError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDirectConnectGateway(
    request: AwsDirectConnect.DeleteDirectConnectGatewayRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteDirectConnectGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDirectConnectGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget31Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteDirectConnectGatewayError,
      },
      options,
    );
  }

  /**
   * Delete Direct Connect Gateway Association
   *
   * @remarks
   * Deletes the association between the specified Direct Connect gateway and virtual private
   * gateway. We recommend that you specify the associationID to delete the association.
   * Alternatively, if you own virtual gateway and a Direct Connect gateway association, you can
   * specify the virtualGatewayId and directConnectGatewayId to delete an association.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteDirectConnectGatewayAssociationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDirectConnectGatewayAssociation(
    request: AwsDirectConnect.DeleteDirectConnectGatewayAssociationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDirectConnectGatewayAssociation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget35Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteDirectConnectGatewayAssociationError,
      },
      options,
    );
  }

  /**
   * Delete Direct Connect Gateway Association Proposal
   *
   * @remarks
   * Deletes the association proposal request between the specified Direct Connect gateway and
   * virtual private gateway or transit gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteDirectConnectGatewayAssociationProposal(
    request: AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteDirectConnectGatewayAssociationProposal"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget2Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteDirectConnectGatewayAssociationProposalError,
      },
      options,
    );
  }

  /**
   * Delete Interconnect
   *
   * @remarks
   * Deletes the specified interconnect. Intended for use by Direct Connect Partners only.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteInterconnectError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteInterconnect(
    request: AwsDirectConnect.DeleteInterconnectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteInterconnectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteInterconnect"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget39Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteInterconnectError,
      },
      options,
    );
  }

  /**
   * Delete Lag
   *
   * @remarks
   * Deletes the specified link aggregation group (LAG). You cannot delete a LAG if it has active
   * virtual interfaces or hosted connections.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteLagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteLag(
    request: AwsDirectConnect.DeleteLagRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteLagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteLag"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget42Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteLagError,
      },
      options,
    );
  }

  /**
   * Delete Virtual Interface
   *
   * @remarks
   * Deletes a virtual interface.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DeleteVirtualInterfaceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteVirtualInterface(
    request: AwsDirectConnect.DeleteVirtualInterfaceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DeleteVirtualInterfaceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DeleteVirtualInterface"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget26Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DeleteVirtualInterfaceError,
      },
      options,
    );
  }

  /**
   * Describe Connection Loa
   *
   * @remarks
   * Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for a connection. The Letter of
   * Authorization - Connecting Facility Assignment (LOA-CFA) is a document that your APN partner or
   * service provider uses when establishing your cross connect to Amazon Web Services at the
   * colocation facility. For more information, see Requesting Cross Connects at Direct Connect
   * Locations in the Direct Connect User Guide.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeConnectionLoaError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  describeConnectionLoa(
    request: AwsDirectConnect.DescribeConnectionLoaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeConnectionLoaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeConnectionLoa"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget48Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeConnectionLoaError,
      },
      options,
    );
  }

  /**
   * Describe Connections
   *
   * @remarks
   * Displays the specified connection or all connections in this Region.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeConnectionsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeConnections(
    request: AwsDirectConnect.DescribeConnectionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeConnections"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget17Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeConnectionsError,
      },
      options,
    );
  }

  /**
   * Describe Connections On Interconnect
   *
   * @remarks
   * Deprecated. Use DescribeHostedConnections instead. Lists the connections that have been
   * provisioned on the specified interconnect. Intended for use by Direct Connect Partners only.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeConnectionsOnInterconnectError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  describeConnectionsOnInterconnect(
    request: AwsDirectConnect.DescribeConnectionsOnInterconnectRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeConnectionsOnInterconnectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeConnectionsOnInterconnect"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget18Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeConnectionsOnInterconnectError,
      },
      options,
    );
  }

  /**
   * Describe Customer Metadata
   *
   * @remarks
   * Get and view a list of customer agreements, along with their signed status and whether the
   * customer is an NNIPartner, NNIPartnerV2, or a nonPartner.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeCustomerMetadataError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeCustomerMetadata(
    request: AwsDirectConnect.DescribeCustomerMetadataRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeCustomerMetadataError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeCustomerMetadata"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget49Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeCustomerMetadataError,
      },
      options,
    );
  }

  /**
   * Describe Direct Connect Gateway Association Proposals
   *
   * @remarks
   * Describes one or more association proposals for connection between a virtual private gateway or
   * transit gateway and a Direct Connect gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError} when the
   * API answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDirectConnectGatewayAssociationProposals(
    request: AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDirectConnectGatewayAssociationProposals"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget3Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeDirectConnectGatewayAssociationProposalsError,
      },
      options,
    );
  }

  /**
   * Describe Direct Connect Gateway Associations
   *
   * @remarks
   * Lists the associations between your Direct Connect gateways and virtual private gateways and
   * transit gateways. You must specify one of the following: A Direct Connect gateway The response
   * contains all virtual private gateways and transit gateways associated with the Direct Connect
   * gateway. A virtual private gateway The response contains the Direct Connect gateway. A transit
   * gateway The response contains the Direct Connect gateway. A Direct Connect gateway and a
   * virtual private gateway The response contains the association between the Direct Connect
   * gateway and virtual private gateway. A Direct Connect gateway and a transit gateway The
   * response contains the association between the Direct Connect gateway and transit gateway. A
   * Direct Connect gateway and a virtual private gateway The response contains the association
   * between the Direct Connect gateway and virtual private gateway. A Direct Connect gateway
   * association to a Cloud WAN core network The response contains the Cloud WAN core network ID
   * that the Direct Connect gateway is associated to.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDirectConnectGatewayAssociations(
    request: AwsDirectConnect.DescribeDirectConnectGatewayAssociationsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDirectConnectGatewayAssociations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget36Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeDirectConnectGatewayAssociationsError,
      },
      options,
    );
  }

  /**
   * Describe Direct Connect Gateway Attachments
   *
   * @remarks
   * Lists the attachments between your Direct Connect gateways and virtual interfaces. You must
   * specify a Direct Connect gateway, a virtual interface, or both. If you specify a Direct Connect
   * gateway, the response contains all virtual interfaces attached to the Direct Connect gateway.
   * If you specify a virtual interface, the response contains all Direct Connect gateways attached
   * to the virtual interface. If you specify both, the response contains the attachment between the
   * Direct Connect gateway and the virtual interface.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDirectConnectGatewayAttachments(
    request: AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDirectConnectGatewayAttachments"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget50Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeDirectConnectGatewayAttachmentsError,
      },
      options,
    );
  }

  /**
   * Describe Direct Connect Gateways
   *
   * @remarks
   * Lists all your Direct Connect gateways or only the specified Direct Connect gateway. Deleted
   * Direct Connect gateways are not returned.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeDirectConnectGatewaysError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeDirectConnectGateways(
    request: AwsDirectConnect.DescribeDirectConnectGatewaysRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeDirectConnectGatewaysError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeDirectConnectGateways"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget32Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeDirectConnectGatewaysError,
      },
      options,
    );
  }

  /**
   * Describe Hosted Connections
   *
   * @remarks
   * Lists the hosted connections that have been provisioned on the specified interconnect or link
   * aggregation group (LAG). Intended for use by Direct Connect Partners only.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeHostedConnectionsError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeHostedConnections(
    request: AwsDirectConnect.DescribeHostedConnectionsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeHostedConnectionsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeHostedConnections"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget22Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeHostedConnectionsError,
      },
      options,
    );
  }

  /**
   * Describe Interconnect Loa
   *
   * @remarks
   * Deprecated. Use DescribeLoa instead. Gets the LOA-CFA for the specified interconnect. The
   * Letter of Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used
   * when establishing your cross connect to Amazon Web Services at the colocation facility. For
   * more information, see Requesting Cross Connects at Direct Connect Locations in the Direct
   * Connect User Guide.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeInterconnectLoaError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   *
   * @deprecated
   */
  describeInterconnectLoa(
    request: AwsDirectConnect.DescribeInterconnectLoaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeInterconnectLoaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeInterconnectLoa"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget51Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeInterconnectLoaError,
      },
      options,
    );
  }

  /**
   * Describe Interconnects
   *
   * @remarks
   * Lists the interconnects owned by the Amazon Web Services account or only the specified
   * interconnect.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeInterconnectsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeInterconnects(
    request: AwsDirectConnect.DescribeInterconnectsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeInterconnectsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeInterconnects"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget40Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeInterconnectsError,
      },
      options,
    );
  }

  /**
   * Describe Lags
   *
   * @remarks
   * Describes all your link aggregation groups (LAG) or the specified LAG.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeLagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeLags(
    request: AwsDirectConnect.DescribeLagsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeLagsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeLags"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget43Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeLagsError,
      },
      options,
    );
  }

  /**
   * Describe Loa
   *
   * @remarks
   * Gets the LOA-CFA for a connection, interconnect, or link aggregation group (LAG). The Letter of
   * Authorization - Connecting Facility Assignment (LOA-CFA) is a document that is used when
   * establishing your cross connect to Amazon Web Services at the colocation facility. For more
   * information, see Requesting Cross Connects at Direct Connect Locations in the Direct Connect
   * User Guide.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeLoaError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeLoa(
    request: AwsDirectConnect.DescribeLoaRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeLoaError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeLoa"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget52Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeLoaError,
      },
      options,
    );
  }

  /**
   * Describe Locations
   *
   * @remarks
   * Lists the Direct Connect locations in the current Amazon Web Services Region. These are the
   * locations that can be selected when calling CreateConnection or CreateInterconnect.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeLocationsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeLocations(
    request: AwsDirectConnect.DescribeLocationsRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeLocationsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeLocations"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget53Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeLocationsError,
      },
      options,
    );
  }

  /**
   * Describe Router Configuration
   *
   * @remarks
   * Details about the router.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeRouterConfigurationError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeRouterConfiguration(
    request: AwsDirectConnect.DescribeRouterConfigurationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeRouterConfigurationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeRouterConfiguration"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget54Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeRouterConfigurationError,
      },
      options,
    );
  }

  /**
   * Describe Tags
   *
   * @remarks
   * Describes the tags associated with the specified Direct Connect resources.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeTagsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeTags(
    request: AwsDirectConnect.DescribeTagsRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeTagsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeTags"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget55Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeTagsError,
      },
      options,
    );
  }

  /**
   * Describe Virtual Gateways
   *
   * @remarks
   * Deprecated. Use DescribeVpnGateways instead. See DescribeVPNGateways in the Amazon Elastic
   * Compute Cloud API Reference. Lists the virtual private gateways owned by the Amazon Web
   * Services account. You can create one or more Direct Connect private virtual interfaces linked
   * to a virtual private gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeVirtualGatewaysError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeVirtualGateways(
    request: AwsDirectConnect.DescribeVirtualGatewaysRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeVirtualGatewaysError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeVirtualGateways"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget56Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeVirtualGatewaysError,
      },
      options,
    );
  }

  /**
   * Describe Virtual Interfaces
   *
   * @remarks
   * Displays all virtual interfaces for an Amazon Web Services account. Virtual interfaces deleted
   * fewer than 15 minutes before you make the request are also returned. If you specify a
   * connection ID, only the virtual interfaces associated with the connection are returned. If you
   * specify a virtual interface ID, then only a single virtual interface is returned. A virtual
   * interface (VLAN) transmits the traffic between the Direct Connect location and the customer
   * network. If you're using an asn, the response includes the ASN value in both the asn and
   * asnLong fields. If you're using asnLong, the response returns a value of 0 (zero) for the asn
   * attribute because it exceeds the highest ASN value of 2,147,483,647 that it can support
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DescribeVirtualInterfacesError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  describeVirtualInterfaces(
    request: AwsDirectConnect.DescribeVirtualInterfacesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DescribeVirtualInterfacesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DescribeVirtualInterfaces"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget27Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DescribeVirtualInterfacesError,
      },
      options,
    );
  }

  /**
   * Disassociate Connection From Lag
   *
   * @remarks
   * Disassociates a connection from a link aggregation group (LAG). The connection is interrupted
   * and re-established as a standalone connection (the connection is not deleted; to delete the
   * connection, use the DeleteConnection request). If the LAG has associated virtual interfaces or
   * hosted connections, they remain associated with the LAG. A disassociated connection owned by an
   * Direct Connect Partner is automatically converted to an interconnect. If disassociating the
   * connection would cause the LAG to fall below its setting for minimum number of operational
   * connections, the request fails, except when it's the last member of the LAG. If all connections
   * are disassociated, the LAG continues to exist as an empty LAG with no physical connections.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DisassociateConnectionFromLagError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  disassociateConnectionFromLag(
    request: AwsDirectConnect.DisassociateConnectionFromLagRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DisassociateConnectionFromLagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DisassociateConnectionFromLag"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget19Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DisassociateConnectionFromLagError,
      },
      options,
    );
  }

  /**
   * Disassociate Mac Sec Key
   *
   * @remarks
   * Removes the association between a MAC Security (MACsec) security key and a Direct Connect
   * connection.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.DisassociateMacSecKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  disassociateMacSecKey(
    request: AwsDirectConnect.DisassociateMacSecKeyRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.DisassociateMacSecKeyError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#DisassociateMacSecKey"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget24Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.DisassociateMacSecKeyError,
      },
      options,
    );
  }

  /**
   * List Virtual Interface Test History
   *
   * @remarks
   * Lists the virtual interface failover test history.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.ListVirtualInterfaceTestHistoryError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  listVirtualInterfaceTestHistory(
    request: AwsDirectConnect.ListVirtualInterfaceTestHistoryRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.ListVirtualInterfaceTestHistoryError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#ListVirtualInterfaceTestHistory"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget57Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.ListVirtualInterfaceTestHistoryError,
      },
      options,
    );
  }

  /**
   * Start Bgp Failover Test
   *
   * @remarks
   * Starts the virtual interface failover test that verifies your configuration meets your
   * resiliency requirements by placing the BGP peering session in the DOWN state. You can then send
   * traffic to verify that there are no outages. You can run the test on public, private, transit,
   * and hosted virtual interfaces. You can use ListVirtualInterfaceTestHistory to view the virtual
   * interface test history. If you need to stop the test before the test interval completes, use
   * StopBgpFailoverTest.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.StartBgpFailoverTestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  startBgpFailoverTest(
    request: AwsDirectConnect.StartBgpFailoverTestRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.StartBgpFailoverTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StartBgpFailoverTest"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget58Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.StartBgpFailoverTestError,
      },
      options,
    );
  }

  /**
   * Stop Bgp Failover Test
   *
   * @remarks
   * Stops the virtual interface failover test.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.StopBgpFailoverTestError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  stopBgpFailoverTest(
    request: AwsDirectConnect.StopBgpFailoverTestRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.StopBgpFailoverTestError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#StopBgpFailoverTest"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget59Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.StopBgpFailoverTestError,
      },
      options,
    );
  }

  /**
   * Tag Resource
   *
   * @remarks
   * Adds the specified tags to the specified Direct Connect resource. Each resource can have a
   * maximum of 50 tags. Each tag consists of a key and an optional value. If a tag with the same
   * key is already associated with the resource, this action updates its value.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.TagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  tagResource(
    request: AwsDirectConnect.TagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.TagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#TagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget60Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.TagResourceError,
      },
      options,
    );
  }

  /**
   * Untag Resource
   *
   * @remarks
   * Removes one or more tags from the specified Direct Connect resource.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.UntagResourceError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  untagResource(
    request: AwsDirectConnect.UntagResourceRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.UntagResourceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UntagResource"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget61Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.UntagResourceError,
      },
      options,
    );
  }

  /**
   * Update Connection
   *
   * @remarks
   * Updates the Direct Connect connection configuration. You can update the following parameters
   * for a connection: The connection name The connection's MAC Security (MACsec) encryption mode.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.UpdateConnectionError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateConnection(
    request: AwsDirectConnect.UpdateConnectionRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.UpdateConnectionError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateConnection"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget20Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.UpdateConnectionError,
      },
      options,
    );
  }

  /**
   * Update Direct Connect Gateway
   *
   * @remarks
   * Updates the name of a current Direct Connect gateway.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.UpdateDirectConnectGatewayError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateDirectConnectGateway(
    request: AwsDirectConnect.UpdateDirectConnectGatewayRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.UpdateDirectConnectGatewayError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateDirectConnectGateway"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget33Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.UpdateDirectConnectGatewayError,
      },
      options,
    );
  }

  /**
   * Update Direct Connect Gateway Association
   *
   * @remarks
   * Updates the specified attributes of the Direct Connect gateway association. Add or remove
   * prefixes from the association.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.UpdateDirectConnectGatewayAssociationError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateDirectConnectGatewayAssociation(
    request: AwsDirectConnect.UpdateDirectConnectGatewayAssociationRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.UpdateDirectConnectGatewayAssociationError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateDirectConnectGatewayAssociation"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget37Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.UpdateDirectConnectGatewayAssociationError,
      },
      options,
    );
  }

  /**
   * Update Lag
   *
   * @remarks
   * Updates the attributes of the specified link aggregation group (LAG). You can update the
   * following LAG attributes: The name of the LAG. The value for the minimum number of connections
   * that must be operational for the LAG itself to be operational. The LAG's MACsec encryption
   * mode. Amazon Web Services assigns this value to each connection which is part of the LAG. The
   * tags If you adjust the threshold value for the minimum number of operational connections,
   * ensure that the new value does not cause the LAG to fall below the threshold and become
   * non-operational.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.UpdateLagError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateLag(
    request: AwsDirectConnect.UpdateLagRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.UpdateLagError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateLag"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget44Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.UpdateLagError,
      },
      options,
    );
  }

  /**
   * Update Virtual Interface Attributes
   *
   * @remarks
   * Updates the specified attributes of the specified virtual private interface. Setting the MTU of
   * a virtual interface to 8500 (jumbo frames) can cause an update to the underlying physical
   * connection if it wasn't updated to support jumbo frames. Updating the connection disrupts
   * network connectivity for all virtual interfaces associated with the connection for up to 30
   * seconds. To check whether your connection supports jumbo frames, call DescribeConnections. To
   * check whether your virtual interface supports jumbo frames, call DescribeVirtualInterfaces.
   *
   * @returns Success
   *
   * @throws {@link AwsDirectConnect.UpdateVirtualInterfaceAttributesError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link AwsDirectConnectError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateVirtualInterfaceAttributes(
    request: AwsDirectConnect.UpdateVirtualInterfaceAttributesRequestParams,
    options?: RequestOptions,
  ): ApiPromise<undefined, AwsDirectConnect.UpdateVirtualInterfaceAttributesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/#UpdateVirtualInterfaceAttributes"),
        auth: this.#auth.sigv4,
        pathParams: [],
        query: [],
        headers: [
          { name: "X-Amz-Target", value: request.xAmzTarget, schema: xAmzTarget62Schema },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: AwsDirectConnect.UpdateVirtualInterfaceAttributesError,
      },
      options,
    );
  }
}

export namespace AwsDirectConnect {
  export type AcceptDirectConnectGatewayAssociationProposalRequestParams = {
    xAmzTarget: XAmzTarget;
  };

  export class AcceptDirectConnectGatewayAssociationProposalError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AcceptDirectConnectGatewayAssociationProposalError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocateConnectionOnInterconnectRequestParams = {
    xAmzTarget: XAmzTarget4;
  };

  export class AllocateConnectionOnInterconnectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocateConnectionOnInterconnectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocateHostedConnectionRequestParams = {
    xAmzTarget: XAmzTarget5;
  };

  export class AllocateHostedConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocateHostedConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocatePrivateVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget6;
  };

  export class AllocatePrivateVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocatePrivateVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocatePublicVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget7;
  };

  export class AllocatePublicVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocatePublicVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AllocateTransitVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget8;
  };

  export class AllocateTransitVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AllocateTransitVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AssociateConnectionWithLagRequestParams = {
    xAmzTarget: XAmzTarget14;
  };

  export class AssociateConnectionWithLagError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateConnectionWithLagError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AssociateHostedConnectionRequestParams = {
    xAmzTarget: XAmzTarget21;
  };

  export class AssociateHostedConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateHostedConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AssociateMacSecKeyRequestParams = {
    xAmzTarget: XAmzTarget23;
  };

  export class AssociateMacSecKeyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateMacSecKeyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type AssociateVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget25;
  };

  export class AssociateVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<AssociateVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmConnectionRequestParams = {
    xAmzTarget: XAmzTarget9;
  };

  export class ConfirmConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmCustomerAgreementRequestParams = {
    xAmzTarget: XAmzTarget10;
  };

  export class ConfirmCustomerAgreementError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmCustomerAgreementError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmPrivateVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget11;
  };

  export class ConfirmPrivateVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmPrivateVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmPublicVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget12;
  };

  export class ConfirmPublicVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmPublicVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ConfirmTransitVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget13;
  };

  export class ConfirmTransitVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ConfirmTransitVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateBgpPeerRequestParams = {
    xAmzTarget: XAmzTarget28;
  };

  export class CreateBgpPeerError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateBgpPeerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateConnectionRequestParams = {
    xAmzTarget: XAmzTarget15;
  };

  export class CreateConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateDirectConnectGatewayRequestParams = {
    xAmzTarget: XAmzTarget30;
  };

  export class CreateDirectConnectGatewayError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDirectConnectGatewayError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateDirectConnectGatewayAssociationRequestParams = {
    xAmzTarget: XAmzTarget34;
  };

  export class CreateDirectConnectGatewayAssociationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDirectConnectGatewayAssociationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateDirectConnectGatewayAssociationProposalRequestParams = {
    xAmzTarget: XAmzTarget1;
  };

  export class CreateDirectConnectGatewayAssociationProposalError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateDirectConnectGatewayAssociationProposalError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateInterconnectRequestParams = {
    xAmzTarget: XAmzTarget38;
  };

  export class CreateInterconnectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateInterconnectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateLagRequestParams = {
    xAmzTarget: XAmzTarget41;
  };

  export class CreateLagError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateLagError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePrivateVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget45;
  };

  export class CreatePrivateVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreatePrivateVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreatePublicVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget46;
  };

  export class CreatePublicVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreatePublicVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type CreateTransitVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget47;
  };

  export class CreateTransitVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<CreateTransitVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteBgpPeerRequestParams = {
    xAmzTarget: XAmzTarget29;
  };

  export class DeleteBgpPeerError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteBgpPeerError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteConnectionRequestParams = {
    xAmzTarget: XAmzTarget16;
  };

  export class DeleteConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDirectConnectGatewayRequestParams = {
    xAmzTarget: XAmzTarget31;
  };

  export class DeleteDirectConnectGatewayError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDirectConnectGatewayError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDirectConnectGatewayAssociationRequestParams = {
    xAmzTarget: XAmzTarget35;
  };

  export class DeleteDirectConnectGatewayAssociationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDirectConnectGatewayAssociationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteDirectConnectGatewayAssociationProposalRequestParams = {
    xAmzTarget: XAmzTarget2;
  };

  export class DeleteDirectConnectGatewayAssociationProposalError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteDirectConnectGatewayAssociationProposalError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteInterconnectRequestParams = {
    xAmzTarget: XAmzTarget39;
  };

  export class DeleteInterconnectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteInterconnectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteLagRequestParams = {
    xAmzTarget: XAmzTarget42;
  };

  export class DeleteLagError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteLagError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DeleteVirtualInterfaceRequestParams = {
    xAmzTarget: XAmzTarget26;
  };

  export class DeleteVirtualInterfaceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteVirtualInterfaceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeConnectionLoaRequestParams = {
    xAmzTarget: XAmzTarget48;
  };

  export class DescribeConnectionLoaError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeConnectionLoaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeConnectionsRequestParams = {
    xAmzTarget: XAmzTarget17;
  };

  export class DescribeConnectionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeConnectionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeConnectionsOnInterconnectRequestParams = {
    xAmzTarget: XAmzTarget18;
  };

  export class DescribeConnectionsOnInterconnectError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeConnectionsOnInterconnectError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeCustomerMetadataRequest = {
    xAmzTarget: XAmzTarget49;
  };

  export class DescribeCustomerMetadataError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeCustomerMetadataError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDirectConnectGatewayAssociationProposalsRequestParams = {
    xAmzTarget: XAmzTarget3;
  };

  export class DescribeDirectConnectGatewayAssociationProposalsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDirectConnectGatewayAssociationProposalsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDirectConnectGatewayAssociationsRequestParams = {
    xAmzTarget: XAmzTarget36;
  };

  export class DescribeDirectConnectGatewayAssociationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDirectConnectGatewayAssociationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDirectConnectGatewayAttachmentsRequestParams = {
    xAmzTarget: XAmzTarget50;
  };

  export class DescribeDirectConnectGatewayAttachmentsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDirectConnectGatewayAttachmentsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeDirectConnectGatewaysRequestParams = {
    xAmzTarget: XAmzTarget32;
  };

  export class DescribeDirectConnectGatewaysError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeDirectConnectGatewaysError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeHostedConnectionsRequestParams = {
    xAmzTarget: XAmzTarget22;
  };

  export class DescribeHostedConnectionsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeHostedConnectionsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeInterconnectLoaRequestParams = {
    xAmzTarget: XAmzTarget51;
  };

  export class DescribeInterconnectLoaError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeInterconnectLoaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeInterconnectsRequestParams = {
    xAmzTarget: XAmzTarget40;
  };

  export class DescribeInterconnectsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeInterconnectsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeLagsRequestParams = {
    xAmzTarget: XAmzTarget43;
  };

  export class DescribeLagsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeLagsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeLoaRequestParams = {
    xAmzTarget: XAmzTarget52;
  };

  export class DescribeLoaError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeLoaError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeLocationsRequest = {
    xAmzTarget: XAmzTarget53;
  };

  export class DescribeLocationsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeLocationsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeRouterConfigurationRequestParams = {
    xAmzTarget: XAmzTarget54;
  };

  export class DescribeRouterConfigurationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeRouterConfigurationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeTagsRequestParams = {
    xAmzTarget: XAmzTarget55;
  };

  export class DescribeTagsError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeTagsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeVirtualGatewaysRequest = {
    xAmzTarget: XAmzTarget56;
  };

  export class DescribeVirtualGatewaysError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeVirtualGatewaysError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DescribeVirtualInterfacesRequestParams = {
    xAmzTarget: XAmzTarget27;
  };

  export class DescribeVirtualInterfacesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DescribeVirtualInterfacesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DisassociateConnectionFromLagRequestParams = {
    xAmzTarget: XAmzTarget19;
  };

  export class DisassociateConnectionFromLagError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateConnectionFromLagError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DisassociateMacSecKeyRequestParams = {
    xAmzTarget: XAmzTarget24;
  };

  export class DisassociateMacSecKeyError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<DisassociateMacSecKeyError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ListVirtualInterfaceTestHistoryRequestParams = {
    xAmzTarget: XAmzTarget57;
  };

  export class ListVirtualInterfaceTestHistoryError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<ListVirtualInterfaceTestHistoryError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StartBgpFailoverTestRequestParams = {
    xAmzTarget: XAmzTarget58;
  };

  export class StartBgpFailoverTestError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StartBgpFailoverTestError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type StopBgpFailoverTestRequestParams = {
    xAmzTarget: XAmzTarget59;
  };

  export class StopBgpFailoverTestError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<StopBgpFailoverTestError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type TagResourceRequestParams = {
    xAmzTarget: XAmzTarget60;
  };

  export class TagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<TagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UntagResourceRequestParams = {
    xAmzTarget: XAmzTarget61;
  };

  export class UntagResourceError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UntagResourceError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateConnectionRequestParams = {
    xAmzTarget: XAmzTarget20;
  };

  export class UpdateConnectionError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateConnectionError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateDirectConnectGatewayRequestParams = {
    xAmzTarget: XAmzTarget33;
  };

  export class UpdateDirectConnectGatewayError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDirectConnectGatewayError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateDirectConnectGatewayAssociationRequestParams = {
    xAmzTarget: XAmzTarget37;
  };

  export class UpdateDirectConnectGatewayAssociationError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateDirectConnectGatewayAssociationError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateLagRequestParams = {
    xAmzTarget: XAmzTarget44;
  };

  export class UpdateLagError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateLagError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UpdateVirtualInterfaceAttributesRequestParams = {
    xAmzTarget: XAmzTarget62;
  };

  export class UpdateVirtualInterfaceAttributesError extends ApiError {
    declare readonly payload: Declared<"error400", undefined> | Declared<"error500", undefined> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateVirtualInterfaceAttributesError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
