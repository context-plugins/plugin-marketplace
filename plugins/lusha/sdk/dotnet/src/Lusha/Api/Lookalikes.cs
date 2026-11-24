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
using Lusha.Requests.Lookalikes;

namespace Lusha.Api;

/// <summary>
/// <b>Lookalike APIs:</b> Use AI-powered recommendations to discover contacts and companies similar to your best existing customers. The Contact Lookalikes and Company Lookalikes endpoints return paginated results you can pipe directly into Enrich for full data.
/// <para>
/// Pass <c>tableId</c> to also persist matching results into an existing table. See Contacts Tables or Companies Tables.
/// </para>
/// </summary>
public sealed class Lookalikes
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Lookalikes(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Company Lookalikes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyLookalikesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetCompanyLookalikesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find companies similar to a set of seed companies using AI-powered recommendations.
    /// <para>
    /// Provide 5-100 seed companies via domains or LinkedIn URLs. The API returns companies with similar size, industry, and profile.
    /// </para>
    /// <para>
    /// <b>Pagination without duplicates:</b>
    /// On your first request, omit <c>dedupeSessionId</c> — the server generates one and returns it. Pass it on every subsequent request to get more results without repeating companies already seen. Sessions are retained for 30 days.
    /// </para>
    /// <para>
    /// Use the <c>exclude</c> field to always filter out specific companies (e.g. existing customers or competitors).
    /// </para>
    /// <para>
    /// Results are lightweight previews. Use Enrich Companies with the returned <c>id</c> to get full firmographic data.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per result via the <c>lookalikeCompany</c> action.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also persist matching results into an existing table. See Companies Tables.
    /// </para>
    /// </remarks>
    public Task<CompanyLookalikesResponse> GetCompanyLookalikes(GetCompanyLookalikesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/lookalike"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanyLookalikesResponse>(),
            GetCompanyLookalikesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Contact Lookalikes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactLookalikesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="GetContactLookalikesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find contacts similar to a set of seed contacts using AI-powered recommendations.
    /// <para>
    /// Provide 5-100 seed contacts via LinkedIn URLs, emails, Lusha IDs, or name + company. The API returns contacts who share similar roles, seniority, and company profiles.
    /// </para>
    /// <para>
    /// <b>Pagination without duplicates:</b>
    /// On your first request, omit <c>dedupeSessionId</c> — the server generates one and returns it. Pass it on every subsequent request to get more results without repeating contacts already seen. Sessions are retained for 30 days.
    /// </para>
    /// <para>
    /// Use the <c>exclude</c> field to always filter out specific contacts (e.g. existing customers).
    /// </para>
    /// <para>
    /// Results are lightweight previews. Use Enrich Contacts with the returned <c>id</c> to get emails and phones.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per result via the <c>lookalikeContact</c> action.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also persist matching results into an existing table. See Contacts Tables.
    /// </para>
    /// </remarks>
    public Task<ContactLookalikesResponse> GetContactLookalikes(GetContactLookalikesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/lookalike"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactLookalikesResponse>(),
            GetContactLookalikesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Company Lookalikes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="CompanyLookalikesResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostV3LookalikeCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns company lookalikes based on seed companies.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/v3/lookalike/companies</b>
    /// </para>
    /// <para>
    /// #### How It Works
    /// </para>
    /// <para>
    /// <b>First Request (Start a New Run):</b>
    /// - Do not send <c>dedupeSessionId</c>
    /// - Server generates one and returns it in the response
    /// - Use returned <c>dedupeSessionId</c> for subsequent "get more" requests
    /// </para>
    /// <para>
    /// <b>Subsequent Requests ("Get More"):</b>
    /// - Send the returned <c>dedupeSessionId</c> to fetch more results without duplicates
    /// - Server uses <c>dedupeSessionId</c> to deduplicate companies already returned
    /// - Session history retained for 30 days from last activity (sliding window)
    /// ---
    /// </para>
    /// </remarks>
    public Task<CompanyLookalikesResponse2> PostV3LookalikeCompanies(PostV3LookalikeCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/lookalike/companies"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<CompanyLookalikesResponse2>(),
            PostV3LookalikeCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Contact Lookalikes
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ContactLookalikesResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="PostV3LookalikeContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Returns contact lookalikes based on seed contacts.
    /// <para>
    /// *Endpoint*: <b>(POST) https://api.lusha.com/v3/lookalike/contacts</b>
    /// </para>
    /// <para>
    /// #### How It Works
    /// </para>
    /// <para>
    /// <b>First Request (Start a New Run):</b>
    /// - Do not send <c>dedupeSessionId</c>
    /// - Server generates one and returns it in the response
    /// - Use returned <c>dedupeSessionId</c> for subsequent "get more" requests
    /// </para>
    /// <para>
    /// <b>Subsequent Requests ("Get More"):</b>
    /// - Send the returned <c>dedupeSessionId</c> to fetch more results without duplicates
    /// - Server dedupes against all contacts previously returned for the <c>dedupeSessionId</c>
    /// - User-provided <c>exclude.*</c> is applied on every request and combined with server-side dedupe
    /// - Session history retained for 30 days from last activity (sliding window)
    /// ---
    /// </para>
    /// </remarks>
    public Task<ContactLookalikesResponse2> PostV3LookalikeContacts(PostV3LookalikeContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/lookalike/contacts"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ContactLookalikesResponse2>(),
            PostV3LookalikeContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
