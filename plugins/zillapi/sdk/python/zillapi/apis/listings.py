from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.listings_bbox_error import ListingsBboxErrorBody, listings_bbox_error_mapper
from ..models.enums.days_on_zillow1 import DaysOnZillow1OrStr
from ..models.enums.format import Format, FormatOrStr
from ..models.enums.status1 import Status1, Status1OrStr
from ..models.search_results_ok import SearchResultsOk
from ..models.unions.search_request2 import SearchRequest2, SearchRequest2Dict
from ..server.server import Server


class Listings:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ListingsWithRawResponse(client, server, auth)

    def listings_bbox(
        self,
        bbox: str,
        *,
        status: Status1OrStr | None = Status1.FOR_SALE,
        price_min: int | None = None,
        price_max: int | None = None,
        beds_min: int | None = None,
        beds_max: int | None = None,
        baths_min: int | None = None,
        baths_max: int | None = None,
        sqft_min: int | None = None,
        sqft_max: int | None = None,
        year_built_min: int | None = None,
        year_built_max: int | None = None,
        home_types: str | None = None,
        days_on_zillow: DaysOnZillow1OrStr | None = None,
        max_items: int | None = 50,
        format_: FormatOrStr | None = Format.JSON,
        location: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchResultsOk:
        """REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A ``bbox`` (west,south,east,north)
        is REQUIRED — free-text location is not supported. Returns up to ``max_items`` rows synchronously (default 50,
        hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit **per listing returned** — this cost
        is per-result, not per-call, so a full-page search costs up to 50 credits; set ``max_items`` lower to cap it.
        Failed calls are free.

        Args:
            bbox: REQUIRED bounding box as ``west,south,east,north`` (decimal degrees, comma-separated). A free-text
                location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding
                box.
            status: Listing status preset.
            price_min: Minimum price in dollars.
            price_max: Maximum price in dollars.
            beds_min: Minimum bedrooms.
            beds_max: Maximum bedrooms.
            baths_min: Minimum bathrooms.
            baths_max: Maximum bathrooms.
            sqft_min: Minimum living area in square feet.
            sqft_max: Maximum living area in square feet.
            year_built_min: Minimum year built.
            year_built_max: Maximum year built.
            home_types: Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.
            days_on_zillow: Max age of the listing on Zillow.
            max_items: Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row
                returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results,
                switch to POST /v1/search with async: true.
            format_: Response format.
            location: Optional free-text place label (city/ZIP/neighborhood) — a hint only. A ``bbox`` is REQUIRED;
                ``location`` alone returns 400 (missing_input).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: Standard error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.listings_bbox(
                bbox,
                status=status,
                price_min=price_min,
                price_max=price_max,
                beds_min=beds_min,
                beds_max=beds_max,
                baths_min=baths_min,
                baths_max=baths_max,
                sqft_min=sqft_min,
                sqft_max=sqft_max,
                year_built_min=year_built_min,
                year_built_max=year_built_max,
                home_types=home_types,
                days_on_zillow=days_on_zillow,
                max_items=max_items,
                format_=format_,
                location=location,
                request_options=request_options,
            ),
        )

    def listings_for_rent(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.listings_for_rent(body, request_options=request_options))

    def listings_for_sale(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.listings_for_sale(body, request_options=request_options))

    def listings_sold(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.listings_sold(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ListingsWithRawResponse:
        return self._with_raw_response


class AsyncListings:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncListingsWithRawResponse(client, server, auth)

    async def listings_bbox(
        self,
        bbox: str,
        *,
        status: Status1OrStr | None = Status1.FOR_SALE,
        price_min: int | None = None,
        price_max: int | None = None,
        beds_min: int | None = None,
        beds_max: int | None = None,
        baths_min: int | None = None,
        baths_max: int | None = None,
        sqft_min: int | None = None,
        sqft_max: int | None = None,
        year_built_min: int | None = None,
        year_built_max: int | None = None,
        home_types: str | None = None,
        days_on_zillow: DaysOnZillow1OrStr | None = None,
        max_items: int | None = 50,
        format_: FormatOrStr | None = Format.JSON,
        location: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchResultsOk:
        """REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A ``bbox`` (west,south,east,north)
        is REQUIRED — free-text location is not supported. Returns up to ``max_items`` rows synchronously (default 50,
        hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit **per listing returned** — this cost
        is per-result, not per-call, so a full-page search costs up to 50 credits; set ``max_items`` lower to cap it.
        Failed calls are free.

        Args:
            bbox: REQUIRED bounding box as ``west,south,east,north`` (decimal degrees, comma-separated). A free-text
                location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding
                box.
            status: Listing status preset.
            price_min: Minimum price in dollars.
            price_max: Maximum price in dollars.
            beds_min: Minimum bedrooms.
            beds_max: Maximum bedrooms.
            baths_min: Minimum bathrooms.
            baths_max: Maximum bathrooms.
            sqft_min: Minimum living area in square feet.
            sqft_max: Maximum living area in square feet.
            year_built_min: Minimum year built.
            year_built_max: Maximum year built.
            home_types: Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.
            days_on_zillow: Max age of the listing on Zillow.
            max_items: Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row
                returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results,
                switch to POST /v1/search with async: true.
            format_: Response format.
            location: Optional free-text place label (city/ZIP/neighborhood) — a hint only. A ``bbox`` is REQUIRED;
                ``location`` alone returns 400 (missing_input).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: Standard error ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.listings_bbox(
                bbox,
                status=status,
                price_min=price_min,
                price_max=price_max,
                beds_min=beds_min,
                beds_max=beds_max,
                baths_min=baths_min,
                baths_max=baths_max,
                sqft_min=sqft_min,
                sqft_max=sqft_max,
                year_built_min=year_built_min,
                year_built_max=year_built_max,
                home_types=home_types,
                days_on_zillow=days_on_zillow,
                max_items=max_items,
                format_=format_,
                location=location,
                request_options=request_options,
            ),
        )

    async def listings_for_rent(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.listings_for_rent(body, request_options=request_options))

    async def listings_for_sale(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.listings_for_sale(body, request_options=request_options))

    async def listings_sold(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SearchResultsOk:
        """Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Search rows (sync). Note: the search-row shape (SearchResultRow) is NOT the same as the detail Property
            shape returned by the property endpoints.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.listings_sold(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncListingsWithRawResponse:
        return self._with_raw_response


class ListingsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def listings_bbox(
        self,
        bbox: str,
        *,
        status: Status1OrStr | None = Status1.FOR_SALE,
        price_min: int | None = None,
        price_max: int | None = None,
        beds_min: int | None = None,
        beds_max: int | None = None,
        baths_min: int | None = None,
        baths_max: int | None = None,
        sqft_min: int | None = None,
        sqft_max: int | None = None,
        year_built_min: int | None = None,
        year_built_max: int | None = None,
        home_types: str | None = None,
        days_on_zillow: DaysOnZillow1OrStr | None = None,
        max_items: int | None = 50,
        format_: FormatOrStr | None = Format.JSON,
        location: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultsOk, ListingsBboxErrorBody]:
        """REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A ``bbox`` (west,south,east,north)
        is REQUIRED — free-text location is not supported. Returns up to ``max_items`` rows synchronously (default 50,
        hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit **per listing returned** — this cost
        is per-result, not per-call, so a full-page search costs up to 50 credits; set ``max_items`` lower to cap it.
        Failed calls are free.

        Args:
            bbox: REQUIRED bounding box as ``west,south,east,north`` (decimal degrees, comma-separated). A free-text
                location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding
                box.
            status: Listing status preset.
            price_min: Minimum price in dollars.
            price_max: Maximum price in dollars.
            beds_min: Minimum bedrooms.
            beds_max: Maximum bedrooms.
            baths_min: Minimum bathrooms.
            baths_max: Maximum bathrooms.
            sqft_min: Minimum living area in square feet.
            sqft_max: Maximum living area in square feet.
            year_built_min: Minimum year built.
            year_built_max: Maximum year built.
            home_types: Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.
            days_on_zillow: Max age of the listing on Zillow.
            max_items: Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row
                returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results,
                switch to POST /v1/search with async: true.
            format_: Response format.
            location: Optional free-text place label (city/ZIP/neighborhood) — a hint only. A ``bbox`` is REQUIRED;
                ``location`` alone returns 400 (missing_input).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/listings"),
            query_params=[
                param[str]("bbox", bbox),
                param[Status1OrStr | None]("status", status),
                param[int | None]("price_min", price_min),
                param[int | None]("price_max", price_max),
                param[int | None]("beds_min", beds_min),
                param[int | None]("beds_max", beds_max),
                param[int | None]("baths_min", baths_min),
                param[int | None]("baths_max", baths_max),
                param[int | None]("sqft_min", sqft_min),
                param[int | None]("sqft_max", sqft_max),
                param[int | None]("year_built_min", year_built_min),
                param[int | None]("year_built_max", year_built_max),
                param[str | None]("home_types", home_types),
                param[DaysOnZillow1OrStr | None]("days_on_zillow", days_on_zillow),
                param[int | None]("max_items", max_items),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("location", location),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResultsOk],
            error_mapper=listings_bbox_error_mapper,
            request_options=request_options,
        )

    def listings_for_rent(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, RawError]:
        """Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/listings/for-rent"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResultsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def listings_for_sale(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, RawError]:
        """Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/listings/for-sale"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResultsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def listings_sold(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, RawError]:
        """Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/listings/sold"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SearchResultsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncListingsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def listings_bbox(
        self,
        bbox: str,
        *,
        status: Status1OrStr | None = Status1.FOR_SALE,
        price_min: int | None = None,
        price_max: int | None = None,
        beds_min: int | None = None,
        beds_max: int | None = None,
        baths_min: int | None = None,
        baths_max: int | None = None,
        sqft_min: int | None = None,
        sqft_max: int | None = None,
        year_built_min: int | None = None,
        year_built_max: int | None = None,
        home_types: str | None = None,
        days_on_zillow: DaysOnZillow1OrStr | None = None,
        max_items: int | None = 50,
        format_: FormatOrStr | None = Format.JSON,
        location: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchResultsOk, ListingsBboxErrorBody]:
        """REST GET wrapper over /v1/search for one-line curl or agent-toolchain use. A ``bbox`` (west,south,east,north)
        is REQUIRED — free-text location is not supported. Returns up to ``max_items`` rows synchronously (default 50,
        hard cap 50); for more, use POST /v1/search with async. Billed at 1 credit **per listing returned** — this cost
        is per-result, not per-call, so a full-page search costs up to 50 credits; set ``max_items`` lower to cap it.
        Failed calls are free.

        Args:
            bbox: REQUIRED bounding box as ``west,south,east,north`` (decimal degrees, comma-separated). A free-text
                location alone is not accepted and returns 400 missing_input; the search engine needs a real bounding
                box.
            status: Listing status preset.
            price_min: Minimum price in dollars.
            price_max: Maximum price in dollars.
            beds_min: Minimum bedrooms.
            beds_max: Maximum bedrooms.
            baths_min: Minimum bathrooms.
            baths_max: Maximum bathrooms.
            sqft_min: Minimum living area in square feet.
            sqft_max: Maximum living area in square feet.
            year_built_min: Minimum year built.
            year_built_max: Maximum year built.
            home_types: Comma-separated home types: house,condo,townhouse,multi_family,manufactured,lot,apartment.
            days_on_zillow: Max age of the listing on Zillow.
            max_items: Maximum rows to return in sync mode (default 50, hard cap 50). Billing is 1 credit per row
                returned, so this is your cost cap — e.g. max_items=5 costs at most 5 credits. For more than 50 results,
                switch to POST /v1/search with async: true.
            format_: Response format.
            location: Optional free-text place label (city/ZIP/neighborhood) — a hint only. A ``bbox`` is REQUIRED;
                ``location`` alone returns 400 (missing_input).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/listings"),
            query_params=[
                param[str]("bbox", bbox),
                param[Status1OrStr | None]("status", status),
                param[int | None]("price_min", price_min),
                param[int | None]("price_max", price_max),
                param[int | None]("beds_min", beds_min),
                param[int | None]("beds_max", beds_max),
                param[int | None]("baths_min", baths_min),
                param[int | None]("baths_max", baths_max),
                param[int | None]("sqft_min", sqft_min),
                param[int | None]("sqft_max", sqft_max),
                param[int | None]("year_built_min", year_built_min),
                param[int | None]("year_built_max", year_built_max),
                param[str | None]("home_types", home_types),
                param[DaysOnZillow1OrStr | None]("days_on_zillow", days_on_zillow),
                param[int | None]("max_items", max_items),
                param[FormatOrStr | None]("format", format_),
                param[str | None]("location", location),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResultsOk],
            error_mapper=listings_bbox_error_mapper,
            request_options=request_options,
        )

    async def listings_for_rent(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, RawError]:
        """Search for-rent listings within a bounding box (status forced to for_rent). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/listings/for-rent"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResultsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def listings_for_sale(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, RawError]:
        """Search for-sale listings within a bounding box (status forced to for_sale). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/listings/for-sale"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResultsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def listings_sold(
        self, body: SearchRequest2 | SearchRequest2Dict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SearchResultsOk, RawError]:
        """Search recently-sold listings within a bounding box (status forced to sold). Same body as POST /v1/search; a
        ``bbox`` or ``searchUrls`` is required. Billed at 1 credit per listing returned; failed calls are free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/listings/sold"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SearchRequest2 | SearchRequest2Dict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SearchResultsOk],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
