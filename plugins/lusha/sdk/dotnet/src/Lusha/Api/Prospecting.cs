using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Models;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;
using Lusha.Requests.Prospecting;

namespace Lusha.Api;

/// <summary>
/// <b>Prospecting APIs:</b> Filter-based search for contacts and companies.
/// </summary>
public sealed class Prospecting
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Prospecting(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Prospecting Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ProspectingCompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProspectingCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for companies that match your target market using rich filter criteria.
    /// <para>
    /// <b>Filter by:</b>
    /// - Size, revenue range, industry, sub-industry
    /// - Technologies in use
    /// - Locations (HQ country, state, city)
    /// - SIC and NAICS codes
    /// - Buyer intent topics
    /// - Signal activity (headcount changes, hiring surges, news events, LinkedIn activity intent)
    /// </para>
    /// <para>
    /// Use the returned company <c>id</c> values with Enrich Companies to get full firmographic data.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per result via <c>api_search</c>. If signals are requested, an additional charge applies per matched signal per result.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also persist matching results into an existing table. This is additive — the primary response is unchanged, and a <c>tableWrite</c> object is added showing what happened on the table side. See Companies Tables.
    /// </para>
    /// </remarks>
    public Task<V3ProspectingCompaniesResponse> ProspectingCompanies(ProspectingCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/prospecting"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3ProspectingCompaniesResponse>(),
            ProspectingCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Prospecting Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ProspectingContactsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="ProspectingContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for contacts that match your Ideal Customer Profile using rich filter criteria.
    /// <para>
    /// <b>Filter by contact attributes:</b>
    /// - Job title, seniority, department
    /// - Location (city, state, country, continent)
    /// - Existing data points (e.g. only contacts with a known work email)
    /// - Signal activity (promotion, job change)
    /// </para>
    /// <para>
    /// <b>Filter by company attributes:</b>
    /// - Size, revenue, industry, technologies
    /// - Location, intent topics, funding
    /// </para>
    /// <para>
    /// Use the returned contact <c>id</c> values with Enrich Contacts to reveal emails and phones.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per result via <c>api_search</c>. If signals are requested, an additional charge applies per matched signal per result.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also persist matching results into an existing table. This is additive — the primary response is unchanged, and a <c>tableWrite</c> object is added showing what happened on the table side. See Contacts Tables.
    /// </para>
    /// </remarks>
    public Task<V3ProspectingContactsResponse> ProspectingContacts(ProspectingContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/prospecting"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3ProspectingContactsResponse>(),
            ProspectingContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
