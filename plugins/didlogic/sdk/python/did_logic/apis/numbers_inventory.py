from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.numbers_countries_cities_dids_index_error import (
    NumbersCountriesCitiesDidsIndexErrorBody,
    numbers_countries_cities_dids_index_error_mapper,
)
from ..errors.numbers_countries_cities_index_error import (
    NumbersCountriesCitiesIndexErrorBody,
    numbers_countries_cities_index_error_mapper,
)
from ..errors.numbers_countries_index_error import NumbersCountriesIndexErrorBody, numbers_countries_index_error_mapper
from ..errors.numbers_countries_locations_index_error import (
    NumbersCountriesLocationsIndexErrorBody,
    numbers_countries_locations_index_error_mapper,
)
from ..errors.numbers_countries_regions_index_error import (
    NumbersCountriesRegionsIndexErrorBody,
    numbers_countries_regions_index_error_mapper,
)
from ..errors.numbers_index_error import NumbersIndexErrorBody, numbers_index_error_mapper
from ..errors.numbers_purchase_create_error import NumbersPurchaseCreateErrorBody, numbers_purchase_create_error_mapper
from ..errors.numbers_purchase_destroy_error import (
    NumbersPurchaseDestroyErrorBody,
    numbers_purchase_destroy_error_mapper,
)
from ..errors.numbers_purchase_update_error import NumbersPurchaseUpdateErrorBody, numbers_purchase_update_error_mapper
from ..errors.numbers_search_show_error import NumbersSearchShowErrorBody, numbers_search_show_error_mapper
from ..models.api_v2_numbers_countries_cities_dids_response import ApiV2NumbersCountriesCitiesDidsResponse
from ..models.api_v2_numbers_countries_cities_response import ApiV2NumbersCountriesCitiesResponse
from ..models.api_v2_numbers_countries_locations_response import ApiV2NumbersCountriesLocationsResponse
from ..models.api_v2_numbers_countries_regions_response import ApiV2NumbersCountriesRegionsResponse
from ..models.api_v2_numbers_countries_response import ApiV2NumbersCountriesResponse
from ..models.api_v2_numbers_purchase_request import ApiV2NumbersPurchaseRequest, ApiV2NumbersPurchaseRequestDict
from ..models.api_v2_numbers_purchase_request1 import ApiV2NumbersPurchaseRequest1, ApiV2NumbersPurchaseRequest1Dict
from ..models.api_v2_numbers_purchase_response import ApiV2NumbersPurchaseResponse
from ..models.api_v2_numbers_purchase_response2 import ApiV2NumbersPurchaseResponse2
from ..models.api_v2_numbers_purchase_response3 import ApiV2NumbersPurchaseResponse3
from ..models.api_v2_numbers_response import ApiV2NumbersResponse
from ..models.api_v2_numbers_search_response import ApiV2NumbersSearchResponse
from ..server.server import Server


