using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Asana.Core;
using Asana.Core.Authentication;
using Asana.Core.Exceptions;
using Asana.Core.Extensions;
using Asana.Core.Models;
using Asana.Core.Request;
using Asana.Core.Response;
using Asana.Errors;
using Asana.Models;
using Asana.Requests.StatusUpdates;

namespace Asana.Api;

/// <summary>
/// A status update is an update on the progress of a particular object,
/// and is sent out to all followers when created. These updates
/// include both text describing the update and a <c>status_type</c> intended to
/// represent the overall state of the project. These include: <c>on_track</c> for projects that
/// are on track, <c>at_risk</c> for projects at risk, <c>off_track</c> for projects that
/// are behind, and <c>on_hold</c> for projects on hold.
/// <para>
/// Status updates can be created and deleted, but not modified.
/// </para>
/// </summary>
public sealed class StatusUpdates
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal StatusUpdates(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Create a status update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusUpdatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="CreateStatusForObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Creates a new status update on an object.
    /// Returns the full record of the newly created status update.
    /// </remarks>
    public Task<StatusUpdatesResponse> CreateStatusForObject(CreateStatusForObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/status_updates"),
            [],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<StatusUpdatesResponse>(),
            CreateStatusForObjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete a status update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusUpdatesResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="DeleteStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Deletes a specific, existing status update.
    /// <para>
    /// Returns an empty data record.
    /// </para>
    /// </remarks>
    public Task<StatusUpdatesResponse1> DeleteStatus(DeleteStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/status_updates/{status_gid}"),
            [new TemplateParam("status_gid", request.StatusGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<StatusUpdatesResponse1>(),
            DeleteStatusError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get a status update
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusUpdatesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatusError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the complete record for a single status update.
    /// </remarks>
    public Task<StatusUpdatesResponse> GetStatus(GetStatusRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/status_updates/{status_gid}"),
            [new TemplateParam("status_gid", request.StatusGid)],
            [
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StatusUpdatesResponse>(),
            GetStatusError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get status updates from an object
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="StatusUpdatesResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetStatusesForObjectError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the compact status update records for all updates on the object.
    /// </remarks>
    public Task<StatusUpdatesResponse2> GetStatusesForObject(GetStatusesForObjectRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/status_updates"),
            [],
            [
                new Param("parent", request.Parent),
                new Param("opt_pretty", request.OptPretty),
                new Param("opt_fields", request.OptFields, SerializationFormat.Csv),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
                new Param("created_since", request.CreatedSince?.ToIso8601()),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<StatusUpdatesResponse2>(),
            GetStatusesForObjectError.Response,
            AuthScheme.Any(_auth.PersonalAccessToken, _auth.Oauth2),
            requestOptions,
            cancellationToken);
}
