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
from ..errors.get_related_vehicles_error import GetRelatedVehiclesErrorBody, get_related_vehicles_error_mapper
from ..models.vehicle_list_response import VehicleListResponse
from ..server.server import Server


class RelatedVehicles:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RelatedVehiclesWithRawResponse(client, server, auth)

    def get_related_vehicles(
        self, slug_vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VehicleListResponse:
        """Get related or similar auction vehicles by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Related auction vehicle records.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.get_related_vehicles(slug_vin, request_options=request_options))

    @property
    def with_raw_response(self) -> RelatedVehiclesWithRawResponse:
        return self._with_raw_response


class AsyncRelatedVehicles:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRelatedVehiclesWithRawResponse(client, server, auth)

    async def get_related_vehicles(
        self, slug_vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VehicleListResponse:
        """Get related or similar auction vehicles by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Related auction vehicle records.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.get_related_vehicles(slug_vin, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncRelatedVehiclesWithRawResponse:
        return self._with_raw_response


class RelatedVehiclesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_related_vehicles(
        self, slug_vin: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VehicleListResponse, GetRelatedVehiclesErrorBody]:
        """Get related or similar auction vehicles by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/related"),
            path_params=[param[str]("slugVin", slug_vin)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehicleListResponse],
            error_mapper=get_related_vehicles_error_mapper,
            request_options=request_options,
        )


class AsyncRelatedVehiclesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_related_vehicles(
        self, slug_vin: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VehicleListResponse, GetRelatedVehiclesErrorBody]:
        """Get related or similar auction vehicles by VIN or lot number.

        Args:
            slug_vin: Vehicle identifier. Accepts a 17-character VIN, canonical lot number, Apibara slug_vin returned by
                list responses, or an IAAI source stock number in 1110xxxxxxxx form. IAAI 1110xxxxxxxx is normalized to
                the canonical 8-digit lot number.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/{slugVin}/related"),
            path_params=[param[str]("slugVin", slug_vin)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehicleListResponse],
            error_mapper=get_related_vehicles_error_mapper,
            request_options=request_options,
        )
