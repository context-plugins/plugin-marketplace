using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using AwsDirectConnect.Core;
using AwsDirectConnect.Core.Exceptions;
using AwsDirectConnect.Core.Models;
using AwsDirectConnect.Core.Request;
using AwsDirectConnect.Core.Response;
using AwsDirectConnect.Errors;
using AwsDirectConnect.Requests.Operations;

namespace AwsDirectConnect.Api;

public sealed class Operations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Operations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Allocate Connection On Interconnect
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AllocateConnectionOnInterconnect2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deprecated. Use AllocateHostedConnection instead. Creates a hosted connection on an interconnect. Allocates a VLAN number and a specified amount of bandwidth for use by a hosted connection on the specified interconnect. Intended for use by Direct Connect Partners only.
    /// </remarks>
    public Task AllocateConnectionOnInterconnect2(AllocateConnectionOnInterconnect2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AllocateConnectionOnInterconnect"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AllocateConnectionOnInterconnect2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Allocate Hosted Connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AllocateHostedConnection2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a hosted connection on the specified interconnect or a link aggregation group (LAG) of interconnects. Allocates a VLAN number and a specified amount of capacity (bandwidth) for use by a hosted connection on the specified interconnect or LAG of interconnects. Amazon Web Services polices the hosted connection for the specified capacity and the Direct Connect Partner must also police the hosted connection for the specified capacity. Intended for use by Direct Connect Partners only.
    /// </remarks>
    public Task AllocateHostedConnection2(AllocateHostedConnection2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AllocateHostedConnection"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AllocateHostedConnection2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Allocate Private Virtual Interface
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AllocatePrivateVirtualInterface2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions a private virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this action must be confirmed by the owner using ConfirmPrivateVirtualInterface. Until then, the virtual interface is in the Confirming state and is not available to handle traffic.
    /// </remarks>
    public Task AllocatePrivateVirtualInterface2(AllocatePrivateVirtualInterface2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AllocatePrivateVirtualInterface"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AllocatePrivateVirtualInterface2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Allocate Public Virtual Interface
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AllocatePublicVirtualInterface2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions a public virtual interface to be owned by the specified Amazon Web Services account. The owner of a connection calls this function to provision a public virtual interface to be owned by the specified Amazon Web Services account. Virtual interfaces created using this function must be confirmed by the owner using ConfirmPublicVirtualInterface. Until this step has been completed, the virtual interface is in the confirming state and is not available to handle traffic. When creating an IPv6 public virtual interface, omit the Amazon address and customer address. IPv6 addresses are automatically assigned from the Amazon pool of IPv6 addresses; you cannot specify custom IPv6 addresses.
    /// </remarks>
    public Task AllocatePublicVirtualInterface2(AllocatePublicVirtualInterface2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AllocatePublicVirtualInterface"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AllocatePublicVirtualInterface2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Allocate Transit Virtual Interface
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AllocateTransitVirtualInterface2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Provisions a transit virtual interface to be owned by the specified Amazon Web Services account. Use this type of interface to connect a transit gateway to your Direct Connect gateway. The owner of a connection provisions a transit virtual interface to be owned by the specified Amazon Web Services account. After you create a transit virtual interface, it must be confirmed by the owner using ConfirmTransitVirtualInterface. Until this step has been completed, the transit virtual interface is in the requested state and is not available to handle traffic.
    /// </remarks>
    public Task AllocateTransitVirtualInterface2(AllocateTransitVirtualInterface2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AllocateTransitVirtualInterface"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AllocateTransitVirtualInterface2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Associate Connections To Resiliency Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociateConnectionsToResiliencyGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Associates one or more connections with the specified resiliency group. This operation is atomic: either all of the specified connections are associated, or the operation fails and no changes are made.
    /// </remarks>
    public Task AssociateConnectionsToResiliencyGroup(AssociateConnectionsToResiliencyGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#AssociateConnectionsToResiliencyGroup"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            AssociateConnectionsToResiliencyGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Confirm Connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConfirmConnection2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Confirms the creation of the specified hosted connection on an interconnect. Upon creation, the hosted connection is initially in the Ordering state, and remains in this state until the owner confirms creation of the hosted connection.
    /// </remarks>
    public Task ConfirmConnection2(ConfirmConnection2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ConfirmConnection"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ConfirmConnection2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Confirm Customer Agreement
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConfirmCustomerAgreement2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The confirmation of the terms of agreement when creating the connection/link aggregation group (LAG).
    /// </remarks>
    public Task ConfirmCustomerAgreement2(ConfirmCustomerAgreement2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ConfirmCustomerAgreement"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ConfirmCustomerAgreement2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Confirm Private Virtual Interface
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConfirmPrivateVirtualInterface2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accepts ownership of a private virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the virtual interface is created and attached to the specified virtual private gateway or Direct Connect gateway, and is made available to handle traffic.
    /// </remarks>
    public Task ConfirmPrivateVirtualInterface2(ConfirmPrivateVirtualInterface2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ConfirmPrivateVirtualInterface"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ConfirmPrivateVirtualInterface2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Confirm Public Virtual Interface
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConfirmPublicVirtualInterface2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accepts ownership of a public virtual interface created by another Amazon Web Services account. After the virtual interface owner makes this call, the specified virtual interface is created and made available to handle traffic.
    /// </remarks>
    public Task ConfirmPublicVirtualInterface2(ConfirmPublicVirtualInterface2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ConfirmPublicVirtualInterface"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ConfirmPublicVirtualInterface2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Confirm Transit Virtual Interface
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ConfirmTransitVirtualInterface2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accepts ownership of a transit virtual interface created by another Amazon Web Services account. After the owner of the transit virtual interface makes this call, the specified transit virtual interface is created and made available to handle traffic.
    /// </remarks>
    public Task ConfirmTransitVirtualInterface2(ConfirmTransitVirtualInterface2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ConfirmTransitVirtualInterface"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ConfirmTransitVirtualInterface2Error.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Disassociate Connections From Resiliency Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DisassociateConnectionsFromResiliencyGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Disassociates one or more connections from the specified resiliency group. This operation is atomic: either all of the specified connections are disassociated, or the operation fails and no changes are made.
    /// </remarks>
    public Task DisassociateConnectionsFromResiliencyGroup(DisassociateConnectionsFromResiliencyGroupOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#DisassociateConnectionsFromResiliencyGroup"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DisassociateConnectionsFromResiliencyGroupError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Resiliency Group Associations
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListResiliencyGroupAssociationsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the connection associations for the specified resiliency group.
    /// </remarks>
    public Task ListResiliencyGroupAssociations(ListResiliencyGroupAssociationsOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListResiliencyGroupAssociations"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListResiliencyGroupAssociationsError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List Virtual Interface Routes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListVirtualInterfaceRoutesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the routes for the specified virtual interface. Use the routeDirection filter to control which routes are returned: accepted: routes received from the customer network over the virtual interface. advertised: routes advertised to the customer network over the virtual interface.
    /// </remarks>
    public Task ListVirtualInterfaceRoutes(ListVirtualInterfaceRoutesOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#ListVirtualInterfaceRoutes"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            ListVirtualInterfaceRoutesError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update Connections Billing Mode
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateConnectionsBillingModeError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Updates the billing mode for the specified Direct Connect connections. You can update the billing mode for up to 200 connections in a single request.
    /// </remarks>
    public Task UpdateConnectionsBillingMode(UpdateConnectionsBillingModeOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/#UpdateConnectionsBillingMode"),
            [],
            [],
            [new HeaderParam("X-Amz-Target", request.XAmzTarget), new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            EmptyBody.Instance,
            VoidResponse.Instance,
            UpdateConnectionsBillingModeError.Response,
            _auth.Sigv4,
            requestOptions,
            cancellationToken);
}
