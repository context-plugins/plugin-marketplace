from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AllSchemes,
    AnySchemes,
    ApiResult,
    AsyncAllSchemes,
    AsyncAnySchemes,
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
from ..errors.assign_objects_to_label_error import AssignObjectsToLabelErrorBody, assign_objects_to_label_error_mapper
from ..errors.create_label_error import CreateLabelErrorBody, create_label_error_mapper
from ..errors.delete_label_error import DeleteLabelErrorBody, delete_label_error_mapper
from ..errors.get_label_assignments_error import GetLabelAssignmentsErrorBody, get_label_assignments_error_mapper
from ..errors.get_label_error import GetLabelErrorBody, get_label_error_mapper
from ..errors.list_labels_error import ListLabelsErrorBody, list_labels_error_mapper
from ..errors.update_label_error import UpdateLabelErrorBody, update_label_error_mapper
from ..models.assign_objects_to_label_request import AssignObjectsToLabelRequest, AssignObjectsToLabelRequestDict
from ..models.create_label_request import CreateLabelRequest, CreateLabelRequestDict
from ..models.enums.sort_by_doi_t_labels_api import SortByDoiTLabelsApiOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.label_assignments_response import LabelAssignmentsResponse
from ..models.label_list import LabelList
from ..models.label_list_item import LabelListItem
from ..models.update_label_request import UpdateLabelRequest, UpdateLabelRequestDict
from ..server.server import Server


