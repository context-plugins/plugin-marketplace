from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.continue_session_error import ContinueSessionErrorBody, continue_session_error_mapper
from ..errors.end_session_error import EndSessionErrorBody, end_session_error_mapper
from ..errors.start_session_error import StartSessionErrorBody, start_session_error_mapper
from ..models.chat_message_envelope import ChatMessageEnvelope, ChatMessageEnvelopeDict
from ..models.chat_message_response_envelope import ChatMessageResponseEnvelope
from ..models.enums.end_session_reason import EndSessionReasonOrStr
from ..models.init_message_envelope import InitMessageEnvelope, InitMessageEnvelopeDict
from ..models.response_envelope import ResponseEnvelope
from ..server.server import Server


class Bot:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BotWithRawResponse(client, server, auth)

    def continue_session(
        self,
        session_id: str,
        x_org_id: str,
        body: ChatMessageEnvelope | ChatMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChatMessageResponseEnvelope:
        """Send a message to the bots API on an active session.

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to continue the chat.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Access bearer token is missing or invalid User forbidden from accessing the resource
                Resource not found Any exception that occurred during the request execution Server is busy and cannot
                process the request at this time Too many requests for the server to handle Service is unavailable
                possibly because Apex or Flow calls timed out ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.continue_session(
                session_id,
                x_org_id,
                body,
                x_request_id=x_request_id,
                x_runtime_crc=x_runtime_crc,
                request_options=request_options,
            ),
        )

    def end_session(
        self,
        session_id: str,
        x_org_id: str,
        x_session_end_reason: EndSessionReasonOrStr,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ChatMessageResponseEnvelope:
        """Send a message to the bots API to end a session

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            x_session_end_reason: Reason session ended.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Access bearer token is missing or invalid User forbidden from accessing the resource
                Resource not found Any exception that occurred during the request execution Server is busy and cannot
                process the request at this time Too many requests for the server to handle Service is unavailable
                possibly because Apex or Flow calls timed out ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.end_session(
                session_id,
                x_org_id,
                x_session_end_reason,
                x_request_id=x_request_id,
                x_runtime_crc=x_runtime_crc,
                request_options=request_options,
            ),
        )

    def start_session(
        self,
        bot_id: str,
        x_org_id: str,
        body: InitMessageEnvelope | InitMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ResponseEnvelope:
        """Send a message to the bots API to start a new session.

        Args:
            bot_id: ID of the Einstein Bot that you want to interact with.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to initiate a session.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Access bearer token is missing or invalid User forbidden from accessing the resource
                Resource not found Any exception that occurred during the request execution Server is busy and cannot
                process the request at this time Too many requests for the server to handle Service is unavailable
                possibly because Apex or Flow calls timed out ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.start_session(
                bot_id, x_org_id, body, x_request_id=x_request_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> BotWithRawResponse:
        return self._with_raw_response


class AsyncBot:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBotWithRawResponse(client, server, auth)

    async def continue_session(
        self,
        session_id: str,
        x_org_id: str,
        body: ChatMessageEnvelope | ChatMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ChatMessageResponseEnvelope:
        """Send a message to the bots API on an active session.

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to continue the chat.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Access bearer token is missing or invalid User forbidden from accessing the resource
                Resource not found Any exception that occurred during the request execution Server is busy and cannot
                process the request at this time Too many requests for the server to handle Service is unavailable
                possibly because Apex or Flow calls timed out ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.continue_session(
                session_id,
                x_org_id,
                body,
                x_request_id=x_request_id,
                x_runtime_crc=x_runtime_crc,
                request_options=request_options,
            ),
        )

    async def end_session(
        self,
        session_id: str,
        x_org_id: str,
        x_session_end_reason: EndSessionReasonOrStr,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ChatMessageResponseEnvelope:
        """Send a message to the bots API to end a session

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            x_session_end_reason: Reason session ended.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Access bearer token is missing or invalid User forbidden from accessing the resource
                Resource not found Any exception that occurred during the request execution Server is busy and cannot
                process the request at this time Too many requests for the server to handle Service is unavailable
                possibly because Apex or Flow calls timed out ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.end_session(
                session_id,
                x_org_id,
                x_session_end_reason,
                x_request_id=x_request_id,
                x_runtime_crc=x_runtime_crc,
                request_options=request_options,
            ),
        )

    async def start_session(
        self,
        bot_id: str,
        x_org_id: str,
        body: InitMessageEnvelope | InitMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ResponseEnvelope:
        """Send a message to the bots API to start a new session.

        Args:
            bot_id: ID of the Einstein Bot that you want to interact with.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to initiate a session.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request Access bearer token is missing or invalid User forbidden from accessing the resource
                Resource not found Any exception that occurred during the request execution Server is busy and cannot
                process the request at this time Too many requests for the server to handle Service is unavailable
                possibly because Apex or Flow calls timed out ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.start_session(
                bot_id, x_org_id, body, x_request_id=x_request_id, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncBotWithRawResponse:
        return self._with_raw_response


class BotWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def continue_session(
        self,
        session_id: str,
        x_org_id: str,
        body: ChatMessageEnvelope | ChatMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatMessageResponseEnvelope, ContinueSessionErrorBody]:
        """Send a message to the bots API on an active session.

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to continue the chat.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v5.3.0/sessions/{session-id}/messages"),
            path_params=[param[str]("session-id", session_id)],
            headers=[
                param[str]("X-Org-Id", x_org_id),
                param[str | None]("X-Request-ID", x_request_id),
                param[str | None]("X-Runtime-CRC", x_runtime_crc),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ChatMessageEnvelope | ChatMessageEnvelopeDict](body),
            auth_scheme=AnySchemes(
                self._auth.chatbot_auth_authorization_code, self._auth.chatbot_auth_implicit, self._auth.jwt_bearer
            ),
            decoder=json_decoder[ChatMessageResponseEnvelope],
            error_mapper=continue_session_error_mapper,
            request_options=request_options,
        )

    def end_session(
        self,
        session_id: str,
        x_org_id: str,
        x_session_end_reason: EndSessionReasonOrStr,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatMessageResponseEnvelope, EndSessionErrorBody]:
        """Send a message to the bots API to end a session

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            x_session_end_reason: Reason session ended.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v5.3.0/sessions/{session-id}"),
            path_params=[param[str]("session-id", session_id)],
            headers=[
                param[str]("X-Org-Id", x_org_id),
                param[EndSessionReasonOrStr]("X-Session-End-Reason", x_session_end_reason),
                param[str | None]("X-Request-ID", x_request_id),
                param[str | None]("X-Runtime-CRC", x_runtime_crc),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=AnySchemes(
                self._auth.chatbot_auth_authorization_code, self._auth.chatbot_auth_implicit, self._auth.jwt_bearer
            ),
            decoder=json_decoder[ChatMessageResponseEnvelope],
            error_mapper=end_session_error_mapper,
            request_options=request_options,
        )

    def start_session(
        self,
        bot_id: str,
        x_org_id: str,
        body: InitMessageEnvelope | InitMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ResponseEnvelope, StartSessionErrorBody]:
        """Send a message to the bots API to start a new session.

        Args:
            bot_id: ID of the Einstein Bot that you want to interact with.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to initiate a session.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v5.3.0/bots/{bot-id}/sessions"),
            path_params=[param[str]("bot-id", bot_id)],
            headers=[
                param[str]("X-Org-Id", x_org_id),
                param[str | None]("X-Request-ID", x_request_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InitMessageEnvelope | InitMessageEnvelopeDict](body),
            auth_scheme=AnySchemes(
                self._auth.chatbot_auth_authorization_code, self._auth.chatbot_auth_implicit, self._auth.jwt_bearer
            ),
            decoder=json_decoder[ResponseEnvelope],
            error_mapper=start_session_error_mapper,
            request_options=request_options,
        )


class AsyncBotWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def continue_session(
        self,
        session_id: str,
        x_org_id: str,
        body: ChatMessageEnvelope | ChatMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatMessageResponseEnvelope, ContinueSessionErrorBody]:
        """Send a message to the bots API on an active session.

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to continue the chat.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v5.3.0/sessions/{session-id}/messages"),
            path_params=[param[str]("session-id", session_id)],
            headers=[
                param[str]("X-Org-Id", x_org_id),
                param[str | None]("X-Request-ID", x_request_id),
                param[str | None]("X-Runtime-CRC", x_runtime_crc),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ChatMessageEnvelope | ChatMessageEnvelopeDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.chatbot_auth_authorization_code, self._auth.chatbot_auth_implicit, self._auth.jwt_bearer
            ),
            decoder=async_json_decoder[ChatMessageResponseEnvelope],
            error_mapper=continue_session_error_mapper,
            request_options=request_options,
        )

    async def end_session(
        self,
        session_id: str,
        x_org_id: str,
        x_session_end_reason: EndSessionReasonOrStr,
        *,
        x_request_id: str | None = None,
        x_runtime_crc: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ChatMessageResponseEnvelope, EndSessionErrorBody]:
        """Send a message to the bots API to end a session

        Args:
            session_id: ID of an active session, which is the ``sessionId`` returned by the bot when you start a
                session.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            x_session_end_reason: Reason session ended.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            x_runtime_crc: Internal runtime CRC, which is the ``X-Runtime-CRC`` value from previous response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v5.3.0/sessions/{session-id}"),
            path_params=[param[str]("session-id", session_id)],
            headers=[
                param[str]("X-Org-Id", x_org_id),
                param[EndSessionReasonOrStr]("X-Session-End-Reason", x_session_end_reason),
                param[str | None]("X-Request-ID", x_request_id),
                param[str | None]("X-Runtime-CRC", x_runtime_crc),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.chatbot_auth_authorization_code, self._auth.chatbot_auth_implicit, self._auth.jwt_bearer
            ),
            decoder=async_json_decoder[ChatMessageResponseEnvelope],
            error_mapper=end_session_error_mapper,
            request_options=request_options,
        )

    async def start_session(
        self,
        bot_id: str,
        x_org_id: str,
        body: InitMessageEnvelope | InitMessageEnvelopeDict,
        *,
        x_request_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ResponseEnvelope, StartSessionErrorBody]:
        """Send a message to the bots API to start a new session.

        Args:
            bot_id: ID of the Einstein Bot that you want to interact with.
            x_org_id: 18-character org ID of the Salesforce org associated with the bot.
            body: Request payload to initiate a session.
            x_request_id: Request ID. A UUID in string format created by you to help with request tracking.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v5.3.0/bots/{bot-id}/sessions"),
            path_params=[param[str]("bot-id", bot_id)],
            headers=[
                param[str]("X-Org-Id", x_org_id),
                param[str | None]("X-Request-ID", x_request_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[InitMessageEnvelope | InitMessageEnvelopeDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.chatbot_auth_authorization_code, self._auth.chatbot_auth_implicit, self._auth.jwt_bearer
            ),
            decoder=async_json_decoder[ResponseEnvelope],
            error_mapper=start_session_error_mapper,
            request_options=request_options,
        )
