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
from ..errors.create_webhook_subscription_error import (
    CreateWebhookSubscriptionErrorBody,
    create_webhook_subscription_error_mapper,
)
from ..errors.delete_webhook_subscription_error import (
    DeleteWebhookSubscriptionErrorBody,
    delete_webhook_subscription_error_mapper,
)
from ..errors.example_event_error import ExampleEventErrorBody, example_event_error_mapper
from ..errors.get_webhook_signing_token_error import (
    GetWebhookSigningTokenErrorBody,
    get_webhook_signing_token_error_mapper,
)
from ..errors.get_webhook_subscription_error import (
    GetWebhookSubscriptionErrorBody,
    get_webhook_subscription_error_mapper,
)
from ..errors.list_webhook_subscriptions_error import (
    ListWebhookSubscriptionsErrorBody,
    list_webhook_subscriptions_error_mapper,
)
from ..errors.test_shop_webhook_error import TestShopWebhookErrorBody, test_shop_webhook_error_mapper
from ..errors.update_webhook_subscription_error import (
    UpdateWebhookSubscriptionErrorBody,
    update_webhook_subscription_error_mapper,
)
from ..models.api_v2_webhooks_example_response import ApiV2WebhooksExampleResponse
from ..models.api_v2_webhooks_request import ApiV2WebhooksRequest, ApiV2WebhooksRequestDict
from ..models.api_v2_webhooks_request1 import ApiV2WebhooksRequest1, ApiV2WebhooksRequest1Dict
from ..models.api_v2_webhooks_test_request import ApiV2WebhooksTestRequest, ApiV2WebhooksTestRequestDict
from ..models.api_v2_webhooks_test_response import ApiV2WebhooksTestResponse
from ..models.api_v2_webhooks_token_response import ApiV2WebhooksTokenResponse
from ..models.enums.event1 import Event1, Event1OrStr
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook_subscription(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.create_webhook_subscription(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    def delete_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            id_: The ID of the webhook subscription to delete.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.delete_webhook_subscription(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def example_event(
        self,
        *,
        event: Event1OrStr = Event1.SHOP_TEST,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2WebhooksExampleResponse:
        """Send a ``GET`` request.

        Args:
            event: Webhook subscription ``event`` type.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.example_event(
                event=event, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def get_webhook_signing_token(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV2WebhooksTokenResponse:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.get_webhook_signing_token(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def get_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: ID of the webhook subscription to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.get_webhook_subscription(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def list_webhook_subscriptions(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.list_webhook_subscriptions(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    def test_shop_webhook(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiV2WebhooksTestResponse:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 400 ``error`` is ``ApiV2WebhooksTest400Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.test_shop_webhook(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    def update_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``PATCH`` request.

        Args:
            id_: ID of the webhook subscription to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            self._with_raw_response.update_webhook_subscription(
                id_, x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook_subscription(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.create_webhook_subscription(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    async def delete_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            id_: The ID of the webhook subscription to delete.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_webhook_subscription(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def example_event(
        self,
        *,
        event: Event1OrStr = Event1.SHOP_TEST,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2WebhooksExampleResponse:
        """Send a ``GET`` request.

        Args:
            event: Webhook subscription ``event`` type.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.example_event(
                event=event, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def get_webhook_signing_token(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiV2WebhooksTokenResponse:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.get_webhook_signing_token(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def get_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            id_: ID of the webhook subscription to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.get_webhook_subscription(
                id_, x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def list_webhook_subscriptions(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.list_webhook_subscriptions(
                x_postscript_shop_token=x_postscript_shop_token, request_options=request_options
            ),
        )

    async def test_shop_webhook(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV2WebhooksTestResponse:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            202

        Raises:
            ApiError: 400 ``error`` is ``ApiV2WebhooksTest400Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.test_shop_webhook(
                x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    async def update_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Send a ``PATCH`` request.

        Args:
            id_: ID of the webhook subscription to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 ``error`` is ``Any | RawError``."""
        return unwrap(
            await self._with_raw_response.update_webhook_subscription(
                id_, x_postscript_shop_token=x_postscript_shop_token, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook_subscription(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CreateWebhookSubscriptionErrorBody]:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/webhooks"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=create_webhook_subscription_error_mapper,
            request_options=request_options,
        )

    def delete_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteWebhookSubscriptionErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: The ID of the webhook subscription to delete.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=delete_webhook_subscription_error_mapper,
            request_options=request_options,
        )

    def example_event(
        self,
        *,
        event: Event1OrStr = Event1.SHOP_TEST,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2WebhooksExampleResponse, ExampleEventErrorBody]:
        """Send a ``GET`` request.

        Args:
            event: Webhook subscription ``event`` type.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks/example"),
            query_params=[param[Event1OrStr]("event", event)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2WebhooksExampleResponse],
            error_mapper=example_event_error_mapper,
            request_options=request_options,
        )

    def get_webhook_signing_token(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2WebhooksTokenResponse, GetWebhookSigningTokenErrorBody]:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks/token"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2WebhooksTokenResponse],
            error_mapper=get_webhook_signing_token_error_mapper,
            request_options=request_options,
        )

    def get_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetWebhookSubscriptionErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: ID of the webhook subscription to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=get_webhook_subscription_error_mapper,
            request_options=request_options,
        )

    def list_webhook_subscriptions(
        self, *, x_postscript_shop_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListWebhookSubscriptionsErrorBody]:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=list_webhook_subscriptions_error_mapper,
            request_options=request_options,
        )

    def test_shop_webhook(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2WebhooksTestResponse, TestShopWebhookErrorBody]:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/webhooks/test"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[ApiV2WebhooksTestResponse],
            error_mapper=test_shop_webhook_error_mapper,
            request_options=request_options,
        )

    def update_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateWebhookSubscriptionErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            id_: ID of the webhook subscription to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=json_decoder[Any],
            error_mapper=update_webhook_subscription_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook_subscription(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, CreateWebhookSubscriptionErrorBody]:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/webhooks"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2WebhooksRequest | ApiV2WebhooksRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=create_webhook_subscription_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, DeleteWebhookSubscriptionErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            id_: The ID of the webhook subscription to delete.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v2/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=delete_webhook_subscription_error_mapper,
            request_options=request_options,
        )

    async def example_event(
        self,
        *,
        event: Event1OrStr = Event1.SHOP_TEST,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2WebhooksExampleResponse, ExampleEventErrorBody]:
        """Send a ``GET`` request.

        Args:
            event: Webhook subscription ``event`` type.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks/example"),
            query_params=[param[Event1OrStr]("event", event)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2WebhooksExampleResponse],
            error_mapper=example_event_error_mapper,
            request_options=request_options,
        )

    async def get_webhook_signing_token(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV2WebhooksTokenResponse, GetWebhookSigningTokenErrorBody]:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks/token"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2WebhooksTokenResponse],
            error_mapper=get_webhook_signing_token_error_mapper,
            request_options=request_options,
        )

    async def get_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, GetWebhookSubscriptionErrorBody]:
        """Send a ``GET`` request.

        Args:
            id_: ID of the webhook subscription to fetch.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=get_webhook_subscription_error_mapper,
            request_options=request_options,
        )

    async def list_webhook_subscriptions(
        self, *, x_postscript_shop_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, ListWebhookSubscriptionsErrorBody]:
        """Send a ``GET`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v2/webhooks"),
            headers=[param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token)],
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=list_webhook_subscriptions_error_mapper,
            request_options=request_options,
        )

    async def test_shop_webhook(
        self,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV2WebhooksTestResponse, TestShopWebhookErrorBody]:
        """Send a ``POST`` request.

        Args:
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used *only* by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v2/webhooks/test"),
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2WebhooksTestRequest | ApiV2WebhooksTestRequestDict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[ApiV2WebhooksTestResponse],
            error_mapper=test_shop_webhook_error_mapper,
            request_options=request_options,
        )

    async def update_webhook_subscription(
        self,
        id_: str,
        *,
        x_postscript_shop_token: str | None = None,
        body: ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, UpdateWebhookSubscriptionErrorBody]:
        """Send a ``PATCH`` request.

        Args:
            id_: ID of the webhook subscription to update.
            x_postscript_shop_token: Shop API Token. **Required for partners**. This header should be used only by
                partners. Shops should include their API token in the *Authorization* header.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v2/webhooks/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[
                param[str | None]("X-Postscript-Shop-Token", x_postscript_shop_token),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ApiV2WebhooksRequest1 | ApiV2WebhooksRequest1Dict | None](body),
            auth_scheme=self._auth.sec0,
            decoder=async_json_decoder[Any],
            error_mapper=update_webhook_subscription_error_mapper,
            request_options=request_options,
        )
