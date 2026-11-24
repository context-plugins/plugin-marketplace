from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.v1_webhooks_deliveries_response import V1WebhooksDeliveriesResponse
from ..models.v1_webhooks_response import V1WebhooksResponse
from ..models.v1_webhooks_response1 import V1WebhooksResponse1
from ..models.webhook_create import WebhookCreate, WebhookCreateDict
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WebhooksResponse1:
        """Register an outbound webhook URL for terminal job events. The signing secret is returned once in the 201
        response and never again. If ``events`` is omitted you receive all four. Control-plane endpoint — free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created (secret returned once)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_webhook(body, request_options=request_options))

    def list_webhook_deliveries(
        self, id_: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> V1WebhooksDeliveriesResponse:
        """Return the per-attempt delivery log for a webhook (status code, delivered flag, response preview) for
        debugging failed deliveries. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            limit: Page size (max 200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_webhook_deliveries(id_, limit=limit, request_options=request_options)
        )

    def list_webhooks(self, *, request_options: RequestOptionsOrDict | None = None) -> V1WebhooksResponse:
        """List registered outbound webhooks. Secrets are never returned on read — only once at creation. Control-plane
        endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(request_options=request_options))

    def revoke_webhook(self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Revoked

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.revoke_webhook(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WebhooksResponse1:
        """Register an outbound webhook URL for terminal job events. The signing secret is returned once in the 201
        response and never again. If ``events`` is omitted you receive all four. Control-plane endpoint — free.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created (secret returned once)

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(body, request_options=request_options))

    async def list_webhook_deliveries(
        self, id_: UUID, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WebhooksDeliveriesResponse:
        """Return the per-attempt delivery log for a webhook (status code, delivered flag, response preview) for
        debugging failed deliveries. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            limit: Page size (max 200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_webhook_deliveries(id_, limit=limit, request_options=request_options)
        )

    async def list_webhooks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1WebhooksResponse:
        """List registered outbound webhooks. Secrets are never returned on read — only once at creation. Control-plane
        endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_webhooks(request_options=request_options))

    async def revoke_webhook(self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Revoked

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.revoke_webhook(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksResponse1, RawError]:
        """Register an outbound webhook URL for terminal job events. The signing secret is returned once in the 201
        response and never again. If ``events`` is omitted you receive all four. Control-plane endpoint — free.

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
            body=json_body[WebhookCreate | WebhookCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WebhooksResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_webhook_deliveries(
        self, id_: UUID, *, limit: int | None = 50, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksDeliveriesResponse, RawError]:
        """Return the per-attempt delivery log for a webhook (status code, delivered flag, response preview) for
        debugging failed deliveries. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            limit: Page size (max 200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{id}/deliveries"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WebhooksDeliveriesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_webhooks(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksResponse, RawError]:
        """List registered outbound webhooks. Secrets are never returned on read — only once at creation. Control-plane
        endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[V1WebhooksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def revoke_webhook(
        self, id_: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksResponse1, RawError]:
        """Register an outbound webhook URL for terminal job events. The signing secret is returned once in the 201
        response and never again. If ``events`` is omitted you receive all four. Control-plane endpoint — free.

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
            body=json_body[WebhookCreate | WebhookCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WebhooksResponse1],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_webhook_deliveries(
        self, id_: UUID, *, limit: int | None = 50, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksDeliveriesResponse, RawError]:
        """Return the per-attempt delivery log for a webhook (status code, delivered flag, response preview) for
        debugging failed deliveries. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            limit: Page size (max 200).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{id}/deliveries"),
            path_params=[param[UUID]("id", id_)],
            query_params=[param[int | None]("limit", limit)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WebhooksDeliveriesResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksResponse, RawError]:
        """List registered outbound webhooks. Secrets are never returned on read — only once at creation. Control-plane
        endpoint — free.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[V1WebhooksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def revoke_webhook(
        self, id_: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Soft-revoke a webhook; delivery stops immediately. Returns 204 No Content. Control-plane endpoint — free.

        Args:
            id_: Webhook UUID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
