from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    ApiResult,
    AsyncAllSchemes,
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
from ..errors.get_message_error import GetMessageErrorBody, get_message_error_mapper
from ..errors.send_message_error import SendMessageErrorBody, send_message_error_mapper
from ..models.message import Message
from ..models.send_message_request import SendMessageRequest, SendMessageRequestDict
from ..models.send_message_response import SendMessageResponse
from ..server.server import Server


class MessagingApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = MessagingApiWithRawResponse(client, server, auth)

    def get_message(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Message:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The message, including its latest delivery status.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_message(id_, request_options=request_options))

    def send_message(
        self,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SendMessageResponse:
        """Sends a message from one of your numbers. Supplying ``media`` makes it an MMS. Four gates run in order:
        number ownership, recipient opt-out status, the TCPA window, and carrier registration (10DLC for local numbers,
        Toll-Free Verification for toll-free).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Message accepted by the carrier.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. Blocked by a gate: ``tcpa_window_violation``, ``recipient_opted_out``,
                ``campaign_not_registered`` (local), ``tollfree_not_verified`` (toll-free), or ``policy_blocked`` when
                the status webhook or the from-number's messaging webhook points at a service CallNode identifies as
                fraud tooling. Rate limit exceeded. See the rate-limit response headers. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.send_message(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> MessagingApiWithRawResponse:
        return self._with_raw_response


class AsyncMessagingApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncMessagingApiWithRawResponse(client, server, auth)

    async def get_message(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Message:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The message, including its latest delivery status.

        Raises:
            ApiError: Missing, unknown, or badly signed credentials — check the HMAC and the timestamp skew. No such
                resource on this account. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_message(id_, request_options=request_options))

    async def send_message(
        self,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SendMessageResponse:
        """Sends a message from one of your numbers. Supplying ``media`` makes it an MMS. Four gates run in order:
        number ownership, recipient opt-out status, the TCPA window, and carrier registration (10DLC for local numbers,
        Toll-Free Verification for toll-free).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Message accepted by the carrier.

        Raises:
            ApiError: Malformed request or failed validation. Missing, unknown, or badly signed credentials — check the
                HMAC and the timestamp skew. Blocked by a gate: ``tcpa_window_violation``, ``recipient_opted_out``,
                ``campaign_not_registered`` (local), ``tollfree_not_verified`` (toll-free), or ``policy_blocked`` when
                the status webhook or the from-number's messaging webhook points at a service CallNode identifies as
                fraud tooling. Rate limit exceeded. See the rate-limit response headers. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.send_message(
                body, x_idempotency_key=x_idempotency_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncMessagingApiWithRawResponse:
        return self._with_raw_response


class MessagingApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_message(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Message, GetMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/messages/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[Message],
            error_mapper=get_message_error_mapper,
            request_options=request_options,
        )

    def send_message(
        self,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SendMessageResponse, SendMessageErrorBody]:
        """Sends a message from one of your numbers. Supplying ``media`` makes it an MMS. Four gates run in order:
        number ownership, recipient opt-out status, the TCPA window, and carrier registration (10DLC for local numbers,
        Toll-Free Verification for toll-free).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/messages"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[SendMessageRequest | SendMessageRequestDict](body),
            auth_scheme=AllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=json_decoder[SendMessageResponse],
            error_mapper=send_message_error_mapper,
            request_options=request_options,
        )


class AsyncMessagingApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_message(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Message, GetMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/messages/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[Message],
            error_mapper=get_message_error_mapper,
            request_options=request_options,
        )

    async def send_message(
        self,
        body: SendMessageRequest | SendMessageRequestDict,
        *,
        x_idempotency_key: UUID | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SendMessageResponse, SendMessageErrorBody]:
        """Sends a message from one of your numbers. Supplying ``media`` makes it an MMS. Four gates run in order:
        number ownership, recipient opt-out status, the TCPA window, and carrier registration (10DLC for local numbers,
        Toll-Free Verification for toll-free).

        Args:
            body: The request body.
            x_idempotency_key: A UUID. Replaying the same key returns the original result rather than acting twice.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/messages"),
            headers=[
                param[UUID | None]("X-Idempotency-Key", x_idempotency_key), param[UUID]("Idempotency-Key", uuid4())
            ],
            body=json_body[SendMessageRequest | SendMessageRequestDict](body),
            auth_scheme=AsyncAllSchemes(self._auth.api_key_auth, self._auth.timestamp_auth, self._auth.signature_auth),
            decoder=async_json_decoder[SendMessageResponse],
            error_mapper=send_message_error_mapper,
            request_options=request_options,
        )
