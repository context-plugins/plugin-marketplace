using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using Lusha.Core;
using Lusha.Core.Exceptions;
using Lusha.Core.Extensions;
using Lusha.Core.Models;
using Lusha.Core.Request;
using Lusha.Core.Response;
using Lusha.Errors;
using Lusha.Models;
using Lusha.Requests.Enrichment;

namespace Lusha.Api;

/// <summary>
/// <b>What is enrichment?</b>
/// <para>
/// Enrichment is the process of adding missing or updated data to existing contact or company records.
/// </para>
/// </summary>
public sealed class Enrichment
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Enrichment(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Search Multiple Companies
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="IReadOnlyDictionary{TKey, TValue}"/> of <see cref="CompanyBulkResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchMultipleCompaniesV2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for multiple companies in a single request. Provide a list of companies with
    /// identifiers like domain names or company IDs.
    /// &gt;##### Endpoint:
    /// <code>
    /// POST https://api.lusha.com/bulk/company/v2
    /// </code>
    /// <para>
    /// &gt;##### Notes:
    /// - At least one of <c>domain</c>, <c>company</c>, or <c>companyId</c> is required.
    /// - You can process up to 100 companies per request.
    /// </para>
    /// </remarks>
    public Task<IReadOnlyDictionary<string, CompanyBulkResponse>> SearchMultipleCompaniesV2(SearchMultipleCompaniesV2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/company"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<IReadOnlyDictionary<string, CompanyBulkResponse>>(),
            SearchMultipleCompaniesV2Error.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Multiple Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="BulkPersonResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchMultipleContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Enrich multiple contacts in a single request. This endpoint allows you to submit a list of contacts
    /// and receive enriched data for each one, including company information.
    /// <para>
    /// &gt;##### Endpoint:
    /// <code>
    /// POST https://api.lusha.com/v2/person
    /// </code>
    /// </para>
    /// <para>
    /// &gt;##### Notes
    /// - You can process up to 100 contacts per request.
    /// - Using <c>personId</c> provides the most direct way to retrieve contact information.
    /// - At least one of <c>email</c>, <c>linkedinUrl</c>, or <c>company</c>/<c>domain</c> with <c>fullName</c> is required.
    /// </para>
    /// <para>
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
    public Task<BulkPersonResponse> SearchMultipleContacts(SearchMultipleContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/person"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<BulkPersonResponse>(),
            SearchMultipleContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Single Company
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySingleResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchSingleCompanyV2Error"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find detailed information about a single company by using different paramaters.
    /// &gt;##### Endpoint:
    /// <code>
    /// GET https://api.lusha.com/v2/company
    /// </code>
    /// <para>
    /// &gt;##### Notes:
    /// - At least one of <c>domain</c>, <c>company</c>, or <c>companyId</c> is required.
    /// - Signal sub-filters (<c>newsEventTypes</c>, <c>hiringByDepartments</c>, <c>hiringByLocations</c>) are not supported on this endpoint. Use <c>POST /bulk/company/v2</c> with the <c>signalsFilters</c> parameter for filtered signal retrieval.
    /// </para>
    /// </remarks>
    public Task<CompanySingleResponse> SearchSingleCompanyV2(SearchSingleCompanyV2Request request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/company"),
            [],
            [
                new Param("domain", request.Domain),
                new Param("company", request.Company),
                new Param("companyId", request.CompanyId),
                new Param("signals", request.Signals),
                new Param("signalsStartDate", request.SignalsStartDate?.ToDate()),
                new Param("partialCompany", request.PartialCompany),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanySingleResponse>(),
            SearchSingleCompanyV2Error.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Single Contact
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="SingleContactResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchSingleContactError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find and enrich a single contact using various search criteria. You can search by name, email,
    /// LinkedIn URL, or Person Id.
    /// &gt;##### Endpoint
    /// <code>
    /// GET https://api.lusha.com/v2/person
    /// </code>
    /// <para>
    /// &gt;##### Search Requirements
    /// You must provide either:
    /// - <c>personId</c> OR
    /// - <c>email</c> OR
    /// - <c>linkedinUrl</c> OR
    /// - <c>firstName</c> AND <c>lastName</c> AND (<c>companyName</c> OR <c>companyDomain</c>)
    /// </para>
    /// <para>
    /// &gt;##### Notes:
    /// - Provide as much information as possible for better results
    /// - Using <c>personId</c> provides the most direct way to retrieve contact information, as it uniquely identifies a contact in Lusha's database.
    /// - Use <c>refreshJobInfo=true</c> to get the latest employment data
    /// - Use <c>filterBy</c> parameter to specify what contact details you need
    /// - Include the <c>signals</c> parameter to retriever contact signals (If no signals data is found for the specified period, the <c>signals</c> object will be empty but still present in the response.)
    /// - When requesting signals, you can optionally specify a start date using <c>signalsStartDate</c>.
    /// - Signals data is optional. If you don't include the <c>signals</c> parameter, no signals data will be returned.
    /// </para>
    /// <para>
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
    public Task<SingleContactResponse> SearchSingleContact(SearchSingleContactRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v2/person"),
            [],
            [
                new Param("firstName", request.FirstName),
                new Param("lastName", request.LastName),
                new Param("personId", request.PersonId),
                new Param("companyName", request.CompanyName),
                new Param("companyDomain", request.CompanyDomain),
                new Param("email", request.Email),
                new Param("linkedinUrl", request.LinkedinUrl),
                new Param("refreshJobInfo", request.RefreshJobInfo),
                new Param("filterBy", request.FilterBy),
                new Param("revealEmails", request.RevealEmails),
                new Param("revealPhones", request.RevealPhones),
                new Param("signals", request.Signals),
                new Param("signalsStartDate", request.SignalsStartDate?.ToDate()),
                new Param("partialProfile", request.PartialProfile),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<SingleContactResponse>(),
            SearchSingleContactError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
