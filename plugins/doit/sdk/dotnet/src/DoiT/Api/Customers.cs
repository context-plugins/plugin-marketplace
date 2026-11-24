using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.Customers;

namespace DoiT.Api;

/// <summary>
/// Read and update your organization's general settings.
/// </summary>
public sealed class Customers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Customers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Customer"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the customer, including its general settings and contact info, scoped to <c>{customerId}</c>. <c>{customerId}</c> must match the customer resolved from the bearer token; a token scoped to a different customer gets <c>403</c>, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the <c>Settings</c> permission and DoiT API access (<c>platform:externalApi</c>).
    /// </remarks>
    public Task<Customer> GetCustomer(GetCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Customer>(),
            GetCustomerError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update customer
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateCustomerError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates the general settings and contact info of the customer identified by <c>{customerId}</c>. <c>{customerId}</c> must match the customer resolved from the bearer token; a token scoped to a different customer gets <c>403</c>, even if that customer would otherwise be reachable through a reseller/MTS relationship. Requires the <c>Settings</c> permission and DoiT API access (<c>platform:externalApi</c>); updating <c>allowedInviteDomains</c> additionally requires the <c>UsersManager</c> permission.
    /// <para>
    /// The request body must use <c>application/merge-patch+json</c> (RFC 7396): an omitted field leaves the current value unchanged, and an explicit <c>null</c> also leaves it unchanged, except for <c>urlSlug</c>, where an explicit empty string removes the customer's active URL slug rather than leaving it unchanged.
    /// </para>
    /// <para>
    /// Fields are nested exactly as <c>getCustomer</c> returns them - <c>currency</c> and <c>allowedInviteDomains</c> under <c>settings</c>, <c>emails</c> under <c>contact</c> - so every value is read and written at the same path. <c>settings.currency</c> accepts only the codes listed in the schema and cannot be cleared; <c>allowedInviteDomains</c> and <c>contact.emails</c> are cleared with an empty array.
    /// </para>
    /// </remarks>
    public Task UpdateCustomer(UpdateCustomerRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/customers/{customerId}"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            UpdateCustomerError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
