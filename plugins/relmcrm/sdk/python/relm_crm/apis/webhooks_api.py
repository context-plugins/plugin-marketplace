from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..models.deleted import Deleted
from ..models.webhook import Webhook
from ..models.webhook_input import WebhookInput, WebhookInputDict
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self, body: WebhookInput | WebhookInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Webhook:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created (secret shown once)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_webhook(body, request_options=request_options))

    def delete_webhook(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(id_, request_options=request_options))

    def get_webhook(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_webhook(id_, request_options=request_options))

    def list_deliveries(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deliveries

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_deliveries(id_, request_options=request_options))

    def list_webhooks(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhooks

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(request_options=request_options))

    def update_webhook(
        self,
        id_: str,
        body: WebhookInput | WebhookInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_webhook(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self, body: WebhookInput | WebhookInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created (secret shown once)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(body, request_options=request_options))

    async def delete_webhook(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Deleted:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(id_, request_options=request_options))

    async def get_webhook(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Webhook:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_webhook(id_, request_options=request_options))

    async def list_deliveries(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deliveries

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_deliveries(id_, request_options=request_options))

    async def list_webhooks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhooks

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_webhooks(request_options=request_options))

    async def update_webhook(
        self,
        id_: str,
        body: WebhookInput | WebhookInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_webhook(id_, body, if_match=if_match, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self, body: WebhookInput | WebhookInputDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookInput | WebhookInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Webhook],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_webhook(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_webhook(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Webhook],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_deliveries(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{id}/deliveries"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_webhooks(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_webhook(
        self,
        id_: str,
        body: WebhookInput | WebhookInputDict,
        *,
        if_match: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookInput | WebhookInputDict](body),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=json_decoder[Webhook],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self, body: WebhookInput | WebhookInputDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookInput | WebhookInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Webhook],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_webhook(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Deleted, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Deleted],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_webhook(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Webhook],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_deliveries(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{id}/deliveries"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        id_: str,
        body: WebhookInput | WebhookInputDict,
        *,
        if_match: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, RawError]:
        """Send a ``PATCH`` request.

        Args:
            id_: Value sent with the request.
            body: The request body.
            if_match: The record's current version for optimistic concurrency; a mismatch returns 412 version_conflict.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookInput | WebhookInputDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.oauth2),
            decoder=async_json_decoder[Webhook],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
