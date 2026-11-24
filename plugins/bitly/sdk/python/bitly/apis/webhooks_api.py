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
from ..errors.create_webhook_error import CreateWebhookErrorBody, create_webhook_error_mapper
from ..errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from ..errors.get_webhook_error import GetWebhookErrorBody, get_webhook_error_mapper
from ..errors.get_webhooks_error import GetWebhooksErrorBody, get_webhooks_error_mapper
from ..errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from ..errors.verify_webhook_error import VerifyWebhookErrorBody, verify_webhook_error_mapper
from ..models.webhook import Webhook
from ..models.webhook_create import WebhookCreate, WebhookCreateDict
from ..models.webhook_update import WebhookUpdate, WebhookUpdateDict
from ..models.webhooks_model import WebhooksModel
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Webhook:
        """Creates a webhook.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CREATED

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.create_webhook(body, request_options=request_options))

    def delete_webhook(self, webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Deletes a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(webhook_guid, request_options=request_options))

    def get_webhook(self, webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook:
        """Returns a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_webhook(webhook_guid, request_options=request_options))

    def get_webhooks(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhooksModel:
        """Fetch all webhooks available for an Organization

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.get_webhooks(organization_guid, request_options=request_options))

    def update_webhook(
        self,
        webhook_guid: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Update a webhook

        Args:
            webhook_guid: A GUID for a Bitly webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(self._with_raw_response.update_webhook(webhook_guid, body, request_options=request_options))

    def verify_webhook(self, webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook:
        """Sends ping event to test webhook configuration.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | RawError``."""
        return unwrap(self._with_raw_response.verify_webhook(webhook_guid, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Creates a webhook.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            CREATED

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.create_webhook(body, request_options=request_options))

    async def delete_webhook(
        self, webhook_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_webhook(webhook_guid, request_options=request_options))

    async def get_webhook(
        self, webhook_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Returns a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR
                TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_webhook(webhook_guid, request_options=request_options))

    async def get_webhooks(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhooksModel:
        """Fetch all webhooks available for an Organization

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: UPGRADE_REQUIRED FORBIDDEN NOT_FOUND MONTHLY_LIMIT_EXCEEDED INTERNAL_ERROR TEMPORARILY_UNAVAILABLE
                ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.get_webhooks(organization_guid, request_options=request_options))

    async def update_webhook(
        self,
        webhook_guid: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Update a webhook

        Args:
            webhook_guid: A GUID for a Bitly webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND UNPROCESSABLE_ENTITY MONTHLY_LIMIT_EXCEEDED
                INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error`` is ``Error | SimplifiedError | RawError``."""
        return unwrap(await self._with_raw_response.update_webhook(webhook_guid, body, request_options=request_options))

    async def verify_webhook(
        self, webhook_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Sends ping event to test webhook configuration.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            SUCCESS

        Raises:
            ApiError: BAD_REQUEST UPGRADE_REQUIRED FORBIDDEN NOT_FOUND INTERNAL_ERROR TEMPORARILY_UNAVAILABLE ``error``
                is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.verify_webhook(webhook_guid, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, CreateWebhookErrorBody]:
        """Creates a webhook.

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
            body=json_body[WebhookCreate | WebhookCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self, webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Deletes a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{webhook_guid}"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook(
        self, webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, GetWebhookErrorBody]:
        """Returns a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{webhook_guid}"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhooks(
        self, organization_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksModel, GetWebhooksErrorBody]:
        """Fetch all webhooks available for an Organization

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/webhooks"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhooksModel],
            error_mapper=get_webhooks_error_mapper,
            request_options=request_options,
        )

    def update_webhook(
        self,
        webhook_guid: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, UpdateWebhookErrorBody]:
        """Update a webhook

        Args:
            webhook_guid: A GUID for a Bitly webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/webhooks/{webhook_guid}"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookUpdate | WebhookUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )

    def verify_webhook(
        self, webhook_guid: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, VerifyWebhookErrorBody]:
        """Sends ping event to test webhook configuration.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks/{webhook_guid}/verify"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=verify_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self, body: WebhookCreate | WebhookCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, CreateWebhookErrorBody]:
        """Creates a webhook.

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
            body=json_body[WebhookCreate | WebhookCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self, webhook_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Deletes a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/webhooks/{webhook_guid}"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook(
        self, webhook_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, GetWebhookErrorBody]:
        """Returns a webhook.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/webhooks/{webhook_guid}"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhooks(
        self, organization_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhooksModel, GetWebhooksErrorBody]:
        """Fetch all webhooks available for an Organization

        Args:
            organization_guid: A GUID for a Bitly organization
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/organizations/{organization_guid}/webhooks"),
            path_params=[param[str]("organization_guid", organization_guid)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhooksModel],
            error_mapper=get_webhooks_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        webhook_guid: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, UpdateWebhookErrorBody]:
        """Update a webhook

        Args:
            webhook_guid: A GUID for a Bitly webhook
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/webhooks/{webhook_guid}"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookUpdate | WebhookUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )

    async def verify_webhook(
        self, webhook_guid: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, VerifyWebhookErrorBody]:
        """Sends ping event to test webhook configuration.

        Args:
            webhook_guid: A GUID for a Bitly webhook
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/webhooks/{webhook_guid}/verify"),
            path_params=[param[str]("webhook_guid", webhook_guid)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=verify_webhook_error_mapper,
            request_options=request_options,
        )
