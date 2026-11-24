from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_auction_locations_error import ListAuctionLocationsErrorBody, list_auction_locations_error_mapper
from ..models.enums.platform import PlatformOrStr
from ..models.enums.units import Units, UnitsOrStr
from ..models.locations_response import LocationsResponse
from ..server.server import Server


class Locations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LocationsWithRawResponse(client, server, auth)

    def list_auction_locations(
        self,
        *,
        platform: PlatformOrStr | None = None,
        state: str | None = None,
        facility_id: str | None = None,
        q: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LocationsResponse:
        """Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.

        Args:
            platform: Auction platform.
            state: State code.
            facility_id: Facility ID.
            q: Search by facility name, city, state code, or ZIP.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Number of records per page. Maximum: 20.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of auction locations.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.list_auction_locations(
                platform=platform,
                state=state,
                facility_id=facility_id,
                q=q,
                zip_=zip_,
                radius=radius,
                units=units,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> LocationsWithRawResponse:
        return self._with_raw_response


class AsyncLocations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLocationsWithRawResponse(client, server, auth)

    async def list_auction_locations(
        self,
        *,
        platform: PlatformOrStr | None = None,
        state: str | None = None,
        facility_id: str | None = None,
        q: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LocationsResponse:
        """Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.

        Args:
            platform: Auction platform.
            state: State code.
            facility_id: Facility ID.
            q: Search by facility name, city, state code, or ZIP.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Number of records per page. Maximum: 20.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated list of auction locations.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.list_auction_locations(
                platform=platform,
                state=state,
                facility_id=facility_id,
                q=q,
                zip_=zip_,
                radius=radius,
                units=units,
                per_page=per_page,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncLocationsWithRawResponse:
        return self._with_raw_response


class LocationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_auction_locations(
        self,
        *,
        platform: PlatformOrStr | None = None,
        state: str | None = None,
        facility_id: str | None = None,
        q: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LocationsResponse, ListAuctionLocationsErrorBody]:
        """Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.

        Args:
            platform: Auction platform.
            state: State code.
            facility_id: Facility ID.
            q: Search by facility name, city, state code, or ZIP.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Number of records per page. Maximum: 20.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/locations"),
            query_params=[
                param[PlatformOrStr | None]("platform", platform),
                param[str | None]("state", state),
                param[str | None]("facility_id", facility_id),
                param[str | None]("q", q),
                param[str | None]("zip", zip_),
                param[float | None]("radius", radius),
                param[UnitsOrStr | None]("units", units),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[LocationsResponse],
            error_mapper=list_auction_locations_error_mapper,
            request_options=request_options,
        )


class AsyncLocationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_auction_locations(
        self,
        *,
        platform: PlatformOrStr | None = None,
        state: str | None = None,
        facility_id: str | None = None,
        q: str | None = None,
        zip_: str | None = None,
        radius: float | None = None,
        units: UnitsOrStr | None = Units.MI,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LocationsResponse, ListAuctionLocationsErrorBody]:
        """Search Copart and IAAI auction locations by platform, state, facility ID, text query, ZIP, and radius.

        Args:
            platform: Auction platform.
            state: State code.
            facility_id: Facility ID.
            q: Search by facility name, city, state code, or ZIP.
            zip_: ZIP code for location-based search.
            radius: Search radius around ZIP.
            units: Distance units.
            per_page: Number of records per page. Maximum: 20.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/locations"),
            query_params=[
                param[PlatformOrStr | None]("platform", platform),
                param[str | None]("state", state),
                param[str | None]("facility_id", facility_id),
                param[str | None]("q", q),
                param[str | None]("zip", zip_),
                param[float | None]("radius", radius),
                param[UnitsOrStr | None]("units", units),
                param[int | None]("per_page", per_page),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[LocationsResponse],
            error_mapper=list_auction_locations_error_mapper,
            request_options=request_options,
        )
