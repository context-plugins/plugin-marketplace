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
using Beehiiv.Requests.BulkSubscriptions;

namespace Beehiiv.Api;

public sealed class BulkSubscriptions
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal BulkSubscriptions(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Bulk create subscription OAuth Scope: subscriptions:write
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkSubscriptionCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="Create3Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create new subscriptions for a publication.
    /// </remarks>
    public Task<BulkSubscriptionCreateResponse> Create3(Create3Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/publications/{publicationId}/bulk_subscriptions"),
            [new TemplateParam("publicationId", request.PublicationId)],
            [],
            [
                new HeaderParam("Authorization", request.Authorization),
                new HeaderParam("Idempotency-Key", Guid.NewGuid()),
            ],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkSubscriptionCreateResponse>(),
            Create3Error.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
