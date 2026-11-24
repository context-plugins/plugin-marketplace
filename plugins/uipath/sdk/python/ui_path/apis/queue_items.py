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
from ..errors.add_queue_item_error import AddQueueItemErrorBody, add_queue_item_error_mapper
from ..errors.list_queue_items_error import ListQueueItemsErrorBody, list_queue_items_error_mapper
from ..models.add_queue_item_request import AddQueueItemRequest, AddQueueItemRequestDict
from ..models.o_data_queue_item_collection import ODataQueueItemCollection
from ..models.queue_item import QueueItem
from ..server.server import Server


class QueueItems:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QueueItemsWithRawResponse(client, server, auth)

    def add_queue_item(
        self,
        body: AddQueueItemRequest | AddQueueItemRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QueueItem:
        """Adds a new transaction item to a specified queue. The item can include specific content (custom key-value
        data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item
        with its assigned ID and key.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queue item added successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.add_queue_item(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def list_queue_items(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataQueueItemCollection:
        """Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and
        priority. Supports OData filtering, ordering, and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of queue items

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_queue_items(
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> QueueItemsWithRawResponse:
        return self._with_raw_response


class AsyncQueueItems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQueueItemsWithRawResponse(client, server, auth)

    async def add_queue_item(
        self,
        body: AddQueueItemRequest | AddQueueItemRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QueueItem:
        """Adds a new transaction item to a specified queue. The item can include specific content (custom key-value
        data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item
        with its assigned ID and key.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queue item added successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.add_queue_item(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def list_queue_items(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataQueueItemCollection:
        """Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and
        priority. Supports OData filtering, ordering, and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of queue items

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_queue_items(
                filter_=filter_,
                orderby=orderby,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncQueueItemsWithRawResponse:
        return self._with_raw_response


class QueueItemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_queue_item(
        self,
        body: AddQueueItemRequest | AddQueueItemRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QueueItem, AddQueueItemErrorBody]:
        """Adds a new transaction item to a specified queue. The item can include specific content (custom key-value
        data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item
        with its assigned ID and key.

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
            url_template=self._server.default("/odata/QueueItems"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AddQueueItemRequest | AddQueueItemRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QueueItem],
            error_mapper=add_queue_item_error_mapper,
            request_options=request_options,
        )

    def list_queue_items(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataQueueItemCollection, ListQueueItemsErrorBody]:
        """Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and
        priority. Supports OData filtering, ordering, and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
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
            url_template=self._server.default("/odata/QueueItems"),
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataQueueItemCollection],
            error_mapper=list_queue_items_error_mapper,
            request_options=request_options,
        )


class AsyncQueueItemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_queue_item(
        self,
        body: AddQueueItemRequest | AddQueueItemRequestDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QueueItem, AddQueueItemErrorBody]:
        """Adds a new transaction item to a specified queue. The item can include specific content (custom key-value
        data), priority level, deadline, postpone time, and a unique reference string. Returns the created queue item
        with its assigned ID and key.

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
            url_template=self._server.default("/odata/QueueItems"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[AddQueueItemRequest | AddQueueItemRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QueueItem],
            error_mapper=add_queue_item_error_mapper,
            request_options=request_options,
        )

    async def list_queue_items(
        self,
        *,
        filter_: str | None = None,
        orderby: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataQueueItemCollection, ListQueueItemsErrorBody]:
        """Retrieves a list of queue transaction items. Items can be filtered by queue name, status, review status, and
        priority. Supports OData filtering, ordering, and pagination.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            orderby: OData orderby clause (e.g., CreationTime desc)
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
            url_template=self._server.default("/odata/QueueItems"),
            query_params=[
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataQueueItemCollection],
            error_mapper=list_queue_items_error_mapper,
            request_options=request_options,
        )
