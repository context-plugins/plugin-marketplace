from __future__ import annotations

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
from ..errors.webhooks_controller_create_error import (
    WebhooksControllerCreateErrorBody,
    webhooks_controller_create_error_mapper,
)
from ..errors.webhooks_controller_find_all_error import (
    WebhooksControllerFindAllErrorBody,
    webhooks_controller_find_all_error_mapper,
)
from ..errors.webhooks_controller_find_one_error import (
    WebhooksControllerFindOneErrorBody,
    webhooks_controller_find_one_error_mapper,
)
from ..errors.webhooks_controller_remove_error import (
    WebhooksControllerRemoveErrorBody,
    webhooks_controller_remove_error_mapper,
)
from ..errors.webhooks_controller_update_error import (
    WebhooksControllerUpdateErrorBody,
    webhooks_controller_update_error_mapper,
)
from ..models.create_webhook_dto import CreateWebhookDto, CreateWebhookDtoDict
from ..models.enums.sort_by import SortBy, SortByOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.update_webhook_dto import UpdateWebhookDto, UpdateWebhookDtoDict
from ..models.webhook import Webhook
from ..server.server import Server


class WebhooksApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = WebhooksApiWithRawResponse(client, server)

    def webhooks_controller_create(
        self,
        project: str,
        body: CreateWebhookDto | CreateWebhookDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Create a new Webhook

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.webhooks_controller_create(project, body, request_options=request_options)
        )

    def webhooks_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[Webhook]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Webhook]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.webhooks_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                request_options=request_options,
            ),
        )

    def webhooks_controller_find_one(
        self, id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Webhook:
        """Get a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.webhooks_controller_find_one(id_, project, request_options=request_options)
        )

    def webhooks_controller_remove(
        self, id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Webhook:
        """Delete a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.webhooks_controller_remove(id_, project, request_options=request_options))

    def webhooks_controller_update(
        self,
        id_: str,
        project: str,
        body: UpdateWebhookDto | UpdateWebhookDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Update a Webhook

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.webhooks_controller_update(id_, project, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> WebhooksApiWithRawResponse:
        return self._with_raw_response


class AsyncWebhooksApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncWebhooksApiWithRawResponse(client, server)

    async def webhooks_controller_create(
        self,
        project: str,
        body: CreateWebhookDto | CreateWebhookDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Create a new Webhook

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.webhooks_controller_create(project, body, request_options=request_options)
        )

    async def webhooks_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Webhook]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[Webhook]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.webhooks_controller_find_all(
                project,
                page=page,
                per_page=per_page,
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                created_by=created_by,
                request_options=request_options,
            ),
        )

    async def webhooks_controller_find_one(
        self, id_: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Get a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.webhooks_controller_find_one(id_, project, request_options=request_options)
        )

    async def webhooks_controller_remove(
        self, id_: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Webhook:
        """Delete a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.webhooks_controller_remove(id_, project, request_options=request_options)
        )

    async def webhooks_controller_update(
        self,
        id_: str,
        project: str,
        body: UpdateWebhookDto | UpdateWebhookDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Webhook:
        """Update a Webhook

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``Webhook`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.webhooks_controller_update(
                id_, project, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncWebhooksApiWithRawResponse:
        return self._with_raw_response


class WebhooksApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def webhooks_controller_create(
        self,
        project: str,
        body: CreateWebhookDto | CreateWebhookDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, WebhooksControllerCreateErrorBody]:
        """Create a new Webhook

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/webhooks"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWebhookDto | CreateWebhookDtoDict](body),
            decoder=json_decoder[Webhook],
            error_mapper=webhooks_controller_create_error_mapper,
            request_options=request_options,
        )

    def webhooks_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Webhook], WebhooksControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/webhooks"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
            ],
            decoder=json_decoder[list[Webhook]],
            error_mapper=webhooks_controller_find_all_error_mapper,
            request_options=request_options,
        )

    def webhooks_controller_find_one(
        self, id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, WebhooksControllerFindOneErrorBody]:
        """Get a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/webhooks/{id}"),
            path_params=[param[str]("id", id_), param[str]("project", project)],
            decoder=json_decoder[Webhook],
            error_mapper=webhooks_controller_find_one_error_mapper,
            request_options=request_options,
        )

    def webhooks_controller_remove(
        self, id_: str, project: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, WebhooksControllerRemoveErrorBody]:
        """Delete a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/webhooks/{id}"),
            path_params=[param[str]("id", id_), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Webhook],
            error_mapper=webhooks_controller_remove_error_mapper,
            request_options=request_options,
        )

    def webhooks_controller_update(
        self,
        id_: str,
        project: str,
        body: UpdateWebhookDto | UpdateWebhookDtoDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, WebhooksControllerUpdateErrorBody]:
        """Update a Webhook

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/webhooks/{id}"),
            path_params=[param[str]("id", id_), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookDto | UpdateWebhookDtoDict](body),
            decoder=json_decoder[Webhook],
            error_mapper=webhooks_controller_update_error_mapper,
            request_options=request_options,
        )


class AsyncWebhooksApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def webhooks_controller_create(
        self,
        project: str,
        body: CreateWebhookDto | CreateWebhookDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, WebhooksControllerCreateErrorBody]:
        """Create a new Webhook

        Args:
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/projects/{project}/webhooks"),
            path_params=[param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateWebhookDto | CreateWebhookDtoDict](body),
            decoder=async_json_decoder[Webhook],
            error_mapper=webhooks_controller_create_error_mapper,
            request_options=request_options,
        )

    async def webhooks_controller_find_all(
        self,
        project: str,
        *,
        page: float | None = 1.0,
        per_page: float | None = 100.0,
        sort_by: SortByOrStr | None = SortBy.CREATED_AT,
        sort_order: SortOrderOrStr | None = SortOrder.DESC,
        search: str | None = None,
        created_by: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Webhook], WebhooksControllerFindAllErrorBody]:
        """Send a ``GET`` request.

        Args:
            project: A Project key or ID
            page: Value sent with the request.
            per_page: Value sent with the request.
            sort_by: Value sent with the request.
            sort_order: Value sent with the request.
            search: Value sent with the request.
            created_by: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/webhooks"),
            path_params=[param[str]("project", project)],
            query_params=[
                param[float | None]("page", page),
                param[float | None]("perPage", per_page),
                param[SortByOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[str | None]("createdBy", created_by),
            ],
            decoder=async_json_decoder[list[Webhook]],
            error_mapper=webhooks_controller_find_all_error_mapper,
            request_options=request_options,
        )

    async def webhooks_controller_find_one(
        self, id_: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, WebhooksControllerFindOneErrorBody]:
        """Get a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/projects/{project}/webhooks/{id}"),
            path_params=[param[str]("id", id_), param[str]("project", project)],
            decoder=async_json_decoder[Webhook],
            error_mapper=webhooks_controller_find_one_error_mapper,
            request_options=request_options,
        )

    async def webhooks_controller_remove(
        self, id_: str, project: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Webhook, WebhooksControllerRemoveErrorBody]:
        """Delete a webhook by ID

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/projects/{project}/webhooks/{id}"),
            path_params=[param[str]("id", id_), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Webhook],
            error_mapper=webhooks_controller_remove_error_mapper,
            request_options=request_options,
        )

    async def webhooks_controller_update(
        self,
        id_: str,
        project: str,
        body: UpdateWebhookDto | UpdateWebhookDtoDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Webhook, WebhooksControllerUpdateErrorBody]:
        """Update a Webhook

        Args:
            id_: Value sent with the request.
            project: A Project key or ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/projects/{project}/webhooks/{id}"),
            path_params=[param[str]("id", id_), param[str]("project", project)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateWebhookDto | UpdateWebhookDtoDict](body),
            decoder=async_json_decoder[Webhook],
            error_mapper=webhooks_controller_update_error_mapper,
            request_options=request_options,
        )
