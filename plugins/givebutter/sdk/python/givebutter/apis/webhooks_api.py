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
from ..errors.webhooks_destroy_error import WebhooksDestroyErrorBody, webhooks_destroy_error_mapper
from ..errors.webhooks_show_error import WebhooksShowErrorBody, webhooks_show_error_mapper
from ..errors.webhooks_store_error import WebhooksStoreErrorBody, webhooks_store_error_mapper
from ..errors.webhooks_update_error import WebhooksUpdateErrorBody, webhooks_update_error_mapper
from ..models.v1_webhooks_request import V1WebhooksRequest, V1WebhooksRequestDict
from ..models.v1_webhooks_request1 import V1WebhooksRequest1, V1WebhooksRequest1Dict
from ..models.v1_webhooks_response import V1WebhooksResponse
from ..models.webhook_resource import WebhookResource
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def webhooks_destroy(self, webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.webhooks_destroy(webhook, request_options=request_options))

    def webhooks_index(self, *, request_options: RequestOptionsOrDict | None = None) -> V1WebhooksResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``WebhookResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.webhooks_index(request_options=request_options))

    def webhooks_show(self, webhook: str, *, request_options: RequestOptionsOrDict | None = None) -> WebhookResource:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.webhooks_show(webhook, request_options=request_options))

    def webhooks_store(
        self, body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.webhooks_store(body, request_options=request_options))

    def webhooks_update(
        self,
        webhook: str,
        body: V1WebhooksRequest1 | V1WebhooksRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookResource:
        """Send a ``PUT`` request.

        Args:
            webhook: The webhook ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookResource``

        Raises:
            ApiError: Validation error Not found ``error`` is ``ModelNotFoundException1 | ValidationException1 |
                RawError``."""
        return unwrap(self._with_raw_response.webhooks_update(webhook, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def webhooks_destroy(self, webhook: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.webhooks_destroy(webhook, request_options=request_options))

    async def webhooks_index(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> V1WebhooksResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``WebhookResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.webhooks_index(request_options=request_options))

    async def webhooks_show(
        self, webhook: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookResource:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.webhooks_show(webhook, request_options=request_options))

    async def webhooks_store(
        self,
        body: V1WebhooksRequest | V1WebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.webhooks_store(body, request_options=request_options))

    async def webhooks_update(
        self,
        webhook: str,
        body: V1WebhooksRequest1 | V1WebhooksRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResource:
        """Send a ``PUT`` request.

        Args:
            webhook: The webhook ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookResource``

        Raises:
            ApiError: Validation error Not found ``error`` is ``ModelNotFoundException1 | ValidationException1 |
                RawError``."""
        return unwrap(await self._with_raw_response.webhooks_update(webhook, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def webhooks_destroy(
        self, webhook: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebhooksDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks/{webhook}"),
            path_params=[param[str]("webhook", webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=webhooks_destroy_error_mapper,
            request_options=request_options,
        )

    def webhooks_index(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1WebhooksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def webhooks_show(
        self, webhook: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookResource, WebhooksShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{webhook}"),
            path_params=[param[str]("webhook", webhook)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[WebhookResource],
            error_mapper=webhooks_show_error_mapper,
            request_options=request_options,
        )

    def webhooks_store(
        self, body: V1WebhooksRequest | V1WebhooksRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookResource, WebhooksStoreErrorBody]:
        """Send a ``POST`` request.

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
            auth_scheme=self._auth.http,
            decoder=json_decoder[WebhookResource],
            error_mapper=webhooks_store_error_mapper,
            request_options=request_options,
        )

    def webhooks_update(
        self,
        webhook: str,
        body: V1WebhooksRequest1 | V1WebhooksRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResource, WebhooksUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            webhook: The webhook ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/webhooks/{webhook}"),
            path_params=[param[str]("webhook", webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebhooksRequest1 | V1WebhooksRequest1Dict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[WebhookResource],
            error_mapper=webhooks_update_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def webhooks_destroy(
        self, webhook: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, WebhooksDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/webhooks/{webhook}"),
            path_params=[param[str]("webhook", webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=webhooks_destroy_error_mapper,
            request_options=request_options,
        )

    async def webhooks_index(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks"),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1WebhooksResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def webhooks_show(
        self, webhook: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookResource, WebhooksShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{webhook}"),
            path_params=[param[str]("webhook", webhook)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[WebhookResource],
            error_mapper=webhooks_show_error_mapper,
            request_options=request_options,
        )

    async def webhooks_store(
        self,
        body: V1WebhooksRequest | V1WebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResource, WebhooksStoreErrorBody]:
        """Send a ``POST`` request.

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
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[WebhookResource],
            error_mapper=webhooks_store_error_mapper,
            request_options=request_options,
        )

    async def webhooks_update(
        self,
        webhook: str,
        body: V1WebhooksRequest1 | V1WebhooksRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResource, WebhooksUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            webhook: The webhook ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/webhooks/{webhook}"),
            path_params=[param[str]("webhook", webhook)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1WebhooksRequest1 | V1WebhooksRequest1Dict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[WebhookResource],
            error_mapper=webhooks_update_error_mapper,
            request_options=request_options,
        )
