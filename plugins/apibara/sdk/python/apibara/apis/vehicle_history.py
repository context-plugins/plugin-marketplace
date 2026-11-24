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
from ..errors.get_vehicle_history_error import GetVehicleHistoryErrorBody, get_vehicle_history_error_mapper
from ..models.vehicle_history_response import VehicleHistoryResponse
from ..server.server import Server


class VehicleHistory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = VehicleHistoryWithRawResponse(client, server, auth)

    def get_vehicle_history(
        self,
        slug_vin: str,
        *,
        per_page: int | None = 20,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VehicleHistoryResponse:
        """Get auction history records for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            per_page: Number of records per page. Maximum: 20.
            cursor: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated vehicle auction history records.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_history(
                slug_vin, per_page=per_page, cursor=cursor, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VehicleHistoryWithRawResponse:
        return self._with_raw_response


class AsyncVehicleHistory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncVehicleHistoryWithRawResponse(client, server, auth)

    async def get_vehicle_history(
        self,
        slug_vin: str,
        *,
        per_page: int | None = 20,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VehicleHistoryResponse:
        """Get auction history records for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            per_page: Number of records per page. Maximum: 20.
            cursor: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated vehicle auction history records.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_history(
                slug_vin, per_page=per_page, cursor=cursor, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVehicleHistoryWithRawResponse:
        return self._with_raw_response


class VehicleHistoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_history(
        self,
        slug_vin: str,
        *,
        per_page: int | None = 20,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VehicleHistoryResponse, GetVehicleHistoryErrorBody]:
        """Get auction history records for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            per_page: Number of records per page. Maximum: 20.
            cursor: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/history"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[int | None]("per_page", per_page), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehicleHistoryResponse],
            error_mapper=get_vehicle_history_error_mapper,
            request_options=request_options,
        )


class AsyncVehicleHistoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_history(
        self,
        slug_vin: str,
        *,
        per_page: int | None = 20,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VehicleHistoryResponse, GetVehicleHistoryErrorBody]:
        """Get auction history records for a vehicle by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            per_page: Number of records per page. Maximum: 20.
            cursor: Cursor for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/history"),
            path_params=[param[str]("slugVin", slug_vin)],
            query_params=[param[int | None]("per_page", per_page), param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehicleHistoryResponse],
            error_mapper=get_vehicle_history_error_mapper,
            request_options=request_options,
        )
