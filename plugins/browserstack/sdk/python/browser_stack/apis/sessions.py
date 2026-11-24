from __future__ import annotations

from typing import Any
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
    async_text_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    text_decoder,
    unwrap,
)
from ..models.automate_sessions_json_request import AutomateSessionsJsonRequest, AutomateSessionsJsonRequestDict
from ..models.session import Session
from ..models.status_message import StatusMessage
from ..server.server import Server


class Sessions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SessionsWithRawResponse(client, server, auth)

    def delete_session(self, session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> StatusMessage:
        """Send a ``DELETE`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Session deletion confirmation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_session(session_id, request_options=request_options))

    def get_session(self, session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Session:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Session details

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_session(session_id, request_options=request_options))

    def get_session_console_logs(self, session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Console log text

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_session_console_logs(session_id, request_options=request_options))

    def get_session_logs(self, session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Selenium log text

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_session_logs(session_id, request_options=request_options))

    def get_session_network_logs(self, session_id: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            HAR file

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_session_network_logs(session_id, request_options=request_options))

    def list_build_sessions(
        self, build_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Session]:
        """Send a ``GET`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of sessions

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_build_sessions(build_id, request_options=request_options))

    def update_session(
        self,
        session_id: str,
        body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Session:
        """Send a ``PUT`` request.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated session

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.update_session(session_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SessionsWithRawResponse:
        return self._with_raw_response


class AsyncSessions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSessionsWithRawResponse(client, server, auth)

    async def delete_session(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StatusMessage:
        """Send a ``DELETE`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Session deletion confirmation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_session(session_id, request_options=request_options))

    async def get_session(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Session:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Session details

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_session(session_id, request_options=request_options))

    async def get_session_console_logs(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Console log text

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_console_logs(session_id, request_options=request_options)
        )

    async def get_session_logs(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> str:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Selenium log text

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_session_logs(session_id, request_options=request_options))

    async def get_session_network_logs(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            HAR file

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_session_network_logs(session_id, request_options=request_options)
        )

    async def list_build_sessions(
        self, build_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Session]:
        """Send a ``GET`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of sessions

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_build_sessions(build_id, request_options=request_options))

    async def update_session(
        self,
        session_id: str,
        body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Session:
        """Send a ``PUT`` request.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated session

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.update_session(session_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSessionsWithRawResponse:
        return self._with_raw_response


class SessionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_session(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusMessage, RawError]:
        """Send a ``DELETE`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automate/sessions/{sessionId}.json"),
            path_params=[param[str]("sessionId", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[StatusMessage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_session(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Session, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}.json"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Session],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_session_console_logs(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}/consolelogs"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_session_logs(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}/logs"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_session_network_logs(
        self, session_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}/networklogs"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_build_sessions(
        self, build_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Session], RawError]:
        """Send a ``GET`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/builds/{buildId}/sessions.json"),
            path_params=[param[str]("buildId", build_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[list[Session]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_session(
        self,
        session_id: str,
        body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Session, RawError]:
        """Send a ``PUT`` request.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/sessions/{sessionId}.json"),
            path_params=[param[str]("sessionId", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Session],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncSessionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_session(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusMessage, RawError]:
        """Send a ``DELETE`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/automate/sessions/{sessionId}.json"),
            path_params=[param[str]("sessionId", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[StatusMessage],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_session(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Session, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}.json"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Session],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_session_console_logs(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}/consolelogs"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_session_logs(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}/logs"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_text_decoder[str],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_session_network_logs(
        self, session_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            session_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/sessions/{sessionId}/networklogs"),
            path_params=[param[str]("sessionId", session_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_build_sessions(
        self, build_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Session], RawError]:
        """Send a ``GET`` request.

        Args:
            build_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/builds/{buildId}/sessions.json"),
            path_params=[param[str]("buildId", build_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[list[Session]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_session(
        self,
        session_id: str,
        body: AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Session, RawError]:
        """Send a ``PUT`` request.

        Args:
            session_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/automate/sessions/{sessionId}.json"),
            path_params=[param[str]("sessionId", session_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AutomateSessionsJsonRequest | AutomateSessionsJsonRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Session],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
