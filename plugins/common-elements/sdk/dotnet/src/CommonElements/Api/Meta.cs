using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Authentication;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Requests.Meta;

namespace CommonElements.Api;

/// <summary>
/// Spec, status, usage, and the data dictionary.
/// </summary>
public sealed class Meta
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Meta(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Service status and version policy
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetApiStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Live availability of the API and its database dependency, the current contract version, the supported-version table, the deprecation policy, and the age of the most recent ingest. Returns 503 when the database probe fails, so an uptime monitor sees a non-200. Public and unmetered.
    /// </remarks>
    public Task<object> GetApiStatus(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/meta/status"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetApiStatusError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Data dictionary
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetDataDictionaryError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Every resource and every field: type, meaning, source, how often the field is actually populated, how many rows stand behind it, when a row last landed, and the refresh cadence of the feed. Volumes and fill rates are measured at request time and each carries the method that produced it — an estimate is never presented as exact.
    /// </remarks>
    public Task<object> GetDataDictionary(GetDataDictionaryRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/meta/dictionary"),
            [],
            [new Param("resource", request.Resource), new Param("fill_rates", request.FillRates)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetDataDictionaryError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Usage and quota for the calling key
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKeyUsageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// What this key has spent this month, what remains, when it resets, which endpoints it called, and its most recent errors. Reads the plan from the database at request time. Does not consume quota.
    /// </remarks>
    public Task<object> GetKeyUsage(GetKeyUsageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/meta/usage"),
            [],
            [new Param("days", request.Days)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetKeyUsageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Meta namespace index
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetMetaIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Discovery document: every meta endpoint, what it is for, and whether it needs a key.
    /// </remarks>
    public Task<object> GetMetaIndex(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/meta"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetMetaIndexError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// This document
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetOpenApiDocumentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The OpenAPI 3.1 description of this API, generated from the same definitions the reference documentation renders. <c>?format=yaml</c> returns YAML for gateways that require it. Public: no key needed, because an evaluator has to be able to import the spec before they have one. Presenting a key annotates the document with that key's plan and remaining quota.
    /// </remarks>
    public Task<object> GetOpenApiDocument(GetOpenApiDocumentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/openapi"),
            [],
            [new Param("format", request.Format)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetOpenApiDocumentError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Sandbox manifest and test key
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="object"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSandboxManifestError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The published test key, the sandbox base URL, and the fixed record set behind it. Integrate and test a client with no account, no plan and no quota consumption, then change the base URL and the key to go live.
    /// </remarks>
    public Task<object> GetSandboxManifest(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/meta/sandbox"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<object>(),
            GetSandboxManifestError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
