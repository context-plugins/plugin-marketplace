from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.deleted import Deleted
from ..models.pipeline import Pipeline
from ..models.pipeline_input import PipelineInput, PipelineInputDict
from ..models.pipelines_request import PipelinesRequest, PipelinesRequestDict
from ..models.pipelines_stages_reorder_request import PipelinesStagesReorderRequest, PipelinesStagesReorderRequestDict
from ..models.pipelines_stages_request import PipelinesStagesRequest, PipelinesStagesRequestDict
from ..models.pipelines_stages_request1 import PipelinesStagesRequest1, PipelinesStagesRequest1Dict
from ..server.server import Server


class Pipelines:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PipelinesWithRawResponse(client, server, auth)

    def add_stage(
        self,
        key: str,
        body: PipelinesStagesRequest | PipelinesStagesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.add_stage(key, body, request_options=request_options))

    def create_pipeline(
        self, body: PipelineInput | PipelineInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_pipeline(body, request_options=request_options))

    def delete_pipeline(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_pipeline(key, request_options=request_options))

    def delete_stage(self, key: str, stage: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_stage(key, stage, request_options=request_options))

    def get_pipeline(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline:
        """Send a ``GET`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_pipeline(key, request_options=request_options))

    def list_pipelines(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipelines

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_pipelines(request_options=request_options))

    def reorder_stages(
        self,
        key: str,
        body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.reorder_stages(key, body, request_options=request_options))

    def set_default_pipeline(self, key: str, *, request_options: RequestOptionsOrDict | None = None) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.set_default_pipeline(key, request_options=request_options))

    def update_pipeline(
        self,
        key: str,
        body: PipelinesRequest | PipelinesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``PATCH`` request.

        Args:
            key: Pipeline key or pl_ id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_pipeline(key, body, request_options=request_options))

    def update_stage(
        self,
        key: str,
        stage: str,
        body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_stage(key, stage, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PipelinesWithRawResponse:
        return self._with_raw_response


class AsyncPipelines:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPipelinesWithRawResponse(client, server, auth)

    async def add_stage(
        self,
        key: str,
        body: PipelinesStagesRequest | PipelinesStagesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.add_stage(key, body, request_options=request_options))

    async def create_pipeline(
        self, body: PipelineInput | PipelineInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_pipeline(body, request_options=request_options))

    async def delete_pipeline(self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_pipeline(key, request_options=request_options))

    async def delete_stage(
        self, key: str, stage: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Pipeline:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_stage(key, stage, request_options=request_options))

    async def get_pipeline(self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Pipeline:
        """Send a ``GET`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_pipeline(key, request_options=request_options))

    async def list_pipelines(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipelines

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_pipelines(request_options=request_options))

    async def reorder_stages(
        self,
        key: str,
        body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.reorder_stages(key, body, request_options=request_options))

    async def set_default_pipeline(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Pipeline:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.set_default_pipeline(key, request_options=request_options))

    async def update_pipeline(
        self,
        key: str,
        body: PipelinesRequest | PipelinesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``PATCH`` request.

        Args:
            key: Pipeline key or pl_ id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_pipeline(key, body, request_options=request_options))

    async def update_stage(
        self,
        key: str,
        stage: str,
        body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Pipeline:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_stage(key, stage, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPipelinesWithRawResponse:
        return self._with_raw_response


class PipelinesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_stage(
        self,
        key: str,
        body: PipelinesStagesRequest | PipelinesStagesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines/{key}/stages"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesStagesRequest | PipelinesStagesRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_pipeline(
        self, body: PipelineInput | PipelineInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineInput | PipelineInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_pipeline(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/pipelines/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_stage(
        self, key: str, stage: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/pipelines/{key}/stages/{stage}"),
            path_params=[param[str]("key", key), param[str]("stage", stage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pipeline(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``GET`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pipelines/{key}"),
            path_params=[param[str]("key", key)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_pipelines(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pipelines"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def reorder_stages(
        self,
        key: str,
        body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines/{key}/stages/reorder"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def set_default_pipeline(
        self, key: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines/{key}/default"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_pipeline(
        self,
        key: str,
        body: PipelinesRequest | PipelinesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``PATCH`` request.

        Args:
            key: Pipeline key or pl_ id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/pipelines/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesRequest | PipelinesRequestDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_stage(
        self,
        key: str,
        stage: str,
        body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/pipelines/{key}/stages/{stage}"),
            path_params=[param[str]("key", key), param[str]("stage", stage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesStagesRequest1 | PipelinesStagesRequest1Dict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPipelinesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_stage(
        self,
        key: str,
        body: PipelinesStagesRequest | PipelinesStagesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines/{key}/stages"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesStagesRequest | PipelinesStagesRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_pipeline(
        self, body: PipelineInput | PipelineInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelineInput | PipelineInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_pipeline(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/pipelines/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_stage(
        self, key: str, stage: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``DELETE`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/pipelines/{key}/stages/{stage}"),
            path_params=[param[str]("key", key), param[str]("stage", stage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pipeline(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``GET`` request.

        Args:
            key: Pipeline key or pl_ id.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pipelines/{key}"),
            path_params=[param[str]("key", key)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_pipelines(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/pipelines"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def reorder_stages(
        self,
        key: str,
        body: PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines/{key}/stages/reorder"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesStagesReorderRequest | PipelinesStagesReorderRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def set_default_pipeline(
        self, key: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``POST`` request.

        Args:
            key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/pipelines/{key}/default"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_pipeline(
        self,
        key: str,
        body: PipelinesRequest | PipelinesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``PATCH`` request.

        Args:
            key: Pipeline key or pl_ id.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/pipelines/{key}"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesRequest | PipelinesRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_stage(
        self,
        key: str,
        stage: str,
        body: PipelinesStagesRequest1 | PipelinesStagesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Pipeline, RawError]:
        """Send a ``PATCH`` request.

        Args:
            key: Value sent with the request.
            stage: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/pipelines/{key}/stages/{stage}"),
            path_params=[param[str]("key", key), param[str]("stage", stage)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PipelinesStagesRequest1 | PipelinesStagesRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Pipeline],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
