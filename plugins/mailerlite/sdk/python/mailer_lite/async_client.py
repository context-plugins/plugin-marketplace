from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseMailerLiteClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RawError,
    RetryOptionsOrDict,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    json_body,
    no_auth,
    param,
    raw_error_response,
    unwrap,
)
from .errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from .errors.post_webhooks_error import PostWebhooksErrorBody, post_webhooks_error_mapper
from .errors.show_webhook_by_id_error import ShowWebhookByIdErrorBody, show_webhook_by_id_error_mapper
from .errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from .models.webhook import Webhook, WebhookDict
from .server.environment import Environment
from .server.server import Server


class AsyncMailerLiteClient(BaseMailerLiteClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "MailerLiteClient/2.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "2.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key=ApiKeyHeaderScheme("x-mailerlite-apikey", api_key) if api_key is not None else no_auth
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server, self._auth)

    async def create_webhook(
        self,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Send a ``GET`` request.

        Args:
            limit: max records to return
            offset: number of items to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful operation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.create_webhook(limit=limit, offset=offset, request_options=request_options)
        )

    async def delete_webhook(
        self, webhook_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            webhook_id: The id of the webhook to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful operation

        Raises:
            ApiError: Webhook not found ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.delete_webhook(webhook_id, request_options=request_options))

    async def get_count_of_webhooks(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> None:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful operation

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.get_count_of_webhooks(request_options=request_options))

    async def post_webhooks(
        self, body: Webhook | WebhookDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``POST`` request.

        Args:
            body: Created webhook object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful operation

        Raises:
            ApiError: Invalid data provided ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.post_webhooks(body, request_options=request_options))

    async def show_webhook_by_id(
        self, webhook_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Send a ``GET`` request.

        Args:
            webhook_id: The id of the webhook to retrieve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Expected response to a valid request

        Raises:
            ApiError: A webhook is not found ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.show_webhook_by_id(webhook_id, request_options=request_options))

    async def update_webhook(
        self, webhook_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``PUT`` request.

        Args:
            webhook_id: The id of the webhook to update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            successful operation

        Raises:
            ApiError: Invalid data provided ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.update_webhook(webhook_id, request_options=request_options))

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self,
        *,
        limit: int | None = 100,
        offset: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            limit: max records to return
            offset: number of items to skip
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks"),
            query_params=[param[int | None]("limit", limit), param[int | None]("offset", offset)],
            auth_scheme=self._auth.api_key,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_webhook(
        self, webhook_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            webhook_id: The id of the webhook to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{webhookId}"),
            path_params=[param[int]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=async_empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_count_of_webhooks(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/count"),
            auth_scheme=self._auth.api_key,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def post_webhooks(
        self, body: Webhook | WebhookDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, PostWebhooksErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: Created webhook object
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Webhook | WebhookDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_empty_response,
            error_mapper=post_webhooks_error_mapper,
            request_options=request_options,
        )

    async def show_webhook_by_id(
        self, webhook_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, ShowWebhookByIdErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook_id: The id of the webhook to retrieve
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{webhookId}"),
            path_params=[param[int]("webhookId", webhook_id)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Webhook],
            error_mapper=show_webhook_by_id_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self, webhook_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, UpdateWebhookErrorBody]:
        """Send a ``PUT`` request.

        Args:
            webhook_id: The id of the webhook to update
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/webhooks/{webhookId}"),
            path_params=[param[int]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key,
            decoder=async_empty_response,
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncMailerLiteClient
