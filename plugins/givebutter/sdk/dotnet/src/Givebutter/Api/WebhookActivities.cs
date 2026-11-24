using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Givebutter.Core;
using Givebutter.Core.Exceptions;
using Givebutter.Core.Models;
using Givebutter.Core.Request;
using Givebutter.Core.Response;
using Givebutter.Errors;
using Givebutter.Models;
using Givebutter.Requests.WebhookActivities;

namespace Givebutter.Api;

public sealed class WebhookActivities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal WebhookActivities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List all webhook activities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V1WebhooksActivitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksActivitiesIndexError"/> when the server returns an error response.</exception>
    public Task<V1WebhooksActivitiesResponse> WebhooksActivitiesIndex(WebhooksActivitiesIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/{webhook}/activities"),
            [new TemplateParam("webhook", request.Webhook)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<V1WebhooksActivitiesResponse>(),
            WebhooksActivitiesIndexError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a webhook activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="WebhookActivityResource"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="WebhooksActivitiesShowError"/> when the server returns an error response.</exception>
    public Task<WebhookActivityResource> WebhooksActivitiesShow(WebhooksActivitiesShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v1/webhooks/{webhook}/activities/{activity}"),
            [new TemplateParam("webhook", request.Webhook), new TemplateParam("activity", request.Activity)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<WebhookActivityResource>(),
            WebhooksActivitiesShowError.Response,
            _auth.Http,
            requestOptions,
            cancellationToken);
}
