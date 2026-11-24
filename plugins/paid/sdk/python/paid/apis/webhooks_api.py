from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from ..errors.rotate_webhook_secret_error import RotateWebhookSecretErrorBody, rotate_webhook_secret_error_mapper
from ..errors.test_webhook_error import TestWebhookErrorBody, test_webhook_error_mapper
from ..errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from ..models.enums.webhooks_webhook_name_patch_parameters_webhook_name import (
    WebhooksWebhookNamePatchParametersWebhookNameOrStr,
)
from ..models.enums.webhooks_webhook_name_test_post_parameters_webhook_name import (
    WebhooksWebhookNameTestPostParametersWebhookNameOrStr,
)
from ..models.rotate_webhook_secret_response import RotateWebhookSecretResponse
from ..models.update_webhook_request import UpdateWebhookRequest, UpdateWebhookRequestDict
from ..models.webhook_list_response import WebhookListResponse
from ..models.webhook_test_response import WebhookTestResponse
from ..models.webhook_update_response import WebhookUpdateResponse
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server)

    def list_webhooks(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookListResponse:
        """List customer-facing billing webhooks for the authenticated organization, along with whether the organization
        has generated a signing secret.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_webhooks(authorization, request_options=request_options))

    def rotate_webhook_secret(
        self, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> RotateWebhookSecretResponse:
        """Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The
        previous secret is invalidated immediately on next delivery.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.rotate_webhook_secret(authorization, body=body, request_options=request_options)
        )

    def test_webhook(
        self,
        webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookTestResponse:
        """Send a synthetic webhook delivery to the configured destination for this webhook.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.test_webhook(
                webhook_name, authorization, body=body, request_options=request_options
            ),
        )

    def update_webhook(
        self,
        webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookUpdateResponse:
        """Enable or disable a webhook and configure the destination URL for the authenticated organization.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_webhook(
                webhook_name, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server)

    async def list_webhooks(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookListResponse:
        """List customer-facing billing webhooks for the authenticated organization, along with whether the organization
        has generated a signing secret.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.list_webhooks(authorization, request_options=request_options))

    async def rotate_webhook_secret(
        self, authorization: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> RotateWebhookSecretResponse:
        """Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The
        previous secret is invalidated immediately on next delivery.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.rotate_webhook_secret(
                authorization, body=body, request_options=request_options
            ),
        )

    async def test_webhook(
        self,
        webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookTestResponse:
        """Send a synthetic webhook delivery to the configured destination for this webhook.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.test_webhook(
                webhook_name, authorization, body=body, request_options=request_options
            ),
        )

    async def update_webhook(
        self,
        webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookUpdateResponse:
        """Enable or disable a webhook and configure the destination URL for the authenticated organization.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_webhook(
                webhook_name, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def list_webhooks(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookListResponse, ListWebhooksErrorBody]:
        """List customer-facing billing webhooks for the authenticated organization, along with whether the organization
        has generated a signing secret.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[WebhookListResponse],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    def rotate_webhook_secret(
        self, authorization: str, *, body: Any | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[RotateWebhookSecretResponse, RotateWebhookSecretErrorBody]:
        """Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The
        previous secret is invalidated immediately on next delivery.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/rotate-secret"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[RotateWebhookSecretResponse],
            error_mapper=rotate_webhook_secret_error_mapper,
            request_options=request_options,
        )

    def test_webhook(
        self,
        webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookTestResponse, TestWebhookErrorBody]:
        """Send a synthetic webhook delivery to the configured destination for this webhook.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/{webhookName}/test"),
            path_params=[param[WebhooksWebhookNameTestPostParametersWebhookNameOrStr]("webhookName", webhook_name)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[WebhookTestResponse],
            error_mapper=test_webhook_error_mapper,
            request_options=request_options,
        )

    def update_webhook(
        self,
        webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookUpdateResponse, UpdateWebhookErrorBody]:
        """Enable or disable a webhook and configure the destination URL for the authenticated organization.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/{webhookName}"),
            path_params=[param[WebhooksWebhookNamePatchParametersWebhookNameOrStr]("webhookName", webhook_name)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookRequest | UpdateWebhookRequestDict | None](body),
            decoder=json_decoder[WebhookUpdateResponse],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def list_webhooks(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookListResponse, ListWebhooksErrorBody]:
        """List customer-facing billing webhooks for the authenticated organization, along with whether the organization
        has generated a signing secret.

        Args:
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[WebhookListResponse],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )

    async def rotate_webhook_secret(
        self, authorization: str, *, body: Any | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[RotateWebhookSecretResponse, RotateWebhookSecretErrorBody]:
        """Generate a new HMAC signing secret used by every webhook in this organization and return it exactly once. The
        previous secret is invalidated immediately on next delivery.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/rotate-secret"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[RotateWebhookSecretResponse],
            error_mapper=rotate_webhook_secret_error_mapper,
            request_options=request_options,
        )

    async def test_webhook(
        self,
        webhook_name: WebhooksWebhookNameTestPostParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookTestResponse, TestWebhookErrorBody]:
        """Send a synthetic webhook delivery to the configured destination for this webhook.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/{webhookName}/test"),
            path_params=[param[WebhooksWebhookNameTestPostParametersWebhookNameOrStr]("webhookName", webhook_name)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[WebhookTestResponse],
            error_mapper=test_webhook_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        webhook_name: WebhooksWebhookNamePatchParametersWebhookNameOrStr,
        authorization: str,
        *,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookUpdateResponse, UpdateWebhookErrorBody]:
        """Enable or disable a webhook and configure the destination URL for the authenticated organization.

        Args:
            webhook_name: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default_reference_analytics_experimental_api("/webhooks/{webhookName}"),
            path_params=[param[WebhooksWebhookNamePatchParametersWebhookNameOrStr]("webhookName", webhook_name)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookRequest | UpdateWebhookRequestDict | None](body),
            decoder=async_json_decoder[WebhookUpdateResponse],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )
