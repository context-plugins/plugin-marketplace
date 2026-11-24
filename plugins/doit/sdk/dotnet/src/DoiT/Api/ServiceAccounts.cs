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
using DoiT.Requests.ServiceAccounts;

namespace DoiT.Api;

/// <summary>
/// Manage non-human identities whose API tokens call the DoiT API with a fixed set of permissions.
/// </summary>
public sealed class ServiceAccounts
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ServiceAccounts(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a service account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateServiceAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a service account owned by the authenticated customer. It cannot authenticate anything until it has an API token; mint one with the <c>api-tokens</c> sub-resource. Returns <c>409</c> when another service account of the customer already uses <c>name</c>. With <c>dryRun=true</c> the request goes through the same checks as a real create (name bounds and uniqueness, permission names, caller scope) and returns the same errors without creating anything. When the caller authenticates with a service account token, <c>createdBy</c>, <c>createdByEmail</c> and <c>createdByUserId</c> are <c>null</c>. Requires the <c>serviceAccountCreator</c> permission.
    /// </remarks>
    public Task<ServiceAccount> CreateServiceAccount(CreateServiceAccountOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts"),
            [],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceAccount>(),
            CreateServiceAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create an API token for a service account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CreateServiceAccountTokenResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateServiceAccountTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Mints an API token for the service account and returns its <c>accessToken</c> once. The token
    /// inherits the service account's permissions as they stand at creation; there is no per-token
    /// scoping. Returns <c>409</c> when the service account already has a token of the same name, and
    /// <c>422</c> at the cap of 10 tokens.
    /// <para>
    /// <c>dryRun=true</c> checks the name bounds only, then returns a preview without creating anything.
    /// It does <b>not</b> verify that the service account exists, that the name is unused, or that the
    /// account is under the token cap, so a dry run can succeed where the real create then returns
    /// <c>404</c>, <c>409</c> or <c>422</c>. Requires the <c>serviceAccountCreator</c> permission.
    /// </para>
    /// </remarks>
    public Task<CreateServiceAccountTokenResponse> CreateServiceAccountToken(CreateServiceAccountTokenOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
            [new TemplateParam("serviceAccountId", request.ServiceAccountId)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CreateServiceAccountTokenResponse>(),
            CreateServiceAccountTokenError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a service account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteServiceAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes a service account and all of its API tokens, which stop authenticating immediately. Deleting an ID that no longer exists returns <c>404</c>. Requires the <c>serviceAccountManager</c> permission.
    /// </remarks>
    public Task DeleteServiceAccount(DeleteServiceAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteServiceAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete an API token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteServiceAccountTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Permanently deletes an API token, which stops authenticating immediately. This cannot be undone. Deleting an ID that no longer exists returns <c>404</c>. Requires the <c>serviceAccountManager</c> permission.
    /// </remarks>
    public Task DeleteServiceAccountToken(DeleteServiceAccountTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            [new TemplateParam("serviceAccountId", request.ServiceAccountId), new TemplateParam("id", request.Id)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            DeleteServiceAccountTokenError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a service account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetServiceAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a service account owned by the authenticated customer; an ID that belongs to another customer returns <c>404</c>. The <c>ETag</c> response header carries the value to send in <c>If-Match</c> on update and delete. Requires the <c>serviceAccountViewer</c> permission.
    /// </remarks>
    public Task<ServiceAccount> GetServiceAccount(GetServiceAccountRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ServiceAccount>(),
            GetServiceAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get an API token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccountToken"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetServiceAccountTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns one API token of the service account; an ID that belongs to another customer returns <c>404</c>. <c>accessToken</c> is not included — it is shown only once, by the create operation. Requires the <c>serviceAccountViewer</c> permission.
    /// </remarks>
    public Task<ServiceAccountToken> GetServiceAccountToken(GetServiceAccountTokenRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            [new TemplateParam("serviceAccountId", request.ServiceAccountId), new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ServiceAccountToken>(),
            GetServiceAccountTokenError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List API tokens for a service account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccountTokensResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListServiceAccountTokensError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the service account's non-deleted API tokens in a single unpaginated <c>items</c> array, at most 10. Secret material is never returned here — <c>accessToken</c> is shown only once, by the create operation. Requires the <c>serviceAccountViewer</c> permission.
    /// </remarks>
    public Task<ServiceAccountTokensResponse> ListServiceAccountTokens(ListServiceAccountTokensRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens"),
            [new TemplateParam("serviceAccountId", request.ServiceAccountId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ServiceAccountTokensResponse>(),
            ListServiceAccountTokensError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List service accounts
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccountsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListServiceAccountsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns every service account owned by the authenticated customer in a single unpaginated <c>items</c> array, in no guaranteed order. Requires the <c>serviceAccountViewer</c> permission.
    /// </remarks>
    public Task<ServiceAccountsResponse> ListServiceAccounts(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ServiceAccountsResponse>(),
            ListServiceAccountsError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a service account
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccount"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateServiceAccountError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Partially updates a service account with an <c>application/merge-patch+json</c> body (RFC 7396). Omitted or <c>null</c> fields stay unchanged; an explicit empty string clears <c>description</c>. <c>permissions</c> replaces the whole list, and <c>[]</c> removes every permission. With <c>dryRun=true</c> the request goes through the same checks as a real update (<c>If-Match</c>, name bounds and uniqueness, permission names, caller scope) and returns the service account as it would look after the patch, without changing anything. Requires the <c>serviceAccountManager</c> permission.
    /// </remarks>
    public Task<ServiceAccount> UpdateServiceAccount(UpdateServiceAccountOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{id}"),
            [new TemplateParam("id", request.Id)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("If-Match", request.IfMatch), new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceAccount>(),
            UpdateServiceAccountError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enable or disable an API token
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ServiceAccountToken"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="UpdateServiceAccountTokenError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Moves the token between <c>active</c> and <c>disabled</c> by setting <c>state</c>. Disabling takes effect
    /// immediately: the token stops authenticating until it is re-enabled. Setting the state a
    /// token already has succeeds and changes nothing.
    /// <para>
    /// The two directions are not symmetric. Disabling a token whose expiry has passed succeeds,
    /// but re-enabling an expired token returns <c>422</c> — expiry is final, and a new token has to be
    /// created instead. <c>deleted</c> and <c>expired</c> are not accepted values: a token is deleted through
    /// the delete operation, and expires on its own.
    /// </para>
    /// <para>
    /// With <c>dryRun=true</c> nothing is written and the response body is the token as it would look
    /// after the change, so a <c>422</c> here means a real request would also be refused. Requires the
    /// <c>serviceAccountManager</c> permission.
    /// </para>
    /// </remarks>
    public Task<ServiceAccountToken> UpdateServiceAccountToken(UpdateServiceAccountTokenOperationRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/iam/v1/service-accounts/{serviceAccountId}/api-tokens/{id}"),
            [new TemplateParam("serviceAccountId", request.ServiceAccountId), new TemplateParam("id", request.Id)],
            [new Param("dryRun", request.DryRun)],
            [new HeaderParam("Idempotency-Key", request.IdempotencyKey)],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ServiceAccountToken>(),
            UpdateServiceAccountTokenError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
