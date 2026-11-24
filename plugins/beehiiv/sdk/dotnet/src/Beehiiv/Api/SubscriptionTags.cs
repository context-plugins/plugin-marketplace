using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Beehiiv.Core;
using Beehiiv.Core.Authentication;
using Beehiiv.Core.Exceptions;
using Beehiiv.Core.Models;
using Beehiiv.Core.Request;
using Beehiiv.Core.Response;
using Beehiiv.Errors;
using Beehiiv.Models;
using Beehiiv.Requests.SubscriptionTags;

namespace Beehiiv.Api;

public sealed class SubscriptionTags
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal SubscriptionTags(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Add subscription tag OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SubscriptionTagsCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create10Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Adds tags to a subscription. If the tag does not exist on the publication, it will be created automatically.
    /// </remarks>
    public Task<SubscriptionTagsCreateResponse> Create10(Create10Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/subscriptions/{subscriptionId}/tags"),
            [
                new TemplateParam("publicationId", request.PublicationId),
                new TemplateParam("subscriptionId", request.SubscriptionId),
            ],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SubscriptionTagsCreateResponse>(),
            Create10Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
