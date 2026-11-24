using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using CommonElements.Core;
using CommonElements.Core.Exceptions;
using CommonElements.Core.Models;
using CommonElements.Core.Request;
using CommonElements.Core.Response;
using CommonElements.Errors;
using CommonElements.Models;
using CommonElements.Requests.Associations;

namespace CommonElements.Api;

public sealed class Associations
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal Associations(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// Everything on public record about an association’s physical buildings, joined…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsBuildingSafetyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsBuildingSafetyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Everything on public record about an association’s physical buildings, joined into one call: Florida SIRS filings, county milestone/recertification rolls, elevator certificates, pool inspections, parcel building characteristics, and HUD FHA condo approval. The structural sibling of the risk endpoint, which reports county-level FEMA hazard instead.
    /// <list type="bullet">
    ///   <item><description>Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only, SIRS is Florida condo, HUD FHA is national. Branch on has_data and layer_counts. An absent record means nothing was filed with a source we ingest, not that the association is compliant.</description></item>
    ///   <item><description>Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for brevity; live responses carry the rows.</description></item>
    ///   <item><description>Reference data only, not a structural determination. Confirm anything load-bearing with a licensed engineer.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsBuildingSafetyResponse> AssociationsBuildingSafety(AssociationsBuildingSafetyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/building-safety"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsBuildingSafetyResponse>(),
            AssociationsBuildingSafetyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Building footprint, roof/facade area estimates, floor count, and recorded…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsBuildingsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsBuildingsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Building footprint, roof/facade area estimates, floor count, and recorded structural facts (measured stories, year built, FL Ch. 553 milestone relevance) for an association, derived from mapped building outlines and county parcel rolls.
    /// <list type="bullet">
    ///   <item><description>Requires the "valuations" scope, not "associations" — the one endpoint in this group that does.</description></item>
    ///   <item><description>Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse mapping, not a small property. Recorded structural facts (stories, year_built, milestone_inspection_relevant) are Florida-only today.</description></item>
    ///   <item><description>Reference data only. Confirm anything load-bearing with a licensed engineer.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsBuildingsResponse> AssociationsBuildings(AssociationsBuildingsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/buildings"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsBuildingsResponse>(),
            AssociationsBuildingsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Resolve a property address to the association that governs it
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsByAddressResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsByAddressError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Resolve a property address to the association that governs it. Dedicated parcel-backed contract for a book of property addresses. /associations/match and /lookup also route a street-shaped q through this same resolve path so an address is never scored as a name.
    /// <list type="bullet">
    ///   <item><description>Coverage is real but not complete everywhere: this only returns a hit where a parcel has already been deterministically linked to an association. An empty result includes a hint pointing at /associations/match as a name-based fallback. It does not mean the property has no association, only that we do not have the link yet.</description></item>
    ///   <item><description>Nothing here is a guess made at request time. A result is always a parcel a matcher already linked to an organization, never a fuzzy score computed on the fly — which is what makes /match the wrong tool for this and this the wrong tool for a bare name.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsByAddressResponse> AssociationsByAddress(AssociationsByAddressRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/by-address"),
            [],
            [new Param("address", request.Address), new Param("zip", request.Zip), new Param("limit", request.Limit)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsByAddressResponse>(),
            AssociationsByAddressError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The core record for one association: identity, location, registration status…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsDetailError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The core record for one association: identity, location, registration status, and management-firm-of-record, in one call. The starting point once you have an id from lookup, match, or nearby.
    /// </remarks>
    public Task<ApiV1AssociationsResponse> AssociationsDetail(AssociationsDetailRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsResponse>(),
            AssociationsDetailError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Browse and filter community associations by state, county, subtype or…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsLookupResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsLookupError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Browse and filter community associations by state, county, subtype or registration number. For a name, <c>q</c> is a literal SUBSTRING filter: it matches only when your text appears verbatim in the filed corporate name, so "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium Association, Inc.". If you are reconciling names from your own system, use /api/v1/associations/match instead. If <c>q</c> is a street address, the request is resolved against linked parcels (same path as /associations/by-address) rather than as a name substring. Use lookup when you hold an exact key: a registration number, or a real substring of the filed name.
    /// <para>
    /// <b>Plan:</b> Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// </remarks>
    public Task<ApiV1AssociationsLookupResponse> AssociationsLookup(AssociationsLookupRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/lookup"),
            [],
            [
                new Param("q", request.Q),
                new Param("state", request.State),
                new Param("subtype", request.Subtype),
                new Param("county", request.County),
                new Param("registration_number", request.RegistrationNumber),
                new Param("limit", request.Limit),
                new Param("offset", request.Offset),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsLookupResponse>(),
            AssociationsLookupError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Who manages this association
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsManagementResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsManagementError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Who manages this association. <c>best</c> is the strongest management company on file and <c>sources</c> is every public-record source that names one (state condo and HOA filings, management certificates, CAM licensing records, registered agents), best first. The public association page and data.commonelements.com read the same rows. Any management relationship confirmed on the platform itself comes back separately.
    /// <list type="bullet">
    ///   <item><description>Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of Florida associations and about a tenth nationally have a management company on file. Outside those states an empty result says nothing about whether the association is managed.</description></item>
    ///   <item><description>Treat <c>inferred: true</c> as likely, not as fact. Those rows come from a match we made (a licensed firm's office address or email domain), not from a filing that names the firm.</description></item>
    ///   <item><description>The public-record rows and confirmed_relationships can disagree, and that is meaningful: sources reflect the filings, confirmed_relationships reflects what the platform's own users have confirmed. Treat <c>best</c> as the source of record when they differ.</description></item>
    ///   <item><description>Both empty means no manager is on record at all, which for a professionally-managed association usually means self-managed or an unfiled change.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsManagementResponse> AssociationsManagement(AssociationsManagementRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/management"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsManagementResponse>(),
            AssociationsManagementError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Fuzzy name matching for entity resolution: given a messy association name from…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsMatchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsMatchError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Fuzzy name matching for entity resolution: given a messy association name from your own system, get back the best-matching Common Elements records with a similarity score. Use this to reconcile a book of business against the directory, where an exact-string lookup would miss "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY ASSOCIATION, INC.". If <c>q</c> is a street address (house number, city, state, ZIP), the request is resolved against linked parcels instead of names, the same path as /associations/by-address. Name-scoring an address attaches the wrong community.
    /// <list type="bullet">
    ///   <item><description>Similarity is trigram-based, so word order matters less than shared character runs. A score above roughly 0.45 is usually a confident match; between 0.25 and 0.45, review before merging.</description></item>
    ///   <item><description>If q looks like a street address, the response includes resolved_via: "address" and match_confidence of exact or building. Those rows are parcel links, not name guesses. An empty list means we do not have that address linked yet. Address-shaped q never falls through to name matching.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsMatchResponse> AssociationsMatch(AssociationsMatchRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/match"),
            [],
            [
                new Param("q", request.Q),
                new Param("state", request.State),
                new Param("county", request.County),
                new Param("min_similarity", request.MinSimilarity),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsMatchResponse>(),
            AssociationsMatchError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Find associations within a radius of a coordinate, sorted nearest first
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsNearbyResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsNearbyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Find associations within a radius of a coordinate, sorted nearest first. Built for "what communities are around this property" workflows: territory planning, route density for a service vendor, or comparable-community selection.
    /// <para>
    /// <b>Plan:</b> Free keys: up to 50 rows per request; paid tiers raise the cap.
    /// </para>
    /// <list type="bullet">
    ///   <item><description>Only associations with recorded coordinates are searchable here. Coverage of geocoded records varies by state, so an empty result is not proof no association exists at that location.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsNearbyResponse> AssociationsNearby(AssociationsNearbyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/nearby"),
            [],
            [
                new Param("lat", request.Lat),
                new Param("lng", request.Lng),
                new Param("radius_km", request.RadiusKm),
                new Param("subtype", request.Subtype),
                new Param("limit", request.Limit),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsNearbyResponse>(),
            AssociationsNearbyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The current board/officer roster on file for an association, from state officer…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsOfficersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsOfficersError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The current board/officer roster on file for an association, from state officer filings. Coverage is strongest in the eight states with published officer rolls. Board-turnover events on the change feed come from diffing successive snapshots of this roster, so they currently exist only for the states that have had more than one snapshot.
    /// <list type="bullet">
    ///   <item><description>This is the current roster only. For board history over time (who served when, and each turnover as an event), use data.commonelements.com or the change feed's board_turnover / officer_* events.</description></item>
    ///   <item><description>An empty array means no officer filing is on record for this association, not necessarily that the board has vacancies.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsOfficersResponse> AssociationsOfficers(AssociationsOfficersRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/officers"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsOfficersResponse>(),
            AssociationsOfficersError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Retrieve flood zone, reserve-study health, and geographic risk signals for a…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsRiskResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsRiskError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve flood zone, reserve-study health, and geographic risk signals for a specific association. Useful for underwriting, due diligence, and loan origination workflows.
    /// </remarks>
    public Task<ApiV1AssociationsRiskResponse> AssociationsRisk(AssociationsRiskRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/risk"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsRiskResponse>(),
            AssociationsRiskError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// The vendors and service providers an association is on record working with…
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV1AssociationsVendorsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="AssociationsVendorsError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// The vendors and service providers an association is on record working with, from confirmed relationship edges in the Common Elements graph. Answers "who already services this community" before you bid against them or refer into them.
    /// <list type="bullet">
    ///   <item><description>Only confirmed, active relationships appear. An empty array means no vendor edge is recorded, not that the association self-performs the work.</description></item>
    /// </list>
    /// </remarks>
    public Task<ApiV1AssociationsVendorsResponse> AssociationsVendors(AssociationsVendorsRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v1/associations/{id}/vendors"),
            [new TemplateParam("id", request.Id)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV1AssociationsVendorsResponse>(),
            AssociationsVendorsError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
