from __future__ import annotations

from typing import Any
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
from ..errors.availability_error import AvailabilityErrorBody, availability_error_mapper
from ..errors.listing_error import ListingErrorBody, listing_error_mapper
from ..errors.price_compare_error import PriceCompareErrorBody, price_compare_error_mapper
from ..errors.price_error import PriceErrorBody, price_error_mapper
from ..errors.reviews_error import ReviewsErrorBody, reviews_error_mapper
from ..errors.search_get_error import SearchGetErrorBody, search_get_error_mapper
from ..errors.search_post_error import SearchPostErrorBody, search_post_error_mapper
from ..models.availability_response import AvailabilityResponse
from ..models.enums.platform import PlatformOrStr
from ..models.listing_response import ListingResponse
from ..models.price_compare_response import PriceCompareResponse
from ..models.price_response import PriceResponse
from ..models.reviews_response import ReviewsResponse
from ..models.search_response import SearchResponse
from ..server.server import Server


class DataApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataApiWithRawResponse(client, server, auth)

    def availability(
        self,
        platform: PlatformOrStr,
        start_date: str,
        end_date: str,
        *,
        listing_id: str | None = None,
        listing_ids: str | None = None,
        url: str | None = None,
        only_available: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AvailabilityResponse:
        """Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting
        forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform →
        invalid_listing_url.

        Args:
            platform: Target platform (must be enabled for availability).
            start_date: YYYY-MM-DD (required).
            end_date: YYYY-MM-DD (required).
            listing_id: Platform listing id (one identification form).
            listing_ids: Comma-separated listing ids (one identification form).
            url: Full listing URL for the platform (one identification form).
            only_available: Only return available dates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.availability(
                platform,
                start_date,
                end_date,
                listing_id=listing_id,
                listing_ids=listing_ids,
                url=url,
                only_available=only_available,
                request_options=request_options,
            ),
        )

    def listing(
        self,
        platform: PlatformOrStr,
        id_: str,
        *,
        country: str | None = None,
        check_in: str | None = None,
        check_out: str | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListingResponse:
        """Send a ``GET`` request.

        Args:
            platform: Value sent with the request.
            id_: Value sent with the request.
            country: ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not
                globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g.
                /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400
                needs_country.
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.listing(
                platform,
                id_,
                country=country,
                check_in=check_in,
                check_out=check_out,
                currency=currency,
                request_options=request_options,
            ),
        )

    def price(
        self,
        platform: PlatformOrStr,
        listing_id: str,
        check_in: str,
        check_out: str,
        *,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PriceResponse:
        """Send a ``GET`` request.

        Args:
            platform: Target platform (must be enabled for price).
            listing_id: Platform listing id.
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.price(
                platform, listing_id, check_in, check_out, currency=currency, request_options=request_options
            ),
        )

    def price_compare(
        self,
        check_in: str,
        check_out: str,
        *,
        listings: str | None = None,
        name: str | None = None,
        location: str | None = None,
        google_hotel_id: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PriceCompareResponse:
        """TWO modes, one response type.

        **Google-aggregator mode** (``name`` / ``location`` / ``googleHotelId``): we resolve the property on Google
        Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.

        **Direct fan-out mode** (``listings=``): you supply 2–6 ``platform:listingId`` pairs for the SAME property and
        we run one real price call per listing, in parallel, then normalize the comparison ourselves. Each offer carries
        ``platform``, ``listingId``, ``nightlyPrice``, ``nights`` and a best-effort ``fees`` breakdown, and the response
        is marked ``source: 'direct_fanout'``. Billed as the SUM of the per-platform price legs; a leg that fails or
        returns nothing is charged 0 and is reported in ``meta.platformResults`` with ``meta.partial: true``.

        FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports cleaning, service and
        taxes; Booking.com reports taxes only; Vrbo and Google report none. Compare on ``totalPrice``, which is present
        and comparable everywhere. A null fee means we could not read it, NOT that the platform does not charge it.

        ``min`` and ``median`` cover only the offers quoted in the response ``currency``; offers in another currency are
        still returned but excluded from the summary.

        Args:
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            listings: DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property,
                e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full
                listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a
                comma must be sent as a repeated param.
            name: GOOGLE MODE. Property name (one of name/location/googleHotelId).
            location: GOOGLE MODE. Location hint (one of name/location/googleHotelId).
            google_hotel_id: GOOGLE MODE. Google hotel id (mutually exclusive with name/location).
            adults: Default 2.
            children: Default 0.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.price_compare(
                check_in,
                check_out,
                listings=listings,
                name=name,
                location=location,
                google_hotel_id=google_hotel_id,
                adults=adults,
                children=children,
                currency=currency,
                request_options=request_options,
            ),
        )

    def reviews(
        self,
        platform: PlatformOrStr,
        *,
        listing_id: str | None = None,
        url: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        language: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReviewsResponse:
        """Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad
        url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the
        platform-native id from /v1/search ``platformListingId``; a ``stays__`` object id is accepted, normalized, and
        may supply platform when platform is omitted.

        Args:
            platform: Target platform (must be enabled for reviews).
            listing_id: Platform-native id from /v1/search ``platformListingId`` (one identification form); a
                ``stays_<platform>_<platformListingId>`` id is accepted, normalized, and may supply platform when
                platform is omitted.
            url: Full listing URL (one identification form).
            limit: 1–100; default 20.
            cursor: Opaque pagination cursor.
            language: ISO-639-1 filter.
            sort: recent | rating_desc | rating_asc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.reviews(
                platform,
                listing_id=listing_id,
                url=url,
                limit=limit,
                cursor=cursor,
                language=language,
                sort=sort,
                request_options=request_options,
            ),
        )

    def search_get(
        self,
        location: str,
        *,
        check_in: str | None = None,
        check_out: str | None = None,
        platforms: str | None = None,
        platform: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        rooms: int | None = None,
        currency: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResponse:
        """Send a ``GET`` request.

        Args:
            location: Destination (city, region, address).
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            platforms: Comma-separated platforms; defaults to all enabled. ``limit`` applies per platform.
            platform: Alias for ``platforms=<value>`` when requesting exactly one platform.
            adults: Default 2.
            children: Default 0; requires matching childAges.
            rooms: Default 1.
            currency: ISO-4217; default USD.
            limit: 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results.
            cursor: Opaque pagination cursor.
            sort: recommended | price_asc | price_desc | rating_desc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            self._with_raw_response.search_get(
                location,
                check_in=check_in,
                check_out=check_out,
                platforms=platforms,
                platform=platform,
                adults=adults,
                children=children,
                rooms=rooms,
                currency=currency,
                limit=limit,
                cursor=cursor,
                sort=sort,
                request_options=request_options,
            ),
        )

    def search_post(self, body: Any, *, request_options: RequestOptionsOrDict | None = None) -> SearchResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(self._with_raw_response.search_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> DataApiWithRawResponse:
        return self._with_raw_response


class AsyncDataApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataApiWithRawResponse(client, server, auth)

    async def availability(
        self,
        platform: PlatformOrStr,
        start_date: str,
        end_date: str,
        *,
        listing_id: str | None = None,
        listing_ids: str | None = None,
        url: str | None = None,
        only_available: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AvailabilityResponse:
        """Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting
        forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform →
        invalid_listing_url.

        Args:
            platform: Target platform (must be enabled for availability).
            start_date: YYYY-MM-DD (required).
            end_date: YYYY-MM-DD (required).
            listing_id: Platform listing id (one identification form).
            listing_ids: Comma-separated listing ids (one identification form).
            url: Full listing URL for the platform (one identification form).
            only_available: Only return available dates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.availability(
                platform,
                start_date,
                end_date,
                listing_id=listing_id,
                listing_ids=listing_ids,
                url=url,
                only_available=only_available,
                request_options=request_options,
            ),
        )

    async def listing(
        self,
        platform: PlatformOrStr,
        id_: str,
        *,
        country: str | None = None,
        check_in: str | None = None,
        check_out: str | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListingResponse:
        """Send a ``GET`` request.

        Args:
            platform: Value sent with the request.
            id_: Value sent with the request.
            country: ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not
                globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g.
                /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400
                needs_country.
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.listing(
                platform,
                id_,
                country=country,
                check_in=check_in,
                check_out=check_out,
                currency=currency,
                request_options=request_options,
            ),
        )

    async def price(
        self,
        platform: PlatformOrStr,
        listing_id: str,
        check_in: str,
        check_out: str,
        *,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PriceResponse:
        """Send a ``GET`` request.

        Args:
            platform: Target platform (must be enabled for price).
            listing_id: Platform listing id.
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.price(
                platform, listing_id, check_in, check_out, currency=currency, request_options=request_options
            ),
        )

    async def price_compare(
        self,
        check_in: str,
        check_out: str,
        *,
        listings: str | None = None,
        name: str | None = None,
        location: str | None = None,
        google_hotel_id: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PriceCompareResponse:
        """TWO modes, one response type.

        **Google-aggregator mode** (``name`` / ``location`` / ``googleHotelId``): we resolve the property on Google
        Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.

        **Direct fan-out mode** (``listings=``): you supply 2–6 ``platform:listingId`` pairs for the SAME property and
        we run one real price call per listing, in parallel, then normalize the comparison ourselves. Each offer carries
        ``platform``, ``listingId``, ``nightlyPrice``, ``nights`` and a best-effort ``fees`` breakdown, and the response
        is marked ``source: 'direct_fanout'``. Billed as the SUM of the per-platform price legs; a leg that fails or
        returns nothing is charged 0 and is reported in ``meta.platformResults`` with ``meta.partial: true``.

        FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports cleaning, service and
        taxes; Booking.com reports taxes only; Vrbo and Google report none. Compare on ``totalPrice``, which is present
        and comparable everywhere. A null fee means we could not read it, NOT that the platform does not charge it.

        ``min`` and ``median`` cover only the offers quoted in the response ``currency``; offers in another currency are
        still returned but excluded from the summary.

        Args:
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            listings: DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property,
                e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full
                listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a
                comma must be sent as a repeated param.
            name: GOOGLE MODE. Property name (one of name/location/googleHotelId).
            location: GOOGLE MODE. Location hint (one of name/location/googleHotelId).
            google_hotel_id: GOOGLE MODE. Google hotel id (mutually exclusive with name/location).
            adults: Default 2.
            children: Default 0.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.price_compare(
                check_in,
                check_out,
                listings=listings,
                name=name,
                location=location,
                google_hotel_id=google_hotel_id,
                adults=adults,
                children=children,
                currency=currency,
                request_options=request_options,
            ),
        )

    async def reviews(
        self,
        platform: PlatformOrStr,
        *,
        listing_id: str | None = None,
        url: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        language: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReviewsResponse:
        """Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad
        url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the
        platform-native id from /v1/search ``platformListingId``; a ``stays__`` object id is accepted, normalized, and
        may supply platform when platform is omitted.

        Args:
            platform: Target platform (must be enabled for reviews).
            listing_id: Platform-native id from /v1/search ``platformListingId`` (one identification form); a
                ``stays_<platform>_<platformListingId>`` id is accepted, normalized, and may supply platform when
                platform is omitted.
            url: Full listing URL (one identification form).
            limit: 1–100; default 20.
            cursor: Opaque pagination cursor.
            language: ISO-639-1 filter.
            sort: recent | rating_desc | rating_asc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.reviews(
                platform,
                listing_id=listing_id,
                url=url,
                limit=limit,
                cursor=cursor,
                language=language,
                sort=sort,
                request_options=request_options,
            ),
        )

    async def search_get(
        self,
        location: str,
        *,
        check_in: str | None = None,
        check_out: str | None = None,
        platforms: str | None = None,
        platform: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        rooms: int | None = None,
        currency: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResponse:
        """Send a ``GET`` request.

        Args:
            location: Destination (city, region, address).
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            platforms: Comma-separated platforms; defaults to all enabled. ``limit`` applies per platform.
            platform: Alias for ``platforms=<value>`` when requesting exactly one platform.
            adults: Default 2.
            children: Default 0; requires matching childAges.
            rooms: Default 1.
            currency: ISO-4217; default USD.
            limit: 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results.
            cursor: Opaque pagination cursor.
            sort: recommended | price_asc | price_desc | rating_desc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(
            await self._with_raw_response.search_get(
                location,
                check_in=check_in,
                check_out=check_out,
                platforms=platforms,
                platform=platform,
                adults=adults,
                children=children,
                rooms=rooms,
                currency=currency,
                limit=limit,
                cursor=cursor,
                sort=sort,
                request_options=request_options,
            ),
        )

    async def search_post(
        self, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success.

        Raises:
            ApiError: Validation error (invalid_request). Authentication error (missing/invalid API key). Insufficient
                credits (credit_balance_too_low). Permission denied (e.g. email_unverified on live credits;
                subscription_required on top-ups). Rate limited (rate_limit_exceeded); carries Retry-After. All upstream
                sources failed or were blocked (no charge). ``error`` is ``ErrorEnvelope | RawError``."""
        return unwrap(await self._with_raw_response.search_post(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncDataApiWithRawResponse:
        return self._with_raw_response


class DataApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def availability(
        self,
        platform: PlatformOrStr,
        start_date: str,
        end_date: str,
        *,
        listing_id: str | None = None,
        listing_ids: str | None = None,
        url: str | None = None,
        only_available: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AvailabilityResponse, AvailabilityErrorBody]:
        """Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting
        forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform →
        invalid_listing_url.

        Args:
            platform: Target platform (must be enabled for availability).
            start_date: YYYY-MM-DD (required).
            end_date: YYYY-MM-DD (required).
            listing_id: Platform listing id (one identification form).
            listing_ids: Comma-separated listing ids (one identification form).
            url: Full listing URL for the platform (one identification form).
            only_available: Only return available dates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/availability"),
            query_params=[
                param[PlatformOrStr]("platform", platform),
                param[str]("startDate", start_date),
                param[str]("endDate", end_date),
                param[str | None]("listingId", listing_id),
                param[str | None]("listingIds", listing_ids),
                param[str | None]("url", url),
                param[bool | None]("onlyAvailable", only_available),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AvailabilityResponse],
            error_mapper=availability_error_mapper,
            request_options=request_options,
        )

    def listing(
        self,
        platform: PlatformOrStr,
        id_: str,
        *,
        country: str | None = None,
        check_in: str | None = None,
        check_out: str | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListingResponse, ListingErrorBody]:
        """Send a ``GET`` request.

        Args:
            platform: Value sent with the request.
            id_: Value sent with the request.
            country: ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not
                globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g.
                /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400
                needs_country.
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/listing/{platform}/{id}"),
            path_params=[param[PlatformOrStr]("platform", platform), param[str]("id", id_)],
            query_params=[
                param[str | None]("country", country),
                param[str | None]("checkIn", check_in),
                param[str | None]("checkOut", check_out),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ListingResponse],
            error_mapper=listing_error_mapper,
            request_options=request_options,
        )

    def price(
        self,
        platform: PlatformOrStr,
        listing_id: str,
        check_in: str,
        check_out: str,
        *,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PriceResponse, PriceErrorBody]:
        """Send a ``GET`` request.

        Args:
            platform: Target platform (must be enabled for price).
            listing_id: Platform listing id.
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/price"),
            query_params=[
                param[PlatformOrStr]("platform", platform),
                param[str]("listingId", listing_id),
                param[str]("checkIn", check_in),
                param[str]("checkOut", check_out),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PriceResponse],
            error_mapper=price_error_mapper,
            request_options=request_options,
        )

    def price_compare(
        self,
        check_in: str,
        check_out: str,
        *,
        listings: str | None = None,
        name: str | None = None,
        location: str | None = None,
        google_hotel_id: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        currency: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PriceCompareResponse, PriceCompareErrorBody]:
        """TWO modes, one response type.

        **Google-aggregator mode** (``name`` / ``location`` / ``googleHotelId``): we resolve the property on Google
        Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.

        **Direct fan-out mode** (``listings=``): you supply 2–6 ``platform:listingId`` pairs for the SAME property and
        we run one real price call per listing, in parallel, then normalize the comparison ourselves. Each offer carries
        ``platform``, ``listingId``, ``nightlyPrice``, ``nights`` and a best-effort ``fees`` breakdown, and the response
        is marked ``source: 'direct_fanout'``. Billed as the SUM of the per-platform price legs; a leg that fails or
        returns nothing is charged 0 and is reported in ``meta.platformResults`` with ``meta.partial: true``.

        FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports cleaning, service and
        taxes; Booking.com reports taxes only; Vrbo and Google report none. Compare on ``totalPrice``, which is present
        and comparable everywhere. A null fee means we could not read it, NOT that the platform does not charge it.

        ``min`` and ``median`` cover only the offers quoted in the response ``currency``; offers in another currency are
        still returned but excluded from the summary.

        Args:
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            listings: DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property,
                e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full
                listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a
                comma must be sent as a repeated param.
            name: GOOGLE MODE. Property name (one of name/location/googleHotelId).
            location: GOOGLE MODE. Location hint (one of name/location/googleHotelId).
            google_hotel_id: GOOGLE MODE. Google hotel id (mutually exclusive with name/location).
            adults: Default 2.
            children: Default 0.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/price-compare"),
            query_params=[
                param[str]("checkIn", check_in),
                param[str]("checkOut", check_out),
                param[str | None]("listings", listings),
                param[str | None]("name", name),
                param[str | None]("location", location),
                param[str | None]("googleHotelId", google_hotel_id),
                param[int | None]("adults", adults),
                param[int | None]("children", children),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[PriceCompareResponse],
            error_mapper=price_compare_error_mapper,
            request_options=request_options,
        )

    def reviews(
        self,
        platform: PlatformOrStr,
        *,
        listing_id: str | None = None,
        url: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        language: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReviewsResponse, ReviewsErrorBody]:
        """Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad
        url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the
        platform-native id from /v1/search ``platformListingId``; a ``stays__`` object id is accepted, normalized, and
        may supply platform when platform is omitted.

        Args:
            platform: Target platform (must be enabled for reviews).
            listing_id: Platform-native id from /v1/search ``platformListingId`` (one identification form); a
                ``stays_<platform>_<platformListingId>`` id is accepted, normalized, and may supply platform when
                platform is omitted.
            url: Full listing URL (one identification form).
            limit: 1–100; default 20.
            cursor: Opaque pagination cursor.
            language: ISO-639-1 filter.
            sort: recent | rating_desc | rating_asc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reviews"),
            query_params=[
                param[PlatformOrStr]("platform", platform),
                param[str | None]("listingId", listing_id),
                param[str | None]("url", url),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("language", language),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ReviewsResponse],
            error_mapper=reviews_error_mapper,
            request_options=request_options,
        )

    def search_get(
        self,
        location: str,
        *,
        check_in: str | None = None,
        check_out: str | None = None,
        platforms: str | None = None,
        platform: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        rooms: int | None = None,
        currency: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        sort: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResponse, SearchGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            location: Destination (city, region, address).
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            platforms: Comma-separated platforms; defaults to all enabled. ``limit`` applies per platform.
            platform: Alias for ``platforms=<value>`` when requesting exactly one platform.
            adults: Default 2.
            children: Default 0; requires matching childAges.
            rooms: Default 1.
            currency: ISO-4217; default USD.
            limit: 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results.
            cursor: Opaque pagination cursor.
            sort: recommended | price_asc | price_desc | rating_desc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            query_params=[
                param[str]("location", location),
                param[str | None]("checkIn", check_in),
                param[str | None]("checkOut", check_out),
                param[str | None]("platforms", platforms),
                param[str | None]("platform", platform),
                param[int | None]("adults", adults),
                param[int | None]("children", children),
                param[int | None]("rooms", rooms),
                param[str | None]("currency", currency),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResponse],
            error_mapper=search_get_error_mapper,
            request_options=request_options,
        )

    def search_post(
        self, body: Any, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse, SearchPostErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResponse],
            error_mapper=search_post_error_mapper,
            request_options=request_options,
        )


class AsyncDataApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def availability(
        self,
        platform: PlatformOrStr,
        start_date: str,
        end_date: str,
        *,
        listing_id: str | None = None,
        listing_ids: str | None = None,
        url: str | None = None,
        only_available: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AvailabilityResponse, AvailabilityErrorBody]:
        """Provide EXACTLY ONE identification form: listingId, listingIds, or url. None → missing_parameter; conflicting
        forms → mutually_exclusive_params; a url that is not a well-formed listing URL for the platform →
        invalid_listing_url.

        Args:
            platform: Target platform (must be enabled for availability).
            start_date: YYYY-MM-DD (required).
            end_date: YYYY-MM-DD (required).
            listing_id: Platform listing id (one identification form).
            listing_ids: Comma-separated listing ids (one identification form).
            url: Full listing URL for the platform (one identification form).
            only_available: Only return available dates.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/availability"),
            query_params=[
                param[PlatformOrStr]("platform", platform),
                param[str]("startDate", start_date),
                param[str]("endDate", end_date),
                param[str | None]("listingId", listing_id),
                param[str | None]("listingIds", listing_ids),
                param[str | None]("url", url),
                param[bool | None]("onlyAvailable", only_available),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AvailabilityResponse],
            error_mapper=availability_error_mapper,
            request_options=request_options,
        )

    async def listing(
        self,
        platform: PlatformOrStr,
        id_: str,
        *,
        country: str | None = None,
        check_in: str | None = None,
        check_out: str | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListingResponse, ListingErrorBody]:
        """Send a ``GET`` request.

        Args:
            platform: Value sent with the request.
            id_: Value sent with the request.
            country: ISO-3166 alpha-2 country hint (booking). Disambiguates a bare booking.com slug (slugs are not
                globally unique) without the %2F-encoded /hotel/{cc}/{slug} id — e.g.
                /v1/listing/booking/casa-de-alba?country=co. A bare booking slug with no country returns 400
                needs_country.
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/listing/{platform}/{id}"),
            path_params=[param[PlatformOrStr]("platform", platform), param[str]("id", id_)],
            query_params=[
                param[str | None]("country", country),
                param[str | None]("checkIn", check_in),
                param[str | None]("checkOut", check_out),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ListingResponse],
            error_mapper=listing_error_mapper,
            request_options=request_options,
        )

    async def price(
        self,
        platform: PlatformOrStr,
        listing_id: str,
        check_in: str,
        check_out: str,
        *,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PriceResponse, PriceErrorBody]:
        """Send a ``GET`` request.

        Args:
            platform: Target platform (must be enabled for price).
            listing_id: Platform listing id.
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/price"),
            query_params=[
                param[PlatformOrStr]("platform", platform),
                param[str]("listingId", listing_id),
                param[str]("checkIn", check_in),
                param[str]("checkOut", check_out),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PriceResponse],
            error_mapper=price_error_mapper,
            request_options=request_options,
        )

    async def price_compare(
        self,
        check_in: str,
        check_out: str,
        *,
        listings: str | None = None,
        name: str | None = None,
        location: str | None = None,
        google_hotel_id: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        currency: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PriceCompareResponse, PriceCompareErrorBody]:
        """TWO modes, one response type.

        **Google-aggregator mode** (``name`` / ``location`` / ``googleHotelId``): we resolve the property on Google
        Hotels and report the offers it surfaces. You need no ids. Flat 30 credits.

        **Direct fan-out mode** (``listings=``): you supply 2–6 ``platform:listingId`` pairs for the SAME property and
        we run one real price call per listing, in parallel, then normalize the comparison ourselves. Each offer carries
        ``platform``, ``listingId``, ``nightlyPrice``, ``nights`` and a best-effort ``fees`` breakdown, and the response
        is marked ``source: 'direct_fanout'``. Billed as the SUM of the per-platform price legs; a leg that fails or
        returns nothing is charged 0 and is reported in ``meta.platformResults`` with ``meta.partial: true``.

        FEE COVERAGE IS UNEVEN and this is deliberate rather than a gap we hide: Airbnb reports cleaning, service and
        taxes; Booking.com reports taxes only; Vrbo and Google report none. Compare on ``totalPrice``, which is present
        and comparable everywhere. A null fee means we could not read it, NOT that the platform does not charge it.

        ``min`` and ``median`` cover only the offers quoted in the response ``currency``; offers in another currency are
        still returned but excluded from the summary.

        Args:
            check_in: YYYY-MM-DD (required).
            check_out: YYYY-MM-DD (required).
            listings: DIRECT MODE. 2–6 comma-separated (or repeated) platform:listingId pairs for the same property,
                e.g. listings=airbnb:12345,booking:co/casa-de-alba,vrbo:987654. Split on the FIRST colon, so a full
                listing URL works as the id. Mutually exclusive with name/location/googleHotelId. An id containing a
                comma must be sent as a repeated param.
            name: GOOGLE MODE. Property name (one of name/location/googleHotelId).
            location: GOOGLE MODE. Location hint (one of name/location/googleHotelId).
            google_hotel_id: GOOGLE MODE. Google hotel id (mutually exclusive with name/location).
            adults: Default 2.
            children: Default 0.
            currency: ISO-4217; default USD.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/price-compare"),
            query_params=[
                param[str]("checkIn", check_in),
                param[str]("checkOut", check_out),
                param[str | None]("listings", listings),
                param[str | None]("name", name),
                param[str | None]("location", location),
                param[str | None]("googleHotelId", google_hotel_id),
                param[int | None]("adults", adults),
                param[int | None]("children", children),
                param[str | None]("currency", currency),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[PriceCompareResponse],
            error_mapper=price_compare_error_mapper,
            request_options=request_options,
        )

    async def reviews(
        self,
        platform: PlatformOrStr,
        *,
        listing_id: str | None = None,
        url: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        language: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReviewsResponse, ReviewsErrorBody]:
        """Provide EXACTLY ONE of listingId or url. None → missing_parameter; both → mutually_exclusive_params; a bad
        url → invalid_listing_url. Required params are platform plus either listingId or url. listingId should be the
        platform-native id from /v1/search ``platformListingId``; a ``stays__`` object id is accepted, normalized, and
        may supply platform when platform is omitted.

        Args:
            platform: Target platform (must be enabled for reviews).
            listing_id: Platform-native id from /v1/search ``platformListingId`` (one identification form); a
                ``stays_<platform>_<platformListingId>`` id is accepted, normalized, and may supply platform when
                platform is omitted.
            url: Full listing URL (one identification form).
            limit: 1–100; default 20.
            cursor: Opaque pagination cursor.
            language: ISO-639-1 filter.
            sort: recent | rating_desc | rating_asc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/reviews"),
            query_params=[
                param[PlatformOrStr]("platform", platform),
                param[str | None]("listingId", listing_id),
                param[str | None]("url", url),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("language", language),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ReviewsResponse],
            error_mapper=reviews_error_mapper,
            request_options=request_options,
        )

    async def search_get(
        self,
        location: str,
        *,
        check_in: str | None = None,
        check_out: str | None = None,
        platforms: str | None = None,
        platform: str | None = None,
        adults: int | None = None,
        children: int | None = None,
        rooms: int | None = None,
        currency: str | None = None,
        limit: int | None = None,
        cursor: str | None = None,
        sort: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResponse, SearchGetErrorBody]:
        """Send a ``GET`` request.

        Args:
            location: Destination (city, region, address).
            check_in: YYYY-MM-DD.
            check_out: YYYY-MM-DD.
            platforms: Comma-separated platforms; defaults to all enabled. ``limit`` applies per platform.
            platform: Alias for ``platforms=<value>`` when requesting exactly one platform.
            adults: Default 2.
            children: Default 0; requires matching childAges.
            rooms: Default 1.
            currency: ISO-4217; default USD.
            limit: 1–40; default 10. Applies per platform: a 3-platform search with limit=5 returns up to 15 results.
            cursor: Opaque pagination cursor.
            sort: recommended | price_asc | price_desc | rating_desc.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/search"),
            query_params=[
                param[str]("location", location),
                param[str | None]("checkIn", check_in),
                param[str | None]("checkOut", check_out),
                param[str | None]("platforms", platforms),
                param[str | None]("platform", platform),
                param[int | None]("adults", adults),
                param[int | None]("children", children),
                param[int | None]("rooms", rooms),
                param[str | None]("currency", currency),
                param[int | None]("limit", limit),
                param[str | None]("cursor", cursor),
                param[str | None]("sort", sort),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResponse],
            error_mapper=search_get_error_mapper,
            request_options=request_options,
        )

    async def search_post(
        self, body: Any, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResponse, SearchPostErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/search"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResponse],
            error_mapper=search_post_error_mapper,
            request_options=request_options,
        )
