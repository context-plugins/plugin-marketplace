from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.pipeline import Pipeline, PipelineDict
from ..server.server import Server


class Pipelines:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PipelinesWithRawResponse(client, server, auth)

    def create_pipeline(
        self,
        org: str,
        *,
        body: Pipeline | PipelineDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_pipeline(org, body=body, request_options=request_options))

    def delete_pipeline(self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_pipeline(org, pipeline, request_options=request_options))

    def get_pipeline(self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_pipeline(org, pipeline, request_options=request_options))

    def list_pipelines(self, org: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Pipeline]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of pipelines

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_pipelines(org, request_options=request_options))

    def update_pipeline(self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``PATCH`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_pipeline(org, pipeline, request_options=request_options))

    @property
    def with_raw_response(self) -> PipelinesWithRawResponse:
        return self._with_raw_response


class AsyncPipelines:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPipelinesWithRawResponse(client, server, auth)

    async def create_pipeline(
        self,
        org: str,
        *,
        body: Pipeline | PipelineDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_pipeline(org, body=body, request_options=request_options))

    async def delete_pipeline(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_pipeline(org, pipeline, request_options=request_options))

    async def get_pipeline(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_pipeline(org, pipeline, request_options=request_options))

    async def list_pipelines(
        self, org: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Pipeline]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of pipelines

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_pipelines(org, request_options=request_options))

    async def update_pipeline(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PATCH`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Pipeline updated

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_pipeline(org, pipeline, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPipelinesWithRawResponse:
        return self._with_raw_response


class PipelinesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_pipeline(
        self,
        org: str,
        *,
        body: Pipeline | PipelineDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organizations/{org}/pipelines"),
            path_params=[param[str]("org", org)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pipeline | PipelineDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_pipeline(
        self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_pipeline(
        self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_pipelines(
        self, org: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Pipeline], RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/pipelines"),
            path_params=[param[str]("org", org)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[Pipeline]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_pipeline(
        self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PATCH`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPipelinesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_pipeline(
        self,
        org: str,
        *,
        body: Pipeline | PipelineDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organizations/{org}/pipelines"),
            path_params=[param[str]("org", org)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Pipeline | PipelineDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_pipeline(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_pipeline(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_pipelines(
        self, org: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Pipeline], RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/pipelines"),
            path_params=[param[str]("org", org)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[Pipeline]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_pipeline(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PATCH`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
