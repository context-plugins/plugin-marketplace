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
using Lusha.Requests.ProspectingSearchEnrich;

namespace Lusha.Api;

/// <summary>
/// With Lusha's Prospecting API, you can query Lusha's extensive database based on specific criteria (such as job title, seniority, location, and more) to retrieve detailed contact and company information.
/// </summary>
public sealed class ProspectingSearchEnrich
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal ProspectingSearchEnrich(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Enrich Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyEnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichProspectingCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enrich companies from search results. This is step 3 of the prospecting process.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/prospecting/company/enrich</b>
    /// </para>
    /// </remarks>
    public Task<CompanyEnrichResponse> EnrichProspectingCompanies(EnrichProspectingCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/company/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanyEnrichResponse>(),
            EnrichProspectingCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enrich Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactEnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichProspectingContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enrich contacts from search results. This is step 3 of the prospecting process.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/prospecting/contact/enrich</b>
    /// ---
    /// </para>
    /// <para>
    /// ⚠️ <b>Important Notice - Unified Credits Plan Required</b>
    /// </para>
    /// <para>
    /// | Parameter | Requirement |
    /// |-----------|-------------|
    /// | <c>revealEmails</c> and <c>revealPhones</c> | Only available to customers on the <b>Unified Credits</b> pricing plan |
    /// | Plan Restriction | Attempting to use these parameters on other plans will result in a <b>403 Unauthorized</b> error |
    /// | Default Behavior | When neither parameter is used, the API returns <b>both email addresses and phone numbers</b>, if available |
    /// </para>
    /// <para>
    /// ---
    /// </para>
    /// </remarks>
    public Task<ContactEnrichResponse> EnrichProspectingContacts(EnrichProspectingContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/contact/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactEnrichResponse>(),
            EnrichProspectingContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchProspectingCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for companies using various filters. This is step 2 of the prospecting process.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/prospecting/company/search</b>
    /// ---
    /// </para>
    /// <para>
    /// ##### Signal Filtering (Premium Feature)
    /// Filter companies by signal types to identify those with recent business events and changes.
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> This is a premium feature. Credits are charged for each signal type that returns results.
    /// </para>
    /// </remarks>
    public Task<CompanySearchResponse> SearchProspectingCompanies(SearchProspectingCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/company/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanySearchResponse>(),
            SearchProspectingCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchProspectingContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for contacts using various filters. This is step 2 of the prospecting process.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/prospecting/contact/search</b>
    /// ---
    /// ##### Signal Filtering (Premium Feature)
    /// Filter contacts by signal types to find prospects at key career moments.
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> This is a premium feature. Credits are charged for each signal type that returns results.
    /// </para>
    /// <para>
    /// ---
    /// ##### DNC Filtering (Scale Feature)
    /// Use <c>excludeDnc: true</c> at the top level of the request body to filter out contacts whose phone numbers are all marked Do Not Call.
    /// - Contacts with <b>at least one callable phone</b> appear in results - Only callable phones are shown — DNC phones are hidden - Contacts with <b>only DNC phones</b> are excluded entirely
    /// &gt; <b>Note</b>: Returns <b>403</b> on unsupported plans.
    /// </para>
    /// </remarks>
    public Task<ContactSearchResponse> SearchProspectingContacts(SearchProspectingContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/prospecting/contact/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactSearchResponse>(),
            SearchProspectingContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
