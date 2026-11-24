using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DevCycle.Core;
using DevCycle.Core.Authentication;
using DevCycle.Core.Exceptions;
using DevCycle.Core.Models;
using DevCycle.Core.Request;
using DevCycle.Core.Response;
using DevCycle.Errors;
using DevCycle.Models;
using DevCycle.Requests.EdgeDb;

namespace DevCycle.Api;

public sealed class EdgeDb
{
    private readonly RawClient _rawClient;
    private readonly Server _server;

    internal EdgeDb(RawClient rawClient, Server server)
    {
        _rawClient = rawClient;
        _server = server;
    }

    /// <summary>
    /// Update EdgeDB data based on unique id and project id
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EdgeDbApiResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PatchV1EdgedbByUserIdError"/> when the server returns an error response.</exception>
    public Task<EdgeDbApiResponse> PatchV1EdgedbByUserId(PatchV1EdgedbByUserIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.DefaultDevCycleBucketingBucketingApi("/v1/edgedb/{user_id}"),
            [new TemplateParam("user_id", request.UserId)],
            [new Param("sdkKey", request.SdkKey)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            new HttpMethod("PATCH"),
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EdgeDbApiResponse>(),
            PatchV1EdgedbByUserIdError.Response,
            AuthScheme.None,
            requestOptions,
            cancellationToken);
}
