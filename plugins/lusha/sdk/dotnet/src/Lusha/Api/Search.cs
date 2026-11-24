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
using Lusha.Requests.Search;

namespace Lusha.Api;

/// <summary>
/// <b>Search APIs:</b> Find contacts or companies using known identifiers.
/// <para>
/// Look up contacts by <c>id</c>, <c>linkedinUrl</c>, <c>email</c>, or <c>firstName</c> + <c>lastName</c> + <c>companyName</c>/<c>companyDomain</c>. Look up companies by <c>id</c>, <c>name</c>, or <c>domain</c>.
/// </para>
/// <para>
/// Returns a non-PII preview of each profile with a <c>has</c> field listing available data points and a <c>canReveal</c> field showing what can be unlocked via Enrich.
/// </para>
/// <para>
/// &gt; <b>Billing:</b> Charged per successful result via the <c>api_search</c> action.
/// </para>
/// </summary>
public sealed class Search
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Search(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3CompaniesSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up companies by identifier. Returns a preview of each company profile.
    /// <para>
    /// <b>Accepted identifiers (at least one required per company):</b>
    /// - Lusha company <c>id</c>
    /// - <c>name</c>
    /// - <c>domain</c>
    /// </para>
    /// <para>
    /// Up to 100 companies per request. Each result includes a <c>has</c> field listing the data available via Enrich Companies.
    /// </para>
    /// <para>
    /// Pass a <c>signals</c> filter to narrow results to companies showing specific activity (e.g. headcount growth, hiring surge).
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per successful result via the <c>api_search</c> action.
    /// </para>
    /// </remarks>
    public Task<V3CompaniesSearchResponse> SearchCompanies(SearchCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3CompaniesSearchResponse>(),
            SearchCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ContactsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Look up contacts by identifier. Returns a non-PII preview of each profile — no emails or phone numbers.
    /// <para>
    /// <b>Accepted identifiers (one required per contact):</b>
    /// - Lusha contact <c>id</c>
    /// - <c>linkedinUrl</c>
    /// - <c>email</c>
    /// - <c>firstName</c> + <c>lastName</c> + <c>companyName</c> or <c>companyDomain</c>
    /// </para>
    /// <para>
    /// Up to 100 contacts per request. Each result includes:
    /// - <c>has</c> — data points available on this profile
    /// - <c>canReveal</c> — what you can unlock via Enrich Contacts, and the credit cost
    /// </para>
    /// <para>
    /// Pass a <c>signals</c> filter to narrow results to contacts with recent activity (e.g. promotion, job change).
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per successful result via the <c>api_search</c> action.
    /// </para>
    /// </remarks>
    public Task<V3ContactsSearchResponse> SearchContacts(SearchContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3ContactsSearchResponse>(),
            SearchContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
