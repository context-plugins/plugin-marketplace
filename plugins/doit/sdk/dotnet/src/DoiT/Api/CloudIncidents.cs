using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DoiT.Core;
using DoiT.Core.Authentication;
using DoiT.Core.Exceptions;
using DoiT.Core.Models;
using DoiT.Core.Request;
using DoiT.Core.Response;
using DoiT.Errors;
using DoiT.Models;
using DoiT.Requests.CloudIncidents;

namespace DoiT.Api;

/// <summary>
/// Service disruptions and outages from cloud providers.
/// </summary>
public sealed class CloudIncidents
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal CloudIncidents(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Retrieve a cloud incident
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CoreV1CloudincidentsResponse1"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetKnownIssueError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the specified cloud incident.
    /// </remarks>
    public Task<CoreV1CloudincidentsResponse1> GetKnownIssue(GetKnownIssueRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudincidents/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CoreV1CloudincidentsResponse1>(),
            GetKnownIssueError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List cloud incidents
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CoreV1CloudincidentsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ListKnownIssuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a list of all the active and historical cloud incidents for Google Cloud and Amazon Web Services.
    /// Incidents are returned in reverse chronological order by default.
    /// </remarks>
    public Task<CoreV1CloudincidentsResponse> ListKnownIssues(ListKnownIssuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/core/v1/cloudincidents"),
            [],
            [
                new Param("maxResults", request.MaxResults),
                new Param("pageToken", request.PageToken),
                new Param("filter", request.Filter),
                new Param("minCreationTime", request.MinCreationTime),
                new Param("maxCreationTime", request.MaxCreationTime),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CoreV1CloudincidentsResponse>(),
            ListKnownIssuesError.Response,
            AuthScheme.Any(_auth.ApiKey, AuthScheme.All(_auth.TenantId, _auth.ApiKey)),
            requestOptions,
            cancellationToken);
}
