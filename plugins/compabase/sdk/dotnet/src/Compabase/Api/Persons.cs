using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Compabase.Core;
using Compabase.Core.Authentication;
using Compabase.Core.Exceptions;
using Compabase.Core.Models;
using Compabase.Core.Request;
using Compabase.Core.Response;
using Compabase.Errors;
using Compabase.Models;
using Compabase.Requests.Persons;

namespace Compabase.Api;

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
    /// Company connections for a person
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonConnectionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPersonsByPersonIdConnectionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all companies linked to the given person together with the
    /// relationship type and role label for each link.
    /// <para>
    /// Use <c>GET /persons/search</c> to resolve a name to a <c>person_id</c> first.
    /// </para>
    /// </remarks>
    public Task<PersonConnectionsResponse> GetPersonsByPersonIdConnections(GetPersonsByPersonIdConnectionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/persons/{personId}/connections"),
            [new TemplateParam("personId", request.PersonId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PersonConnectionsResponse>(),
            GetPersonsByPersonIdConnectionsError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search persons by name
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PersonsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPersonsSearchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Searches for natural persons by name (first name, last name, or both).
    /// Returns a deduplicated list of matching persons with their <c>person_id</c> key
    /// and the number of companies they are linked to.
    /// <para>
    /// Use the returned <c>person_id</c> with <c>GET /persons/{personId}/connections</c>
    /// to fetch full connection details.
    /// </para>
    /// <para>
    /// Identification is restricted to name-based queries (first name, last name, or both).
    /// Protected data, including PESEL and exact birth dates, is never exposed.
    /// To assist with identification, every result includes a <c>birth_year</c> (integer).
    /// </para>
    /// <para>
    /// <b>Result capping:</b> internally the search scans up to 2 000 matching link
    /// rows before aggregation. For very common names the response may include
    /// a <c>note</c> field indicating the result set was truncated; use a more specific
    /// query to narrow results.
    /// </para>
    /// </remarks>
    public Task<PersonsSearchResponse> GetPersonsSearch(GetPersonsSearchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/persons/search"),
            [],
            [new Param("q", request.Q), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PersonsSearchResponse>(),
            GetPersonsSearchError.Response,
            AuthScheme.Any(_auth.ApiKeyAuth, _auth.BearerAuth),
            requestOptions,
            cancellationToken);
}
