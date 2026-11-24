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
using DoiT.Requests.SharedPayers;

namespace DoiT.Api;

/// <summary>
/// Link and manage shared-payer account mappings for PartnerOps resellers (T2), reassigning AWS accounts under a shared payer to T3 end customers.
/// </summary>
public sealed class SharedPayers
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SharedPayers(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List shared-payer account mappings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SharedPayerAccountMappingList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSharedPayerAccountMappingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the AWS accounts under the reseller's linked shared payers, together with the end customer each is currently mapped to. <c>{customerId}</c> (the reseller itself) means the account has not yet been reassigned to an end customer. Each payer's own management account is included alongside its member accounts. Requires the <c>SharedPayersAdmin</c> permission and DoiT API access (<c>platform:externalApi</c>). User API tokens must include the permission in their scope.
    /// </remarks>
    public Task<SharedPayerAccountMappingList> ListSharedPayerAccountMappings(ListSharedPayerAccountMappingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/customers/{customerId}/shared-payer-accounts"),
            [new TemplateParam("customerId", request.CustomerId)],
            [new Param("managementAccount", request.ManagementAccount)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SharedPayerAccountMappingList>(),
            ListSharedPayerAccountMappingsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List shared-payer management accounts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SharedPayerManagementAccountList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSharedPayerManagementAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists the reseller's linked shared-payer management (payer) accounts that have completed onboarding, for use in an account picker. Requires the <c>SharedPayersAdmin</c> permission and DoiT API access (<c>platform:externalApi</c>). User API tokens must include the permission in their scope.
    /// </remarks>
    public Task<SharedPayerManagementAccountList> ListSharedPayerManagementAccounts(ListSharedPayerManagementAccountsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/customers/{customerId}/shared-payer-accounts/management-accounts"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SharedPayerManagementAccountList>(),
            ListSharedPayerManagementAccountsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List shared payers with mapping progress
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SharedPayerList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListSharedPayersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Lists every shared payer linked to the reseller, including ones still mid-onboarding, with per-payer counts of linked and mapped accounts. Requires the <c>SharedPayersAdmin</c> permission and DoiT API access (<c>platform:externalApi</c>). User API tokens must include the permission in their scope.
    /// </remarks>
    public Task<SharedPayerList> ListSharedPayers(ListSharedPayersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/customers/{customerId}/shared-payer-accounts/payers"),
            [new TemplateParam("customerId", request.CustomerId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SharedPayerList>(),
            ListSharedPayersError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Reassign a shared-payer account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SharedPayerAccountReassignResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ReassignSharedPayerAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reassigns one AWS account under a linked shared payer - a member account or the payer's own management account - to the reseller itself or to a T3 end customer within its hierarchy. Requires the <c>SharedPayersAdmin</c> permission and DoiT API access (<c>platform:externalApi</c>). User API tokens must include the permission in their scope.
    /// </remarks>
    public Task<SharedPayerAccountReassignResult> ReassignSharedPayerAccount(ReassignSharedPayerAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/customers/v1/customers/{customerId}/shared-payer-accounts/{assetId}"),
            [new TemplateParam("customerId", request.CustomerId), new TemplateParam("assetId", request.AssetId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SharedPayerAccountReassignResult>(),
            ReassignSharedPayerAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
