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
using Lusha.Requests.SearchEnrich;

namespace Lusha.Api;

/// <summary>
/// <b>Search &amp; Enrich APIs:</b> Find and retrieve full contact or company data in a single call.
/// <para>
/// Combines Search and Enrich into one request. Provide identifiers and control what gets revealed via the <c>reveal</c> field.
/// </para>
/// <para>
/// &gt; <b>Billing:</b> Two charges apply — one for the search (<c>api_search</c>) and one per revealed field.
/// </para>
/// </summary>
public sealed class SearchEnrich
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SearchEnrich(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search and Enrich Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3CompaniesSearchAndEnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchAndEnrichCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find companies and reveal their full data in a single call. Combines Search and Enrich into one request.
    /// <para>
    /// Provide company identifiers the same way you would for Search Companies. Up to 100 companies per request.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Same as Enrich Companies — charged per successful result via the <c>reveal_company</c> action.
    /// </para>
    /// </remarks>
    public Task<V3CompaniesSearchAndEnrichResponse> SearchAndEnrichCompanies(SearchAndEnrichCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/search-and-enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3CompaniesSearchAndEnrichResponse>(),
            SearchAndEnrichCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search and Enrich Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ContactsSearchAndEnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchAndEnrichContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find contacts and reveal their full data in a single call. Combines Search and Enrich into one request.
    /// <para>
    /// Provide contact identifiers the same way you would for Search Contacts. Use the <c>reveal</c> field to control what gets unlocked (<c>emails</c>, <c>phones</c>, or both).
    /// </para>
    /// <para>
    /// Up to 100 contacts per request.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Two charges apply — one for the search (<c>api_search</c>) and one per revealed field. The <c>billing.creditsCharged</c> in the response reflects the total.
    /// </para>
    /// </remarks>
    public Task<V3ContactsSearchAndEnrichResponse> SearchAndEnrichContacts(SearchAndEnrichContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/search-and-enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3ContactsSearchAndEnrichResponse>(),
            SearchAndEnrichContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
