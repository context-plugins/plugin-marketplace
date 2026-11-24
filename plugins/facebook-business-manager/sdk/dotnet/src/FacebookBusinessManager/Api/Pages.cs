using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using FacebookBusinessManager.Core;
using FacebookBusinessManager.Core.Exceptions;
using FacebookBusinessManager.Core.Models;
using FacebookBusinessManager.Core.Request;
using FacebookBusinessManager.Core.Response;
using FacebookBusinessManager.Errors;
using FacebookBusinessManager.Models;
using FacebookBusinessManager.Requests.Pages;

namespace FacebookBusinessManager.Api;

/// <summary>
/// Retrieve and manage Facebook Page settings, information, and metadata.
/// </summary>
public sealed class Pages
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Pages(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Facebook Business Manager Get page details
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Page"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPageError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieves information about a Facebook Page including name, category, description, fan count, and other metadata.
    /// </remarks>
    public Task<Page> GetPage(GetPageRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}"),
            [new TemplateParam("page_id", request.PageId)],
            [new Param("fields", request.Fields)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<Page>(),
            GetPageError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Facebook Business Manager Subscribe app to page
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubscribePageAppError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Installs a Webhooks-configured app on the Page so the app can receive real-time updates about changes to the Page.
    /// </remarks>
    public Task<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi> SubscribePageApp(SubscribePageAppRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/{page_id}/subscribed_apps"),
            [new TemplateParam("page_id", request.PageId)],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SuccessResponseFacebookBusinessManagerFacebookPagesCommentsApi>(),
            SubscribePageAppError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
