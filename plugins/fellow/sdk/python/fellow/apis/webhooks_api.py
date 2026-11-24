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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.create_webhook_request import CreateWebhookRequest, CreateWebhookRequestDict
from ..models.update_webhook_request import UpdateWebhookRequest, UpdateWebhookRequestDict
from ..models.webhook_create_response import WebhookCreateResponse
from ..models.webhook_delete_response import WebhookDeleteResponse
from ..models.webhook_response import WebhookResponse
from ..models.webhooks_list_response import WebhooksListResponse
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def apps_developer_api_api_create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookCreateResponse:
        """Create a new webhook endpoint.

        Creates a webhook that will receive HTTP POST requests when subscribed events occur. The webhook will be
        associated with the authenticated user.

        Set ``scope`` to ``workspace`` to create an account-wide webhook instead, which receives every matching event in
        the account and is delivered once per event rather than once per attendee. **Super Admin Access Required** for
        that value: a key acting through ``X-On-Behalf-Of`` cannot create one, because impersonation drops privileged
        access.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_create_webhook(body, request_options=request_options)
        )

    def apps_developer_api_api_delete_webhook(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookDeleteResponse:
        """Delete a webhook endpoint by its ID.

        An account-wide webhook is deleted through this same endpoint, and needs a privileged key: without one its id
        reads as not found.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_delete_webhook(webhook_id, request_options=request_options)
        )

    def apps_developer_api_api_get_webhook_by_id(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookResponse:
        """Retrieve a webhook by its ID.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_get_webhook_by_id(
                webhook_id, request_options=request_options
            ),
        )

    def apps_developer_api_api_list_webhooks(
        self,
        *,
        page_size: int | None = None,
        cursor: str | None = None,
        filters: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhooksListResponse:
        """List webhooks with optional filters and pagination.

        Query Parameters:
        - page_size: Number of results per page (optional, default: 20, max: 50)
        - cursor: Pagination cursor for next page (optional)
        - filters: JSON-encoded WebhookFilters (optional)
        Example: ?filters={"status":"active","created_at_start":"2024-01-01"}

        Returns a list of webhooks for the authenticated user. Privileged access allows listing all webhooks for the
        account.

        Args:
            page_size: Value sent with the request.
            cursor: Value sent with the request.
            filters: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_list_webhooks(
                page_size=page_size, cursor=cursor, filters=filters, request_options=request_options
            ),
        )

    def apps_developer_api_api_update_webhook(
        self,
        webhook_id: str,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Update an existing webhook endpoint.

        Allows partial updates - only provided fields will be modified. The webhook must belong to the authenticated
        user (or account for privileged access).

        An account-wide webhook is updated through this same endpoint, and needs a privileged key: without one its id
        reads as not found, the same answer as another user's webhook.

        ``scope`` cannot be changed after creation, and is ignored here: a webhook's scope decides which Svix
        application its endpoint lives in, so converting one means deleting and recreating it.

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.apps_developer_api_api_update_webhook(
                webhook_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def apps_developer_api_api_create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookCreateResponse:
        """Create a new webhook endpoint.

        Creates a webhook that will receive HTTP POST requests when subscribed events occur. The webhook will be
        associated with the authenticated user.

        Set ``scope`` to ``workspace`` to create an account-wide webhook instead, which receives every matching event in
        the account and is delivered once per event rather than once per attendee. **Super Admin Access Required** for
        that value: a key acting through ``X-On-Behalf-Of`` cannot create one, because impersonation drops privileged
        access.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_create_webhook(body, request_options=request_options)
        )

    async def apps_developer_api_api_delete_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookDeleteResponse:
        """Delete a webhook endpoint by its ID.

        An account-wide webhook is deleted through this same endpoint, and needs a privileged key: without one its id
        reads as not found.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_delete_webhook(
                webhook_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_get_webhook_by_id(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookResponse:
        """Retrieve a webhook by its ID.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_get_webhook_by_id(
                webhook_id, request_options=request_options
            ),
        )

    async def apps_developer_api_api_list_webhooks(
        self,
        *,
        page_size: int | None = None,
        cursor: str | None = None,
        filters: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhooksListResponse:
        """List webhooks with optional filters and pagination.

        Query Parameters:
        - page_size: Number of results per page (optional, default: 20, max: 50)
        - cursor: Pagination cursor for next page (optional)
        - filters: JSON-encoded WebhookFilters (optional)
        Example: ?filters={"status":"active","created_at_start":"2024-01-01"}

        Returns a list of webhooks for the authenticated user. Privileged access allows listing all webhooks for the
        account.

        Args:
            page_size: Value sent with the request.
            cursor: Value sent with the request.
            filters: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_list_webhooks(
                page_size=page_size, cursor=cursor, filters=filters, request_options=request_options
            ),
        )

    async def apps_developer_api_api_update_webhook(
        self,
        webhook_id: str,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """Update an existing webhook endpoint.

        Allows partial updates - only provided fields will be modified. The webhook must belong to the authenticated
        user (or account for privileged access).

        An account-wide webhook is updated through this same endpoint, and needs a privileged key: without one its id
        reads as not found, the same answer as another user's webhook.

        ``scope`` cannot be changed after creation, and is ignored here: a webhook's scope decides which Svix
        application its endpoint lives in, so converting one means deleting and recreating it.

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.apps_developer_api_api_update_webhook(
                webhook_id, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def apps_developer_api_api_create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreateResponse, RawError]:
        """Create a new webhook endpoint.

        Creates a webhook that will receive HTTP POST requests when subscribed events occur. The webhook will be
        associated with the authenticated user.

        Set ``scope`` to ``workspace`` to create an account-wide webhook instead, which receives every matching event in
        the account and is delivered once per event rather than once per attendee. **Super Admin Access Required** for
        that value: a key acting through ``X-On-Behalf-Of`` cannot create one, because impersonation drops privileged
        access.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhook"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWebhookRequest | CreateWebhookRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[WebhookCreateResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_delete_webhook(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookDeleteResponse, RawError]:
        """Delete a webhook endpoint by its ID.

        An account-wide webhook is deleted through this same endpoint, and needs a privileged key: without one its id
        reads as not found.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/webhook/{webhook_id}"),
            path_params=[param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[WebhookDeleteResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_get_webhook_by_id(
        self, webhook_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookResponse, RawError]:
        """Retrieve a webhook by its ID.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhook/{webhook_id}"),
            path_params=[param[str]("webhook_id", webhook_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[WebhookResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_list_webhooks(
        self,
        *,
        page_size: int | None = None,
        cursor: str | None = None,
        filters: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhooksListResponse, RawError]:
        """List webhooks with optional filters and pagination.

        Query Parameters:
        - page_size: Number of results per page (optional, default: 20, max: 50)
        - cursor: Pagination cursor for next page (optional)
        - filters: JSON-encoded WebhookFilters (optional)
        Example: ?filters={"status":"active","created_at_start":"2024-01-01"}

        Returns a list of webhooks for the authenticated user. Privileged access allows listing all webhooks for the
        account.

        Args:
            page_size: Value sent with the request.
            cursor: Value sent with the request.
            filters: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhooks"),
            query_params=[
                param[int | None]("page_size", page_size),
                param[str | None]("cursor", cursor),
                param[str | None]("filters", filters),
            ],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[WebhooksListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def apps_developer_api_api_update_webhook(
        self,
        webhook_id: str,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, RawError]:
        """Update an existing webhook endpoint.

        Allows partial updates - only provided fields will be modified. The webhook must belong to the authenticated
        user (or account for privileged access).

        An account-wide webhook is updated through this same endpoint, and needs a privileged key: without one its id
        reads as not found, the same answer as another user's webhook.

        ``scope`` cannot be changed after creation, and is ignored here: a webhook's scope decides which Svix
        application its endpoint lives in, so converting one means deleting and recreating it.

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/webhook/{webhook_id}"),
            path_params=[param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookRequest | UpdateWebhookRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=json_decoder[WebhookResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def apps_developer_api_api_create_webhook(
        self,
        body: CreateWebhookRequest | CreateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreateResponse, RawError]:
        """Create a new webhook endpoint.

        Creates a webhook that will receive HTTP POST requests when subscribed events occur. The webhook will be
        associated with the authenticated user.

        Set ``scope`` to ``workspace`` to create an account-wide webhook instead, which receives every matching event in
        the account and is delivered once per event rather than once per attendee. **Super Admin Access Required** for
        that value: a key acting through ``X-On-Behalf-Of`` cannot create one, because impersonation drops privileged
        access.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/webhook"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWebhookRequest | CreateWebhookRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[WebhookCreateResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_delete_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookDeleteResponse, RawError]:
        """Delete a webhook endpoint by its ID.

        An account-wide webhook is deleted through this same endpoint, and needs a privileged key: without one its id
        reads as not found.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v1/webhook/{webhook_id}"),
            path_params=[param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[WebhookDeleteResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_get_webhook_by_id(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookResponse, RawError]:
        """Retrieve a webhook by its ID.

        Args:
            webhook_id: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhook/{webhook_id}"),
            path_params=[param[str]("webhook_id", webhook_id)],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_list_webhooks(
        self,
        *,
        page_size: int | None = None,
        cursor: str | None = None,
        filters: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhooksListResponse, RawError]:
        """List webhooks with optional filters and pagination.

        Query Parameters:
        - page_size: Number of results per page (optional, default: 20, max: 50)
        - cursor: Pagination cursor for next page (optional)
        - filters: JSON-encoded WebhookFilters (optional)
        Example: ?filters={"status":"active","created_at_start":"2024-01-01"}

        Returns a list of webhooks for the authenticated user. Privileged access allows listing all webhooks for the
        account.

        Args:
            page_size: Value sent with the request.
            cursor: Value sent with the request.
            filters: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/webhooks"),
            query_params=[
                param[int | None]("page_size", page_size),
                param[str | None]("cursor", cursor),
                param[str | None]("filters", filters),
            ],
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[WebhooksListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def apps_developer_api_api_update_webhook(
        self,
        webhook_id: str,
        body: UpdateWebhookRequest | UpdateWebhookRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, RawError]:
        """Update an existing webhook endpoint.

        Allows partial updates - only provided fields will be modified. The webhook must belong to the authenticated
        user (or account for privileged access).

        An account-wide webhook is updated through this same endpoint, and needs a privileged key: without one its id
        reads as not found, the same answer as another user's webhook.

        ``scope`` cannot be changed after creation, and is ignored here: a webhook's scope decides which Svix
        application its endpoint lives in, so converting one means deleting and recreating it.

        Args:
            webhook_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/api/v1/webhook/{webhook_id}"),
            path_params=[param[str]("webhook_id", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookRequest | UpdateWebhookRequestDict](body),
            auth_scheme=self._auth.developer_api_key_auth,
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
