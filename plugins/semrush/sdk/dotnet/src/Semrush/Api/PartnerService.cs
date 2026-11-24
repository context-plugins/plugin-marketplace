using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Semrush.Core;
using Semrush.Core.Exceptions;
using Semrush.Core.Models;
using Semrush.Core.Request;
using Semrush.Core.Response;
using Semrush.Errors;
using Semrush.Models;
using Semrush.Requests.PartnerService;

namespace Semrush.Api;

public sealed class PartnerService
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal PartnerService(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Semrush User status
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ViewerStatusResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostApisV4AppCenterV2PartnerViewerStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves user status, related to the app (purchases, subscriptions)
    /// Documentation
    /// </remarks>
    public Task<ViewerStatusResponse> PostApisV4AppCenterV2PartnerViewerStatus(PostApisV4AppCenterV2PartnerViewerStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/apis/v4/app-center/v2/partner/viewer-status"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ViewerStatusResponse>(),
            PostApisV4AppCenterV2PartnerViewerStatusError.Response,
            _auth.JwtIssuerToken,
            requestOptions,
            cancellationToken);
}
