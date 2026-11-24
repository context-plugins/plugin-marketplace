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
from ..errors.create_partner_webhook_error import CreatePartnerWebhookErrorBody, create_partner_webhook_error_mapper
from ..errors.delete_partner_webhook_error import DeletePartnerWebhookErrorBody, delete_partner_webhook_error_mapper
from ..errors.fetch_partner_webhook_error import FetchPartnerWebhookErrorBody, fetch_partner_webhook_error_mapper
from ..errors.list_partner_webhooks_error import ListPartnerWebhooksErrorBody, list_partner_webhooks_error_mapper
from ..errors.update_partner_webhook_error import UpdatePartnerWebhookErrorBody, update_partner_webhook_error_mapper
from ..models.partner_webhook import PartnerWebhook, PartnerWebhookDict
from ..models.v2_accounts_webhooks_request import V2AccountsWebhooksRequest, V2AccountsWebhooksRequestDict
from ..models.v2_accounts_webhooks_response import V2AccountsWebhooksResponse
from ..server.server import Server


class PartnerWebhooks:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PartnerWebhooksWithRawResponse(client, server, auth)

    def create_partner_webhook(
        self,
        account_id: str,
        body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PartnerWebhook:
        """Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_partner_webhook(account_id, body, request_options=request_options))

    def delete_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.delete_partner_webhook(account_id, webhook_id, request_options=request_options)
        )

    def fetch_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PartnerWebhook:
        """Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_partner_webhook(account_id, webhook_id, request_options=request_options)
        )

    def list_partner_webhooks(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V2AccountsWebhooksResponse:
        """Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of webhooks

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_partner_webhooks(account_id, request_options=request_options))

    def update_partner_webhook(
        self,
        account_id: str,
        webhook_id: str,
        body: PartnerWebhook | PartnerWebhookDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PartnerWebhook:
        """Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook updated

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.update_partner_webhook(
                account_id, webhook_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PartnerWebhooksWithRawResponse:
        return self._with_raw_response


class AsyncPartnerWebhooks:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPartnerWebhooksWithRawResponse(client, server, auth)

    async def create_partner_webhook(
        self,
        account_id: str,
        body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PartnerWebhook:
        """Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_partner_webhook(account_id, body, request_options=request_options)
        )

    async def delete_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_partner_webhook(
                account_id, webhook_id, request_options=request_options
            ),
        )

    async def fetch_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PartnerWebhook:
        """Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook details

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. Resource not found. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_partner_webhook(account_id, webhook_id, request_options=request_options)
        )

    async def list_partner_webhooks(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V2AccountsWebhooksResponse:
        """Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of webhooks

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_partner_webhooks(account_id, request_options=request_options))

    async def update_partner_webhook(
        self,
        account_id: str,
        webhook_id: str,
        body: PartnerWebhook | PartnerWebhookDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PartnerWebhook:
        """Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook updated

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. Internal server error. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.update_partner_webhook(
                account_id, webhook_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPartnerWebhooksWithRawResponse:
        return self._with_raw_response


class PartnerWebhooksWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_partner_webhook(
        self,
        account_id: str,
        body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerWebhook, CreatePartnerWebhookErrorBody]:
        """Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[PartnerWebhook],
            error_mapper=create_partner_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeletePartnerWebhookErrorBody]:
        """Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Any],
            error_mapper=delete_partner_webhook_error_mapper,
            request_options=request_options,
        )

    def fetch_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PartnerWebhook, FetchPartnerWebhookErrorBody]:
        """Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("webhook_id", webhook_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[PartnerWebhook],
            error_mapper=fetch_partner_webhook_error_mapper,
            request_options=request_options,
        )

    def list_partner_webhooks(
        self, account_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V2AccountsWebhooksResponse, ListPartnerWebhooksErrorBody]:
        """Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[V2AccountsWebhooksResponse],
            error_mapper=list_partner_webhooks_error_mapper,
            request_options=request_options,
        )

    def update_partner_webhook(
        self,
        account_id: str,
        webhook_id: str,
        body: PartnerWebhook | PartnerWebhookDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerWebhook, UpdatePartnerWebhookErrorBody]:
        """Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PartnerWebhook | PartnerWebhookDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[PartnerWebhook],
            error_mapper=update_partner_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncPartnerWebhooksWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_partner_webhook(
        self,
        account_id: str,
        body: V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerWebhook, CreatePartnerWebhookErrorBody]:
        """Create a webhook to receive events for a sub-merchant account. Maximum 30 webhooks per account.
        Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks"),
            path_params=[param[str]("account_id", account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V2AccountsWebhooksRequest | V2AccountsWebhooksRequestDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[PartnerWebhook],
            error_mapper=create_partner_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeletePartnerWebhookErrorBody]:
        """Delete a webhook for a sub-merchant account. Returns empty array on success. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Any],
            error_mapper=delete_partner_webhook_error_mapper,
            request_options=request_options,
        )

    async def fetch_partner_webhook(
        self, account_id: str, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PartnerWebhook, FetchPartnerWebhookErrorBody]:
        """Retrieve details of a specific webhook for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("webhook_id", webhook_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[PartnerWebhook],
            error_mapper=fetch_partner_webhook_error_mapper,
            request_options=request_options,
        )

    async def list_partner_webhooks(
        self, account_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V2AccountsWebhooksResponse, ListPartnerWebhooksErrorBody]:
        """Retrieve all webhooks configured for a sub-merchant account. Authentication: OAuth access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks"),
            path_params=[param[str]("account_id", account_id)],
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[V2AccountsWebhooksResponse],
            error_mapper=list_partner_webhooks_error_mapper,
            request_options=request_options,
        )

    async def update_partner_webhook(
        self,
        account_id: str,
        webhook_id: str,
        body: PartnerWebhook | PartnerWebhookDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PartnerWebhook, UpdatePartnerWebhookErrorBody]:
        """Update webhook URL, events, secret, or active status for a sub-merchant account. Authentication: OAuth
        access_token.

        Args:
            account_id: Unique identifier of the linked merchant account (e.g. ``acc_00000000000001``).
            webhook_id: Unique identifier of the webhook (e.g. ``we_00000000000001``).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v2/accounts/{account_id}/webhooks/{webhook_id}"),
            path_params=[param[str]("account_id", account_id), param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PartnerWebhook | PartnerWebhookDict](body),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[PartnerWebhook],
            error_mapper=update_partner_webhook_error_mapper,
            request_options=request_options,
        )
