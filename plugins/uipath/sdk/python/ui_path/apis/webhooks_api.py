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
from ..errors.get_webhook_event_types_error import GetWebhookEventTypesErrorBody, get_webhook_event_types_error_mapper
from ..errors.list_webhooks_error import ListWebhooksErrorBody, list_webhooks_error_mapper
from ..models.o_data_webhook_collection import ODataWebhookCollection
from ..models.odata_webhooks_ui_path_server_configuration_o_data_get_event_types_response import (
    OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse,
)
from ..models.webhook import Webhook, WebhookDict
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server, auth)

    def create_webhook(
        self,
        body: Webhook | WebhookDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification,
        whether to subscribe to all events or specific event types, and whether to allow insecure SSL.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_webhook(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def delete_webhook(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL
        will no longer receive event notifications from Orchestrator.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.delete_webhook(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def get_webhook_event_types(
        self, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse:
        """Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types
        cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as
        job.faulted or queueItem.transactionCompleted.

        Args:
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of available webhook event types

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_webhook_event_types(
                x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def list_webhooks(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataWebhookCollection:
        """Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the
        events to subscribe to, and an HMAC secret for payload signature verification.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of webhooks

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_webhooks(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server, auth)

    async def create_webhook(
        self,
        body: Webhook | WebhookDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification,
        whether to subscribe to all events or specific event types, and whether to allow insecure SSL.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_webhook(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def delete_webhook(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL
        will no longer receive event notifications from Orchestrator.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Webhook deleted successfully

        Raises:
            ApiError: The request lacks valid authentication credentials The requested resource was not found ``error``
                is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_webhook(
                key, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def get_webhook_event_types(
        self,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse:
        """Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types
        cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as
        job.faulted or queueItem.transactionCompleted.

        Args:
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of available webhook event types

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_webhook_event_types(
                x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def list_webhooks(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataWebhookCollection:
        """Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the
        events to subscribe to, and an HMAC secret for payload signature verification.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of webhooks

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_webhooks(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_webhook(
        self,
        body: Webhook | WebhookDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, CreateWebhookErrorBody]:
        """Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification,
        whether to subscribe to all events or specific event types, and whether to allow insecure SSL.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Webhooks"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[Webhook | WebhookDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Webhook],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    def delete_webhook(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL
        will no longer receive event notifications from Orchestrator.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/odata/Webhooks({key})"),
            path_params=[param[int]("key", key)],
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    def get_webhook_event_types(
        self, *, x_uipath_organization_unit_id: int | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, GetWebhookEventTypesErrorBody]:
        """Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types
        cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as
        job.faulted or queueItem.transactionCompleted.

        Args:
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Webhooks/UiPath.Server.Configuration.OData.GetEventTypes()"),
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse],
            error_mapper=get_webhook_event_types_error_mapper,
            request_options=request_options,
        )

    def list_webhooks(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataWebhookCollection, ListWebhooksErrorBody]:
        """Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the
        events to subscribe to, and an HMAC secret for payload signature verification.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Webhooks"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataWebhookCollection],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_webhook(
        self,
        body: Webhook | WebhookDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, CreateWebhookErrorBody]:
        """Creates a new webhook subscription. Specify the target URL, optional HMAC secret for payload verification,
        whether to subscribe to all events or specific event types, and whether to allow insecure SSL.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/odata/Webhooks"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[Webhook | WebhookDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Webhook],
            error_mapper=create_webhook_error_mapper,
            request_options=request_options,
        )

    async def delete_webhook(
        self,
        key: int,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """Permanently deletes a webhook subscription by its unique integer identifier. After deletion, the target URL
        will no longer receive event notifications from Orchestrator.

        Args:
            key: The unique integer identifier of the entity
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/odata/Webhooks({key})"),
            path_params=[param[int]("key", key)],
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_webhook_event_types(
        self,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse, GetWebhookEventTypesErrorBody]:
        """Retrieves the complete list of event types available for webhook subscriptions in Orchestrator. Event types
        cover jobs, robots, queues, queue items, processes, and triggers, each with a unique string identifier such as
        job.faulted or queueItem.transactionCompleted.

        Args:
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Webhooks/UiPath.Server.Configuration.OData.GetEventTypes()"),
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[OdataWebhooksUiPathServerConfigurationODataGetEventTypesResponse],
            error_mapper=get_webhook_event_types_error_mapper,
            request_options=request_options,
        )

    async def list_webhooks(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataWebhookCollection, ListWebhooksErrorBody]:
        """Retrieves all webhook subscriptions configured in Orchestrator. Each webhook specifies a target URL, the
        events to subscribe to, and an HMAC secret for payload signature verification.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/odata/Webhooks"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataWebhookCollection],
            error_mapper=list_webhooks_error_mapper,
            request_options=request_options,
        )
