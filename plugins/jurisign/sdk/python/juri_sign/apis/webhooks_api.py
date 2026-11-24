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
from ..errors.get_webhook_logs_error import GetWebhookLogsErrorBody, get_webhook_logs_error_mapper
from ..errors.list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from ..errors.regenerate_webhook_secret_error import (
    RegenerateWebhookSecretErrorBody,
    regenerate_webhook_secret_error_mapper,
)
from ..errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from ..models.message_response import MessageResponse
from ..models.webhooks_logs_response import WebhooksLogsResponse
from ..models.webhooks_regenerate_secret_response import WebhooksRegenerateSecretResponse
from ..models.webhooks_request import WebhooksRequest, WebhooksRequestDict
from ..models.webhooks_request1 import WebhooksRequest1, WebhooksRequest1Dict
from ..models.webhooks_response import WebhooksResponse
from ..models.webhooks_response1 import WebhooksResponse1
from ..models.webhooks_response2 import WebhooksResponse2
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self, body: WebhooksRequest | WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhooksResponse1:
        """Register a new webhook endpoint. The response includes the signing secret which is only shown once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created (secret shown only once)

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(self._with_raw_response.create_webhook(body, request_options=request_options))

    def delete_webhook(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> MessageResponse:
        """Delete a webhook endpoint and all its delivery logs.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions Resource not found ``error`` is
                ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(id_, request_options=request_options))

    def get_webhook_logs(
        self, id_: int, *, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> WebhooksLogsResponse:
        """View delivery logs for a specific webhook endpoint.

        Args:
            id_: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delivery logs

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.get_webhook_logs(id_, per_page=per_page, request_options=request_options))

    def list_webhooks(self, *, request_options: RequestOptionsOrDict | None = None) -> WebhooksResponse:
        """List all webhook endpoints for your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook endpoints

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(request_options=request_options))

    def regenerate_webhook_secret(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhooksRegenerateSecretResponse:
        """Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New secret generated

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(self._with_raw_response.regenerate_webhook_secret(id_, request_options=request_options))

    def update_webhook(
        self,
        id_: int,
        *,
        body: WebhooksRequest1 | WebhooksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhooksResponse2:
        """Update a webhook endpoint's URL, events, or active status.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook updated

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions Resource not found ``error`` is
                ``MessageResponse | RawError``."""
        return unwrap(self._with_raw_response.update_webhook(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self, body: WebhooksRequest | WebhooksRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhooksResponse1:
        """Register a new webhook endpoint. The response includes the signing secret which is only shown once.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created (secret shown only once)

        Raises:
            ApiError: Missing or invalid Bearer token Validation error ``error`` is ``MessageResponse | ValidationError1
                | RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(body, request_options=request_options))

    async def delete_webhook(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> MessageResponse:
        """Delete a webhook endpoint and all its delivery logs.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions Resource not found ``error`` is
                ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(id_, request_options=request_options))

    async def get_webhook_logs(
        self, id_: int, *, per_page: int | None = 20, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhooksLogsResponse:
        """View delivery logs for a specific webhook endpoint.

        Args:
            id_: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delivery logs

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_webhook_logs(id_, per_page=per_page, request_options=request_options)
        )

    async def list_webhooks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> WebhooksResponse:
        """List all webhook endpoints for your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook endpoints

        Raises:
            ApiError: Missing or invalid Bearer token ``error`` is ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_webhooks(request_options=request_options))

    async def regenerate_webhook_secret(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhooksRegenerateSecretResponse:
        """Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            New secret generated

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions ``error`` is ``MessageResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.regenerate_webhook_secret(id_, request_options=request_options))

    async def update_webhook(
        self,
        id_: int,
        *,
        body: WebhooksRequest1 | WebhooksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhooksResponse2:
        """Update a webhook endpoint's URL, events, or active status.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook updated

        Raises:
            ApiError: Missing or invalid Bearer token Insufficient permissions Resource not found ``error`` is
                ``MessageResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_webhook(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self, body: WebhooksRequest | WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksResponse1, CreateWebhookErrorBody]:
        """Register a new webhook endpoint. The response includes the signing secret which is only shown once.

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
            body=json_body[WebhooksRequest | WebhooksRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhooksResponse1],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteWebhookErrorBody]:
        """Delete a webhook endpoint and all its delivery logs.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MessageResponse],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook_logs(
        self, id_: int, *, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksLogsResponse, GetWebhookLogsErrorBody]:
        """View delivery logs for a specific webhook endpoint.

        Args:
            id_: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{id}/logs"),
            path_params=[param[int]("id", id_)],
            query_params=[param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhooksLogsResponse],
            error_mapper=get_webhook_logs_error_mapper,
            request_options=request_options,
        )

    def list_webhooks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksResponse, ListWebhooksErrorBody]:
        """List all webhook endpoints for your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhooksResponse],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    def regenerate_webhook_secret(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksRegenerateSecretResponse, RegenerateWebhookSecretErrorBody]:
        """Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks/{id}/regenerate-secret"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhooksRegenerateSecretResponse],
            error_mapper=regenerate_webhook_secret_error_mapper,
            request_options=request_options,
        )

    def update_webhook(
        self,
        id_: int,
        *,
        body: WebhooksRequest1 | WebhooksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhooksResponse2, UpdateWebhookErrorBody]:
        """Update a webhook endpoint's URL, events, or active status.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhooksRequest1 | WebhooksRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhooksResponse2],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self, body: WebhooksRequest | WebhooksRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksResponse1, CreateWebhookErrorBody]:
        """Register a new webhook endpoint. The response includes the signing secret which is only shown once.

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
            body=json_body[WebhooksRequest | WebhooksRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhooksResponse1],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MessageResponse, DeleteWebhookErrorBody]:
        """Delete a webhook endpoint and all its delivery logs.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MessageResponse],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook_logs(
        self, id_: int, *, per_page: int | None = 20, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksLogsResponse, GetWebhookLogsErrorBody]:
        """View delivery logs for a specific webhook endpoint.

        Args:
            id_: Value sent with the request.
            per_page: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{id}/logs"),
            path_params=[param[int]("id", id_)],
            query_params=[param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhooksLogsResponse],
            error_mapper=get_webhook_logs_error_mapper,
            request_options=request_options,
        )

    async def list_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksResponse, ListWebhooksErrorBody]:
        """List all webhook endpoints for your organization.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhooksResponse],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    async def regenerate_webhook_secret(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksRegenerateSecretResponse, RegenerateWebhookSecretErrorBody]:
        """Generate a new signing secret for the webhook endpoint. The old secret will no longer be valid.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks/{id}/regenerate-secret"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhooksRegenerateSecretResponse],
            error_mapper=regenerate_webhook_secret_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        id_: int,
        *,
        body: WebhooksRequest1 | WebhooksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhooksResponse2, UpdateWebhookErrorBody]:
        """Update a webhook endpoint's URL, events, or active status.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webhooks/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhooksRequest1 | WebhooksRequest1Dict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhooksResponse2],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )
