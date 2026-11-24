using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Ortto.Core;
using Ortto.Core.Exceptions;
using Ortto.Core.Models;
using Ortto.Core.Request;
using Ortto.Core.Response;
using Ortto.Errors;
using Ortto.Requests.Activities;

namespace Ortto.Api;

/// <summary>
/// Send custom activity events and manage activity definitions.
/// </summary>
public sealed class Activities
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Activities(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create one or more custom activity events
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateActivitiesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Sends up to 100 custom activity events in a single payload (max 2 MB). Each activity references a custom activity definition and may create or update the associated person via merge_by or person_id.
    /// </remarks>
    public Task CreateActivities(CreateActivitiesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/activities/create"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            VoidResponse.Instance,
            CreateActivitiesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
