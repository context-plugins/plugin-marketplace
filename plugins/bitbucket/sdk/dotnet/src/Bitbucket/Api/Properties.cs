using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Bitbucket.Core;
using Bitbucket.Core.Authentication;
using Bitbucket.Core.ErrorResponse;
using Bitbucket.Core.Exceptions;
using Bitbucket.Core.Models;
using Bitbucket.Core.Request;
using Bitbucket.Core.Response;
using Bitbucket.Models;
using Bitbucket.Requests.Properties;

namespace Bitbucket.Api;

public sealed class Properties
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Properties(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Delete a commit application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an application property value stored against a commit.
    /// </remarks>
    public Task DeleteCommitHostedPropertyValue(DeleteCommitHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a pull request application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an application property value stored against a pull request.
    /// </remarks>
    public Task DeletePullRequestHostedPropertyValue(DeletePullRequestHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pullrequest_id", request.PullrequestId),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a repository application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an application property value stored against a repository.
    /// </remarks>
    public Task DeleteRepositoryHostedPropertyValue(DeleteRepositoryHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a user application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete an application property value stored against a user.
    /// </remarks>
    public Task DeleteUserHostedPropertyValue(DeleteUserHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a commit application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an application property value stored against a commit.
    /// </remarks>
    public Task<ApplicationProperty> GetCommitHostedPropertyValue(GetCommitHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationProperty>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a pull request application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an application property value stored against a pull request.
    /// </remarks>
    public Task<ApplicationProperty> GetPullRequestHostedPropertyValue(GetPullRequestHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pullrequest_id", request.PullrequestId),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationProperty>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a repository application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an application property value stored against a repository.
    /// </remarks>
    public Task<ApplicationProperty> GetRepositoryHostedPropertyValue(GetRepositoryHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationProperty>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a user application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApplicationProperty"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve an application property value stored against a user.
    /// </remarks>
    public Task<ApplicationProperty> RetrieveUserHostedPropertyValue(RetrieveUserHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApplicationProperty>(),
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a commit application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an application property value stored against a commit.
    /// </remarks>
    public Task UpdateCommitHostedPropertyValue(UpdateCommitHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/commit/{commit}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("commit", request.Commit),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a pull request application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an application property value stored against a pull request.
    /// </remarks>
    public Task UpdatePullRequestHostedPropertyValue(UpdatePullRequestHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default(
                "/repositories/{workspace}/{repo_slug}/pullrequests/{pullrequest_id}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("pullrequest_id", request.PullrequestId),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a repository application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an application property value stored against a repository.
    /// </remarks>
    public Task UpdateRepositoryHostedPropertyValue(UpdateRepositoryHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/repositories/{workspace}/{repo_slug}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("workspace", request.Workspace),
                new TemplateParam("repo_slug", request.RepoSlug),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update a user application property
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="RawError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update an application property value stored against a user.
    /// </remarks>
    public Task UpdateUserHostedPropertyValue(UpdateUserHostedPropertyValueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/users/{selected_user}/properties/{app_key}/{property_name}"),
            [
                new TemplateParam("selected_user", request.SelectedUser),
                new TemplateParam("app_key", request.AppKey),
                new TemplateParam("property_name", request.PropertyName),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            RawErrorResponse.Instance,
            AuthScheme.Any(_auth.Oauth2, _auth.Basic, _auth.ApiKey),
            requestOptions,
            cancellationToken);
}
