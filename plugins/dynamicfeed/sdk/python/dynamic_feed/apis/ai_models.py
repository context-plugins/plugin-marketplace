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
from ..errors.ai_models_ep_ai_models_get_error import (
    AiModelsEpAiModelsGetErrorBody,
    ai_models_ep_ai_models_get_error_mapper,
)
from ..server.server import Server


class AiModels:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = AiModelsWithRawResponse(client, server)

    def ai_models_ep_ai_models_get(
        self,
        *,
        query: str | None = None,
        org: str | None = None,
        task: str | None = "text-generation",
        sort: str | None = "trending",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task, popularity,
        release date. Complements /models (closed-flagship pricing & versions). (Requires API key.)

        Args:
            query: search a model name (e.g. llama, qwen, whisper)
            org: filter by org/author (e.g. meta-llama, deepseek-ai)
            task: text-generation (default), text-to-image, ... or 'any'
            sort: trending | newest | downloads
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
            self._with_raw_response.ai_models_ep_ai_models_get(
                query=query,
                org=org,
                task=task,
                sort=sort,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AiModelsWithRawResponse:
        return self._with_raw_response


class AsyncAiModels:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncAiModelsWithRawResponse(client, server)

    async def ai_models_ep_ai_models_get(
        self,
        *,
        query: str | None = None,
        org: str | None = None,
        task: str | None = "text-generation",
        sort: str | None = "trending",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task, popularity,
        release date. Complements /models (closed-flagship pricing & versions). (Requires API key.)

        Args:
            query: search a model name (e.g. llama, qwen, whisper)
            org: filter by org/author (e.g. meta-llama, deepseek-ai)
            task: text-generation (default), text-to-image, ... or 'any'
            sort: trending | newest | downloads
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
            await self._with_raw_response.ai_models_ep_ai_models_get(
                query=query,
                org=org,
                task=task,
                sort=sort,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAiModelsWithRawResponse:
        return self._with_raw_response


class AiModelsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def ai_models_ep_ai_models_get(
        self,
        *,
        query: str | None = None,
        org: str | None = None,
        task: str | None = "text-generation",
        sort: str | None = "trending",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AiModelsEpAiModelsGetErrorBody]:
        """Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task, popularity,
        release date. Complements /models (closed-flagship pricing & versions). (Requires API key.)

        Args:
            query: search a model name (e.g. llama, qwen, whisper)
            org: filter by org/author (e.g. meta-llama, deepseek-ai)
            task: text-generation (default), text-to-image, ... or 'any'
            sort: trending | newest | downloads
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
            url_template=self._server.default("/ai-models"),
            query_params=[
                param[str | None]("query", query),
                param[str | None]("org", org),
                param[str | None]("task", task),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=ai_models_ep_ai_models_get_error_mapper,
            request_options=request_options,
        )


class AsyncAiModelsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def ai_models_ep_ai_models_get(
        self,
        *,
        query: str | None = None,
        org: str | None = None,
        task: str | None = "text-generation",
        sort: str | None = "trending",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, AiModelsEpAiModelsGetErrorBody]:
        """Current & trending AI models from the open-model ecosystem (Hugging Face) — name, org, task, popularity,
        release date. Complements /models (closed-flagship pricing & versions). (Requires API key.)

        Args:
            query: search a model name (e.g. llama, qwen, whisper)
            org: filter by org/author (e.g. meta-llama, deepseek-ai)
            task: text-generation (default), text-to-image, ... or 'any'
            sort: trending | newest | downloads
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
            url_template=self._server.default("/ai-models"),
            query_params=[
                param[str | None]("query", query),
                param[str | None]("org", org),
                param[str | None]("task", task),
                param[str | None]("sort", sort),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=ai_models_ep_ai_models_get_error_mapper,
            request_options=request_options,
        )
