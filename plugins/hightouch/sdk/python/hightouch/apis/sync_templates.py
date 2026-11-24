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
from ..errors.create_sync_template_error import CreateSyncTemplateErrorBody, create_sync_template_error_mapper
from ..errors.get_sync_template_error import GetSyncTemplateErrorBody, get_sync_template_error_mapper
from ..errors.list_sync_templates_error import ListSyncTemplatesErrorBody, list_sync_templates_error_mapper
from ..errors.update_sync_template_error import UpdateSyncTemplateErrorBody, update_sync_template_error_mapper
from ..models.enums.order_by_hightouch_events_api import OrderByHightouchEventsApi, OrderByHightouchEventsApiOrStr
from ..models.sync_template import SyncTemplate
from ..models.sync_template_create import SyncTemplateCreate, SyncTemplateCreateDict
from ..models.sync_template_update import SyncTemplateUpdate, SyncTemplateUpdateDict
from ..models.sync_templates_response import SyncTemplatesResponse
from ..models.unions.sync_templates_response1 import SyncTemplatesResponse1
from ..server.server import Server


class SyncTemplates:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SyncTemplatesWithRawResponse(client, server, auth)

    def create_sync_template(
        self, body: SyncTemplateCreate | SyncTemplateCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SyncTemplatesResponse1:
        """Create a new sync template

        A sync template holds a destination configuration that syncs created from it share. ``overrideConfig`` names the
        configuration fields those syncs may set for themselves; every other field is locked to the template's value.
        Create a sync from the template with ``POST /syncs`` and ``syncTemplateId``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_sync_template(body, request_options=request_options))

    def get_sync_template(
        self, sync_template_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> SyncTemplate:
        """Retrieve a sync template given its ID

        Args:
            sync_template_id: The id of the sync template
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.get_sync_template(sync_template_id, request_options=request_options))

    def list_sync_templates(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncTemplatesResponse:
        """List all the sync templates in the current workspace

        Args:
            name: filter based on name
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_sync_templates(
                name=name, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    def update_sync_template(
        self,
        sync_template_id: float,
        body: SyncTemplateUpdate | SyncTemplateUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SyncTemplatesResponse1:
        """Update an existing sync template

        Patch a sync template based on its Hightouch ID. The ``destinationId`` of a sync template cannot be changed
        after creation. Syncs created from the template pick up a new ``configuration`` on their next run; a new
        ``overrideConfig`` replaces the previous one and applies to the next write of each sync's
        ``syncTemplateOverrides``.

        Args:
            sync_template_id: The sync template's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(
            self._with_raw_response.update_sync_template(sync_template_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SyncTemplatesWithRawResponse:
        return self._with_raw_response


class AsyncSyncTemplates:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSyncTemplatesWithRawResponse(client, server, auth)

    async def create_sync_template(
        self,
        body: SyncTemplateCreate | SyncTemplateCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncTemplatesResponse1:
        """Create a new sync template

        A sync template holds a destination configuration that syncs created from it share. ``overrideConfig`` names the
        configuration fields those syncs may set for themselves; every other field is locked to the template's value.
        Create a sync from the template with ``POST /syncs`` and ``syncTemplateId``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_sync_template(body, request_options=request_options))

    async def get_sync_template(
        self, sync_template_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SyncTemplate:
        """Retrieve a sync template given its ID

        Args:
            sync_template_id: The id of the sync template
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(
            await self._with_raw_response.get_sync_template(sync_template_id, request_options=request_options)
        )

    async def list_sync_templates(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncTemplatesResponse:
        """List all the sync templates in the current workspace

        Args:
            name: filter based on name
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_sync_templates(
                name=name, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    async def update_sync_template(
        self,
        sync_template_id: float,
        body: SyncTemplateUpdate | SyncTemplateUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SyncTemplatesResponse1:
        """Update an existing sync template

        Patch a sync template based on its Hightouch ID. The ``destinationId`` of a sync template cannot be changed
        after creation. Syncs created from the template pick up a new ``configuration`` on their next run; a new
        ``overrideConfig`` replaces the previous one and applies to the next write of each sync's
        ``syncTemplateOverrides``.

        Args:
            sync_template_id: The sync template's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(
            await self._with_raw_response.update_sync_template(sync_template_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSyncTemplatesWithRawResponse:
        return self._with_raw_response


class SyncTemplatesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_sync_template(
        self, body: SyncTemplateCreate | SyncTemplateCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncTemplatesResponse1, CreateSyncTemplateErrorBody]:
        """Create a new sync template

        A sync template holds a destination configuration that syncs created from it share. ``overrideConfig`` names the
        configuration fields those syncs may set for themselves; every other field is locked to the template's value.
        Create a sync from the template with ``POST /syncs`` and ``syncTemplateId``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sync-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncTemplateCreate | SyncTemplateCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncTemplatesResponse1],
            error_mapper=create_sync_template_error_mapper,
            request_options=request_options,
        )

    def get_sync_template(
        self, sync_template_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SyncTemplate, GetSyncTemplateErrorBody]:
        """Retrieve a sync template given its ID

        Args:
            sync_template_id: The id of the sync template
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sync-templates/{syncTemplateId}"),
            path_params=[param[float]("syncTemplateId", sync_template_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncTemplate],
            error_mapper=get_sync_template_error_mapper,
            request_options=request_options,
        )

    def list_sync_templates(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncTemplatesResponse, ListSyncTemplatesErrorBody]:
        """List all the sync templates in the current workspace

        Args:
            name: filter based on name
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sync-templates"),
            query_params=[
                param[str | None]("name", name),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchEventsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncTemplatesResponse],
            error_mapper=list_sync_templates_error_mapper,
            request_options=request_options,
        )

    def update_sync_template(
        self,
        sync_template_id: float,
        body: SyncTemplateUpdate | SyncTemplateUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncTemplatesResponse1, UpdateSyncTemplateErrorBody]:
        """Update an existing sync template

        Patch a sync template based on its Hightouch ID. The ``destinationId`` of a sync template cannot be changed
        after creation. Syncs created from the template pick up a new ``configuration`` on their next run; a new
        ``overrideConfig`` replaces the previous one and applies to the next write of each sync's
        ``syncTemplateOverrides``.

        Args:
            sync_template_id: The sync template's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sync-templates/{syncTemplateId}"),
            path_params=[param[float]("syncTemplateId", sync_template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncTemplateUpdate | SyncTemplateUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SyncTemplatesResponse1],
            error_mapper=update_sync_template_error_mapper,
            request_options=request_options,
        )


class AsyncSyncTemplatesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_sync_template(
        self,
        body: SyncTemplateCreate | SyncTemplateCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncTemplatesResponse1, CreateSyncTemplateErrorBody]:
        """Create a new sync template

        A sync template holds a destination configuration that syncs created from it share. ``overrideConfig`` names the
        configuration fields those syncs may set for themselves; every other field is locked to the template's value.
        Create a sync from the template with ``POST /syncs`` and ``syncTemplateId``.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sync-templates"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncTemplateCreate | SyncTemplateCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncTemplatesResponse1],
            error_mapper=create_sync_template_error_mapper,
            request_options=request_options,
        )

    async def get_sync_template(
        self, sync_template_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SyncTemplate, GetSyncTemplateErrorBody]:
        """Retrieve a sync template given its ID

        Args:
            sync_template_id: The id of the sync template
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sync-templates/{syncTemplateId}"),
            path_params=[param[float]("syncTemplateId", sync_template_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncTemplate],
            error_mapper=get_sync_template_error_mapper,
            request_options=request_options,
        )

    async def list_sync_templates(
        self,
        *,
        name: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchEventsApiOrStr | None = OrderByHightouchEventsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncTemplatesResponse, ListSyncTemplatesErrorBody]:
        """List all the sync templates in the current workspace

        Args:
            name: filter based on name
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sync-templates"),
            query_params=[
                param[str | None]("name", name),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchEventsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncTemplatesResponse],
            error_mapper=list_sync_templates_error_mapper,
            request_options=request_options,
        )

    async def update_sync_template(
        self,
        sync_template_id: float,
        body: SyncTemplateUpdate | SyncTemplateUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SyncTemplatesResponse1, UpdateSyncTemplateErrorBody]:
        """Update an existing sync template

        Patch a sync template based on its Hightouch ID. The ``destinationId`` of a sync template cannot be changed
        after creation. Syncs created from the template pick up a new ``configuration`` on their next run; a new
        ``overrideConfig`` replaces the previous one and applies to the next write of each sync's
        ``syncTemplateOverrides``.

        Args:
            sync_template_id: The sync template's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sync-templates/{syncTemplateId}"),
            path_params=[param[float]("syncTemplateId", sync_template_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncTemplateUpdate | SyncTemplateUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SyncTemplatesResponse1],
            error_mapper=update_sync_template_error_mapper,
            request_options=request_options,
        )
