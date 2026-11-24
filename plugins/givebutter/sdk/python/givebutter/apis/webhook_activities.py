from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.webhooks_activities_index_error import (
    WebhooksActivitiesIndexErrorBody,
    webhooks_activities_index_error_mapper,
)
from ..errors.webhooks_activities_show_error import (
    WebhooksActivitiesShowErrorBody,
    webhooks_activities_show_error_mapper,
)
from ..models.v1_webhooks_activities_response import V1WebhooksActivitiesResponse
from ..models.webhook_activity_resource import WebhookActivityResource
from ..server.server import Server


class WebhookActivities:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhookActivitiesWithRawResponse(client, server, auth)

    def webhooks_activities_index(
        self, webhook: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1WebhooksActivitiesResponse:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``WebhookActivityResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.webhooks_activities_index(webhook, request_options=request_options))

    def webhooks_activities_show(
        self, webhook: str, activity: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> WebhookActivityResource:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookActivityResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            self._with_raw_response.webhooks_activities_show(webhook, activity, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> WebhookActivitiesWithRawResponse:
        return self._with_raw_response


class AsyncWebhookActivities:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhookActivitiesWithRawResponse(client, server, auth)

    async def webhooks_activities_index(
        self, webhook: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1WebhooksActivitiesResponse:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``WebhookActivityResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(await self._with_raw_response.webhooks_activities_index(webhook, request_options=request_options))

    async def webhooks_activities_show(
        self, webhook: str, activity: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookActivityResource:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``WebhookActivityResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.webhooks_activities_show(webhook, activity, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncWebhookActivitiesWithRawResponse:
        return self._with_raw_response


class WebhookActivitiesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def webhooks_activities_index(
        self, webhook: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksActivitiesResponse, WebhooksActivitiesIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{webhook}/activities"),
            path_params=[param[str]("webhook", webhook)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1WebhooksActivitiesResponse],
            error_mapper=webhooks_activities_index_error_mapper,
            request_options=request_options,
        )

    def webhooks_activities_show(
        self, webhook: str, activity: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookActivityResource, WebhooksActivitiesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{webhook}/activities/{activity}"),
            path_params=[param[str]("webhook", webhook), param[str]("activity", activity)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[WebhookActivityResource],
            error_mapper=webhooks_activities_show_error_mapper,
            request_options=request_options,
        )


class AsyncWebhookActivitiesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def webhooks_activities_index(
        self, webhook: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1WebhooksActivitiesResponse, WebhooksActivitiesIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{webhook}/activities"),
            path_params=[param[str]("webhook", webhook)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1WebhooksActivitiesResponse],
            error_mapper=webhooks_activities_index_error_mapper,
            request_options=request_options,
        )

    async def webhooks_activities_show(
        self, webhook: str, activity: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookActivityResource, WebhooksActivitiesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            webhook: The webhook ID
            activity: The activity ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/webhooks/{webhook}/activities/{activity}"),
            path_params=[param[str]("webhook", webhook), param[str]("activity", activity)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[WebhookActivityResource],
            error_mapper=webhooks_activities_show_error_mapper,
            request_options=request_options,
        )
