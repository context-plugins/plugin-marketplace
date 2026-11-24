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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_webhook_error import CreateWebhookErrorBody, create_webhook_error_mapper
from ..errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from ..errors.get_webhook_error import GetWebhookErrorBody, get_webhook_error_mapper
from ..errors.list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from ..errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from ..models.create_webhook_request import CreateWebhookRequest, CreateWebhookRequestDict
from ..models.enums.scope_type import ScopeTypeOrStr
from ..models.message_response import MessageResponse
from ..models.update_webhook_request import UpdateWebhookRequest, UpdateWebhookRequestDict
from ..models.webhook_info import WebhookInfo
from ..models.webhook_list import WebhookList
from ..server.server import Server


class Webhook:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhookWithRawResponse(client, server, auth)

    def create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookInfo:
        """Creates a new outbound webhook for the specified scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_webhook(body, request_options=request_options))

    def delete_webhook(
        self, webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(webhook_id, request_options=request_options))

    def get_webhook(self, webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None) -> WebhookInfo:
        """Returns a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved webhook

        Raises:
            ApiError: Unauthorized Webhook not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_webhook(webhook_id, request_options=request_options))

    def list_webhooks(
        self, scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookList:
        """Returns a list of outbound webhooks for the specified scope.

        Args:
            scope_id: The ID of the scope (project ID)
            scope_type: The type of scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved webhooks

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(scope_id, scope_type, request_options=request_options))

    def update_webhook(
        self,
        webhook_id: UUID,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookInfo:
        """Updates an existing webhook with the provided parameters.

        Args:
            webhook_id: The unique identifier of the webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook updated successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_webhook(webhook_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhookWithRawResponse:
        return self._with_raw_response


class AsyncWebhook:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhookWithRawResponse(client, server, auth)

    async def create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookInfo:
        """Creates a new outbound webhook for the specified scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created successfully

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(body, request_options=request_options))

    async def delete_webhook(
        self, webhook_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Deletes a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(webhook_id, request_options=request_options))

    async def get_webhook(
        self, webhook_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookInfo:
        """Returns a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved webhook

        Raises:
            ApiError: Unauthorized Webhook not found ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_webhook(webhook_id, request_options=request_options))

    async def list_webhooks(
        self, scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookList:
        """Returns a list of outbound webhooks for the specified scope.

        Args:
            scope_id: The ID of the scope (project ID)
            scope_type: The type of scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved webhooks

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_webhooks(scope_id, scope_type, request_options=request_options)
        )

    async def update_webhook(
        self,
        webhook_id: UUID,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookInfo:
        """Updates an existing webhook with the provided parameters.

        Args:
            webhook_id: The unique identifier of the webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook updated successfully

        Raises:
            ApiError: Unauthorized ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_webhook(webhook_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhookWithRawResponse:
        return self._with_raw_response


class WebhookWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookInfo, CreateWebhookErrorBody]:
        """Creates a new outbound webhook for the specified scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWebhookRequest | CreateWebhookRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[WebhookInfo],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteWebhookErrorBody]:
        """Deletes a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook/{webhook-id}"),
            path_params=[param[UUID]("webhook-id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook(
        self, webhook_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookInfo, GetWebhookErrorBody]:
        """Returns a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook/{webhook-id}"),
            path_params=[param[UUID]("webhook-id", webhook_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[WebhookInfo],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    def list_webhooks(
        self, scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookList, ListWebhooksErrorBody]:
        """Returns a list of outbound webhooks for the specified scope.

        Args:
            scope_id: The ID of the scope (project ID)
            scope_type: The type of scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook"),
            query_params=[param[UUID]("scope-id", scope_id), param[ScopeTypeOrStr]("scope-type", scope_type)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[WebhookList],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    def update_webhook(
        self,
        webhook_id: UUID,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookInfo, UpdateWebhookErrorBody]:
        """Updates an existing webhook with the provided parameters.

        Args:
            webhook_id: The unique identifier of the webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook/{webhook-id}"),
            path_params=[param[UUID]("webhook-id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookRequest | UpdateWebhookRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[WebhookInfo],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhookWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookInfo, CreateWebhookErrorBody]:
        """Creates a new outbound webhook for the specified scope.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWebhookRequest | CreateWebhookRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[WebhookInfo],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, webhook_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteWebhookErrorBody]:
        """Deletes a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook/{webhook-id}"),
            path_params=[param[UUID]("webhook-id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook(
        self, webhook_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookInfo, GetWebhookErrorBody]:
        """Returns a webhook by its unique identifier.

        Args:
            webhook_id: The unique identifier of the webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook/{webhook-id}"),
            path_params=[param[UUID]("webhook-id", webhook_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[WebhookInfo],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    async def list_webhooks(
        self, scope_id: UUID, scope_type: ScopeTypeOrStr, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookList, ListWebhooksErrorBody]:
        """Returns a list of outbound webhooks for the specified scope.

        Args:
            scope_id: The ID of the scope (project ID)
            scope_type: The type of scope
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook"),
            query_params=[param[UUID]("scope-id", scope_id), param[ScopeTypeOrStr]("scope-type", scope_type)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[WebhookList],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        webhook_id: UUID,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookInfo, UpdateWebhookErrorBody]:
        """Updates an existing webhook with the provided parameters.

        Args:
            webhook_id: The unique identifier of the webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_circle_ci_rest_api_v2_context_api("/webhook/{webhook-id}"),
            path_params=[param[UUID]("webhook-id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookRequest | UpdateWebhookRequestDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[WebhookInfo],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )
