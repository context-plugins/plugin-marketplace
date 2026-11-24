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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.automate_builds_json_request import AutomateBuildsJsonRequest, AutomateBuildsJsonRequestDict
from ..models.build import Build
from ..models.enums.status import StatusOrStr
from ..models.status_message import StatusMessage
from ..server.server import Server


class Builds:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BuildsWithRawResponse(client, server, auth)

    def delete_build(self, build_id: str, *, request_options: RequestOptionsOrDict | None = None) -> StatusMessage:
        """Send a ``DELETE`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build deletion confirmation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_build(build_id, request_options=request_options))

    def list_builds(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        status: StatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Build]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of builds

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_builds(
                limit=limit, offset=offset, status=status, request_options=request_options
            ),
        )

    def update_build(
        self,
        build_id: str,
        body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Build:
        """Send a ``PUT`` request.

        Args:
            build_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated build

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_build(build_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> BuildsWithRawResponse:
        return self._with_raw_response


class AsyncBuilds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBuildsWithRawResponse(client, server, auth)

    async def delete_build(
        self, build_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StatusMessage:
        """Send a ``DELETE`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Build deletion confirmation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_build(build_id, request_options=request_options))

    async def list_builds(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        status: StatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Build]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of builds

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_builds(
                limit=limit, offset=offset, status=status, request_options=request_options
            ),
        )

    async def update_build(
        self,
        build_id: str,
        body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Build:
        """Send a ``PUT`` request.

        Args:
            build_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated build

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_build(build_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBuildsWithRawResponse:
        return self._with_raw_response


class BuildsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_build(
        self, build_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusMessage, RawError]:
        """Send a ``DELETE`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automate/builds/{buildId}.json"),
            path_params=[param[str]("buildId", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[StatusMessage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_builds(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        status: StatusOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Build], RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/builds.json"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[StatusOrStr | None]("status", status),
            ],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[list[Build]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_build(
        self,
        build_id: str,
        body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Build, RawError]:
        """Send a ``PUT`` request.

        Args:
            build_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/builds/{buildId}.json"),
            path_params=[param[str]("buildId", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Build],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncBuildsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_build(
        self, build_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusMessage, RawError]:
        """Send a ``DELETE`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automate/builds/{buildId}.json"),
            path_params=[param[str]("buildId", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[StatusMessage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_builds(
        self,
        *,
        limit: int | None = None,
        offset: int | None = None,
        status: StatusOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Build], RawError]:
        """Send a ``GET`` request.

        Args:
            limit: Value sent with the request.
            offset: Value sent with the request.
            status: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/builds.json"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[StatusOrStr | None]("status", status),
            ],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[list[Build]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_build(
        self,
        build_id: str,
        body: AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Build, RawError]:
        """Send a ``PUT`` request.

        Args:
            build_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/builds/{buildId}.json"),
            path_params=[param[str]("buildId", build_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomateBuildsJsonRequest | AutomateBuildsJsonRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Build],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
