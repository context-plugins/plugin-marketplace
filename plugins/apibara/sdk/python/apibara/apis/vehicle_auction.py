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
from ..errors.get_vehicle_seller_reserve_error import (
    GetVehicleSellerReserveErrorBody,
    get_vehicle_seller_reserve_error_mapper,
)
from ..models.vehicles_reserve_response import VehiclesReserveResponse
from ..server.server import Server


class VehicleAuction:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VehicleAuctionWithRawResponse(client, server, auth)

    def get_vehicle_seller_reserve(
        self,
        slug_vin: str,
        *,
        include_events: bool | None = False,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VehiclesReserveResponse:
        """Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold
        bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve
        was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.

        Args:
            slug_vin: Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug.
            include_events: Include recent reserve observations.
            limit: Maximum number of events.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Seller reserve status, observed limits and optional events

        Raises:
            ApiError: API key is missing or invalid Resource not found in the currently available dataset. Does not
                imply a plan upgrade is required. Plan request quota or rate limit reached ``error`` is ``ApiErrorModel
                | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_seller_reserve(
                slug_vin, include_events=include_events, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VehicleAuctionWithRawResponse:
        return self._with_raw_response


class AsyncVehicleAuction:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVehicleAuctionWithRawResponse(client, server, auth)

    async def get_vehicle_seller_reserve(
        self,
        slug_vin: str,
        *,
        include_events: bool | None = False,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VehiclesReserveResponse:
        """Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold
        bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve
        was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.

        Args:
            slug_vin: Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug.
            include_events: Include recent reserve observations.
            limit: Maximum number of events.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Seller reserve status, observed limits and optional events

        Raises:
            ApiError: API key is missing or invalid Resource not found in the currently available dataset. Does not
                imply a plan upgrade is required. Plan request quota or rate limit reached ``error`` is ``ApiErrorModel
                | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_seller_reserve(
                slug_vin, include_events=include_events, limit=limit, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVehicleAuctionWithRawResponse:
        return self._with_raw_response


class VehicleAuctionWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_seller_reserve(
        self,
        slug_vin: str,
        *,
        include_events: bool | None = False,
        limit: int | None = 50,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VehiclesReserveResponse, GetVehicleSellerReserveErrorBody]:
        """Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold
        bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve
        was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.

        Args:
            slug_vin: Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug.
            include_events: Include recent reserve observations.
            limit: Maximum number of events.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/reserve"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[bool | None]("include_events", include_events), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehiclesReserveResponse],
            error_mapper=get_vehicle_seller_reserve_error_mapper,
            request_options=request_options,
        )


class AsyncVehicleAuctionWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_seller_reserve(
        self,
        slug_vin: str,
        *,
        include_events: bool | None = False,
        limit: int | None = 50,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VehiclesReserveResponse, GetVehicleSellerReserveErrorBody]:
        """Returns source-backed reserve price only when explicitly disclosed, otherwise null; observed bid threshold
        bounds are shown separately and only when confirmed by bid-crossing evidence. Reserve Off may mean the reserve
        was removed. Include_events=1 adds recent observation history. This endpoint consumes one standard API request.

        Args:
            slug_vin: Vehicle VIN, lot number, LOT-IAAI-<lot> or lot slug.
            include_events: Include recent reserve observations.
            limit: Maximum number of events.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/reserve"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[bool | None]("include_events", include_events), param[int | None]("limit", limit)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehiclesReserveResponse],
            error_mapper=get_vehicle_seller_reserve_error_mapper,
            request_options=request_options,
        )
