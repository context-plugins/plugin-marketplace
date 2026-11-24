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
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.build import Build
from ..server.server import Server


class Builds:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuildsWithRawResponse(client, server, auth)

    def cancel_build(
        self, org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build cancelled

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.cancel_build(org, pipeline, number, request_options=request_options))

    def create_build(self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_build(org, pipeline, request_options=request_options))

    def get_build(
        self, org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_build(org, pipeline, number, request_options=request_options))

    def list_builds(
        self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Build]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of builds

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_builds(org, pipeline, request_options=request_options))

    def rebuild_build(
        self, org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build re-queued

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.rebuild_build(org, pipeline, number, request_options=request_options))

    @property
    def with_raw_response(self) -> BuildsWithRawResponse:
        return self._with_raw_response


class AsyncBuilds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuildsWithRawResponse(client, server, auth)

    async def cancel_build(
        self, org: str, pipeline: str, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build cancelled

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.cancel_build(org, pipeline, number, request_options=request_options)
        )

    async def create_build(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_build(org, pipeline, request_options=request_options))

    async def get_build(
        self, org: str, pipeline: str, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build record

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_build(org, pipeline, number, request_options=request_options))

    async def list_builds(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Build]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of builds

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_builds(org, pipeline, request_options=request_options))

    async def rebuild_build(
        self, org: str, pipeline: str, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build re-queued

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.rebuild_build(org, pipeline, number, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncBuildsWithRawResponse:
        return self._with_raw_response


class BuildsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_build(
        self, org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/cancel"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def create_build(
        self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_build(
        self, org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_builds(
        self, org: str, pipeline: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Build], RawError]:
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
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[list[Build]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def rebuild_build(
        self, org: str, pipeline: str, number: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/rebuild"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBuildsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_build(
        self, org: str, pipeline: str, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/cancel"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def create_build(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_build(
        self, org: str, pipeline: str, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_builds(
        self, org: str, pipeline: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Build], RawError]:
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
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[list[Build]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def rebuild_build(
        self, org: str, pipeline: str, number: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``PUT`` request.

        Args:
            org: Organization slug
            pipeline: Pipeline slug
            number: Build number
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/rebuild"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
