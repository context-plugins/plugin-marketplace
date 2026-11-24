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
from ..errors.models_models_get_error import ModelsModelsGetErrorBody, models_models_get_error_mapper
from ..server.server import Server


class ModelsApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ModelsApiWithRawResponse(client, server)

    def models_models_get(
        self,
        *,
        q: str | None = None,
        provider: str | None = None,
        max_input_price: float | None = None,
        min_context: int | None = None,
        needs_vision: bool | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Search current AI models by price, context, capability. Cheapest first. (Requires API key.)

        Args:
            q: match model name/id
            provider: openai, anthropic, google, ...
            max_input_price: max USD per 1M input tokens
            min_context: min context window in tokens
            needs_vision: only models that accept images
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
            self._with_raw_response.models_models_get(
                q=q,
                provider=provider,
                max_input_price=max_input_price,
                min_context=min_context,
                needs_vision=needs_vision,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ModelsApiWithRawResponse:
        return self._with_raw_response


class AsyncModelsApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncModelsApiWithRawResponse(client, server)

    async def models_models_get(
        self,
        *,
        q: str | None = None,
        provider: str | None = None,
        max_input_price: float | None = None,
        min_context: int | None = None,
        needs_vision: bool | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Search current AI models by price, context, capability. Cheapest first. (Requires API key.)

        Args:
            q: match model name/id
            provider: openai, anthropic, google, ...
            max_input_price: max USD per 1M input tokens
            min_context: min context window in tokens
            needs_vision: only models that accept images
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
            await self._with_raw_response.models_models_get(
                q=q,
                provider=provider,
                max_input_price=max_input_price,
                min_context=min_context,
                needs_vision=needs_vision,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncModelsApiWithRawResponse:
        return self._with_raw_response


class ModelsApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def models_models_get(
        self,
        *,
        q: str | None = None,
        provider: str | None = None,
        max_input_price: float | None = None,
        min_context: int | None = None,
        needs_vision: bool | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ModelsModelsGetErrorBody]:
        """Search current AI models by price, context, capability. Cheapest first. (Requires API key.)

        Args:
            q: match model name/id
            provider: openai, anthropic, google, ...
            max_input_price: max USD per 1M input tokens
            min_context: min context window in tokens
            needs_vision: only models that accept images
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
            url_template=self._server.default("/models"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("provider", provider),
                param[float | None]("max_input_price", max_input_price),
                param[int | None]("min_context", min_context),
                param[bool | None]("needs_vision", needs_vision),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=models_models_get_error_mapper,
            request_options=request_options,
        )


class AsyncModelsApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def models_models_get(
        self,
        *,
        q: str | None = None,
        provider: str | None = None,
        max_input_price: float | None = None,
        min_context: int | None = None,
        needs_vision: bool | None = None,
        limit: int | None = 50,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, ModelsModelsGetErrorBody]:
        """Search current AI models by price, context, capability. Cheapest first. (Requires API key.)

        Args:
            q: match model name/id
            provider: openai, anthropic, google, ...
            max_input_price: max USD per 1M input tokens
            min_context: min context window in tokens
            needs_vision: only models that accept images
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
            url_template=self._server.default("/models"),
            query_params=[
                param[str | None]("q", q),
                param[str | None]("provider", provider),
                param[float | None]("max_input_price", max_input_price),
                param[int | None]("min_context", min_context),
                param[bool | None]("needs_vision", needs_vision),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=models_models_get_error_mapper,
            request_options=request_options,
        )
