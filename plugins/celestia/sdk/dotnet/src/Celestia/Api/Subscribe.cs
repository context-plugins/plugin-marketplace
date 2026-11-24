using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Celestia.Core;
using Celestia.Core.Authentication;
using Celestia.Core.Exceptions;
using Celestia.Core.Models;
using Celestia.Core.Request;
using Celestia.Core.Response;
using Celestia.Errors;
using Celestia.Models;
using Celestia.Requests.Subscribe;

namespace Celestia.Api;

public sealed class Subscribe
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal Subscribe(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Subscribe to the newsletter
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="Success"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SubscribeToWebsiteNewsletterError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Subscribes a consenting email owner through Mailchimp after server-side reCAPTCHA verification. No API key is required from clients. Service credentials remain server-side.
    /// </remarks>
    public Task<Success> SubscribeToWebsiteNewsletter(SubscribeToWebsiteNewsletterRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultCelestiaWebsiteContactApi("/api/subscribe/"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<Success>(),
            SubscribeToWebsiteNewsletterError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
