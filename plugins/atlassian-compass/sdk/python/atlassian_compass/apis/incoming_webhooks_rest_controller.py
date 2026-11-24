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
from ..errors.handle_webhook_invocation_error import (
    HandleWebhookInvocationErrorBody,
    handle_webhook_invocation_error_mapper,
)
from ..server.server import Server


class IncomingWebhooksRestController:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = IncomingWebhooksRestControllerWithRawResponse(client, server, auth)

    def handle_webhook_invocation(
        self, webhook_id: str, body: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Third parties can call these inbound webhooks to dothings within compass, like create deployment events for
        webhooks coming from github

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the process of invoking a webhook with a payload has been enqueud.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the request token is invalid Returned if the
                webhook is not found. Returned if the request was not a POST Returned if the request exceeds the rate
                limit. ``error`` is ``ErrorResponseDto | str | RawError``."""
        return unwrap(
            self._with_raw_response.handle_webhook_invocation(webhook_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> IncomingWebhooksRestControllerWithRawResponse:
        return self._with_raw_response


class AsyncIncomingWebhooksRestController:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncIncomingWebhooksRestControllerWithRawResponse(client, server, auth)

    async def handle_webhook_invocation(
        self, webhook_id: str, body: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Third parties can call these inbound webhooks to dothings within compass, like create deployment events for
        webhooks coming from github

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Returned if the process of invoking a webhook with a payload has been enqueud.

        Raises:
            ApiError: Returned if the request is not valid. Returned if the request token is invalid Returned if the
                webhook is not found. Returned if the request was not a POST Returned if the request exceeds the rate
                limit. ``error`` is ``ErrorResponseDto | str | RawError``."""
        return unwrap(
            await self._with_raw_response.handle_webhook_invocation(webhook_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncIncomingWebhooksRestControllerWithRawResponse:
        return self._with_raw_response


class IncomingWebhooksRestControllerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def handle_webhook_invocation(
        self, webhook_id: str, body: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, HandleWebhookInvocationErrorBody]:
        """Third parties can call these inbound webhooks to dothings within compass, like create deployment events for
        webhooks coming from github

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[str](body),
            auth_scheme=self._auth.basic_auth,
            decoder=empty_response,
            error_mapper=handle_webhook_invocation_error_mapper,
            request_options=request_options,
        )


class AsyncIncomingWebhooksRestControllerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def handle_webhook_invocation(
        self, webhook_id: str, body: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, HandleWebhookInvocationErrorBody]:
        """Third parties can call these inbound webhooks to dothings within compass, like create deployment events for
        webhooks coming from github

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/compass/v1/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[str](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_empty_response,
            error_mapper=handle_webhook_invocation_error_mapper,
            request_options=request_options,
        )
