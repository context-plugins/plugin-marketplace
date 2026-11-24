from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.wildfires_wildfires_get_error import WildfiresWildfiresGetErrorBody, wildfires_wildfires_get_error_mapper
from ..server.server import Server


class Wildfires:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WildfiresWithRawResponse(client, server)

    def wildfires_wildfires_get(
        self,
        *,
        state: str | None = None,
        only_uncontained: bool | None = False,
        min_acres: float | None = 0.0,
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and location. The
        'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)

        Args:
            state: filter to a US state, e.g. CA, TX (2-letter)
            only_uncontained: only fires below 100% containment
            min_acres: minimum incident size in acres
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.wildfires_wildfires_get(
                state=state,
                only_uncontained=only_uncontained,
                min_acres=min_acres,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> WildfiresWithRawResponse:
        return self._with_raw_response


class AsyncWildfires:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWildfiresWithRawResponse(client, server)

    async def wildfires_wildfires_get(
        self,
        *,
        state: str | None = None,
        only_uncontained: bool | None = False,
        min_acres: float | None = 0.0,
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and location. The
        'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)

        Args:
            state: filter to a US state, e.g. CA, TX (2-letter)
            only_uncontained: only fires below 100% containment
            min_acres: minimum incident size in acres
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.wildfires_wildfires_get(
                state=state,
                only_uncontained=only_uncontained,
                min_acres=min_acres,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWildfiresWithRawResponse:
        return self._with_raw_response


class WildfiresWithRawResponse(BaseRawResponse[RawClient, Server]):
    def wildfires_wildfires_get(
        self,
        *,
        state: str | None = None,
        only_uncontained: bool | None = False,
        min_acres: float | None = 0.0,
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WildfiresWildfiresGetErrorBody]:
        """Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and location. The
        'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)

        Args:
            state: filter to a US state, e.g. CA, TX (2-letter)
            only_uncontained: only fires below 100% containment
            min_acres: minimum incident size in acres
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/wildfires"),
            query_params=[
                param[str | None]("state", state),
                param[bool | None]("only_uncontained", only_uncontained),
                param[float | None]("min_acres", min_acres),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=wildfires_wildfires_get_error_mapper,
            request_options=request_options,
        )


class AsyncWildfiresWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def wildfires_wildfires_get(
        self,
        *,
        state: str | None = None,
        only_uncontained: bool | None = False,
        min_acres: float | None = 0.0,
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, WildfiresWildfiresGetErrorBody]:
        """Active US wildfires (NIFC WFIGS) — incident name, size in acres, % contained, cause, state and location. The
        'how big / how contained' detail hotspot feeds can't give. Largest first. (Requires API key.)

        Args:
            state: filter to a US state, e.g. CA, TX (2-letter)
            only_uncontained: only fires below 100% containment
            min_acres: minimum incident size in acres
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/wildfires"),
            query_params=[
                param[str | None]("state", state),
                param[bool | None]("only_uncontained", only_uncontained),
                param[float | None]("min_acres", min_acres),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=wildfires_wildfires_get_error_mapper,
            request_options=request_options,
        )