class NumbersInventory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = NumbersInventoryWithRawResponse(client, server, auth)

    def numbers_countries_cities_dids_index(
        self, country_id: int, city_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesCitiesDidsResponse:
        """Retrieve paginated list of available DID numbers in a specific city.

        **Important notes:**
        - For countries without regions (UK, Netherlands, etc.)
        - Results are paginated (default 25 per page)
        - Includes full pricing and feature details for each number
        - Use for countries where regions are not applicable

        **When to use:**
        - Displaying available numbers after city selection
        - Browsing DID inventory by location
        - Non-US/Canada purchase flows

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_search_show.

        Args:
            country_id: Country id from numbers_countries_index
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of available dids

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesCitiesDids401Error1 | ApiV2NumbersCountriesCitiesDids403Error1 |
                ApiV2NumbersCountriesCitiesDids404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_countries_cities_dids_index(
                country_id, city_id, request_options=request_options
            ),
        )

    def numbers_countries_cities_index(
        self, country_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesCitiesResponse:
        """Retrieve a list of cities within a country where DID numbers are available.

        **Important notes:**
        - For a country with ``has_provinces_or_states``, numbers_search_show narrows to one state by its ``region_id``
            from numbers_countries_regions_index
        - Each city includes count of available DIDs
        - Cities are returned with area codes

        **When to use:**
        - Building city selection for countries without states
        - Checking DID availability by city
        - Displaying available locations to users

        ``cities[].id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of cities

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesCities401Error1 | ApiV2NumbersCountriesCities403Error1 |
                ApiV2NumbersCountriesCities404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_countries_cities_index(country_id, request_options=request_options)
        )

    def numbers_countries_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesResponse:
        """Retrieve a list of all countries where DID numbers are available.

        **When to use:**
        - Building country selection interface
        - Checking number availability by country
        - Starting the DID purchase flow

        ``countries[].id`` feeds numbers_countries_cities_index, numbers_countries_regions_index,
        numbers_countries_locations_index and numbers_countries_cities_dids_index (``country_id``). ``countries[].name``
        feeds numbers_search_show (``country_name_contains``). A country with ``has_provinces_or_states`` true lists its
        states in numbers_countries_regions_index.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of available countries

        Raises:
            ApiError: returns unauthorized returns forbidden ``error`` is ``ApiV2NumbersCountries401Error1 |
                ApiV2NumbersCountries403Error1 | RawError``."""
        return unwrap(self._with_raw_response.numbers_countries_index(request_options=request_options))

    def numbers_countries_locations_index(
        self,
        country_id: int,
        prefix: int,
        *,
        sms_enabled: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersCountriesLocationsResponse:
        """Search for locations (cities) that have DID numbers starting with a specific prefix.

        **Important notes:**
        - Useful for finding locations with specific area codes
        - Prefix can be partial number (e.g., "212" for NYC area code)
        - Returns combined location information (country, state, city)

        **When to use:**
        - Implementing "vanity number" search by prefix
        - Finding locations with specific area codes
        - Reverse lookup of number to location

        ``locations[].city_id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).
        ``locations[].state_id`` feeds numbers_search_show (``region_id``).

        Args:
            country_id: Country id from numbers_countries_index
            prefix: Number prefix to search for
            sms_enabled: Filter locations by SMS capability
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of locations

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesLocations401Error1 | ApiV2NumbersCountriesLocations403Error1 |
                ApiV2NumbersCountriesLocations404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_countries_locations_index(
                country_id, prefix, sms_enabled=sms_enabled, request_options=request_options
            ),
        )

    def numbers_countries_regions_index(
        self, country_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesRegionsResponse:
        """Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).

        **Important notes:**
        - Only applicable for countries with ``has_provinces_or_states: true``
        - Returns 404 for countries without regional divisions
        - A state's numbers are listed by numbers_search_show with the state's ``region_id``

        **When to use:**
        - Building state/province selection for US, Canada, etc.
        - Filtering DID search by region

        ``regions[].id`` feeds numbers_search_show (``region_id``). ``regions[].name`` feeds numbers_search_show
        (``state_name_contains``, United States only).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of regions

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesRegions401Error1 | ApiV2NumbersCountriesRegions403Error1 |
                ApiV2NumbersCountriesRegions404Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_countries_regions_index(country_id, request_options=request_options)
        )

    def numbers_index(
        self, *, show_all: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2NumbersResponse:
        """Retrieve a list of DID numbers purchased by the authenticated user.

        **Important notes:**
        - Returns only active numbers by default
        - Use ``show_all=true`` to include numbers pending document approval
        - Includes service information (SMS, etc.)
        - Shows current status of each number

        **When to use:**
        - Displaying user's number inventory
        - Checking number status
        - Listing numbers for configuration
        - Dashboard display

        ``dids[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``dids[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). ``dids[].id`` feeds
        purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
        purchases_destinations_destroy (``purchase_id``, which takes the number too). ``dids[].identity_id`` feeds
        identities_index and numbers_purchase_update (``ids``, ``identity_id``). See also: purchases_index.

        Args:
            show_all: Include numbers pending documentation approval
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns DIDs

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2Numbers401Error1 | RawError``."""
        return unwrap(self._with_raw_response.numbers_index(show_all=show_all, request_options=request_options))

    def numbers_purchase_create(
        self,
        body: ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersPurchaseResponse:
        """Purchase one or more DID numbers with identity document association.

        **Important notes:**
        - Can purchase multiple numbers in a single request
        - Identities must contain required documents for the number's country

        **When to use:**
        - Purchasing numbers with document verification
        - Bulk number purchase with identity association

        ``purchase.purchases[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``purchase.purchases[].id`` feeds purchases_destinations_index and purchases_destinations_create
        (``purchase_id``). ``purchase.purchases[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). See also:
        numbers_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            purchase DIDs and link documents attached to identity

        Raises:
            ApiError: returns bad request returns unauthorized returns errors for unprocessed entities ``error`` is
                ``ApiV2NumbersPurchase400Error1 | ApiV2NumbersPurchase401Error1 | ApiV2NumbersPurchaseResponse11 |
                RawError``."""
        return unwrap(self._with_raw_response.numbers_purchase_create(body, request_options=request_options))

    def numbers_purchase_destroy(
        self,
        *,
        id_in: list[int] | None = None,
        did_numbers: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersPurchaseResponse3:
        """Cancel purchase of DID numbers and return them to inventory.

        **Important notes:**
        - Can cancel multiple numbers in a single request
        - Numbers are returned to seller's inventory
        - Optional quarantine period before number becomes available again
        - Refund policy depends on service terms
        - A number still inside its commitment term is charged the early-return
        fee for the remaining months, the same fee as in the portal

        **When to use:**
        - User wants to cancel number purchase
        - Returning numbers after unsuccessful activation
        - Bulk number release

        **Partial cancellation:** Numbers not present in your cancelable inventory are skipped (not cancelled) and
        reported in the ``warnings`` array with code ``not_in_inventory``. If none of the requested numbers are
        cancelable, the request returns ``422``.

        A number that is cancelable but whose cancellation fails is reported with code ``cancellation_failed`` and is
        omitted from ``dids``; it remains in your inventory and is still billable. A request where every number fails
        this way returns ``200`` with an empty ``dids`` array.

        A number whose early-return fee your balance does not cover is not cancelled and not charged. It is reported
        with code ``insufficient_funds``, is omitted from ``dids``, and remains in your inventory.

        Args:
            id_in: Array of DID IDs to cancel, from numbers_index
            did_numbers: Array of DID numbers to cancel, from numbers_index, purchases_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            cancels owned numbers and reports skipped ones as warnings

        Raises:
            ApiError: returns unauthorized returns forbidden returns unprocessable entity ``error`` is
                ``ApiV2NumbersPurchase401Error1 | ApiV2NumbersPurchase403Error1 | Error | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_purchase_destroy(
                id_in=id_in, did_numbers=did_numbers, request_options=request_options
            ),
        )

    def numbers_purchase_update(
        self,
        body: ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersPurchaseResponse2:
        """Update a purchased DID number's identity association or call recording setting.

        **Important notes:**
        - New identity must contain required documents for the number
        - ``call_recording_enabled`` requires the account-level "Allow call recording" setting to be on; returns 422
            otherwise

        **Other normalizations applied silently on number purchase/update:**
        - Webphone destinations (``transport=10``) are resolved server-side.
        - Boolean-like fields are coerced to booleans.
        - Destination strings are normalized.
        - SMS delivery-receipt (``dlr``) and Sender-ID settings follow account
        defaults when omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            updates purchased number

        Raises:
            ApiError: returns unauthorized returns unprocessable entity with validation error The server could not
                complete the request. Retry later or contact support if the problem persists. ``error`` is
                ``ApiV2NumbersPurchase401Error1 | Error | RawError``."""
        return unwrap(self._with_raw_response.numbers_purchase_update(body, request_options=request_options))

    def numbers_search_show(
        self,
        *,
        id_in: int | None = None,
        number_in: str | None = None,
        number_contains: int | None = None,
        begins_with: int | None = None,
        ends_with: int | None = None,
        city_name_contains: str | None = None,
        country_name_contains: str | None = None,
        state_name_contains: str | None = None,
        sms_enabled: str | None = None,
        no_local_cli: str | None = None,
        vendor_id: int | None = None,
        city_id: int | None = None,
        region_id: int | None = None,
        require_docs: int | None = None,
        commitment_months: int | None = None,
        cheap_sorting: str | None = None,
        page: int | None = 1,
        per_page: int | None = 25,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersSearchResponse:
        """Advanced search for available DID numbers with multiple filter criteria.

        **Important notes:**
        - Supports pagination (page, per_page parameters)
        - All filter parameters are optional
        - Combine multiple filters for precise results
        - Use for complex search scenarios beyond location-based browsing

        **When to use:**
        - Implementing vanity number search
        - Finding numbers with specific features
        - Custom number selection interfaces
        - Bulk number lookup

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_countries_cities_dids_index.

        Args:
            id_in: Search for specific DID IDs (comma-separated)
            number_in: Search for specific numbers (exact match, comma-separated)
            number_contains: Search for numbers containing this pattern
            begins_with: Search for numbers beginning with this pattern
            ends_with: Search for numbers ending with this pattern
            city_name_contains: Filter by city name (partial match)
            country_name_contains: Filter by country name (partial match), from numbers_countries_index
            state_name_contains: Filter by state/region name (partial match, US only), from
                numbers_countries_regions_index
            sms_enabled: Filter by SMS capability (true/false)
            no_local_cli: Filter by local caller ID capability (true/false)
            vendor_id: Filter by vendor ID (requires special permission)
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            region_id: Region id from numbers_countries_regions_index, numbers_countries_locations_index
            require_docs: Filter by document requirements
            commitment_months: Filter by commitment period in months
            cheap_sorting: Sort by price (activation + monthly fee) ascending
            page: Page number for pagination
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns search results

        Raises:
            ApiError: returns unauthorized returns forbidden ``error`` is ``ApiV2NumbersSearch401Error1 |
                ApiV2NumbersSearch403Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.numbers_search_show(
                id_in=id_in,
                number_in=number_in,
                number_contains=number_contains,
                begins_with=begins_with,
                ends_with=ends_with,
                city_name_contains=city_name_contains,
                country_name_contains=country_name_contains,
                state_name_contains=state_name_contains,
                sms_enabled=sms_enabled,
                no_local_cli=no_local_cli,
                vendor_id=vendor_id,
                city_id=city_id,
                region_id=region_id,
                require_docs=require_docs,
                commitment_months=commitment_months,
                cheap_sorting=cheap_sorting,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> NumbersInventoryWithRawResponse:
        return self._with_raw_response


class AsyncNumbersInventory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncNumbersInventoryWithRawResponse(client, server, auth)

    async def numbers_countries_cities_dids_index(
        self, country_id: int, city_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesCitiesDidsResponse:
        """Retrieve paginated list of available DID numbers in a specific city.

        **Important notes:**
        - For countries without regions (UK, Netherlands, etc.)
        - Results are paginated (default 25 per page)
        - Includes full pricing and feature details for each number
        - Use for countries where regions are not applicable

        **When to use:**
        - Displaying available numbers after city selection
        - Browsing DID inventory by location
        - Non-US/Canada purchase flows

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_search_show.

        Args:
            country_id: Country id from numbers_countries_index
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of available dids

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesCitiesDids401Error1 | ApiV2NumbersCountriesCitiesDids403Error1 |
                ApiV2NumbersCountriesCitiesDids404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_countries_cities_dids_index(
                country_id, city_id, request_options=request_options
            ),
        )

    async def numbers_countries_cities_index(
        self, country_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesCitiesResponse:
        """Retrieve a list of cities within a country where DID numbers are available.

        **Important notes:**
        - For a country with ``has_provinces_or_states``, numbers_search_show narrows to one state by its ``region_id``
            from numbers_countries_regions_index
        - Each city includes count of available DIDs
        - Cities are returned with area codes

        **When to use:**
        - Building city selection for countries without states
        - Checking DID availability by city
        - Displaying available locations to users

        ``cities[].id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of cities

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesCities401Error1 | ApiV2NumbersCountriesCities403Error1 |
                ApiV2NumbersCountriesCities404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_countries_cities_index(country_id, request_options=request_options)
        )

    async def numbers_countries_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesResponse:
        """Retrieve a list of all countries where DID numbers are available.

        **When to use:**
        - Building country selection interface
        - Checking number availability by country
        - Starting the DID purchase flow

        ``countries[].id`` feeds numbers_countries_cities_index, numbers_countries_regions_index,
        numbers_countries_locations_index and numbers_countries_cities_dids_index (``country_id``). ``countries[].name``
        feeds numbers_search_show (``country_name_contains``). A country with ``has_provinces_or_states`` true lists its
        states in numbers_countries_regions_index.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of available countries

        Raises:
            ApiError: returns unauthorized returns forbidden ``error`` is ``ApiV2NumbersCountries401Error1 |
                ApiV2NumbersCountries403Error1 | RawError``."""
        return unwrap(await self._with_raw_response.numbers_countries_index(request_options=request_options))

    async def numbers_countries_locations_index(
        self,
        country_id: int,
        prefix: int,
        *,
        sms_enabled: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersCountriesLocationsResponse:
        """Search for locations (cities) that have DID numbers starting with a specific prefix.

        **Important notes:**
        - Useful for finding locations with specific area codes
        - Prefix can be partial number (e.g., "212" for NYC area code)
        - Returns combined location information (country, state, city)

        **When to use:**
        - Implementing "vanity number" search by prefix
        - Finding locations with specific area codes
        - Reverse lookup of number to location

        ``locations[].city_id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).
        ``locations[].state_id`` feeds numbers_search_show (``region_id``).

        Args:
            country_id: Country id from numbers_countries_index
            prefix: Number prefix to search for
            sms_enabled: Filter locations by SMS capability
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of locations

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesLocations401Error1 | ApiV2NumbersCountriesLocations403Error1 |
                ApiV2NumbersCountriesLocations404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_countries_locations_index(
                country_id, prefix, sms_enabled=sms_enabled, request_options=request_options
            ),
        )

    async def numbers_countries_regions_index(
        self, country_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2NumbersCountriesRegionsResponse:
        """Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).

        **Important notes:**
        - Only applicable for countries with ``has_provinces_or_states: true``
        - Returns 404 for countries without regional divisions
        - A state's numbers are listed by numbers_search_show with the state's ``region_id``

        **When to use:**
        - Building state/province selection for US, Canada, etc.
        - Filtering DID search by region

        ``regions[].id`` feeds numbers_search_show (``region_id``). ``regions[].name`` feeds numbers_search_show
        (``state_name_contains``, United States only).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns list of regions

        Raises:
            ApiError: returns unauthorized returns forbidden returns not found ``error`` is
                ``ApiV2NumbersCountriesRegions401Error1 | ApiV2NumbersCountriesRegions403Error1 |
                ApiV2NumbersCountriesRegions404Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_countries_regions_index(country_id, request_options=request_options)
        )

    async def numbers_index(
        self, *, show_all: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2NumbersResponse:
        """Retrieve a list of DID numbers purchased by the authenticated user.

        **Important notes:**
        - Returns only active numbers by default
        - Use ``show_all=true`` to include numbers pending document approval
        - Includes service information (SMS, etc.)
        - Shows current status of each number

        **When to use:**
        - Displaying user's number inventory
        - Checking number status
        - Listing numbers for configuration
        - Dashboard display

        ``dids[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``dids[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). ``dids[].id`` feeds
        purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
        purchases_destinations_destroy (``purchase_id``, which takes the number too). ``dids[].identity_id`` feeds
        identities_index and numbers_purchase_update (``ids``, ``identity_id``). See also: purchases_index.

        Args:
            show_all: Include numbers pending documentation approval
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns DIDs

        Raises:
            ApiError: returns unauthorized ``error`` is ``ApiV2Numbers401Error1 | RawError``."""
        return unwrap(await self._with_raw_response.numbers_index(show_all=show_all, request_options=request_options))

    async def numbers_purchase_create(
        self,
        body: ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersPurchaseResponse:
        """Purchase one or more DID numbers with identity document association.

        **Important notes:**
        - Can purchase multiple numbers in a single request
        - Identities must contain required documents for the number's country

        **When to use:**
        - Purchasing numbers with document verification
        - Bulk number purchase with identity association

        ``purchase.purchases[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``purchase.purchases[].id`` feeds purchases_destinations_index and purchases_destinations_create
        (``purchase_id``). ``purchase.purchases[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). See also:
        numbers_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            purchase DIDs and link documents attached to identity

        Raises:
            ApiError: returns bad request returns unauthorized returns errors for unprocessed entities ``error`` is
                ``ApiV2NumbersPurchase400Error1 | ApiV2NumbersPurchase401Error1 | ApiV2NumbersPurchaseResponse11 |
                RawError``."""
        return unwrap(await self._with_raw_response.numbers_purchase_create(body, request_options=request_options))

    async def numbers_purchase_destroy(
        self,
        *,
        id_in: list[int] | None = None,
        did_numbers: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersPurchaseResponse3:
        """Cancel purchase of DID numbers and return them to inventory.

        **Important notes:**
        - Can cancel multiple numbers in a single request
        - Numbers are returned to seller's inventory
        - Optional quarantine period before number becomes available again
        - Refund policy depends on service terms
        - A number still inside its commitment term is charged the early-return
        fee for the remaining months, the same fee as in the portal

        **When to use:**
        - User wants to cancel number purchase
        - Returning numbers after unsuccessful activation
        - Bulk number release

        **Partial cancellation:** Numbers not present in your cancelable inventory are skipped (not cancelled) and
        reported in the ``warnings`` array with code ``not_in_inventory``. If none of the requested numbers are
        cancelable, the request returns ``422``.

        A number that is cancelable but whose cancellation fails is reported with code ``cancellation_failed`` and is
        omitted from ``dids``; it remains in your inventory and is still billable. A request where every number fails
        this way returns ``200`` with an empty ``dids`` array.

        A number whose early-return fee your balance does not cover is not cancelled and not charged. It is reported
        with code ``insufficient_funds``, is omitted from ``dids``, and remains in your inventory.

        Args:
            id_in: Array of DID IDs to cancel, from numbers_index
            did_numbers: Array of DID numbers to cancel, from numbers_index, purchases_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            cancels owned numbers and reports skipped ones as warnings

        Raises:
            ApiError: returns unauthorized returns forbidden returns unprocessable entity ``error`` is
                ``ApiV2NumbersPurchase401Error1 | ApiV2NumbersPurchase403Error1 | Error | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_purchase_destroy(
                id_in=id_in, did_numbers=did_numbers, request_options=request_options
            ),
        )

    async def numbers_purchase_update(
        self,
        body: ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersPurchaseResponse2:
        """Update a purchased DID number's identity association or call recording setting.

        **Important notes:**
        - New identity must contain required documents for the number
        - ``call_recording_enabled`` requires the account-level "Allow call recording" setting to be on; returns 422
            otherwise

        **Other normalizations applied silently on number purchase/update:**
        - Webphone destinations (``transport=10``) are resolved server-side.
        - Boolean-like fields are coerced to booleans.
        - Destination strings are normalized.
        - SMS delivery-receipt (``dlr``) and Sender-ID settings follow account
        defaults when omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            updates purchased number

        Raises:
            ApiError: returns unauthorized returns unprocessable entity with validation error The server could not
                complete the request. Retry later or contact support if the problem persists. ``error`` is
                ``ApiV2NumbersPurchase401Error1 | Error | RawError``."""
        return unwrap(await self._with_raw_response.numbers_purchase_update(body, request_options=request_options))

    async def numbers_search_show(
        self,
        *,
        id_in: int | None = None,
        number_in: str | None = None,
        number_contains: int | None = None,
        begins_with: int | None = None,
        ends_with: int | None = None,
        city_name_contains: str | None = None,
        country_name_contains: str | None = None,
        state_name_contains: str | None = None,
        sms_enabled: str | None = None,
        no_local_cli: str | None = None,
        vendor_id: int | None = None,
        city_id: int | None = None,
        region_id: int | None = None,
        require_docs: int | None = None,
        commitment_months: int | None = None,
        cheap_sorting: str | None = None,
        page: int | None = 1,
        per_page: int | None = 25,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2NumbersSearchResponse:
        """Advanced search for available DID numbers with multiple filter criteria.

        **Important notes:**
        - Supports pagination (page, per_page parameters)
        - All filter parameters are optional
        - Combine multiple filters for precise results
        - Use for complex search scenarios beyond location-based browsing

        **When to use:**
        - Implementing vanity number search
        - Finding numbers with specific features
        - Custom number selection interfaces
        - Bulk number lookup

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_countries_cities_dids_index.

        Args:
            id_in: Search for specific DID IDs (comma-separated)
            number_in: Search for specific numbers (exact match, comma-separated)
            number_contains: Search for numbers containing this pattern
            begins_with: Search for numbers beginning with this pattern
            ends_with: Search for numbers ending with this pattern
            city_name_contains: Filter by city name (partial match)
            country_name_contains: Filter by country name (partial match), from numbers_countries_index
            state_name_contains: Filter by state/region name (partial match, US only), from
                numbers_countries_regions_index
            sms_enabled: Filter by SMS capability (true/false)
            no_local_cli: Filter by local caller ID capability (true/false)
            vendor_id: Filter by vendor ID (requires special permission)
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            region_id: Region id from numbers_countries_regions_index, numbers_countries_locations_index
            require_docs: Filter by document requirements
            commitment_months: Filter by commitment period in months
            cheap_sorting: Sort by price (activation + monthly fee) ascending
            page: Page number for pagination
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            returns search results

        Raises:
            ApiError: returns unauthorized returns forbidden ``error`` is ``ApiV2NumbersSearch401Error1 |
                ApiV2NumbersSearch403Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.numbers_search_show(
                id_in=id_in,
                number_in=number_in,
                number_contains=number_contains,
                begins_with=begins_with,
                ends_with=ends_with,
                city_name_contains=city_name_contains,
                country_name_contains=country_name_contains,
                state_name_contains=state_name_contains,
                sms_enabled=sms_enabled,
                no_local_cli=no_local_cli,
                vendor_id=vendor_id,
                city_id=city_id,
                region_id=region_id,
                require_docs=require_docs,
                commitment_months=commitment_months,
                cheap_sorting=cheap_sorting,
                page=page,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncNumbersInventoryWithRawResponse:
        return self._with_raw_response


class NumbersInventoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def numbers_countries_cities_dids_index(
        self, country_id: int, city_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesCitiesDidsResponse, NumbersCountriesCitiesDidsIndexErrorBody]:
        """Retrieve paginated list of available DID numbers in a specific city.

        **Important notes:**
        - For countries without regions (UK, Netherlands, etc.)
        - Results are paginated (default 25 per page)
        - Includes full pricing and feature details for each number
        - Use for countries where regions are not applicable

        **When to use:**
        - Displaying available numbers after city selection
        - Browsing DID inventory by location
        - Non-US/Canada purchase flows

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_search_show.

        Args:
            country_id: Country id from numbers_countries_index
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/cities/{city_id}/dids"),
            path_params=[param[int]("country_id", country_id), param[int]("city_id", city_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersCountriesCitiesDidsResponse],
            error_mapper=numbers_countries_cities_dids_index_error_mapper,
            request_options=request_options,
        )

    def numbers_countries_cities_index(
        self, country_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesCitiesResponse, NumbersCountriesCitiesIndexErrorBody]:
        """Retrieve a list of cities within a country where DID numbers are available.

        **Important notes:**
        - For a country with ``has_provinces_or_states``, numbers_search_show narrows to one state by its ``region_id``
            from numbers_countries_regions_index
        - Each city includes count of available DIDs
        - Cities are returned with area codes

        **When to use:**
        - Building city selection for countries without states
        - Checking DID availability by city
        - Displaying available locations to users

        ``cities[].id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/cities"),
            path_params=[param[int]("country_id", country_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersCountriesCitiesResponse],
            error_mapper=numbers_countries_cities_index_error_mapper,
            request_options=request_options,
        )

    def numbers_countries_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesResponse, NumbersCountriesIndexErrorBody]:
        """Retrieve a list of all countries where DID numbers are available.

        **When to use:**
        - Building country selection interface
        - Checking number availability by country
        - Starting the DID purchase flow

        ``countries[].id`` feeds numbers_countries_cities_index, numbers_countries_regions_index,
        numbers_countries_locations_index and numbers_countries_cities_dids_index (``country_id``). ``countries[].name``
        feeds numbers_search_show (``country_name_contains``). A country with ``has_provinces_or_states`` true lists its
        states in numbers_countries_regions_index.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersCountriesResponse],
            error_mapper=numbers_countries_index_error_mapper,
            request_options=request_options,
        )

    def numbers_countries_locations_index(
        self,
        country_id: int,
        prefix: int,
        *,
        sms_enabled: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersCountriesLocationsResponse, NumbersCountriesLocationsIndexErrorBody]:
        """Search for locations (cities) that have DID numbers starting with a specific prefix.

        **Important notes:**
        - Useful for finding locations with specific area codes
        - Prefix can be partial number (e.g., "212" for NYC area code)
        - Returns combined location information (country, state, city)

        **When to use:**
        - Implementing "vanity number" search by prefix
        - Finding locations with specific area codes
        - Reverse lookup of number to location

        ``locations[].city_id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).
        ``locations[].state_id`` feeds numbers_search_show (``region_id``).

        Args:
            country_id: Country id from numbers_countries_index
            prefix: Number prefix to search for
            sms_enabled: Filter locations by SMS capability
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/locations"),
            path_params=[param[int]("country_id", country_id)],
            query_params=[param[int]("prefix", prefix), param[str | None]("sms_enabled", sms_enabled)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersCountriesLocationsResponse],
            error_mapper=numbers_countries_locations_index_error_mapper,
            request_options=request_options,
        )

    def numbers_countries_regions_index(
        self, country_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesRegionsResponse, NumbersCountriesRegionsIndexErrorBody]:
        """Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).

        **Important notes:**
        - Only applicable for countries with ``has_provinces_or_states: true``
        - Returns 404 for countries without regional divisions
        - A state's numbers are listed by numbers_search_show with the state's ``region_id``

        **When to use:**
        - Building state/province selection for US, Canada, etc.
        - Filtering DID search by region

        ``regions[].id`` feeds numbers_search_show (``region_id``). ``regions[].name`` feeds numbers_search_show
        (``state_name_contains``, United States only).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/regions"),
            path_params=[param[int]("country_id", country_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersCountriesRegionsResponse],
            error_mapper=numbers_countries_regions_index_error_mapper,
            request_options=request_options,
        )

    def numbers_index(
        self, *, show_all: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersResponse, NumbersIndexErrorBody]:
        """Retrieve a list of DID numbers purchased by the authenticated user.

        **Important notes:**
        - Returns only active numbers by default
        - Use ``show_all=true`` to include numbers pending document approval
        - Includes service information (SMS, etc.)
        - Shows current status of each number

        **When to use:**
        - Displaying user's number inventory
        - Checking number status
        - Listing numbers for configuration
        - Dashboard display

        ``dids[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``dids[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). ``dids[].id`` feeds
        purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
        purchases_destinations_destroy (``purchase_id``, which takes the number too). ``dids[].identity_id`` feeds
        identities_index and numbers_purchase_update (``ids``, ``identity_id``). See also: purchases_index.

        Args:
            show_all: Include numbers pending documentation approval
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers"),
            query_params=[param[str | None]("show_all", show_all)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersResponse],
            error_mapper=numbers_index_error_mapper,
            request_options=request_options,
        )

    def numbers_purchase_create(
        self,
        body: ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersPurchaseResponse, NumbersPurchaseCreateErrorBody]:
        """Purchase one or more DID numbers with identity document association.

        **Important notes:**
        - Can purchase multiple numbers in a single request
        - Identities must contain required documents for the number's country

        **When to use:**
        - Purchasing numbers with document verification
        - Bulk number purchase with identity association

        ``purchase.purchases[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``purchase.purchases[].id`` feeds purchases_destinations_index and purchases_destinations_create
        (``purchase_id``). ``purchase.purchases[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). See also:
        numbers_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/numbers/purchase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersPurchaseResponse],
            error_mapper=numbers_purchase_create_error_mapper,
            request_options=request_options,
        )

    def numbers_purchase_destroy(
        self,
        *,
        id_in: list[int] | None = None,
        did_numbers: list[str] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersPurchaseResponse3, NumbersPurchaseDestroyErrorBody]:
        """Cancel purchase of DID numbers and return them to inventory.

        **Important notes:**
        - Can cancel multiple numbers in a single request
        - Numbers are returned to seller's inventory
        - Optional quarantine period before number becomes available again
        - Refund policy depends on service terms
        - A number still inside its commitment term is charged the early-return
        fee for the remaining months, the same fee as in the portal

        **When to use:**
        - User wants to cancel number purchase
        - Returning numbers after unsuccessful activation
        - Bulk number release

        **Partial cancellation:** Numbers not present in your cancelable inventory are skipped (not cancelled) and
        reported in the ``warnings`` array with code ``not_in_inventory``. If none of the requested numbers are
        cancelable, the request returns ``422``.

        A number that is cancelable but whose cancellation fails is reported with code ``cancellation_failed`` and is
        omitted from ``dids``; it remains in your inventory and is still billable. A request where every number fails
        this way returns ``200`` with an empty ``dids`` array.

        A number whose early-return fee your balance does not cover is not cancelled and not charged. It is reported
        with code ``insufficient_funds``, is omitted from ``dids``, and remains in your inventory.

        Args:
            id_in: Array of DID IDs to cancel, from numbers_index
            did_numbers: Array of DID numbers to cancel, from numbers_index, purchases_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/numbers/purchase"),
            query_params=[
                param[list[int] | None]("id_in[]", id_in), param[list[str] | None]("did_numbers[]", did_numbers)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersPurchaseResponse3],
            error_mapper=numbers_purchase_destroy_error_mapper,
            request_options=request_options,
        )

    def numbers_purchase_update(
        self,
        body: ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersPurchaseResponse2, NumbersPurchaseUpdateErrorBody]:
        """Update a purchased DID number's identity association or call recording setting.

        **Important notes:**
        - New identity must contain required documents for the number
        - ``call_recording_enabled`` requires the account-level "Allow call recording" setting to be on; returns 422
            otherwise

        **Other normalizations applied silently on number purchase/update:**
        - Webphone destinations (``transport=10``) are resolved server-side.
        - Boolean-like fields are coerced to booleans.
        - Destination strings are normalized.
        - SMS delivery-receipt (``dlr``) and Sender-ID settings follow account
        defaults when omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v2/numbers/purchase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersPurchaseResponse2],
            error_mapper=numbers_purchase_update_error_mapper,
            request_options=request_options,
        )

    def numbers_search_show(
        self,
        *,
        id_in: int | None = None,
        number_in: str | None = None,
        number_contains: int | None = None,
        begins_with: int | None = None,
        ends_with: int | None = None,
        city_name_contains: str | None = None,
        country_name_contains: str | None = None,
        state_name_contains: str | None = None,
        sms_enabled: str | None = None,
        no_local_cli: str | None = None,
        vendor_id: int | None = None,
        city_id: int | None = None,
        region_id: int | None = None,
        require_docs: int | None = None,
        commitment_months: int | None = None,
        cheap_sorting: str | None = None,
        page: int | None = 1,
        per_page: int | None = 25,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersSearchResponse, NumbersSearchShowErrorBody]:
        """Advanced search for available DID numbers with multiple filter criteria.

        **Important notes:**
        - Supports pagination (page, per_page parameters)
        - All filter parameters are optional
        - Combine multiple filters for precise results
        - Use for complex search scenarios beyond location-based browsing

        **When to use:**
        - Implementing vanity number search
        - Finding numbers with specific features
        - Custom number selection interfaces
        - Bulk number lookup

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_countries_cities_dids_index.

        Args:
            id_in: Search for specific DID IDs (comma-separated)
            number_in: Search for specific numbers (exact match, comma-separated)
            number_contains: Search for numbers containing this pattern
            begins_with: Search for numbers beginning with this pattern
            ends_with: Search for numbers ending with this pattern
            city_name_contains: Filter by city name (partial match)
            country_name_contains: Filter by country name (partial match), from numbers_countries_index
            state_name_contains: Filter by state/region name (partial match, US only), from
                numbers_countries_regions_index
            sms_enabled: Filter by SMS capability (true/false)
            no_local_cli: Filter by local caller ID capability (true/false)
            vendor_id: Filter by vendor ID (requires special permission)
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            region_id: Region id from numbers_countries_regions_index, numbers_countries_locations_index
            require_docs: Filter by document requirements
            commitment_months: Filter by commitment period in months
            cheap_sorting: Sort by price (activation + monthly fee) ascending
            page: Page number for pagination
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/search"),
            query_params=[
                param[int | None]("id_in", id_in),
                param[str | None]("number_in", number_in),
                param[int | None]("number_contains", number_contains),
                param[int | None]("begins_with", begins_with),
                param[int | None]("ends_with", ends_with),
                param[str | None]("city_name_contains", city_name_contains),
                param[str | None]("country_name_contains", country_name_contains),
                param[str | None]("state_name_contains", state_name_contains),
                param[str | None]("sms_enabled", sms_enabled),
                param[str | None]("no_local_cli", no_local_cli),
                param[int | None]("vendor_id", vendor_id),
                param[int | None]("city_id", city_id),
                param[int | None]("region_id", region_id),
                param[int | None]("require_docs", require_docs),
                param[int | None]("commitment_months", commitment_months),
                param[str | None]("cheap_sorting", cheap_sorting),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV2NumbersSearchResponse],
            error_mapper=numbers_search_show_error_mapper,
            request_options=request_options,
        )


class AsyncNumbersInventoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def numbers_countries_cities_dids_index(
        self, country_id: int, city_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesCitiesDidsResponse, NumbersCountriesCitiesDidsIndexErrorBody]:
        """Retrieve paginated list of available DID numbers in a specific city.

        **Important notes:**
        - For countries without regions (UK, Netherlands, etc.)
        - Results are paginated (default 25 per page)
        - Includes full pricing and feature details for each number
        - Use for countries where regions are not applicable

        **When to use:**
        - Displaying available numbers after city selection
        - Browsing DID inventory by location
        - Non-US/Canada purchase flows

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_search_show.

        Args:
            country_id: Country id from numbers_countries_index
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/cities/{city_id}/dids"),
            path_params=[param[int]("country_id", country_id), param[int]("city_id", city_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersCountriesCitiesDidsResponse],
            error_mapper=numbers_countries_cities_dids_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_countries_cities_index(
        self, country_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesCitiesResponse, NumbersCountriesCitiesIndexErrorBody]:
        """Retrieve a list of cities within a country where DID numbers are available.

        **Important notes:**
        - For a country with ``has_provinces_or_states``, numbers_search_show narrows to one state by its ``region_id``
            from numbers_countries_regions_index
        - Each city includes count of available DIDs
        - Cities are returned with area codes

        **When to use:**
        - Building city selection for countries without states
        - Checking DID availability by city
        - Displaying available locations to users

        ``cities[].id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/cities"),
            path_params=[param[int]("country_id", country_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersCountriesCitiesResponse],
            error_mapper=numbers_countries_cities_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_countries_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesResponse, NumbersCountriesIndexErrorBody]:
        """Retrieve a list of all countries where DID numbers are available.

        **When to use:**
        - Building country selection interface
        - Checking number availability by country
        - Starting the DID purchase flow

        ``countries[].id`` feeds numbers_countries_cities_index, numbers_countries_regions_index,
        numbers_countries_locations_index and numbers_countries_cities_dids_index (``country_id``). ``countries[].name``
        feeds numbers_search_show (``country_name_contains``). A country with ``has_provinces_or_states`` true lists its
        states in numbers_countries_regions_index.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersCountriesResponse],
            error_mapper=numbers_countries_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_countries_locations_index(
        self,
        country_id: int,
        prefix: int,
        *,
        sms_enabled: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersCountriesLocationsResponse, NumbersCountriesLocationsIndexErrorBody]:
        """Search for locations (cities) that have DID numbers starting with a specific prefix.

        **Important notes:**
        - Useful for finding locations with specific area codes
        - Prefix can be partial number (e.g., "212" for NYC area code)
        - Returns combined location information (country, state, city)

        **When to use:**
        - Implementing "vanity number" search by prefix
        - Finding locations with specific area codes
        - Reverse lookup of number to location

        ``locations[].city_id`` feeds numbers_countries_cities_dids_index and numbers_search_show (``city_id``).
        ``locations[].state_id`` feeds numbers_search_show (``region_id``).

        Args:
            country_id: Country id from numbers_countries_index
            prefix: Number prefix to search for
            sms_enabled: Filter locations by SMS capability
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/locations"),
            path_params=[param[int]("country_id", country_id)],
            query_params=[param[int]("prefix", prefix), param[str | None]("sms_enabled", sms_enabled)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersCountriesLocationsResponse],
            error_mapper=numbers_countries_locations_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_countries_regions_index(
        self, country_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersCountriesRegionsResponse, NumbersCountriesRegionsIndexErrorBody]:
        """Retrieve a list of states or provinces within a country (e.g., US states, Canadian provinces).

        **Important notes:**
        - Only applicable for countries with ``has_provinces_or_states: true``
        - Returns 404 for countries without regional divisions
        - A state's numbers are listed by numbers_search_show with the state's ``region_id``

        **When to use:**
        - Building state/province selection for US, Canada, etc.
        - Filtering DID search by region

        ``regions[].id`` feeds numbers_search_show (``region_id``). ``regions[].name`` feeds numbers_search_show
        (``state_name_contains``, United States only).

        Args:
            country_id: Country id from numbers_countries_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/countries/{country_id}/regions"),
            path_params=[param[int]("country_id", country_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersCountriesRegionsResponse],
            error_mapper=numbers_countries_regions_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_index(
        self, *, show_all: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2NumbersResponse, NumbersIndexErrorBody]:
        """Retrieve a list of DID numbers purchased by the authenticated user.

        **Important notes:**
        - Returns only active numbers by default
        - Use ``show_all=true`` to include numbers pending document approval
        - Includes service information (SMS, etc.)
        - Shows current status of each number

        **When to use:**
        - Displaying user's number inventory
        - Checking number status
        - Listing numbers for configuration
        - Dashboard display

        ``dids[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``dids[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). ``dids[].id`` feeds
        purchases_destinations_index, purchases_destinations_create, purchases_destinations_update and
        purchases_destinations_destroy (``purchase_id``, which takes the number too). ``dids[].identity_id`` feeds
        identities_index and numbers_purchase_update (``ids``, ``identity_id``). See also: purchases_index.

        Args:
            show_all: Include numbers pending documentation approval
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers"),
            query_params=[param[str | None]("show_all", show_all)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersResponse],
            error_mapper=numbers_index_error_mapper,
            request_options=request_options,
        )

    async def numbers_purchase_create(
        self,
        body: ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersPurchaseResponse, NumbersPurchaseCreateErrorBody]:
        """Purchase one or more DID numbers with identity document association.

        **Important notes:**
        - Can purchase multiple numbers in a single request
        - Identities must contain required documents for the number's country

        **When to use:**
        - Purchasing numbers with document verification
        - Bulk number purchase with identity association

        ``purchase.purchases[].id`` feeds numbers_purchase_update and numbers_purchase_destroy (``id``, ``id_in[]``).
        ``purchase.purchases[].id`` feeds purchases_destinations_index and purchases_destinations_create
        (``purchase_id``). ``purchase.purchases[].number`` feeds numbers_purchase_destroy (``did_numbers[]``). See also:
        numbers_index.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/numbers/purchase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2NumbersPurchaseRequest | ApiV2NumbersPurchaseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersPurchaseResponse],
            error_mapper=numbers_purchase_create_error_mapper,
            request_options=request_options,
        )

    async def numbers_purchase_destroy(
        self,
        *,
        id_in: list[int] | None = None,
        did_numbers: list[str] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersPurchaseResponse3, NumbersPurchaseDestroyErrorBody]:
        """Cancel purchase of DID numbers and return them to inventory.

        **Important notes:**
        - Can cancel multiple numbers in a single request
        - Numbers are returned to seller's inventory
        - Optional quarantine period before number becomes available again
        - Refund policy depends on service terms
        - A number still inside its commitment term is charged the early-return
        fee for the remaining months, the same fee as in the portal

        **When to use:**
        - User wants to cancel number purchase
        - Returning numbers after unsuccessful activation
        - Bulk number release

        **Partial cancellation:** Numbers not present in your cancelable inventory are skipped (not cancelled) and
        reported in the ``warnings`` array with code ``not_in_inventory``. If none of the requested numbers are
        cancelable, the request returns ``422``.

        A number that is cancelable but whose cancellation fails is reported with code ``cancellation_failed`` and is
        omitted from ``dids``; it remains in your inventory and is still billable. A request where every number fails
        this way returns ``200`` with an empty ``dids`` array.

        A number whose early-return fee your balance does not cover is not cancelled and not charged. It is reported
        with code ``insufficient_funds``, is omitted from ``dids``, and remains in your inventory.

        Args:
            id_in: Array of DID IDs to cancel, from numbers_index
            did_numbers: Array of DID numbers to cancel, from numbers_index, purchases_index
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/numbers/purchase"),
            query_params=[
                param[list[int] | None]("id_in[]", id_in), param[list[str] | None]("did_numbers[]", did_numbers)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersPurchaseResponse3],
            error_mapper=numbers_purchase_destroy_error_mapper,
            request_options=request_options,
        )

    async def numbers_purchase_update(
        self,
        body: ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersPurchaseResponse2, NumbersPurchaseUpdateErrorBody]:
        """Update a purchased DID number's identity association or call recording setting.

        **Important notes:**
        - New identity must contain required documents for the number
        - ``call_recording_enabled`` requires the account-level "Allow call recording" setting to be on; returns 422
            otherwise

        **Other normalizations applied silently on number purchase/update:**
        - Webphone destinations (``transport=10``) are resolved server-side.
        - Boolean-like fields are coerced to booleans.
        - Destination strings are normalized.
        - SMS delivery-receipt (``dlr``) and Sender-ID settings follow account
        defaults when omitted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v2/numbers/purchase"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV2NumbersPurchaseRequest1 | ApiV2NumbersPurchaseRequest1Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersPurchaseResponse2],
            error_mapper=numbers_purchase_update_error_mapper,
            request_options=request_options,
        )

    async def numbers_search_show(
        self,
        *,
        id_in: int | None = None,
        number_in: str | None = None,
        number_contains: int | None = None,
        begins_with: int | None = None,
        ends_with: int | None = None,
        city_name_contains: str | None = None,
        country_name_contains: str | None = None,
        state_name_contains: str | None = None,
        sms_enabled: str | None = None,
        no_local_cli: str | None = None,
        vendor_id: int | None = None,
        city_id: int | None = None,
        region_id: int | None = None,
        require_docs: int | None = None,
        commitment_months: int | None = None,
        cheap_sorting: str | None = None,
        page: int | None = 1,
        per_page: int | None = 25,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2NumbersSearchResponse, NumbersSearchShowErrorBody]:
        """Advanced search for available DID numbers with multiple filter criteria.

        **Important notes:**
        - Supports pagination (page, per_page parameters)
        - All filter parameters are optional
        - Combine multiple filters for precise results
        - Use for complex search scenarios beyond location-based browsing

        **When to use:**
        - Implementing vanity number search
        - Finding numbers with specific features
        - Custom number selection interfaces
        - Bulk number lookup

        ``dids.dids[].id`` feeds numbers_purchase_create (``id_in``). ``dids.dids[].number`` feeds
        numbers_purchase_create (``did_numbers``). See also: numbers_countries_cities_dids_index.

        Args:
            id_in: Search for specific DID IDs (comma-separated)
            number_in: Search for specific numbers (exact match, comma-separated)
            number_contains: Search for numbers containing this pattern
            begins_with: Search for numbers beginning with this pattern
            ends_with: Search for numbers ending with this pattern
            city_name_contains: Filter by city name (partial match)
            country_name_contains: Filter by country name (partial match), from numbers_countries_index
            state_name_contains: Filter by state/region name (partial match, US only), from
                numbers_countries_regions_index
            sms_enabled: Filter by SMS capability (true/false)
            no_local_cli: Filter by local caller ID capability (true/false)
            vendor_id: Filter by vendor ID (requires special permission)
            city_id: City id from numbers_countries_cities_index, numbers_countries_locations_index
            region_id: Region id from numbers_countries_regions_index, numbers_countries_locations_index
            require_docs: Filter by document requirements
            commitment_months: Filter by commitment period in months
            cheap_sorting: Sort by price (activation + monthly fee) ascending
            page: Page number for pagination
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/numbers/search"),
            query_params=[
                param[int | None]("id_in", id_in),
                param[str | None]("number_in", number_in),
                param[int | None]("number_contains", number_contains),
                param[int | None]("begins_with", begins_with),
                param[int | None]("ends_with", ends_with),
                param[str | None]("city_name_contains", city_name_contains),
                param[str | None]("country_name_contains", country_name_contains),
                param[str | None]("state_name_contains", state_name_contains),
                param[str | None]("sms_enabled", sms_enabled),
                param[str | None]("no_local_cli", no_local_cli),
                param[int | None]("vendor_id", vendor_id),
                param[int | None]("city_id", city_id),
                param[int | None]("region_id", region_id),
                param[int | None]("require_docs", require_docs),
                param[int | None]("commitment_months", commitment_months),
                param[str | None]("cheap_sorting", cheap_sorting),
                param[int | None]("page", page),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV2NumbersSearchResponse],
            error_mapper=numbers_search_show_error_mapper,
            request_options=request_options,
        )
