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
from ..errors.list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from ..models.v1_webhooks_request import V1WebhooksRequest, V1WebhooksRequestDict
from ..models.webhook_created import WebhookCreated
from ..models.webhook_deleted import WebhookDeleted
from ..models.webhook_list import WebhookList
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self, body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookCreated:
        """Registers an HTTPS endpoint for signed event deliveries. The signing ``secret`` is returned only in this
        response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not
        idempotent: retrying creates a second endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The endpoint, with its signing secret.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. ``url`` missing, not a URL or not https,
                an unknown event type, an empty ``events`` array or a body that isn't valid JSON (``invalid_request``).
                More requests this minute than the plan allows for this key. Not counted in usage. Something failed on
                Prisma's side. Retryable. Prisma is under maintenance and the API is paused. Retryable. ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_webhook(body, request_options=request_options))

    def delete_webhook(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookDeleted:
        """Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint
        and delete the old one.

        Args:
            id_: Webhook endpoint ID (``we_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No webhook endpoint with that ID in this
                workspace. More requests this minute than the plan allows for this key. Not counted in usage. Something
                failed on Prisma's side. Retryable. Prisma is under maintenance and the API is paused. Retryable.
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(id_, request_options=request_options))

    def list_webhooks(self, *, request_options: RequestOptionsOrDict | None = None) -> WebhookList:
        """Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All endpoints.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self,
        body: V1WebhooksRequest | V1WebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookCreated:
        """Registers an HTTPS endpoint for signed event deliveries. The signing ``secret`` is returned only in this
        response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not
        idempotent: retrying creates a second endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The endpoint, with its signing secret.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. ``url`` missing, not a URL or not https,
                an unknown event type, an empty ``events`` array or a body that isn't valid JSON (``invalid_request``).
                More requests this minute than the plan allows for this key. Not counted in usage. Something failed on
                Prisma's side. Retryable. Prisma is under maintenance and the API is paused. Retryable. ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(body, request_options=request_options))

    async def delete_webhook(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookDeleted:
        """Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint
        and delete the old one.

        Args:
            id_: Webhook endpoint ID (``we_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Deleted.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. No webhook endpoint with that ID in this
                workspace. More requests this minute than the plan allows for this key. Not counted in usage. Something
                failed on Prisma's side. Retryable. Prisma is under maintenance and the API is paused. Retryable.
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(id_, request_options=request_options))

    async def list_webhooks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> WebhookList:
        """Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            All endpoints.

        Raises:
            ApiError: No API key or one not shaped like a Prisma key (``missing_api_key``), or a key that doesn't exist
                or was revoked (``invalid_api_key``). The account is suspended. More requests this minute than the plan
                allows for this key. Not counted in usage. Something failed on Prisma's side. Retryable. Prisma is under
                maintenance and the API is paused. Retryable. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_webhooks(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self, body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookCreated, CreateWebhookErrorBody]:
        """Registers an HTTPS endpoint for signed event deliveries. The signing ``secret`` is returned only in this
        response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not
        idempotent: retrying creates a second endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebhooksRequest | V1WebhooksRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[WebhookCreated],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookDeleted, DeleteWebhookErrorBody]:
        """Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint
        and delete the old one.

        Args:
            id_: Webhook endpoint ID (``we_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[WebhookDeleted],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def list_webhooks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookList, ListWebhooksErrorBody]:
        """Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[WebhookList],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self,
        body: V1WebhooksRequest | V1WebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreated, CreateWebhookErrorBody]:
        """Registers an HTTPS endpoint for signed event deliveries. The signing ``secret`` is returned only in this
        response. Endpoints belong to the workspace, not to a key: they receive events from both live and test mode. Not
        idempotent: retrying creates a second endpoint.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebhooksRequest | V1WebhooksRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[WebhookCreated],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookDeleted, DeleteWebhookErrorBody]:
        """Deletes the endpoint; deliveries still pending for it are dropped. There is no update: create a new endpoint
        and delete the old one.

        Args:
            id_: Webhook endpoint ID (``we_…``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[WebhookDeleted],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def list_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookList, ListWebhooksErrorBody]:
        """Every webhook endpoint of the workspace (shared by live and test keys). Secrets are never returned.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[WebhookList],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )
