using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Curlec.Core;
using Curlec.Core.Authentication;
using Curlec.Core.Exceptions;
using Curlec.Core.Models;
using Curlec.Core.Request;
using Curlec.Core.Response;
using Curlec.Errors;
using Curlec.Models;
using Curlec.Requests.PartnerStakeholders;

namespace Curlec.Api;

/// <summary>
/// Manage stakeholders (directors/executives) for sub-merchant accounts. Multiple stakeholders allowed per account.
/// </summary>
public sealed class PartnerStakeholders
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PartnerStakeholders(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Stakeholder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StakeholderRazorpayPartnerStakeholdersApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStakeholder2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked Account. PAN 4th character must be 'P' (individual PAN).
    /// </remarks>
    public Task<StakeholderRazorpayPartnerStakeholdersApi> CreateStakeholder2(CreateStakeholder2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/stakeholders"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StakeholderRazorpayPartnerStakeholdersApi>(),
            CreateStakeholder2Error.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch all stakeholders for an account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V2AccountsStakeholdersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchAllStakeholdersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve all stakeholders associated with a sub-merchant account. Partners API only — Route allows only 1 stakeholder per account. Authentication: OAuth access_token.
    /// </remarks>
    public Task<V2AccountsStakeholdersResponse> FetchAllStakeholders(FetchAllStakeholdersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/stakeholders"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V2AccountsStakeholdersResponse>(),
            FetchAllStakeholdersError.Response,
            _auth.BasicAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Stakeholder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StakeholderRazorpayPartnerStakeholdersApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStakeholder2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update stakeholder information for a Linked Account.
    /// </remarks>
    public Task<StakeholderRazorpayPartnerStakeholdersApi> UpdateStakeholder2(UpdateStakeholder2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/stakeholders/{stakeholder_id}"),
            [
                new TemplateParam("account_id", request.AccountId),
                new TemplateParam("stakeholder_id", request.StakeholderId),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StakeholderRazorpayPartnerStakeholdersApi>(),
            UpdateStakeholder2Error.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
