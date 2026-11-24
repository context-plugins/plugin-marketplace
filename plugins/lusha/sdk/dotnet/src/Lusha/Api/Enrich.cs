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
using Lusha.Requests.Enrich;

namespace Lusha.Api;

/// <summary>
/// <b>Enrich APIs:</b> Retrieve full profile data for contacts or companies by ID.
/// <para>
/// Pass IDs from Search results to reveal emails, phones, and full firmographic data.
/// </para>
/// <para>
/// &gt; <b>Billing:</b> Charged per revealed field via per-datapoint pricing (<c>revealEmail</c>, <c>revealPhone</c>, <c>reveal_company</c>).
/// </para>
/// </summary>
public sealed class Enrich
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Enrich(RawClient rawClient, Server server, AuthSchemes auth)
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
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3CompaniesEnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichCompaniesError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reveal full company data for companies you've already found via Search Companies.
    /// <para>
    /// Pass up to 100 company <c>ids</c> (from the search response). Each enriched result includes:
    /// - Firmographics: size, revenue range, year founded, company type
    /// - Industry: primary industry, sub-industry, SIC/NAICS codes
    /// - Locations: HQ and additional office sites
    /// - Technologies, funding rounds, buyer intent topics
    /// - LinkedIn followers, logo URL, social links
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per successful result via the <c>reveal_company</c> action.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also add these companies to an existing table and populate the relevant enrichment columns. See Companies Tables.
    /// </para>
    /// </remarks>
    public Task<V3CompaniesEnrichResponse> EnrichCompanies(EnrichCompaniesRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/companies/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3CompaniesEnrichResponse>(),
            EnrichCompaniesError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Enrich Contacts
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="V3ContactsEnrichResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="EnrichContactsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Reveal full contact data for contacts you've already found via Search Contacts.
    /// <para>
    /// Pass up to 100 contact <c>ids</c> (from the search response). Use the <c>reveal</c> field to control what gets unlocked:
    /// - <c>emails</c> — work and personal email addresses
    /// - <c>phones</c> — mobile and direct phone numbers
    /// - Omit <c>reveal</c> to get both by default
    /// </para>
    /// <para>
    /// ---
    /// </para>
    /// <para>
    /// ### Waterfall Reveal
    /// Fall through to your enabled third-party providers when Lusha's own data has no match, for extra reach on hard-to-match contacts.
    /// </para>
    /// <para>
    /// If <b>Data Waterfall</b> is enabled on your account, with specific providers turned on under <b>Account &gt; Waterfall</b>, the waterfall runs automatically on every Enrich Contacts call - you don't need to pass anything to trigger it.
    /// </para>
    /// <para>
    /// Pass <c>waterfallEnabled: false</c> to opt a specific call out:
    /// </para>
    /// <code>
    /// "reveal": ["emails", "phones"],
    /// "waterfallEnabled": false
    /// </code>
    /// <para>
    /// - <c>reveal</c> controls <b>which fields</b> come back.
    /// - <c>waterfallEnabled</c> controls whether the waterfall runs for this call at all. Defaults to <c>true</c> whenever Data Waterfall is enabled on your account; pass <c>false</c> to disable it just for this call.
    /// - Provider order isn't configurable - Lusha manages that internally.
    /// - If Data Waterfall is off or no providers are enabled on your account, <c>waterfallEnabled</c> has no effect either way.
    /// ---
    /// &gt; <b>Tip:</b> If <c>canReveal.credits</c> is <c>0</c> in the search response, that data has already been revealed for your account — re-enriching it is free.
    /// </para>
    /// <para>
    /// &gt; <b>Billing:</b> Charged per revealed field (email or phone) via per-datapoint pricing.
    /// </para>
    /// <para>
    /// &gt; <b>Persisting to a table:</b> Pass <c>tableId</c> to also add these contacts to an existing table and populate the Work email / Phone columns. See Contacts Tables.
    /// </para>
    /// </remarks>
    public Task<V3ContactsEnrichResponse> EnrichContacts(EnrichContactsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/v3/contacts/enrich"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<V3ContactsEnrichResponse>(),
            EnrichContactsError.Response,
            _auth.ApiKeyAuth,
            requestOptions,
            cancellationToken);
}
