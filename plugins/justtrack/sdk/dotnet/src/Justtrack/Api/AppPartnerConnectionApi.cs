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
using Justtrack.Requests.AppPartnerConnectionApi;

namespace Justtrack.Api;

/// <summary>
/// With the App Partner Connection API, you can:
/// <list type="bullet">
///   <item><description>View details about an app partner connection</description></item>
///   <item><description>Create a partner connection for an app (This is the API equivalent of connecting a partner in the dashboard)</description></item>
///   <item><description>Update details about an app partner connection</description></item>
/// </list>
/// <para>
/// :::info
/// </para>
/// <para>
/// Without an app partner connection, justtrack can't operate for most of its features, including campaign creation, tracking, and more.
/// </para>
/// <para>
/// :::
/// </para>
/// </summary>
public sealed class AppPartnerConnectionApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal AppPartnerConnectionApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get app partner connection
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppPartnerConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetManagementV1AppByAppIdConnectionByPartnerIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Get data for existing app partner connection.
    /// </remarks>
    public Task<AppPartnerConnection> GetManagementV1AppByAppIdConnectionByPartnerId(GetManagementV1AppByAppIdConnectionByPartnerIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/app/{appId}/connection/{partnerId}"),
            [new TemplateParam("appId", request.AppId), new TemplateParam("partnerId", request.PartnerId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<AppPartnerConnection>(),
            GetManagementV1AppByAppIdConnectionByPartnerIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Connect partner
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="AppPartnerConnection"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PutManagementV1AppByAppIdConnectionByPartnerIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Connect your app to a partner. If this app-partner connection already exists, update the connection details.
    /// </remarks>
    public Task<AppPartnerConnection> PutManagementV1AppByAppIdConnectionByPartnerId(PutManagementV1AppByAppIdConnectionByPartnerIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultManagementAppPartnerConnectionApi("/management/v1/app/{appId}/connection/{partnerId}"),
            [new TemplateParam("appId", request.AppId), new TemplateParam("partnerId", request.PartnerId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<AppPartnerConnection>(),
            PutManagementV1AppByAppIdConnectionByPartnerIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
