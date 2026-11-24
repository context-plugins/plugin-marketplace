from __future__ import annotations

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
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.get_api_v1_results_resultid_response import GetApiV1ResultsResultidResponse
from ..server.server import Server


class Results:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResultsWithRawResponse(client, server, auth)

    def get_api_v1_results_result_id(
        self, result_id: str, *, include_html: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> GetApiV1ResultsResultidResponse:
        """Send a ``GET`` request.

        Args:
            result_id: Value sent with the request.
            include_html: Includes stored HTML.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success (status as documented)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_results_result_id(
                result_id, include_html=include_html, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ResultsWithRawResponse:
        return self._with_raw_response


class AsyncResults:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResultsWithRawResponse(client, server, auth)

    async def get_api_v1_results_result_id(
        self,
        result_id: str,
        *,
        include_html: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetApiV1ResultsResultidResponse:
        """Send a ``GET`` request.

        Args:
            result_id: Value sent with the request.
            include_html: Includes stored HTML.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success (status as documented)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_results_result_id(
                result_id, include_html=include_html, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncResultsWithRawResponse:
        return self._with_raw_response


class ResultsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_results_result_id(
        self, result_id: str, *, include_html: bool | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetApiV1ResultsResultidResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            result_id: Value sent with the request.
            include_html: Includes stored HTML.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/results/{resultId}"),
            path_params=[param[str]("resultId", result_id)],
            query_params=[param[bool | None]("include_html", include_html)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[GetApiV1ResultsResultidResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncResultsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_results_result_id(
        self,
        result_id: str,
        *,
        include_html: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetApiV1ResultsResultidResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            result_id: Value sent with the request.
            include_html: Includes stored HTML.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/results/{resultId}"),
            path_params=[param[str]("resultId", result_id)],
            query_params=[param[bool | None]("include_html", include_html)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[GetApiV1ResultsResultidResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
