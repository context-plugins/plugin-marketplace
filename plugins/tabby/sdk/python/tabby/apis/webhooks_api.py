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
from ..errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from ..errors.get_webhook_error import GetWebhookErrorBody, get_webhook_error_mapper
from ..errors.get_webhooks_error import GetWebhooksErrorBody, get_webhooks_error_mapper
from ..errors.post_webhook_error import PostWebhookErrorBody, post_webhook_error_mapper
from ..errors.put_webhook_error import PutWebhookErrorBody, put_webhook_error_mapper
from ..models.webhook import Webhook
from ..models.webhook_delete import WebhookDelete
from ..models.webhook_registration import WebhookRegistration, WebhookRegistrationDict
from ..models.webhook_registration_response import WebhookRegistrationResponse
from ..models.webhook_update import WebhookUpdate, WebhookUpdateDict
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def delete_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookDelete:
        """Removes the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook was deleted successfully.

        Raises:
            ApiError: The request cannot be authorized. You are using an incorrect ID. Something bad happened. We're
                notified. ``error`` is ``Error401InvalidSecretKey | Error404NoSuchWebhook | str | RawError``."""
        return unwrap(self._with_raw_response.delete_webhook(id_, x_merchant_code, request_options=request_options))

    def get_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Webhook:
        """Retrieves the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: The request cannot be authorized. You are using an incorrect ID. Something bad happened. We're
                notified. ``error`` is ``Error401InvalidSecretKey | Error404NoSuchWebhook | str | RawError``."""
        return unwrap(self._with_raw_response.get_webhook(id_, x_merchant_code, request_options=request_options))

    def get_webhooks(self, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None) -> Webhook:
        """Retrieves all registred webhooks.

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: The request cannot be authorized. You are using an incorrect ID. Something bad happened. We're
                notified. ``error`` is ``Error401Authorization | str | RawError``."""
        return unwrap(self._with_raw_response.get_webhooks(x_merchant_code, request_options=request_options))

    def post_webhook(
        self,
        x_merchant_code: str,
        body: WebhookRegistration | WebhookRegistrationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookRegistrationResponse:
        """Creates a new webhook

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error401InvalidSecretKey | Error401Authorization | str | RawError``."""
        return unwrap(self._with_raw_response.post_webhook(x_merchant_code, body, request_options=request_options))

    def put_webhook(
        self,
        id_: UUID,
        x_merchant_code: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookUpdate:
        """Updates the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error401InvalidSecretKey | Error401Authorization | Error403
                | Error404NoSuchWebhook | str | RawError``."""
        return unwrap(self._with_raw_response.put_webhook(id_, x_merchant_code, body, request_options=request_options))

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def delete_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookDelete:
        """Removes the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook was deleted successfully.

        Raises:
            ApiError: The request cannot be authorized. You are using an incorrect ID. Something bad happened. We're
                notified. ``error`` is ``Error401InvalidSecretKey | Error404NoSuchWebhook | str | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_webhook(id_, x_merchant_code, request_options=request_options)
        )

    async def get_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Retrieves the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: The request cannot be authorized. You are using an incorrect ID. Something bad happened. We're
                notified. ``error`` is ``Error401InvalidSecretKey | Error404NoSuchWebhook | str | RawError``."""
        return unwrap(await self._with_raw_response.get_webhook(id_, x_merchant_code, request_options=request_options))

    async def get_webhooks(
        self, x_merchant_code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Retrieves all registred webhooks.

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: The request cannot be authorized. You are using an incorrect ID. Something bad happened. We're
                notified. ``error`` is ``Error401Authorization | str | RawError``."""
        return unwrap(await self._with_raw_response.get_webhooks(x_merchant_code, request_options=request_options))

    async def post_webhook(
        self,
        x_merchant_code: str,
        body: WebhookRegistration | WebhookRegistrationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookRegistrationResponse:
        """Creates a new webhook

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You are using an incorrect ID. Something bad happened. We're notified. ``error`` is
                ``Error401InvalidSecretKey | Error401Authorization | str | RawError``."""
        return unwrap(
            await self._with_raw_response.post_webhook(x_merchant_code, body, request_options=request_options)
        )

    async def put_webhook(
        self,
        id_: UUID,
        x_merchant_code: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookUpdate:
        """Updates the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success. Webhook object is returned.

        Raises:
            ApiError: One of the required fields is missing or request is not formatted correctly. The request cannot be
                authorized. You tried to perform an action which is forbidden. You are using an incorrect ID. Something
                bad happened. We're notified. ``error`` is ``Error401InvalidSecretKey | Error401Authorization | Error403
                | Error404NoSuchWebhook | str | RawError``."""
        return unwrap(
            await self._with_raw_response.put_webhook(id_, x_merchant_code, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def delete_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookDelete, DeleteWebhookErrorBody]:
        """Removes the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("X-Merchant-Code", x_merchant_code), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhookDelete],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, GetWebhookErrorBody]:
        """Retrieves the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("X-Merchant-Code", x_merchant_code)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhooks(
        self, x_merchant_code: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, GetWebhooksErrorBody]:
        """Retrieves all registred webhooks.

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhooks"),
            headers=[param[str]("X-Merchant-Code", x_merchant_code)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=get_webhooks_error_mapper,
            request_options=request_options,
        )

    def post_webhook(
        self,
        x_merchant_code: str,
        body: WebhookRegistration | WebhookRegistrationDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookRegistrationResponse, PostWebhookErrorBody]:
        """Creates a new webhook

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhooks"),
            headers=[param[str]("X-Merchant-Code", x_merchant_code), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookRegistration | WebhookRegistrationDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhookRegistrationResponse],
            error_mapper=post_webhook_error_mapper,
            request_options=request_options,
        )

    def put_webhook(
        self,
        id_: UUID,
        x_merchant_code: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookUpdate, PutWebhookErrorBody]:
        """Updates the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("X-Merchant-Code", x_merchant_code), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookUpdate | WebhookUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[WebhookUpdate],
            error_mapper=put_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def delete_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookDelete, DeleteWebhookErrorBody]:
        """Removes the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("X-Merchant-Code", x_merchant_code), param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhookDelete],
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook(
        self, id_: UUID, x_merchant_code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, GetWebhookErrorBody]:
        """Retrieves the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("X-Merchant-Code", x_merchant_code)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhooks(
        self, x_merchant_code: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, GetWebhooksErrorBody]:
        """Retrieves all registred webhooks.

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhooks"),
            headers=[param[str]("X-Merchant-Code", x_merchant_code)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=get_webhooks_error_mapper,
            request_options=request_options,
        )

    async def post_webhook(
        self,
        x_merchant_code: str,
        body: WebhookRegistration | WebhookRegistrationDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookRegistrationResponse, PostWebhookErrorBody]:
        """Creates a new webhook

        Args:
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhooks"),
            headers=[param[str]("X-Merchant-Code", x_merchant_code), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookRegistration | WebhookRegistrationDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhookRegistrationResponse],
            error_mapper=post_webhook_error_mapper,
            request_options=request_options,
        )

    async def put_webhook(
        self,
        id_: UUID,
        x_merchant_code: str,
        body: WebhookUpdate | WebhookUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookUpdate, PutWebhookErrorBody]:
        """Updates the specified webhook.

        Args:
            id_: ID of the webhook.
            x_merchant_code: Used for multi store/countries setup, please contact your Account manager to recognize that
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v1/webhooks/{id}"),
            path_params=[param[UUID]("id", id_)],
            headers=[param[str]("X-Merchant-Code", x_merchant_code), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookUpdate | WebhookUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[WebhookUpdate],
            error_mapper=put_webhook_error_mapper,
            request_options=request_options,
        )
