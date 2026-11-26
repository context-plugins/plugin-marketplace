using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Justtrack.Core;
using Justtrack.Core.Exceptions;
using Justtrack.Core.Models;
using Justtrack.Core.Request;
using Justtrack.Core.Response;
using Justtrack.Errors;
using Justtrack.Models;
using Justtrack.Requests.Apps;

namespace Justtrack.Api;

/// <summary>
/// With the App API, you can:
/// <list type="bullet">
///   <item><description>View your list of apps</description></item>
///   <item><description>Create an app</description></item>
/// </list>
/// </summary>
public sealed class Apps
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Apps(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create app
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppOutput"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1AppError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create an app.
    /// <para>
    /// :::info
    /// </para>
    /// <para>
    /// We validate the following constraints when creating an app:
    /// </para>
    /// <list type="bullet">
    ///   <item><description>The bundle ID must be unique to your organization, though multiple apps within your organization can have the same bundle ID if the platform is different.</description></item>
    ///   <item><description>A (bundle ID, platform) pair must be unique within your organization.</description></item>
    ///   <item><description>A (name, platform) pair must be unique within your organization.</description></item>
    ///   <item><description>The store ID must be unique across all organizations.</description></item>
    /// </list>
    /// <para>
    /// :::
    /// </para>
    /// </remarks>
    public Task<AppOutput> PostManagementV1App(PostManagementV1AppRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/app"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AppOutput>(),
            PostManagementV1AppError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List apps
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ListAppsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostManagementV1AppsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get a paginated list of your organization's apps.
    /// </remarks>
    public Task<ListAppsResponse> PostManagementV1Apps(PostManagementV1AppsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/apps"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ListAppsResponse>(),
            PostManagementV1AppsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
