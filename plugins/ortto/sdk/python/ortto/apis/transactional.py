from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    empty_response,
    json_body,
    param,
    unwrap,
)
from ..errors.send_transactional_email_error import (
    SendTransactionalEmailErrorBody,
    send_transactional_email_error_mapper,
)
from ..errors.send_transactional_sms_error import SendTransactionalSmsErrorBody, send_transactional_sms_error_mapper
from ..models.transactional_send_request import TransactionalSendRequest, TransactionalSendRequestDict
from ..models.transactional_send_sms_request import TransactionalSendSmsRequest, TransactionalSendSmsRequestDict
from ..server.server import Server


class Transactional:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TransactionalWithRawResponse(client, server, auth)

    def send_transactional_email(
        self,
        body: TransactionalSendRequest | TransactionalSendRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5
        base64-encoded attachments are supported. A successful request returns a 202 Accepted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request received and accepted for delivery.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.send_transactional_email(body, request_options=request_options))

    def send_transactional_sms(
        self,
        body: TransactionalSendSmsRequest | TransactionalSendSmsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request received and accepted for delivery.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.send_transactional_sms(body, request_options=request_options))

    @property
    def with_raw_response(self) -> TransactionalWithRawResponse:
        return self._with_raw_response


class AsyncTransactional:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTransactionalWithRawResponse(client, server, auth)

    async def send_transactional_email(
        self,
        body: TransactionalSendRequest | TransactionalSendRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5
        base64-encoded attachments are supported. A successful request returns a 202 Accepted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request received and accepted for delivery.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.send_transactional_email(body, request_options=request_options))

    async def send_transactional_sms(
        self,
        body: TransactionalSendSmsRequest | TransactionalSendSmsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Request received and accepted for delivery.

        Raises:
            ApiError: Missing or invalid API key. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.send_transactional_sms(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTransactionalWithRawResponse:
        return self._with_raw_response


class TransactionalWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def send_transactional_email(
        self,
        body: TransactionalSendRequest | TransactionalSendRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SendTransactionalEmailErrorBody]:
        """Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5
        base64-encoded attachments are supported. A successful request returns a 202 Accepted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transactional/send"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransactionalSendRequest | TransactionalSendRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=send_transactional_email_error_mapper,
            request_options=request_options,
        )

    def send_transactional_sms(
        self,
        body: TransactionalSendSmsRequest | TransactionalSendSmsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SendTransactionalSmsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transactional/send-sms"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransactionalSendSmsRequest | TransactionalSendSmsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=empty_response,
            error_mapper=send_transactional_sms_error_mapper,
            request_options=request_options,
        )


class AsyncTransactionalWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def send_transactional_email(
        self,
        body: TransactionalSendRequest | TransactionalSendRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SendTransactionalEmailErrorBody]:
        """Sends a transactional email. Set non_transactional to true to send as a marketing email. Up to 5
        base64-encoded attachments are supported. A successful request returns a 202 Accepted.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transactional/send"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransactionalSendRequest | TransactionalSendRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=send_transactional_email_error_mapper,
            request_options=request_options,
        )

    async def send_transactional_sms(
        self,
        body: TransactionalSendSmsRequest | TransactionalSendSmsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, SendTransactionalSmsErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/transactional/send-sms"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TransactionalSendSmsRequest | TransactionalSendSmsRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_empty_response,
            error_mapper=send_transactional_sms_error_mapper,
            request_options=request_options,
        )
