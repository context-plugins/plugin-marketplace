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
using Curlec.Requests.LinkedAccounts;

namespace Curlec.Api;

/// <summary>
/// Sub-merchant accounts (Linked Accounts) created under a Route marketplace. Includes account creation, stakeholder KYC, and Route product activation. Uses /v2/ API base path. Only one stakeholder is allowed per Linked Account. email and business_type cannot be changed after creation.
/// </summary>
public sealed class LinkedAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal LinkedAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a Linked Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateLinkedAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a sub-merchant (Linked Account) under a Route marketplace. The account type must be 'route'. Email and business_type cannot be changed after creation. Only one stakeholder is allowed per Linked Account.
    /// </remarks>
    public Task<LinkedAccount> CreateLinkedAccount(CreateLinkedAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkedAccount>(),
            CreateLinkedAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a Stakeholder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Stakeholder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStakeholderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Add a business owner or director to a Linked Account. Only one stakeholder is allowed per Route Linked Account. PAN 4th character must be 'P' (individual PAN).
    /// </remarks>
    public Task<Stakeholder> CreateStakeholder(CreateStakeholderRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/stakeholders"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Stakeholder>(),
            CreateStakeholderError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch a Linked Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchLinkedAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the details of a Linked Account by its ID. Also used in Partners API to fetch sub-merchant account details (authentication: OAuth access_token).
    /// </remarks>
    public Task<LinkedAccount> FetchLinkedAccount(FetchLinkedAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<LinkedAccount>(),
            FetchLinkedAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fetch product configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProductConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FetchProductConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the current product configuration and activation status for a Linked Account.
    /// </remarks>
    public Task<ProductConfiguration> FetchProductConfig(FetchProductConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/products/{product_id}"),
            [new TemplateParam("account_id", request.AccountId), new TemplateParam("product_id", request.ProductId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ProductConfiguration>(),
            FetchProductConfigError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Request Route product configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProductConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RequestProductConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Request activation of the Route product for a Linked Account. Submits the account for review and KYC. Activation progresses: requested → under_review → activated.
    /// </remarks>
    public Task<ProductConfiguration> RequestProductConfig(RequestProductConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/products"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProductConfiguration>(),
            RequestProductConfigError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Linked Account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="LinkedAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateLinkedAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update mutable fields of a Linked Account. email and business_type cannot be changed after creation.
    /// </remarks>
    public Task<LinkedAccount> UpdateLinkedAccount(UpdateLinkedAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}"),
            [new TemplateParam("account_id", request.AccountId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<LinkedAccount>(),
            UpdateLinkedAccountError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update product configuration
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProductConfiguration"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateProductConfigError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update settlement details or other configuration for a Route product on a Linked Account.
    /// </remarks>
    public Task<ProductConfiguration> UpdateProductConfig(UpdateProductConfigRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/accounts/{account_id}/products/{product_id}"),
            [new TemplateParam("account_id", request.AccountId), new TemplateParam("product_id", request.ProductId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ProductConfiguration>(),
            UpdateProductConfigError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a Stakeholder
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Stakeholder"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateStakeholderError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update stakeholder information for a Linked Account.
    /// </remarks>
    public Task<Stakeholder> UpdateStakeholder(UpdateStakeholderRequest request,
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
            JsonResponse.Create<Stakeholder>(),
            UpdateStakeholderError.Response,
            AuthScheme.Any(
                _auth.BasicAuth,
                _auth.Oauth2AuthorizationCode,
                _auth.Oauth2ClientCredentials.ForScopes("read_only")),
            requestOptions,
            cancellationToken);
}
