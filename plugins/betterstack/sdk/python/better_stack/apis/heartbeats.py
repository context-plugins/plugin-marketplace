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
    empty_response,
    json_body,
    param,
    raw_error_response,
    unwrap,
)
from ..models.heartbeat_create import HeartbeatCreate, HeartbeatCreateDict
from ..server.server import Server


class Heartbeats:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = HeartbeatsWithRawResponse(client, server, auth)

    def create_heartbeat(
        self, body: HeartbeatCreate | HeartbeatCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created heartbeat.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_heartbeat(body, request_options=request_options))

    def delete_heartbeat(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_heartbeat(id_, request_options=request_options))

    def get_heartbeat(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Heartbeat.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_heartbeat(id_, request_options=request_options))

    def get_heartbeat_availability(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Availability summary.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_heartbeat_availability(id_, request_options=request_options))

    def list_heartbeats(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of heartbeats.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_heartbeats(per_page=per_page, page=page, request_options=request_options)
        )

    def update_heartbeat(
        self,
        id_: str,
        body: HeartbeatCreate | HeartbeatCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated heartbeat.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_heartbeat(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> HeartbeatsWithRawResponse:
        return self._with_raw_response


class AsyncHeartbeats:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncHeartbeatsWithRawResponse(client, server, auth)

    async def create_heartbeat(
        self, body: HeartbeatCreate | HeartbeatCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created heartbeat.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_heartbeat(body, request_options=request_options))

    async def delete_heartbeat(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Removed.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_heartbeat(id_, request_options=request_options))

    async def get_heartbeat(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Heartbeat.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_heartbeat(id_, request_options=request_options))

    async def get_heartbeat_availability(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Availability summary.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_heartbeat_availability(id_, request_options=request_options))

    async def list_heartbeats(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A page of heartbeats.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_heartbeats(per_page=per_page, page=page, request_options=request_options)
        )

    async def update_heartbeat(
        self,
        id_: str,
        body: HeartbeatCreate | HeartbeatCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated heartbeat.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_heartbeat(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncHeartbeatsWithRawResponse:
        return self._with_raw_response


class HeartbeatsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_heartbeat(
        self, body: HeartbeatCreate | HeartbeatCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/heartbeats"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HeartbeatCreate | HeartbeatCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_heartbeat(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/heartbeats/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_heartbeat(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/heartbeats/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_heartbeat_availability(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/heartbeats/{id}/availability"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_heartbeats(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/heartbeats"),
            query_params=[param[int | None]("per_page", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_heartbeat(
        self,
        id_: str,
        body: HeartbeatCreate | HeartbeatCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/heartbeats/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HeartbeatCreate | HeartbeatCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncHeartbeatsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_heartbeat(
        self, body: HeartbeatCreate | HeartbeatCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/heartbeats"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HeartbeatCreate | HeartbeatCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_heartbeat(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/heartbeats/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_heartbeat(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/heartbeats/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_heartbeat_availability(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/heartbeats/{id}/availability"),
            path_params=[param[str]("id", id_)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_heartbeats(
        self,
        *,
        per_page: int | None = None,
        page: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            per_page: Value sent with the request.
            page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/heartbeats"),
            query_params=[param[int | None]("per_page", per_page), param[int | None]("page", page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_heartbeat(
        self,
        id_: str,
        body: HeartbeatCreate | HeartbeatCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/heartbeats/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[HeartbeatCreate | HeartbeatCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
