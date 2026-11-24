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
from ..errors.get_vehicle_filters_error import GetVehicleFiltersErrorBody, get_vehicle_filters_error_mapper
from ..models.filters_response import FiltersResponse
from ..server.server import Server


class Filters:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FiltersWithRawResponse(client, server, auth)

    def get_vehicle_filters(
        self,
        *,
        make: str | None = None,
        series: str | None = None,
        model: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FiltersResponse:
        """Get available filters metadata. With make, returns series/model-family options. With make plus optional
        series and/or model, returns dependent generation options.

        Args:
            make: Vehicle make used to return dependent generation options.
            series: Optional series/model-family context used with make to narrow dependent generation options.
            model: Vehicle model used together with make to return dependent generation options.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available filters metadata.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            self._with_raw_response.get_vehicle_filters(
                make=make, series=series, model=model, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> FiltersWithRawResponse:
        return self._with_raw_response


class AsyncFilters:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFiltersWithRawResponse(client, server, auth)

    async def get_vehicle_filters(
        self,
        *,
        make: str | None = None,
        series: str | None = None,
        model: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> FiltersResponse:
        """Get available filters metadata. With make, returns series/model-family options. With make plus optional
        series and/or model, returns dependent generation options.

        Args:
            make: Vehicle make used to return dependent generation options.
            series: Optional series/model-family context used with make to narrow dependent generation options.
            model: Vehicle model used together with make to return dependent generation options.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Available filters metadata.

        Raises:
            ApiError: Bad request. One or more parameters are invalid. Unauthorized. Missing or invalid X-API-Key.
                Resource not found in the currently available dataset. Does not imply a plan upgrade is required. API
                quota exceeded or rate limit reached. Internal server error. The authenticated key/plan is not allowed
                to perform this request. Request parameters failed validation. The service or an upstream dependency is
                temporarily unavailable. ``error`` is ``ApiErrorModel | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vehicle_filters(
                make=make, series=series, model=model, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFiltersWithRawResponse:
        return self._with_raw_response


class FiltersWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_vehicle_filters(
        self,
        *,
        make: str | None = None,
        series: str | None = None,
        model: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FiltersResponse, GetVehicleFiltersErrorBody]:
        """Get available filters metadata. With make, returns series/model-family options. With make plus optional
        series and/or model, returns dependent generation options.

        Args:
            make: Vehicle make used to return dependent generation options.
            series: Optional series/model-family context used with make to narrow dependent generation options.
            model: Vehicle model used together with make to return dependent generation options.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/filters"),
            query_params=[
                param[str | None]("make", make), param[str | None]("series", series), param[str | None]("model", model)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[FiltersResponse],
            error_mapper=get_vehicle_filters_error_mapper,
            request_options=request_options,
        )


class AsyncFiltersWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_vehicle_filters(
        self,
        *,
        make: str | None = None,
        series: str | None = None,
        model: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[FiltersResponse, GetVehicleFiltersErrorBody]:
        """Get available filters metadata. With make, returns series/model-family options. With make plus optional
        series and/or model, returns dependent generation options.

        Args:
            make: Vehicle make used to return dependent generation options.
            series: Optional series/model-family context used with make to narrow dependent generation options.
            model: Vehicle model used together with make to return dependent generation options.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/vehicles/filters"),
            query_params=[
                param[str | None]("make", make), param[str | None]("series", series), param[str | None]("model", model)
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[FiltersResponse],
            error_mapper=get_vehicle_filters_error_mapper,
            request_options=request_options,
        )
