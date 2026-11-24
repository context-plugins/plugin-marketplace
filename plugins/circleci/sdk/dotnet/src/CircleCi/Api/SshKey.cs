using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CircleCi.Core;
using CircleCi.Core.Exceptions;
using CircleCi.Core.Models;
using CircleCi.Core.Request;
using CircleCi.Core.Response;
using CircleCi.Errors;
using CircleCi.Models;
using CircleCi.Requests.SshKey;

namespace CircleCi.Api;

/// <summary>
/// Endpoints for managing SSH keys and checkout keys for projects.
/// </summary>
public sealed class SshKey
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SshKey(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Add an SSH key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AddSshKeyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds an SSH key to the specified project for use in builds.
    /// </remarks>
    public Task AddSshKey(AddSshKeyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/ssh-key"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            AddSshKeyError.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Create a checkout key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutKeyCircleCiRestApiV1SshKeyApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateCheckoutKey2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new checkout key for the specified project.
    /// </remarks>
    public Task<CheckoutKeyCircleCiRestApiV1SshKeyApi> CreateCheckoutKey2(CreateCheckoutKey2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/checkout-key"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CheckoutKeyCircleCiRestApiV1SshKeyApi>(),
            CreateCheckoutKey2Error.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a checkout key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ProjectProjectCheckoutKeyFingerprintResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteCheckoutKey2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a checkout key by its fingerprint.
    /// </remarks>
    public Task<ProjectProjectCheckoutKeyFingerprintResponse> DeleteCheckoutKey2(DeleteCheckoutKey2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("fingerprint", request.Fingerprint),
            ],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ProjectProjectCheckoutKeyFingerprintResponse>(),
            DeleteCheckoutKey2Error.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a checkout key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CheckoutKeyCircleCiRestApiV1SshKeyApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCheckoutKey2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a checkout key by its fingerprint.
    /// </remarks>
    public Task<CheckoutKeyCircleCiRestApiV1SshKeyApi> GetCheckoutKey2(GetCheckoutKey2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/checkout-key/{fingerprint}"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
                new TemplateParam("fingerprint", request.Fingerprint),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CheckoutKeyCircleCiRestApiV1SshKeyApi>(),
            GetCheckoutKey2Error.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List checkout keys
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyList{T}"/> of <see cref="CheckoutKeyCircleCiRestApiV1SshKeyApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListCheckoutKeys2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of checkout keys for the specified project.
    /// </remarks>
    public Task<IReadOnlyList<CheckoutKeyCircleCiRestApiV1SshKeyApi>> ListCheckoutKeys2(ListCheckoutKeys2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/project/{vcs-type}/{username}/{project}/checkout-key"),
            [
                new TemplateParam("vcs-type", request.VcsType),
                new TemplateParam("username", request.Username),
                new TemplateParam("project", request.Project),
            ],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<IReadOnlyList<CheckoutKeyCircleCiRestApiV1SshKeyApi>>(),
            ListCheckoutKeys2Error.Response,
            _auth.ApiToken,
            requestOptions,
            cancellationToken);
}