class Labels:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = LabelsWithRawResponse(client, server, auth)

    def assign_objects_to_label(
        self,
        id_: str,
        body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns or un-assigns objects to the label specified by the ID.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Objects assigned/unassigned successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.assign_objects_to_label(id_, body, request_options=request_options))

    def create_label(
        self, body: CreateLabelRequest | CreateLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> LabelListItem:
        """Creates a new label.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Label created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_label(body, request_options=request_options))

    def delete_label(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the label specified by the Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_label(id_, request_options=request_options))

    def get_label(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> LabelListItem:
        """Returns a label by the specified Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_label(id_, request_options=request_options))

    def get_label_assignments(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> LabelAssignmentsResponse:
        """Returns the list of objects currently assigned to the label specified by the ID.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label assignments returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_label_assignments(id_, request_options=request_options))

    def list_labels(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTLabelsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LabelList:
        """Returns a list of labels that your account has access to. Labels are listed in reverse chronological order by
        default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **name**, **type**.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_labels(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    def update_label(
        self,
        id_: str,
        *,
        body: UpdateLabelRequest | UpdateLabelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> LabelListItem:
        """Updates the label specified by the Id.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_label(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> LabelsWithRawResponse:
        return self._with_raw_response


class AsyncLabels:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncLabelsWithRawResponse(client, server, auth)

    async def assign_objects_to_label(
        self,
        id_: str,
        body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Assigns or un-assigns objects to the label specified by the ID.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Objects assigned/unassigned successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.assign_objects_to_label(id_, body, request_options=request_options))

    async def create_label(
        self,
        body: CreateLabelRequest | CreateLabelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LabelListItem:
        """Creates a new label.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Label created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_label(body, request_options=request_options))

    async def delete_label(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the label specified by the Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_label(id_, request_options=request_options))

    async def get_label(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> LabelListItem:
        """Returns a label by the specified Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_label(id_, request_options=request_options))

    async def get_label_assignments(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> LabelAssignmentsResponse:
        """Returns the list of objects currently assigned to the label specified by the ID.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label assignments returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_label_assignments(id_, request_options=request_options))

    async def list_labels(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTLabelsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LabelList:
        """Returns a list of labels that your account has access to. Labels are listed in reverse chronological order by
        default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **name**, **type**.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_labels(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    async def update_label(
        self,
        id_: str,
        *,
        body: UpdateLabelRequest | UpdateLabelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LabelListItem:
        """Updates the label specified by the Id.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Label updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_label(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncLabelsWithRawResponse:
        return self._with_raw_response


class LabelsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def assign_objects_to_label(
        self,
        id_: str,
        body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignObjectsToLabelErrorBody]:
        """Assigns or un-assigns objects to the label specified by the ID.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/labels/{id}/assignments"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=empty_response,
            error_mapper=assign_objects_to_label_error_mapper,
            request_options=request_options,
        )

    def create_label(
        self, body: CreateLabelRequest | CreateLabelRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LabelListItem, CreateLabelErrorBody]:
        """Creates a new label.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/labels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLabelRequest | CreateLabelRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[LabelListItem],
            error_mapper=create_label_error_mapper,
            request_options=request_options,
        )

    def delete_label(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteLabelErrorBody]:
        """Deletes the label specified by the Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/labels/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Any],
            error_mapper=delete_label_error_mapper,
            request_options=request_options,
        )

    def get_label(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LabelListItem, GetLabelErrorBody]:
        """Returns a label by the specified Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/labels/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[LabelListItem],
            error_mapper=get_label_error_mapper,
            request_options=request_options,
        )

    def get_label_assignments(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[LabelAssignmentsResponse, GetLabelAssignmentsErrorBody]:
        """Returns the list of objects currently assigned to the label specified by the ID.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/labels/{id}/assignments"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[LabelAssignmentsResponse],
            error_mapper=get_label_assignments_error_mapper,
            request_options=request_options,
        )

    def list_labels(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTLabelsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LabelList, ListLabelsErrorBody]:
        """Returns a list of labels that your account has access to. Labels are listed in reverse chronological order by
        default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **name**, **type**.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/labels"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[SortByDoiTLabelsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[LabelList],
            error_mapper=list_labels_error_mapper,
            request_options=request_options,
        )

    def update_label(
        self,
        id_: str,
        *,
        body: UpdateLabelRequest | UpdateLabelRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[LabelListItem, UpdateLabelErrorBody]:
        """Updates the label specified by the Id.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/labels/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateLabelRequest | UpdateLabelRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[LabelListItem],
            error_mapper=update_label_error_mapper,
            request_options=request_options,
        )


class AsyncLabelsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def assign_objects_to_label(
        self,
        id_: str,
        body: AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, AssignObjectsToLabelErrorBody]:
        """Assigns or un-assigns objects to the label specified by the ID.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/labels/{id}/assignments"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AssignObjectsToLabelRequest | AssignObjectsToLabelRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_empty_response,
            error_mapper=assign_objects_to_label_error_mapper,
            request_options=request_options,
        )

    async def create_label(
        self,
        body: CreateLabelRequest | CreateLabelRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LabelListItem, CreateLabelErrorBody]:
        """Creates a new label.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/labels"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateLabelRequest | CreateLabelRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[LabelListItem],
            error_mapper=create_label_error_mapper,
            request_options=request_options,
        )

    async def delete_label(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteLabelErrorBody]:
        """Deletes the label specified by the Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/labels/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Any],
            error_mapper=delete_label_error_mapper,
            request_options=request_options,
        )

    async def get_label(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LabelListItem, GetLabelErrorBody]:
        """Returns a label by the specified Id.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/labels/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[LabelListItem],
            error_mapper=get_label_error_mapper,
            request_options=request_options,
        )

    async def get_label_assignments(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[LabelAssignmentsResponse, GetLabelAssignmentsErrorBody]:
        """Returns the list of objects currently assigned to the label specified by the ID.

        Args:
            id_: Label ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/labels/{id}/assignments"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[LabelAssignmentsResponse],
            error_mapper=get_label_assignments_error_mapper,
            request_options=request_options,
        )

    async def list_labels(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTLabelsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LabelList, ListLabelsErrorBody]:
        """Returns a list of labels that your account has access to. Labels are listed in reverse chronological order by
        default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **name**, **type**.
            name_contains: Case-insensitive substring match against the resource name. Combined with the "filter"
                parameter using AND semantics.
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/labels"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[SortByDoiTLabelsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[LabelList],
            error_mapper=list_labels_error_mapper,
            request_options=request_options,
        )

    async def update_label(
        self,
        id_: str,
        *,
        body: UpdateLabelRequest | UpdateLabelRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LabelListItem, UpdateLabelErrorBody]:
        """Updates the label specified by the Id.

        Args:
            id_: Label ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/labels/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateLabelRequest | UpdateLabelRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[LabelListItem],
            error_mapper=update_label_error_mapper,
            request_options=request_options,
        )
