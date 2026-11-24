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
from ..errors.get_auction_to_port_shipping_error import (
    GetAuctionToPortShippingErrorBody,
    get_auction_to_port_shipping_error_mapper,
)
from ..errors.get_vehicle_shipping_error import GetVehicleShippingErrorBody, get_vehicle_shipping_error_mapper
from ..models.shipping_response import ShippingResponse
from ..server.server import Server


class Shipping:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ShippingWithRawResponse(client, server, auth)

    def get_auction_to_port_shipping(
        self,
        *,
        vin: str | None = None,
        lot_number: str | None = None,
        ports: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ShippingResponse:
        """Get delivery prices from auction location to one or more destination ports by VIN or lot number.

        Args:
            vin: Vehicle VIN.
            lot_number: Auction lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Auction-to-port shipping prices.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_auction_to_port_shipping(
                vin=vin, lot_number=lot_number, ports=ports, request_options=request_options
            ),
        )

    def get_vehicle_shipping(
        self, slug_vin: str, *, ports: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ShippingResponse:
        """Get auction-to-port shipping prices for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Shipping prices for the selected vehicle.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_shipping(slug_vin, ports=ports, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ShippingWithRawResponse:
        return self._with_raw_response


class AsyncShipping:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncShippingWithRawResponse(client, server, auth)

    async def get_auction_to_port_shipping(
        self,
        *,
        vin: str | None = None,
        lot_number: str | None = None,
        ports: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ShippingResponse:
        """Get delivery prices from auction location to one or more destination ports by VIN or lot number.

        Args:
            vin: Vehicle VIN.
            lot_number: Auction lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Auction-to-port shipping prices.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_auction_to_port_shipping(
                vin=vin, lot_number=lot_number, ports=ports, request_options=request_options
            ),
        )

    async def get_vehicle_shipping(
        self, slug_vin: str, *, ports: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ShippingResponse:
        """Get auction-to-port shipping prices for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Shipping prices for the selected vehicle.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_shipping(slug_vin, ports=ports, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncShippingWithRawResponse:
        return self._with_raw_response


class ShippingWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_auction_to_port_shipping(
        self,
        *,
        vin: str | None = None,
        lot_number: str | None = None,
        ports: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ShippingResponse, GetAuctionToPortShippingErrorBody]:
        """Get delivery prices from auction location to one or more destination ports by VIN or lot number.

        Args:
            vin: Vehicle VIN.
            lot_number: Auction lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/shipping/auction-to-port"),
            query_params=[
                param[str | None]("vin", vin),
                param[str | None]("lot_number", lot_number),
                param[str | None]("ports", ports),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ShippingResponse],
            error_mapper=get_auction_to_port_shipping_error_mapper,
            request_options=request_options,
        )

    def get_vehicle_shipping(
        self, slug_vin: str, *, ports: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ShippingResponse, GetVehicleShippingErrorBody]:
        """Get auction-to-port shipping prices for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/shipping"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[str | None]("ports", ports)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ShippingResponse],
            error_mapper=get_vehicle_shipping_error_mapper,
            request_options=request_options,
        )


class AsyncShippingWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_auction_to_port_shipping(
        self,
        *,
        vin: str | None = None,
        lot_number: str | None = None,
        ports: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ShippingResponse, GetAuctionToPortShippingErrorBody]:
        """Get delivery prices from auction location to one or more destination ports by VIN or lot number.

        Args:
            vin: Vehicle VIN.
            lot_number: Auction lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/shipping/auction-to-port"),
            query_params=[
                param[str | None]("vin", vin),
                param[str | None]("lot_number", lot_number),
                param[str | None]("ports", ports),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ShippingResponse],
            error_mapper=get_auction_to_port_shipping_error_mapper,
            request_options=request_options,
        )

    async def get_vehicle_shipping(
        self, slug_vin: str, *, ports: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ShippingResponse, GetVehicleShippingErrorBody]:
        """Get auction-to-port shipping prices for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            ports: Comma-separated list of destination ports to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/shipping"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[str | None]("ports", ports)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ShippingResponse],
            error_mapper=get_vehicle_shipping_error_mapper,
            request_options=request_options,
        )
