using System;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using DidLogic.Core;
using DidLogic.Core.Exceptions;
using DidLogic.Core.Models;
using DidLogic.Core.Request;
using DidLogic.Core.Response;
using DidLogic.Errors;
using DidLogic.Models;
using DidLogic.Requests.NumbersInventory;

namespace DidLogic.Api;

public sealed class NumbersInventory
{
    private readonly RawClient _rawClient;
    private readonly Server _server;
    private readonly AuthSchemes _auth;

    internal NumbersInventory(RawClient rawClient, Server server, AuthSchemes auth)
    {
        _rawClient = rawClient;
        _server = server;
        _auth = auth;
    }

    /// <summary>
    /// List numbers by city
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersCountriesCitiesDidsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersCountriesCitiesDidsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve paginated list of available DID numbers in a specific city.
    /// <para>
    /// <b>Important notes:</b>
    /// - For countries without regions (UK, Netherlands, etc.)
    /// - Results are paginated (default 25 per page)
    /// - Includes full pricing and feature details for each number
    /// - Use for countries where regions are not applicable
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Displaying available numbers after city selection
    /// - Browsing DID inventory by location
    /// - Non-US/Canada purchase flows
    /// </para>
    /// <para>
    /// <c>dids.dids[].id</c> feeds numbers_purchase_create (<c>id_in</c>). <c>dids.dids[].number</c> feeds
    /// numbers_purchase_create (<c>did_numbers</c>). See also: numbers_search_show.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersCountriesCitiesDidsResponse> NumbersCountriesCitiesDidsIndex(NumbersCountriesCitiesDidsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/countries/{country_id}/cities/{city_id}/dids"),
            [new TemplateParam("country_id", request.CountryId), new TemplateParam("city_id", request.CityId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersCountriesCitiesDidsResponse>(),
            NumbersCountriesCitiesDidsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List cities
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersCountriesCitiesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersCountriesCitiesIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of cities within a country where DID numbers are available.
    /// <para>
    /// <b>Important notes:</b>
    /// - For a country with <c>has_provinces_or_states</c>, numbers_search_show narrows to one state by its <c>region_id</c> from numbers_countries_regions_index
    /// - Each city includes count of available DIDs
    /// - Cities are returned with area codes
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Building city selection for countries without states
    /// - Checking DID availability by city
    /// - Displaying available locations to users
    /// </para>
    /// <para>
    /// <c>cities[].id</c> feeds numbers_countries_cities_dids_index and numbers_search_show (<c>city_id</c>).
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersCountriesCitiesResponse> NumbersCountriesCitiesIndex(NumbersCountriesCitiesIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/countries/{country_id}/cities"),
            [new TemplateParam("country_id", request.CountryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersCountriesCitiesResponse>(),
            NumbersCountriesCitiesIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List countries
    /// </summary>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersCountriesResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersCountriesIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of all countries where DID numbers are available.
    /// <para>
    /// <b>When to use:</b>
    /// - Building country selection interface
    /// - Checking number availability by country
    /// - Starting the DID purchase flow
    /// </para>
    /// <para>
    /// <c>countries[].id</c> feeds numbers_countries_cities_index, numbers_countries_regions_index,
    /// numbers_countries_locations_index and numbers_countries_cities_dids_index (<c>country_id</c>).
    /// <c>countries[].name</c> feeds numbers_search_show (<c>country_name_contains</c>). A country with
    /// <c>has_provinces_or_states</c> true lists its states in numbers_countries_regions_index.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersCountriesResponse> NumbersCountriesIndex(RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/countries"),
            [],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersCountriesResponse>(),
            NumbersCountriesIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search locations by prefix
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersCountriesLocationsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersCountriesLocationsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Search for locations (cities) that have DID numbers starting with a specific prefix.
    /// <para>
    /// <b>Important notes:</b>
    /// - Useful for finding locations with specific area codes
    /// - Prefix can be partial number (e.g., "212" for NYC area code)
    /// - Returns combined location information (country, state, city)
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Implementing "vanity number" search by prefix
    /// - Finding locations with specific area codes
    /// - Reverse lookup of number to location
    /// </para>
    /// <para>
    /// <c>locations[].city_id</c> feeds numbers_countries_cities_dids_index and numbers_search_show
    /// (<c>city_id</c>). <c>locations[].state_id</c> feeds numbers_search_show (<c>region_id</c>).
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersCountriesLocationsResponse> NumbersCountriesLocationsIndex(NumbersCountriesLocationsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/countries/{country_id}/locations"),
            [new TemplateParam("country_id", request.CountryId)],
            [new Param("prefix", request.Prefix), new Param("sms_enabled", request.SmsEnabled)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersCountriesLocationsResponse>(),
            NumbersCountriesLocationsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List NANP regions
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersCountriesRegionsResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersCountriesRegionsIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).
    /// <para>
    /// <b>Important notes:</b>
    /// - Only applicable for countries with <c>has_provinces_or_states: true</c>
    /// - Returns 404 for countries without regional divisions
    /// - A state's numbers are listed by numbers_search_show with the state's <c>region_id</c>
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Building state/province selection for US, Canada, etc.
    /// - Filtering DID search by region
    /// </para>
    /// <para>
    /// <c>regions[].id</c> feeds numbers_search_show (<c>region_id</c>). <c>regions[].name</c> feeds
    /// numbers_search_show (<c>state_name_contains</c>, United States only).
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersCountriesRegionsResponse> NumbersCountriesRegionsIndex(NumbersCountriesRegionsIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/countries/{country_id}/regions"),
            [new TemplateParam("country_id", request.CountryId)],
            [],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersCountriesRegionsResponse>(),
            NumbersCountriesRegionsIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// List purchased numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersIndexError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Retrieve a list of DID numbers purchased by the authenticated user.
    /// <para>
    /// <b>Important notes:</b>
    /// - Returns only active numbers by default
    /// - Use <c>show_all=true</c> to include numbers pending document approval
    /// - Includes service information (SMS, etc.)
    /// - Shows current status of each number
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Displaying user's number inventory
    /// - Checking number status
    /// - Listing numbers for configuration
    /// - Dashboard display
    /// </para>
    /// <para>
    /// <c>dids[].id</c> feeds numbers_purchase_update and numbers_purchase_destroy (<c>id</c>, <c>id_in[]</c>).
    /// <c>dids[].number</c> feeds numbers_purchase_destroy (<c>did_numbers[]</c>). <c>dids[].id</c> feeds
    /// purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
    /// purchases_destinations_destroy (<c>purchase_id</c>, which takes the number too). <c>dids[].identity_id</c>
    /// feeds identities_index and numbers_purchase_update (<c>ids</c>, <c>identity_id</c>). See also: purchases_index.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersResponse> NumbersIndex(NumbersIndexRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers"),
            [],
            [new Param("show_all", request.ShowAll)],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersResponse>(),
            NumbersIndexError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Purchase numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersPurchaseResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersPurchaseCreateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Purchase one or more DID numbers with identity document association.
    /// <para>
    /// <b>Important notes:</b>
    /// - Can purchase multiple numbers in a single request
    /// - Identities must contain required documents for the number's country
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Purchasing numbers with document verification
    /// - Bulk number purchase with identity association
    /// </para>
    /// <para>
    /// <c>purchase.purchases[].id</c> feeds numbers_purchase_update and numbers_purchase_destroy (<c>id</c>, <c>id_in[]</c>).
    /// <c>purchase.purchases[].id</c> feeds purchases_destinations_index and purchases_destinations_create
    /// (<c>purchase_id</c>). <c>purchase.purchases[].number</c> feeds numbers_purchase_destroy (<c>did_numbers[]</c>).
    /// See also: numbers_index.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersPurchaseResponse> NumbersPurchaseCreate(NumbersPurchaseCreateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/purchase"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Post,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2NumbersPurchaseResponse>(),
            NumbersPurchaseCreateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Delete purchased numbers
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersPurchaseResponse3"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersPurchaseDestroyError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Cancel purchase of DID numbers and return them to inventory.
    /// <para>
    /// <b>Important notes:</b>
    /// - Can cancel multiple numbers in a single request
    /// - Numbers are returned to seller's inventory
    /// - Optional quarantine period before number becomes available again
    /// - Refund policy depends on service terms
    /// - A number still inside its commitment term is charged the early-return
    /// fee for the remaining months, the same fee as in the portal
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - User wants to cancel number purchase
    /// - Returning numbers after unsuccessful activation
    /// - Bulk number release
    /// </para>
    /// <para>
    /// <b>Partial cancellation:</b> Numbers not present in your cancelable inventory
    /// are skipped (not cancelled) and reported in the <c>warnings</c> array with code
    /// <c>not_in_inventory</c>. If none of the requested numbers are cancelable, the
    /// request returns <c>422</c>.
    /// </para>
    /// <para>
    /// A number that is cancelable but whose cancellation fails is reported with
    /// code <c>cancellation_failed</c> and is omitted from <c>dids</c>; it remains in your
    /// inventory and is still billable. A request where every number fails this
    /// way returns <c>200</c> with an empty <c>dids</c> array.
    /// </para>
    /// <para>
    /// A number whose early-return fee your balance does not cover is not
    /// cancelled and not charged. It is reported with code <c>insufficient_funds</c>,
    /// is omitted from <c>dids</c>, and remains in your inventory.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersPurchaseResponse3> NumbersPurchaseDestroy(NumbersPurchaseDestroyRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/purchase"),
            [],
            [new Param("id_in[]", request.IdIn), new Param("did_numbers[]", request.DidNumbers)],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Delete,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersPurchaseResponse3>(),
            NumbersPurchaseDestroyError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Update purchased number settings
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersPurchaseResponse2"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersPurchaseUpdateError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Update a purchased DID number's identity association or call recording setting.
    /// <para>
    /// <b>Important notes:</b>
    /// - New identity must contain required documents for the number
    /// - <c>call_recording_enabled</c> requires the account-level "Allow call recording" setting to be on; returns 422 otherwise
    /// </para>
    /// <para>
    /// <b>Other normalizations applied silently on number purchase/update:</b>
    /// - Webphone destinations (<c>transport=10</c>) are resolved server-side.
    /// - Boolean-like fields are coerced to booleans.
    /// - Destination strings are normalized.
    /// - SMS delivery-receipt (<c>dlr</c>) and Sender-ID settings follow account
    /// defaults when omitted.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersPurchaseResponse2> NumbersPurchaseUpdate(NumbersPurchaseUpdateRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/purchase"),
            [],
            [],
            [new HeaderParam("Idempotency-Key", Guid.NewGuid())],
            HttpMethod.Put,
            JsonRequest.Create(request.Body),
            JsonResponse.Create<ApiV2NumbersPurchaseResponse2>(),
            NumbersPurchaseUpdateError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);

    /// <summary>
    /// Search numbers (advanced)
    /// </summary>
    /// <param name="request">The operation's inputs</param>
    /// <param name="requestOptions">Per-request options, such as an overriding log level for this call</param>
    /// <param name="cancellationToken">Cancellation token</param>
    /// <returns>A <see cref="Task{TResult}"/> of <see cref="ApiV2NumbersSearchResponse"/> instance.</returns>
    /// <exception cref="ApiException{TError}"> of <see cref="NumbersSearchShowError"/> when the server returns an error response.</exception>
    /// <remarks>
    /// Advanced search for available DID numbers with multiple filter criteria.
    /// <para>
    /// <b>Important notes:</b>
    /// - Supports pagination (page, per_page parameters)
    /// - All filter parameters are optional
    /// - Combine multiple filters for precise results
    /// - Use for complex search scenarios beyond location-based browsing
    /// </para>
    /// <para>
    /// <b>When to use:</b>
    /// - Implementing vanity number search
    /// - Finding numbers with specific features
    /// - Custom number selection interfaces
    /// - Bulk number lookup
    /// </para>
    /// <para>
    /// <c>dids.dids[].id</c> feeds numbers_purchase_create (<c>id_in</c>). <c>dids.dids[].number</c> feeds
    /// numbers_purchase_create (<c>did_numbers</c>). See also: numbers_countries_cities_dids_index.
    /// </para>
    /// </remarks>
    public Task<ApiV2NumbersSearchResponse> NumbersSearchShow(NumbersSearchShowRequest request,
        RequestOptions? requestOptions = null,
        CancellationToken cancellationToken = default) =>
        _rawClient.Execute(
            _server.Default("/api/v2/numbers/search"),
            [],
            [
                new Param("id_in", request.IdIn),
                new Param("number_in", request.NumberIn),
                new Param("number_contains", request.NumberContains),
                new Param("begins_with", request.BeginsWith),
                new Param("ends_with", request.EndsWith),
                new Param("city_name_contains", request.CityNameContains),
                new Param("country_name_contains", request.CountryNameContains),
                new Param("state_name_contains", request.StateNameContains),
                new Param("sms_enabled", request.SmsEnabled),
                new Param("no_local_cli", request.NoLocalCli),
                new Param("vendor_id", request.VendorId),
                new Param("city_id", request.CityId),
                new Param("region_id", request.RegionId),
                new Param("require_docs", request.RequireDocs),
                new Param("commitment_months", request.CommitmentMonths),
                new Param("cheap_sorting", request.CheapSorting),
                new Param("page", request.Page),
                new Param("per_page", request.PerPage),
            ],
            [],
            HttpMethod.Get,
            EmptyBody.Instance,
            JsonResponse.Create<ApiV2NumbersSearchResponse>(),
            NumbersSearchShowError.Response,
            _auth.BearerAuth,
            requestOptions,
            cancellationToken);
}
