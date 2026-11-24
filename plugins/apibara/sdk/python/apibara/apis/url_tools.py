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
from ..errors.get_vehicle_details_from_url_error import (
    GetVehicleDetailsFromUrlErrorBody,
    get_vehicle_details_from_url_error_mapper,
)
from ..models.vehicle_details_response import VehicleDetailsResponse
from ..server.server import Server


class UrlTools:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = UrlToolsWithRawResponse(client, server, auth)

    def get_vehicle_details_from_url(
        self, url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> VehicleDetailsResponse:
        """Resolve vehicle auction details from a Copart or IAAI vehicle URL.

        Args:
            url: Vehicle URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle details resolved from the URL.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(self._with_raw_response.get_vehicle_details_from_url(url, request_options=request_options))

    @property
    def with_raw_response(self) -> UrlToolsWithRawResponse:
        return self._with_raw_response


class AsyncUrlTools:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncUrlToolsWithRawResponse(client, server, auth)

    async def get_vehicle_details_from_url(
        self, url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> VehicleDetailsResponse:
        """Resolve vehicle auction details from a Copart or IAAI vehicle URL.

        Args:
            url: Vehicle URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Vehicle details resolved from the URL.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(await self._with_raw_response.get_vehicle_details_from_url(url, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncUrlToolsWithRawResponse:
        return self._with_raw_response


class UrlToolsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_details_from_url(
        self, url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[VehicleDetailsResponse, GetVehicleDetailsFromUrlErrorBody]:
        """Resolve vehicle auction details from a Copart or IAAI vehicle URL.

        Args:
            url: Vehicle URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/urltodetails"),
            query_params=[param[str]("url", url)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[VehicleDetailsResponse],
            error_mapper=get_vehicle_details_from_url_error_mapper,
            request_options=request_options,
        )


class AsyncUrlToolsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_details_from_url(
        self, url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[VehicleDetailsResponse, GetVehicleDetailsFromUrlErrorBody]:
        """Resolve vehicle auction details from a Copart or IAAI vehicle URL.

        Args:
            url: Vehicle URL.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/urltodetails"),
            query_params=[param[str]("url", url)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[VehicleDetailsResponse],
            error_mapper=get_vehicle_details_from_url_error_mapper,
            request_options=request_options,
        )
