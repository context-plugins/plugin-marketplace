from __future__ import annotations

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    unwrap,
)
from ..errors.get_open_api_spec_error import GetOpenApiSpecErrorBody, get_open_api_spec_error_mapper
from ..errors.get_status_error import GetStatusErrorBody, get_status_error_mapper
from ..models.openapi_json_response import OpenapiJsonResponse
from ..models.status_response import StatusResponse
from ..server.server import Server


class StatusApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = StatusApiWithRawResponse(client, server)

    def get_open_api_spec(self, *, request_options: RequestOptionsOrDict | None = None) -> OpenapiJsonResponse:
        """Retrieve the machine-readable description of this API. Requires no authentication. Also served from
        ``https://www.cosmicjs.com/openapi.json``, which proxies this endpoint.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The OpenAPI 3.1 document describing this API.

        Raises:
            ApiError: Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_open_api_spec(request_options=request_options))

    def get_status(self, *, request_options: RequestOptionsOrDict | None = None) -> StatusResponse:
        """Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it
        is safe to use as a connectivity check before supplying keys.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The API is reachable.

        Raises:
            ApiError: Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_status(request_options=request_options))

    @property
    def with_raw_response(self) -> StatusApiWithRawResponse:
        return self._with_raw_response


class AsyncStatusApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncStatusApiWithRawResponse(client, server)

    async def get_open_api_spec(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> OpenapiJsonResponse:
        """Retrieve the machine-readable description of this API. Requires no authentication. Also served from
        ``https://www.cosmicjs.com/openapi.json``, which proxies this endpoint.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The OpenAPI 3.1 document describing this API.

        Raises:
            ApiError: Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_open_api_spec(request_options=request_options))

    async def get_status(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> StatusResponse:
        """Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it
        is safe to use as a connectivity check before supplying keys.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The API is reachable.

        Raises:
            ApiError: Something went wrong on the Cosmic side. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_status(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncStatusApiWithRawResponse:
        return self._with_raw_response


class StatusApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_open_api_spec(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OpenapiJsonResponse, GetOpenApiSpecErrorBody]:
        """Retrieve the machine-readable description of this API. Requires no authentication. Also served from
        ``https://www.cosmicjs.com/openapi.json``, which proxies this endpoint.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/openapi.json"),
            decoder=json_decoder[OpenapiJsonResponse],
            error_mapper=get_open_api_spec_error_mapper,
            request_options=request_options,
        )

    def get_status(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusResponse, GetStatusErrorBody]:
        """Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it
        is safe to use as a connectivity check before supplying keys.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/status"),
            decoder=json_decoder[StatusResponse],
            error_mapper=get_status_error_mapper,
            request_options=request_options,
        )


class AsyncStatusApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_open_api_spec(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[OpenapiJsonResponse, GetOpenApiSpecErrorBody]:
        """Retrieve the machine-readable description of this API. Requires no authentication. Also served from
        ``https://www.cosmicjs.com/openapi.json``, which proxies this endpoint.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/openapi.json"),
            decoder=async_json_decoder[OpenapiJsonResponse],
            error_mapper=get_open_api_spec_error_mapper,
            request_options=request_options,
        )

    async def get_status(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusResponse, GetStatusErrorBody]:
        """Confirm the API is reachable and learn which AWS region served the request. Requires no authentication, so it
        is safe to use as a connectivity check before supplying keys.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/status"),
            decoder=async_json_decoder[StatusResponse],
            error_mapper=get_status_error_mapper,
            request_options=request_options,
        )
