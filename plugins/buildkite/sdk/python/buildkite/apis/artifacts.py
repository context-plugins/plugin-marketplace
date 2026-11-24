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
    async_empty_response,
    empty_response,
    param,
    raw_error_response,
    unwrap,
)
from ..server.server import Server


class Artifacts:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ArtifactsWithRawResponse(client, server, auth)

    def list_artifacts_for_build(
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
            A list of artifacts

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_artifacts_for_build(org, pipeline, number, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ArtifactsWithRawResponse:
        return self._with_raw_response


class AsyncArtifacts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncArtifactsWithRawResponse(client, server, auth)

    async def list_artifacts_for_build(
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
            A list of artifacts

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_artifacts_for_build(
                org, pipeline, number, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncArtifactsWithRawResponse:
        return self._with_raw_response


class ArtifactsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def list_artifacts_for_build(
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
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/artifacts"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncArtifactsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def list_artifacts_for_build(
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
            url_template=self._server.default("/organizations/{org}/pipelines/{pipeline}/builds/{number}/artifacts"),
            path_params=[param[str]("org", org), param[str]("pipeline", pipeline), param[int]("number", number)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
