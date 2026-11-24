using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Archbee.Core;
using Archbee.Core.Exceptions;
using Archbee.Core.Models;
using Archbee.Core.Request;
using Archbee.Core.Response;
using Archbee.Errors;
using Archbee.Models;
using Archbee.Requests.SpaceGroups;

namespace Archbee.Api;

/// <summary>
/// Grouping of documentation spaces
/// </summary>
public sealed class SpaceGroups
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SpaceGroups(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create Space Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpaceGroupCreateResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateSpaceGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Create a new space group with desired fields, return the space group.
    /// </remarks>
    public Task<SpaceGroupCreateResponse> CreateSpaceGroup(CreateSpaceGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/space-group/create"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SpaceGroupCreateResponse>(),
            CreateSpaceGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete Space Group
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SpaceGroupDeleteResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteSpaceGroupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Delete Archbee space group with given spaceGroupId.
    /// </remarks>
    public Task<SpaceGroupDeleteResponse> DeleteSpaceGroup(DeleteSpaceGroupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/space-group/delete"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<SpaceGroupDeleteResponse>(),
            DeleteSpaceGroupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
