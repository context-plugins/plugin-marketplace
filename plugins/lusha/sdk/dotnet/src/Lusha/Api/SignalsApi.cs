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
using Lusha.Requests.SignalsApi;

namespace Lusha.Api;

/// <summary>
/// Real-world activity data for contacts and companies.
/// </summary>
public sealed class SignalsApi
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal SignalsApi(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Get Company Signal Filter Values
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FilterValuesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySignalFilterValuesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns valid values for a single company signal filter type.
    /// <para>
    /// | Filter type | Query required? |
    /// |---|---|
    /// | <c>newsEventTypes</c> | No |
    /// | <c>hiringByDepartments</c> | No |
    /// | <c>hiringByLocations</c> | Yes (2-256 chars) |
    /// | <c>intentCategories</c> | No — the <c>query</c> parameter is not supported for this filter type; passing one returns <c>400</c> |
    /// </para>
    /// </remarks>
    public Task<FilterValuesResponse> GetCompanySignalFilterValues(GetCompanySignalFilterValuesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/signals/filters/{filterType}"),
            [new TemplateParam("filterType", request.FilterType)],
            [new Param("query", request.Query)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FilterValuesResponse>(),
            GetCompanySignalFilterValuesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Company Signal Filters (Discovery)
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="FilterTypesDiscoveryResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySignalFiltersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns all available filter types for company signals and whether each requires a search query.
    /// </remarks>
    public Task<FilterTypesDiscoveryResponse> GetCompanySignalFilters(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/signals/filters"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<FilterTypesDiscoveryResponse>(),
            GetCompanySignalFiltersError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Score Companies by Signal Activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3SignalScoreCompaniesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySignalScoresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Score companies by their active buying signals. Returns the aggregate Signal Score - a <c>[0, 1]</c> value reflecting the fraction of the company's active signals - plus the active signal breakdown.
    /// <para>
    /// Accepts up to 100 companies, each identified by exactly one of <c>id</c>, <c>domain</c>, <c>name</c>, or <c>email</c>. All identifiers are resolved to Lusha company IDs server-side before scoring.
    /// </para>
    /// <para>
    /// Each result is one of:
    /// - A <b>scored entry</b> - <c>signalScore</c>, <c>signalTypes</c>, and <c>noActiveSignals</c>.
    /// - A <b><c>NOT_FOUND</c></b> entry - the company service could not resolve the supplied identifier.
    /// - A <b><c>NO_SCORE</c></b> entry - the company resolved, but the scoring engine returned nothing for it.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> 1 credit is charged per scored row via <c>signal_score_company_reveal</c>. This action is currently limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free (<c>billing.creditsCharged</c> is <c>0</c>). Error rows (<c>NOT_FOUND</c> / <c>NO_SCORE</c>) are never charged.
    /// </para>
    /// </remarks>
    public Task<V3SignalScoreCompaniesResponse> GetCompanySignalScores(GetCompanySignalScoresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/signal-score"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3SignalScoreCompaniesResponse>(),
            GetCompanySignalScoresError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Company Signal Types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySignalTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySignalTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full list of supported signal types for companies.
    /// </remarks>
    public Task<CompanySignalTypesResponse> GetCompanySignalTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/signals/types"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<CompanySignalTypesResponse>(),
            GetCompanySignalTypesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Company Signals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3CompanySignalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySignalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve signal events for a list of companies — hiring activity, headcount changes, web traffic, IT spend, and news.
    /// <para>
    /// Pass up to 100 company <c>ids</c>. Use <c>signalTypes</c> to specify which signals to return (or use <c>allSignals</c>). Optionally set a <c>startDate</c> to limit results to recent activity.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per matched signal per result via the <c>showSignalsCompany</c> action.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also add these companies to an existing table and populate the Signals column. See Companies Tables.
    /// </para>
    /// </remarks>
    public Task<V3CompanySignalsResponse> GetCompanySignals(GetCompanySignalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/signals"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3CompanySignalsResponse>(),
            GetCompanySignalsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Company Signals by IDs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySignalsByIdResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanySignalsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve signals data for a list of company IDs.
    /// This endpoint allows you to get recent activities and signals for up to 100 companies per request.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/signals/companies</b>
    /// </para>
    /// <para>
    /// <b>Default Behavior:</b>
    /// - Returns signals from the last 6 months by default
    /// - Use <c>startDate</c> to customize the timeframe
    /// </para>
    /// </remarks>
    public Task<CompanySignalsByIdResponse> GetCompanySignalsById(GetCompanySignalsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/signals/companies"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanySignalsByIdResponse>(),
            GetCompanySignalsByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Score Contacts by Signal Activity
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3SignalScoreContactsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactSignalScoresError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Score contacts by their active buying signals. Returns the aggregate Signal Score - a <c>[0, 1]</c> value - plus the active signal breakdown per contact.
    /// <para>
    /// Accepts up to 100 contacts. Each contact is resolved to a Lusha person ID and company ID server-side (identity only - no PII is revealed) before scoring. Provide one of:
    /// - <c>id</c> (encrypted Lusha contact ID)
    /// - <c>linkedinUrl</c>
    /// - <c>email</c>
    /// - <c>firstName</c> + <c>lastName</c> + (<c>companyName</c> or <c>companyDomain</c>)
    /// </para>
    /// <para>
    /// Each result is one of:
    /// - A <b>scored entry</b> - <c>signalScore</c>, <c>signalTypes</c>, and <c>noActiveSignals</c>.
    /// - A <b><c>NOT_FOUND</c></b> entry - identity resolution failed for the supplied identifier.
    /// - A <b><c>NO_SCORE</c></b> entry - the contact resolved, but the scoring engine returned nothing for it.
    /// </para>
    /// <para>
    /// &gt; <b>Note:</b> A full outage of the identity-resolution provider is never masked as <c>NOT_FOUND</c> - it returns a retryable <c>502</c> instead, so callers can retry rather than treating the batch as authoritatively unresolved.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> 1 credit is charged per scored row via <c>signal_score_contact_reveal</c>. This action is currently limited-availability - while it isn't yet seeded on an account's pricebook, the endpoint stays free (<c>billing.creditsCharged</c> is <c>0</c>). Error rows (<c>NOT_FOUND</c> / <c>NO_SCORE</c>) are never charged.
    /// </para>
    /// </remarks>
    public Task<V3SignalScoreContactsResponse> GetContactSignalScores(GetContactSignalScoresRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/signal-score"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3SignalScoreContactsResponse>(),
            GetContactSignalScoresError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contact Signal Types
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactSignalTypesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactSignalTypesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns the full list of supported signal types for contacts.
    /// </remarks>
    public Task<ContactSignalTypesResponse> GetContactSignalTypes(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/signals/types"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ContactSignalTypesResponse>(),
            GetContactSignalTypesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Contact Signals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ContactSignalsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactSignalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve signal events for a list of contacts — job changes and promotions.
    /// <para>
    /// Pass up to 100 contact <c>ids</c>. Use <c>signalTypes</c> to specify which events to return (<c>promotion</c>, <c>companyChange</c>, or <c>allSignals</c>). Optionally set a <c>startDate</c> to limit results to recent activity.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per matched signal per result via the <c>showSignalsContact</c> action.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also add these contacts to an existing table and populate the Signals column. See Contacts Tables.
    /// </para>
    /// </remarks>
    public Task<V3ContactSignalsResponse> GetContactSignals(GetContactSignalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/signals"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3ContactSignalsResponse>(),
            GetContactSignalsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Contact Signals by IDs
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactSignalsByIdResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactSignalsByIdError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve signals data for a list of contact IDs.
    /// This endpoint allows you to get recent activities and signals for up to 100 contacts per request.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/signals/contacts</b>
    /// </para>
    /// <para>
    /// <b>Default Behavior:</b>
    /// - Returns signals from the last 6 months by default
    /// - Use <c>startDate</c> to customize the timeframe
    /// - Each signal type requested counts towards credit usage
    /// </para>
    /// </remarks>
    public Task<ContactSignalsByIdResponse> GetContactSignalsById(GetContactSignalsByIdRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/signals/contacts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactSignalsByIdResponse>(),
            GetContactSignalsByIdError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Get Signal Options
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiSignalsFiltersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetSignalOptionsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve available signal options for a specific entity type (contact or company).
    /// This endpoint returns the list of signal types you can filter by when enriching contacts or companies.
    /// <para>
    /// <b>Endpoints:</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description><b>Contacts:</b> <c>GET /api/signals/filters/contact</c></description></item>
    ///   <item><description><b>Companies:</b> <c>GET /api/signals/filters/company</c></description></item>
    /// </list>
    /// <para>
    /// #### Available Signal Types
    /// </para>
    /// <para>
    /// #### For contacts:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><b><c>allSignals</c></b> - All available contact signal types</description></item>
    ///   <item><description><b><c>promotion</c></b> - Job title promotions</description></item>
    ///   <item><description><b><c>companyChange</c></b> - Company changes</description></item>
    /// </list>
    /// <para>
    /// ---
    /// </para>
    /// <para>
    /// #### For companies:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><b><c>allSignals</c></b> - All available company signal types</description></item>
    /// </list>
    /// <para>
    /// <b>Hiring &amp; Workforce:</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description><b><c>surgeInHiring</c></b> - Overall hiring activity increase</description></item>
    ///   <item><description><b><c>surgeInHiringByDepartment</c></b> - Department-specific hiring surges</description></item>
    ///   <item><description><b><c>surgeInHiringByLocation</c></b> - Location-specific hiring surges</description></item>
    /// </list>
    /// <para>
    /// <b>Headcount Trends:</b>
    /// </para>
    /// <para>
    /// | Signal | Description |
    /// |--------|-------------|
    /// | <c>headcountIncrease1m</c> / <c>headcountDecrease1m</c> | 1-month employee count changes |
    /// | <c>headcountIncrease3m</c> / <c>headcountDecrease3m</c> | 3-month employee count changes |
    /// | <c>headcountIncrease6m</c> / <c>headcountDecrease6m</c> | 6-month employee count changes |
    /// | <c>headcountIncrease12m</c> / <c>headcountDecrease12m</c> | 12-month employee count changes |
    /// </para>
    /// <para>
    /// <b>Technology &amp; Digital Presence:</b>
    /// </para>
    /// <list type="bullet">
    ///   <item><description><b><c>websiteTrafficIncrease</c></b> - Website traffic growth</description></item>
    ///   <item><description><b><c>websiteTrafficDecrease</c></b> - Website traffic decline</description></item>
    ///   <item><description><b><c>itSpendIncrease</c></b> - IT spending increase</description></item>
    ///   <item><description><b><c>itSpendDecrease</c></b> - IT spending decrease</description></item>
    /// </list>
    /// <para>
    /// <b>News Events:</b>
    /// </para>
    /// <para>
    /// To retrieve company news, use one or more of the following category values:
    /// </para>
    /// <para>
    /// | Signal | Included Events |
    /// |--------|-----------------|
    /// | <c>commercialActivityNews</c> | Partnership, New Customer, New Vendor |
    /// | <c>corporateStrategyNews</c> | M&amp;A, Facilities Expansion, New Location, Facility Closure, Asset Sale, Lawsuit Filed |
    /// | <c>financialEventsNews</c> | Funding Round, Asset Investment, Strategic Investment, IPO |
    /// | <c>marketIntelligenceNews</c> | Event Participation, Recognition, Competitor Activity |
    /// | <c>peopleNews</c> | Executive Hire, Executive Departure, Executive Promotion, Headcount Increase, Headcount Decrease |
    /// | <c>productActivityNews</c> | Product Launch, Product Development, Product Integration |
    /// | <c>riskNews</c> | Security Issue, Lawsuit Faced |
    /// </para>
    /// <para>
    /// &gt; The response also includes available values for signal sub-filters:
    /// </para>
    /// <list type="bullet">
    ///   <item><description><c>newsEventTypes</c> — available event type values for news signal filtering</description></item>
    ///   <item><description><c>hiringByDepartments</c> — available department values for hiring surge filtering</description></item>
    ///   <item><description><c>hiringByLocations</c> — available location values for hiring surge filtering (array of <c>{ country, state }</c> objects)</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiSignalsFiltersResponse> GetSignalOptions(GetSignalOptionsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/signals/filters/{objectType}"),
            [new TemplateParam("objectType", request.ObjectType)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiSignalsFiltersResponse>(),
            GetSignalOptionsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Company Signals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanySignalsByIdResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchCompanySignalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for company signals using identifiers like domain, company name, or ID.
    /// This endpoint combines search and signal enrichment in a single request.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/signals/companies/search</b>
    /// </para>
    /// <para>
    /// <b>Search Requirements:</b>
    /// Each company must have at least one identifier:
    /// - Company ID (as string)
    /// - Company name
    /// - Company domain
    /// </para>
    /// <para>
    /// <b>Default Behavior:</b>
    /// - Returns signals from the last 6 months by default
    /// - Companies are matched based on provided identifiers
    /// </para>
    /// </remarks>
    public Task<CompanySignalsByIdResponse> SearchCompanySignals(SearchCompanySignalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/signals/companies/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanySignalsByIdResponse>(),
            SearchCompanySignalsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search Contact Signals
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactSignalsSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="SearchContactSignalsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for contact signals using identifiers like LinkedIn URL, email, or name + company.
    /// This endpoint combines search and signal enrichment in a single request.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/api/signals/contacts/search</b>
    /// </para>
    /// <para>
    /// <b>Search Requirements:</b>
    /// Each contact can be identified by:
    /// - Contact ID
    /// - LinkedIn URL
    /// - Email address
    /// - Full name + Company (name or domain)
    /// </para>
    /// <para>
    /// <b>Default Behavior:</b>
    /// - Returns signals from the last 6 months by default
    /// - Contacts are matched based on provided identifiers
    /// - Returns both contact data and associated signals
    /// </para>
    /// </remarks>
    public Task<ContactSignalsSearchResponse> SearchContactSignals(SearchContactSignalsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/signals/contacts/search"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactSignalsSearchResponse>(),
            SearchContactSignalsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
