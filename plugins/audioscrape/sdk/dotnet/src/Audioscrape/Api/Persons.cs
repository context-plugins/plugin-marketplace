using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Audioscrape.Core;
using Audioscrape.Core.Exceptions;
using Audioscrape.Core.Models;
using Audioscrape.Core.Request;
using Audioscrape.Core.Response;
using Audioscrape.Errors;
using Audioscrape.Models;
using Audioscrape.Requests.Persons;

namespace Audioscrape.Api;

/// <summary>
/// Look up speakers and their appearances
/// </summary>
public sealed class Persons
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Persons(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get person detail with appearances
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonDetail"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPersonV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns a person + up to 20 recent episode appearances where this person is attributed as a speaker.
    /// </remarks>
    public Task<PersonDetail> GetPersonV1(GetPersonV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/persons/{person_slug}"),
            [new TemplateParam("person_slug", request.PersonSlug)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PersonDetail>(),
            GetPersonV1Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search persons (speakers)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonList"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPersonsV1Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches the persons index by name. Persons are speakers identified across podcast transcripts — every speaker who's been attributed to at least one segment.
    /// </remarks>
    public Task<PersonList> SearchPersonsV1(SearchPersonsV1Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/persons"),
            [],
            [new Param("q", request.Q), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PersonList>(),
            SearchPersonsV1Error.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
