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
from ..errors.recalls_recalls_get_error import RecallsRecallsGetErrorBody, recalls_recalls_get_error_mapper
from ..server.server import Server


class Recalls:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RecallsWithRawResponse(client, server)

    def recalls_recalls_get(
        self,
        *,
        query: str | None = "",
        category: str | None = "all",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """US product recalls — food, drug & medical-device enforcement reports (openFDA, keyless, CC0). 'Is product X
        recalled right now?' Class I = most serious; most-recent first. (Requires API key.)

        Args:
            query: match the product description (brand/product), or blank for latest
            category: all | food | drug | device
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
            self._with_raw_response.recalls_recalls_get(
                query=query,
                category=category,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RecallsWithRawResponse:
        return self._with_raw_response


class AsyncRecalls:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRecallsWithRawResponse(client, server)

    async def recalls_recalls_get(
        self,
        *,
        query: str | None = "",
        category: str | None = "all",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """US product recalls — food, drug & medical-device enforcement reports (openFDA, keyless, CC0). 'Is product X
        recalled right now?' Class I = most serious; most-recent first. (Requires API key.)

        Args:
            query: match the product description (brand/product), or blank for latest
            category: all | food | drug | device
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
            await self._with_raw_response.recalls_recalls_get(
                query=query,
                category=category,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRecallsWithRawResponse:
        return self._with_raw_response


class RecallsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def recalls_recalls_get(
        self,
        *,
        query: str | None = "",
        category: str | None = "all",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RecallsRecallsGetErrorBody]:
        """US product recalls — food, drug & medical-device enforcement reports (openFDA, keyless, CC0). 'Is product X
        recalled right now?' Class I = most serious; most-recent first. (Requires API key.)

        Args:
            query: match the product description (brand/product), or blank for latest
            category: all | food | drug | device
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
            url_template=self._server.default("/recalls"),
            query_params=[
                param[str | None]("query", query),
                param[str | None]("category", category),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=recalls_recalls_get_error_mapper,
            request_options=request_options,
        )


class AsyncRecallsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def recalls_recalls_get(
        self,
        *,
        query: str | None = "",
        category: str | None = "all",
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, RecallsRecallsGetErrorBody]:
        """US product recalls — food, drug & medical-device enforcement reports (openFDA, keyless, CC0). 'Is product X
        recalled right now?' Class I = most serious; most-recent first. (Requires API key.)

        Args:
            query: match the product description (brand/product), or blank for latest
            category: all | food | drug | device
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
            url_template=self._server.default("/recalls"),
            query_params=[
                param[str | None]("query", query),
                param[str | None]("category", category),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=recalls_recalls_get_error_mapper,
            request_options=request_options,
        )
