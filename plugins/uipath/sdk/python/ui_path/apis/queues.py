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
from ..errors.create_queue_error import CreateQueueErrorBody, create_queue_error_mapper
from ..errors.list_queues_error import ListQueuesErrorBody, list_queues_error_mapper
from ..models.o_data_queue_definition_collection import ODataQueueDefinitionCollection
from ..models.queue_definition import QueueDefinition, QueueDefinitionDict
from ..server.server import Server


class Queues:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QueuesWithRawResponse(client, server, auth)

    def create_queue(
        self,
        body: QueueDefinition | QueueDefinitionDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QueueDefinition:
        """Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum
        retry count, whether to accept only unique references, and enforcement settings.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queue definition created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.create_queue(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    def list_queues(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ODataQueueDefinitionCollection:
        """Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for
        distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA
        configurations.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of queue definitions

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_queues(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> QueuesWithRawResponse:
        return self._with_raw_response


class AsyncQueues:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQueuesWithRawResponse(client, server, auth)

    async def create_queue(
        self,
        body: QueueDefinition | QueueDefinitionDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QueueDefinition:
        """Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum
        retry count, whether to accept only unique references, and enforcement settings.

        Args:
            body: The request body.
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Queue definition created successfully

        Raises:
            ApiError: The request was malformed or contained invalid parameters The request lacks valid authentication
                credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_queue(
                body, x_uipath_organization_unit_id=x_uipath_organization_unit_id, request_options=request_options
            ),
        )

    async def list_queues(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ODataQueueDefinitionCollection:
        """Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for
        distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA
        configurations.

        Args:
            filter_: OData filter expression to narrow results (e.g., State eq 'Running')
            top: Maximum number of records to return (default 100, max 1000)
            skip: Number of records to skip for pagination
            x_uipath_organization_unit_id: The numeric ID of the folder context for the request. Required when accessing
                folder-scoped resources. Retrieve folder IDs using the /odata/Folders endpoint.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of queue definitions

        Raises:
            ApiError: The request lacks valid authentication credentials ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_queues(
                filter_=filter_,
                top=top,
                skip=skip,
                x_uipath_organization_unit_id=x_uipath_organization_unit_id,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncQueuesWithRawResponse:
        return self._with_raw_response


class QueuesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_queue(
        self,
        body: QueueDefinition | QueueDefinitionDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QueueDefinition, CreateQueueErrorBody]:
        """Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum
        retry count, whether to accept only unique references, and enforcement settings.

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
            url_template=self._server.default("/odata/QueueDefinitions"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[QueueDefinition | QueueDefinitionDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[QueueDefinition],
            error_mapper=create_queue_error_mapper,
            request_options=request_options,
        )

    def list_queues(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataQueueDefinitionCollection, ListQueuesErrorBody]:
        """Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for
        distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA
        configurations.

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
            url_template=self._server.default("/odata/QueueDefinitions"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ODataQueueDefinitionCollection],
            error_mapper=list_queues_error_mapper,
            request_options=request_options,
        )


class AsyncQueuesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_queue(
        self,
        body: QueueDefinition | QueueDefinitionDict,
        *,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QueueDefinition, CreateQueueErrorBody]:
        """Creates a new queue definition in the current folder. The queue definition specifies the queue name, maximum
        retry count, whether to accept only unique references, and enforcement settings.

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
            url_template=self._server.default("/odata/QueueDefinitions"),
            headers=[
                param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[QueueDefinition | QueueDefinitionDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[QueueDefinition],
            error_mapper=create_queue_error_mapper,
            request_options=request_options,
        )

    async def list_queues(
        self,
        *,
        filter_: str | None = None,
        top: int | None = None,
        skip: int | None = None,
        x_uipath_organization_unit_id: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ODataQueueDefinitionCollection, ListQueuesErrorBody]:
        """Retrieves all queue definitions in the current folder. Queue definitions describe named queues used for
        distributing transaction items to robots, including retry settings, unique reference enforcement, and SLA
        configurations.

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
            url_template=self._server.default("/odata/QueueDefinitions"),
            query_params=[
                param[str | None]("$filter", filter_), param[int | None]("$top", top), param[int | None]("$skip", skip)
            ],
            headers=[param[int | None]("X-UIPATH-OrganizationUnitId", x_uipath_organization_unit_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ODataQueueDefinitionCollection],
            error_mapper=list_queues_error_mapper,
            request_options=request_options,
        )
