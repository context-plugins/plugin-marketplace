using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bill.Core;
using Bill.Core.Authentication;
using Bill.Core.Exceptions;
using Bill.Core.Models;
using Bill.Core.Request;
using Bill.Core.Response;
using Bill.Errors;
using Bill.Models;
using Bill.Requests.NetworkApi;

namespace Bill.Api;

public sealed class NetworkApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal NetworkApi(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Accept connection request
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AcceptInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Accept a connection request sent by a vendor or customer.
    /// <para>
    /// The organization receiving the connection request must have auto-connections disabled. If auto-connections are not disabled, BILL automatically connects the organizations in the BILL Network.
    /// </para>
    /// <para>
    /// When the invitation is accepted, BILL connects the two organizations in the BILL Network.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task AcceptInvitation(AcceptInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/accept"),
            [],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            AcceptInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send connection request to a customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCustomerInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a connection request to a customer organization in the BILL Network. BILL automatically connects the customer organization with the customer record in your BILL organization.
    /// <para>
    /// If the customer organization has auto-connections disabled, BILL sends an invitation email to the customer email address. When the customer accepts the invitation, BILL connects the customer organization with the customer record in your BILL organization.
    /// </para>
    /// <para>
    /// If the customer does not respond, you can delete the connection request (with <c>DELETE /v3/network/invitation/customer/{customerId}</c>) before sending a new connection request.
    /// </para>
    /// <para>
    /// <b>Note</b>: If the customer does not respond to a connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task CreateCustomerInvitation(CreateCustomerInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/customer/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateCustomerInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send connection request to a vendor
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateVendorInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a connection request to a vendor organization in the BILL Network. BILL automatically connects the vendor organization with the vendor record in your BILL organization.
    /// <para>
    /// If the vendor organization has auto-connections disabled, BILL sends an invitation email to the vendor email address. When the vendor accepts the invitation, BILL connects the vendor organization with the vendor record in your BILL organization.
    /// </para>
    /// <para>
    /// If the vendor does not respond, you can delete the connection request (with <c>DELETE /v3/network/invitation/vendor/{vendorId}</c>) before sending a new connection request.
    /// </para>
    /// <para>
    /// <b>Note</b>: If the vendor does not respond to the connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task CreateVendorInvitation(CreateVendorInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/vendor/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateVendorInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete customer connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCustomerInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing Network connection with a customer organization. Delete customer connection follows a set of rules.
    /// * <b>No scheduled payments</b>: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
    /// * <b>No in-process payments</b>: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.
    /// <para>
    /// You can use this endpoint to cancel a pending connection request sent to a customer that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.
    /// </para>
    /// <para>
    /// <b>Note</b>: If the customer does not respond to a connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task DeleteCustomerInvitation(DeleteCustomerInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/customer/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteCustomerInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete vendor connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteVendorInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an existing Network connection with a vendor organization. Delete vendor connection follows a set of rules.
    /// * <b>No scheduled payments</b>: There should be no scheduled payments. All scheduled payments must be canceled before you can disconnect.
    /// * <b>No in-process payments</b>: There should be no in-progress payments. All in-progress payments must clear before you can disconnect.
    /// <para>
    /// You can use this endpoint to cancel a pending connection request sent to a vendor that has auto-connections disabled. You can send a new connection request after an existing connection or connection request is canceled.
    /// </para>
    /// <para>
    /// <b>Note</b>: If the vendor does not respond to a connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task DeleteVendorInvitation(DeleteVendorInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/vendor/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteVendorInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get customer connection request status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetInvitationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the status of an existing connection request sent with <c>POST /v3/network/invitation/customer/{customerId}</c>.
    /// <para>
    /// When you send a connection request to a customer organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the customer accepts the request.
    /// </para>
    /// <para>
    /// <b>Note</b>: If the customer does not respond to the connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<GetInvitationResponseDto> GetCustomerInvitation(GetCustomerInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/customer/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetInvitationResponseDto>(),
            GetCustomerInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get vendor connection request status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="GetInvitationResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetVendorInvitationError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get the status of an existing connection request sent with <c>POST /v3/network/invitation/vendor/{vendorId}</c>.
    /// <para>
    /// When you send a connection request to a vendor organization that has auto-connections enabled, BILL automatically connects you with the organization. If the organization has auto-connections disabled, the connection request status changes when the vendor accepts the request.
    /// </para>
    /// <para>
    /// <b>Note</b>: If the vendor does not respond to the connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<GetInvitationResponseDto> GetVendorInvitation(GetVendorInvitationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/vendor/{vendorId}"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<GetInvitationResponseDto>(),
            GetVendorInvitationError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Send connection request to a vendor not in the BILL Network
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="InviteVendorNotInBillNetworkError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Send a connection request to a vendor not in the BILL Network.
    /// <para>
    /// BILL sends an invitation email to the provided vendor email address. When the vendor accepts the invitation and sets up a BILL account, BILL connects the vendor organization with the vendor record in your BILL organization.
    /// </para>
    /// <para>
    /// <b>Note</b>:
    /// * The vendor organization must exist before BILL can send an invitation email.
    /// * If the vendor does not respond to a connection request for 60 days, the request expires.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task InviteVendorNotInBillNetwork(InviteVendorNotInBillNetworkRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network/invitation/vendor/{vendorId}/email"),
            [new TemplateParam("vendorId", request.VendorId)],
            [],
            [
                new HeaderParam("sessionId", request.SessionId),
                new HeaderParam("devKey", request.DevKey),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            InviteVendorNotInBillNetworkError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search for an organization in the BILL Network
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="NetworkSearchResponseDto"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for a customer, vendor, or verified national vendor organization. You can search in the BILL Network and verified national vendor (<c>RPPS</c>) network.
    /// <para>
    /// When you search in the BILL Network, there are two <c>name</c> requirements for getting search results.
    /// * Your search term must have a minimum of three characters.
    /// * Your search term must be a complete word. You will not get search results when your search term is a partial word.
    /// </para>
    /// <para>
    /// When you search in the verified national vendor (<c>RPPS</c>) network, search results are based on both a complete and partial match on <c>name</c> and <c>zipOrPostalCode</c>. You can further filter your search by the billing statement <c>accountNumber</c> with the vendor. For example, your Verizon internet bill account number.
    /// </para>
    /// <para>
    /// See BILL Network in the Guides section for more information, sample requests, and responses.
    /// </para>
    /// </remarks>
    public Task<NetworkSearchResponseDto> Search(SearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/network"),
            [],
            [
                new Param("name", request.Name),
                new Param("scope", request.Scope),
                new Param("zipOrPostalCode", request.ZipOrPostalCode),
                new Param("accountNumber", request.AccountNumber),
            ],
            [new HeaderParam("sessionId", request.SessionId), new HeaderParam("devKey", request.DevKey)],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<NetworkSearchResponseDto>(),
            SearchError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
