using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Surfe.Core;
using Surfe.Core.Exceptions;
using Surfe.Core.Models;
using Surfe.Core.Request;
using Surfe.Core.Response;
using Surfe.Errors;
using Surfe.Models;
using Surfe.Requests.People;

namespace Surfe.Api;

/// <summary>
/// Search and enrich individual contacts.
/// </summary>
public sealed class People
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal People(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Find people by email
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PeopleFindByEmailResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="FindPeopleByEmailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enrich people directly from a list of email addresses, returning the matched person profile and firmographics where available.
    /// </remarks>
    public Task<PeopleFindByEmailResponse> FindPeopleByEmail(FindPeopleByEmailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/people/find-by-email"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PeopleFindByEmailResponse>(),
            FindPeopleByEmailError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enrich people (get)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PeopleEnrichmentResult"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetPeopleEnrichmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve the status and results of a people enrichment job by ID. Poll until status is COMPLETED, or use a webhook to be notified.
    /// </remarks>
    public Task<PeopleEnrichmentResult> GetPeopleEnrichment(GetPeopleEnrichmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/people/enrich/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<PeopleEnrichmentResult>(),
            GetPeopleEnrichmentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search people
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="PeopleSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchPeopleError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for people by persona filters (job titles, seniorities, departments) and company filters (industry, headcount, location). Job titles are expanded automatically with acronym and semantic matching. Results are paged with nextPageToken.
    /// </remarks>
    public Task<PeopleSearchResponse> SearchPeople(SearchPeopleRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/people/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<PeopleSearchResponse>(),
            SearchPeopleError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enrich people (start)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="EnrichmentJobAccepted"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="StartPeopleEnrichmentError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Start an asynchronous bulk enrichment job for up to 10,000 people. Each person is identified by a LinkedIn URL, or by first name + last name + company name or domain. Returns an enrichment ID for polling or a webhook callback.
    /// </remarks>
    public Task<EnrichmentJobAccepted> StartPeopleEnrichment(StartPeopleEnrichmentRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/people/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<EnrichmentJobAccepted>(),
            StartPeopleEnrichmentError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
