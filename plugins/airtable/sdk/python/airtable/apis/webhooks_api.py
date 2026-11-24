from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
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
from ..errors.create_webhook_error import CreateWebhookErrorBody, create_webhook_error_mapper
from ..errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from ..errors.list_webhook_payloads_error import ListWebhookPayloadsErrorBody, list_webhook_payloads_error_mapper
from ..errors.list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from ..errors.refresh_webhook_error import RefreshWebhookErrorBody, refresh_webhook_error_mapper
from ..models.bases_webhooks_refresh_response import BasesWebhooksRefreshResponse
from ..models.bases_webhooks_response import BasesWebhooksResponse
from ..models.webhook_create_request import WebhookCreateRequest, WebhookCreateRequestDict
from ..models.webhook_create_response import WebhookCreateResponse
from ..models.webhook_payload_list import WebhookPayloadList
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self,
        base_id: str,
        body: WebhookCreateRequest | WebhookCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookCreateResponse:
        """Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be
        refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth
        authentication with the webhook:manage scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created webhook with MAC secret.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.create_webhook(base_id, body, request_options=request_options))

    def delete_webhook(
        self, base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Confirmation that the webhook was deleted.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(base_id, webhook_id, request_options=request_options))

    def list_webhook_payloads(
        self,
        base_id: str,
        webhook_id: str,
        *,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookPayloadList:
        """Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in
        chronological order and can be paginated using a cursor.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            cursor: A cursor for pagination. Pass the cursor from the previous response to get the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of webhook payloads.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_webhook_payloads(
                base_id, webhook_id, cursor=cursor, request_options=request_options
            ),
        )

    def list_webhooks(
        self, base_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BasesWebhooksResponse:
        """Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and
        expiration information.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of webhooks.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(base_id, request_options=request_options))

    def refresh_webhook(
        self, base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> BasesWebhooksRefreshResponse:
        """Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be
        periodically refreshed to remain active.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The refreshed webhook with new expiration time.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.refresh_webhook(base_id, webhook_id, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self,
        base_id: str,
        body: WebhookCreateRequest | WebhookCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookCreateResponse:
        """Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be
        refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth
        authentication with the webhook:manage scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created webhook with MAC secret.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. The request body contains invalid data.
                Rate limit exceeded. The API allows 5 requests per second per base. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(base_id, body, request_options=request_options))

    async def delete_webhook(
        self, base_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Confirmation that the webhook was deleted.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_webhook(base_id, webhook_id, request_options=request_options)
        )

    async def list_webhook_payloads(
        self,
        base_id: str,
        webhook_id: str,
        *,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookPayloadList:
        """Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in
        chronological order and can be paginated using a cursor.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            cursor: A cursor for pagination. Pass the cursor from the previous response to get the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of webhook payloads.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_webhook_payloads(
                base_id, webhook_id, cursor=cursor, request_options=request_options
            ),
        )

    async def list_webhooks(
        self, base_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BasesWebhooksResponse:
        """Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and
        expiration information.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of webhooks.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_webhooks(base_id, request_options=request_options))

    async def refresh_webhook(
        self, base_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BasesWebhooksRefreshResponse:
        """Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be
        periodically refreshed to remain active.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The refreshed webhook with new expiration time.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.refresh_webhook(base_id, webhook_id, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self,
        base_id: str,
        body: WebhookCreateRequest | WebhookCreateRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreateResponse, CreateWebhookErrorBody]:
        """Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be
        refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth
        authentication with the webhook:manage scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bases/{baseId}/webhooks"),
            path_params=[param[str]("baseId", base_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookCreateRequest | WebhookCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhookCreateResponse],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteWebhookErrorBody]:
        """Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bases/{baseId}/webhooks/{webhookId}"),
            path_params=[param[str]("baseId", base_id), param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Any],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def list_webhook_payloads(
        self,
        base_id: str,
        webhook_id: str,
        *,
        cursor: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookPayloadList, ListWebhookPayloadsErrorBody]:
        """Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in
        chronological order and can be paginated using a cursor.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            cursor: A cursor for pagination. Pass the cursor from the previous response to get the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bases/{baseId}/webhooks/{webhookId}/payloads"),
            path_params=[param[str]("baseId", base_id), param[str]("webhookId", webhook_id)],
            query_params=[param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhookPayloadList],
            error_mapper=list_webhook_payloads_error_mapper,
            request_options=request_options,
        )

    def list_webhooks(
        self, base_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BasesWebhooksResponse, ListWebhooksErrorBody]:
        """Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and
        expiration information.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bases/{baseId}/webhooks"),
            path_params=[param[str]("baseId", base_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BasesWebhooksResponse],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    def refresh_webhook(
        self, base_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BasesWebhooksRefreshResponse, RefreshWebhookErrorBody]:
        """Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be
        periodically refreshed to remain active.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bases/{baseId}/webhooks/{webhookId}/refresh"),
            path_params=[param[str]("baseId", base_id), param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BasesWebhooksRefreshResponse],
            error_mapper=refresh_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self,
        base_id: str,
        body: WebhookCreateRequest | WebhookCreateRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreateResponse, CreateWebhookErrorBody]:
        """Creates a new webhook subscription for the specified base. Webhooks expire after 7 days and must be
        refreshed. The response includes a MAC secret used to verify webhook notification payloads. Requires OAuth
        authentication with the webhook:manage scope.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bases/{baseId}/webhooks"),
            path_params=[param[str]("baseId", base_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookCreateRequest | WebhookCreateRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhookCreateResponse],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, base_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteWebhookErrorBody]:
        """Deletes an existing webhook subscription. The webhook will no longer send notifications after deletion.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/bases/{baseId}/webhooks/{webhookId}"),
            path_params=[param[str]("baseId", base_id), param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Any],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def list_webhook_payloads(
        self,
        base_id: str,
        webhook_id: str,
        *,
        cursor: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookPayloadList, ListWebhookPayloadsErrorBody]:
        """Returns a list of payloads that have been generated for the specified webhook. Payloads are returned in
        chronological order and can be paginated using a cursor.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            cursor: A cursor for pagination. Pass the cursor from the previous response to get the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bases/{baseId}/webhooks/{webhookId}/payloads"),
            path_params=[param[str]("baseId", base_id), param[str]("webhookId", webhook_id)],
            query_params=[param[str | None]("cursor", cursor)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhookPayloadList],
            error_mapper=list_webhook_payloads_error_mapper,
            request_options=request_options,
        )

    async def list_webhooks(
        self, base_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BasesWebhooksResponse, ListWebhooksErrorBody]:
        """Returns a list of all webhooks registered for the specified base. Includes webhook configuration, status, and
        expiration information.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/bases/{baseId}/webhooks"),
            path_params=[param[str]("baseId", base_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BasesWebhooksResponse],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    async def refresh_webhook(
        self, base_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BasesWebhooksRefreshResponse, RefreshWebhookErrorBody]:
        """Extends the expiration time of an existing webhook. Webhooks expire after 7 days of inactivity and must be
        periodically refreshed to remain active.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            webhook_id: The unique identifier of the webhook.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bases/{baseId}/webhooks/{webhookId}/refresh"),
            path_params=[param[str]("baseId", base_id), param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BasesWebhooksRefreshResponse],
            error_mapper=refresh_webhook_error_mapper,
            request_options=request_options,
        )
