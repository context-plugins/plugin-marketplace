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
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_webhook_error import AddWebhookErrorBody, add_webhook_error_mapper
from ..errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from ..errors.get_webhook_error import GetWebhookErrorBody, get_webhook_error_mapper
from ..errors.get_webhook_message_error import GetWebhookMessageErrorBody, get_webhook_message_error_mapper
from ..errors.get_webhook_stats_error import GetWebhookStatsErrorBody, get_webhook_stats_error_mapper
from ..errors.list_app_webhooks_error import ListAppWebhooksErrorBody, list_app_webhooks_error_mapper
from ..errors.list_messages_error import ListMessagesErrorBody, list_messages_error_mapper
from ..errors.test_message_error import TestMessageErrorBody, test_message_error_mapper
from ..errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from ..models.notifications_messages_test_request import (
    NotificationsMessagesTestRequest,
    NotificationsMessagesTestRequestDict,
)
from ..models.notifications_webhooks_messages_response import NotificationsWebhooksMessagesResponse
from ..models.notifications_webhooks_messages_response1 import NotificationsWebhooksMessagesResponse1
from ..models.notifications_webhooks_request import NotificationsWebhooksRequest, NotificationsWebhooksRequestDict
from ..models.notifications_webhooks_response import NotificationsWebhooksResponse
from ..models.notifications_webhooks_response1 import NotificationsWebhooksResponse1
from ..models.webhook_stats import WebhookStats
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def add_webhook(
        self,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NotificationsWebhooksResponse:
        """Send a ``POST`` request.

        Args:
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Conflict Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.add_webhook(body=body, request_options=request_options))

    def delete_webhook(self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful (empty body)

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Service unavailable ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(webhook_id, request_options=request_options))

    def get_webhook(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> NotificationsWebhooksResponse:
        """Send a ``GET`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_webhook(webhook_id, request_options=request_options))

    def get_webhook_message(
        self, webhook_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> NotificationsWebhooksMessagesResponse1:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            message_id: message Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_webhook_message(webhook_id, message_id, request_options=request_options)
        )

    def get_webhook_stats(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookStats:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Internal server error ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_webhook_stats(webhook_id, request_options=request_options))

    def list_app_webhooks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> NotificationsWebhooksResponse1:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Unauthorized Forbidden Too many requests Internal server error. Service unavailable ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_app_webhooks(request_options=request_options))

    def list_messages(
        self,
        webhook_id: str,
        *,
        limit: int | None = None,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NotificationsWebhooksMessagesResponse:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            limit: Maximum number of items included in the response. Max value = 500 and is the default value if this
                field is not provided
            filter_: Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_messages(
                webhook_id, limit=limit, filter_=filter_, request_options=request_options
            ),
        )

    def test_message(
        self,
        *,
        body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Too many requests Internal server error. Service unavailable
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.test_message(body=body, request_options=request_options))

    def update_webhook(
        self,
        webhook_id: str,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> NotificationsWebhooksResponse:
        """Send a ``POST`` request.

        Args:
            webhook_id: Value sent with the request.
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Conflict Too many requests Internal server error.
                Service unavailable ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_webhook(webhook_id, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def add_webhook(
        self,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NotificationsWebhooksResponse:
        """Send a ``POST`` request.

        Args:
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Conflict Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.add_webhook(body=body, request_options=request_options))

    async def delete_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deletion successful (empty body)

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Service unavailable ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(webhook_id, request_options=request_options))

    async def get_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NotificationsWebhooksResponse:
        """Send a ``GET`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_webhook(webhook_id, request_options=request_options))

    async def get_webhook_message(
        self, webhook_id: str, message_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NotificationsWebhooksMessagesResponse1:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            message_id: message Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_webhook_message(webhook_id, message_id, request_options=request_options)
        )

    async def get_webhook_stats(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookStats:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Internal server error ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_webhook_stats(webhook_id, request_options=request_options))

    async def list_app_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> NotificationsWebhooksResponse1:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Unauthorized Forbidden Too many requests Internal server error. Service unavailable ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_app_webhooks(request_options=request_options))

    async def list_messages(
        self,
        webhook_id: str,
        *,
        limit: int | None = None,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NotificationsWebhooksMessagesResponse:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            limit: Maximum number of items included in the response. Max value = 500 and is the default value if this
                field is not provided
            filter_: Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Too many requests Internal server error. Service
                unavailable ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_messages(
                webhook_id, limit=limit, filter_=filter_, request_options=request_options
            ),
        )

    async def test_message(
        self,
        *,
        body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Too many requests Internal server error. Service unavailable
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.test_message(body=body, request_options=request_options))

    async def update_webhook(
        self,
        webhook_id: str,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> NotificationsWebhooksResponse:
        """Send a ``POST`` request.

        Args:
            webhook_id: Value sent with the request.
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated

        Raises:
            ApiError: Bad Request Unauthorized Forbidden Not Found Conflict Too many requests Internal server error.
                Service unavailable ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_webhook(webhook_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_webhook(
        self,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationsWebhooksResponse, AddWebhookErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/notifications/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[NotificationsWebhooksResponse],
            error_mapper=add_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/notifications/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NotificationsWebhooksResponse, GetWebhookErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[NotificationsWebhooksResponse],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook_message(
        self, webhook_id: str, message_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NotificationsWebhooksMessagesResponse1, GetWebhookMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            message_id: message Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}/messages/{messageId}"),
            path_params=[param[str]("webhookId", webhook_id), param[str]("messageId", message_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[NotificationsWebhooksMessagesResponse1],
            error_mapper=get_webhook_message_error_mapper,
            request_options=request_options,
        )

    def get_webhook_stats(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookStats, GetWebhookStatsErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}/stats"),
            path_params=[param[str]("webhookId", webhook_id)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[WebhookStats],
            error_mapper=get_webhook_stats_error_mapper,
            request_options=request_options,
        )

    def list_app_webhooks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[NotificationsWebhooksResponse1, ListAppWebhooksErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks"),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[NotificationsWebhooksResponse1],
            error_mapper=list_app_webhooks_error_mapper,
            request_options=request_options,
        )

    def list_messages(
        self,
        webhook_id: str,
        *,
        limit: int | None = None,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationsWebhooksMessagesResponse, ListMessagesErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            limit: Maximum number of items included in the response. Max value = 500 and is the default value if this
                field is not provided
            filter_: Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}/messages"),
            path_params=[param[str]("webhookId", webhook_id)],
            query_params=[param[int | None]("limit", limit), param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[NotificationsWebhooksMessagesResponse],
            error_mapper=list_messages_error_mapper,
            request_options=request_options,
        )

    def test_message(
        self,
        *,
        body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TestMessageErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/notifications/messages/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=empty_response,
            error_mapper=test_message_error_mapper,
            request_options=request_options,
        )

    def update_webhook(
        self,
        webhook_id: str,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationsWebhooksResponse, UpdateWebhookErrorBody]:
        """Send a ``POST`` request.

        Args:
            webhook_id: Value sent with the request.
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/notifications/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=json_decoder[NotificationsWebhooksResponse],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_webhook(
        self,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationsWebhooksResponse, AddWebhookErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/notifications/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[NotificationsWebhooksResponse],
            error_mapper=add_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/notifications/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NotificationsWebhooksResponse, GetWebhookErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[NotificationsWebhooksResponse],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook_message(
        self, webhook_id: str, message_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NotificationsWebhooksMessagesResponse1, GetWebhookMessageErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            message_id: message Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}/messages/{messageId}"),
            path_params=[param[str]("webhookId", webhook_id), param[str]("messageId", message_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[NotificationsWebhooksMessagesResponse1],
            error_mapper=get_webhook_message_error_mapper,
            request_options=request_options,
        )

    async def get_webhook_stats(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookStats, GetWebhookStatsErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}/stats"),
            path_params=[param[str]("webhookId", webhook_id)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[WebhookStats],
            error_mapper=get_webhook_stats_error_mapper,
            request_options=request_options,
        )

    async def list_app_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[NotificationsWebhooksResponse1, ListAppWebhooksErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks"),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[NotificationsWebhooksResponse1],
            error_mapper=list_app_webhooks_error_mapper,
            request_options=request_options,
        )

    async def list_messages(
        self,
        webhook_id: str,
        *,
        limit: int | None = None,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationsWebhooksMessagesResponse, ListMessagesErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: webhook Id
            limit: Maximum number of items included in the response. Max value = 500 and is the default value if this
                field is not provided
            filter_: Filter field that allows filtering by date, status, eventTypeId, webhookId, eventId
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/notifications/webhooks/{webhookId}/messages"),
            path_params=[param[str]("webhookId", webhook_id)],
            query_params=[param[int | None]("limit", limit), param[str | None]("filter", filter_)],
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[NotificationsWebhooksMessagesResponse],
            error_mapper=list_messages_error_mapper,
            request_options=request_options,
        )

    async def test_message(
        self,
        *,
        body: NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, TestMessageErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/notifications/messages/test"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationsMessagesTestRequest | NotificationsMessagesTestRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=async_empty_response,
            error_mapper=test_message_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        webhook_id: str,
        *,
        body: NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[NotificationsWebhooksResponse, UpdateWebhookErrorBody]:
        """Send a ``POST`` request.

        Args:
            webhook_id: Value sent with the request.
            body: Webhook request object.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/notifications/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[NotificationsWebhooksRequest | NotificationsWebhooksRequestDict | None](body),
            auth_scheme=self._auth.services_token,
            decoder=async_json_decoder[NotificationsWebhooksResponse],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )
