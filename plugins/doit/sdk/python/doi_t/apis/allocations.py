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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_allocation_error import CreateAllocationErrorBody, create_allocation_error_mapper
from ..errors.delete_allocation_error import DeleteAllocationErrorBody, delete_allocation_error_mapper
from ..errors.get_allocation_error import GetAllocationErrorBody, get_allocation_error_mapper
from ..errors.list_allocations_error import ListAllocationsErrorBody, list_allocations_error_mapper
from ..errors.update_allocation_error import UpdateAllocationErrorBody, update_allocation_error_mapper
from ..models.allocation import Allocation
from ..models.analytics_v1_allocations_response import AnalyticsV1AllocationsResponse
from ..models.create_allocation_request import CreateAllocationRequest, CreateAllocationRequestDict
from ..models.enums.sort_by_doi_t_allocations_api import SortByDoiTAllocationsApiOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.update_allocation_request import UpdateAllocationRequest, UpdateAllocationRequestDict
from ..server.server import Server


class Allocations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AllocationsWithRawResponse(client, server, auth)

    def create_allocation(
        self,
        *,
        body: CreateAllocationRequest | CreateAllocationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Allocation:
        """Creates a new allocation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_allocation(body=body, request_options=request_options))

    def delete_allocation(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the allocation specified by the Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Allocation deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The allocation cannot be deleted because it is
                used by other resources. ``error`` is ``Error | list[AllocationDeleteValidation] | RawError``."""
        return unwrap(self._with_raw_response.delete_allocation(id_, request_options=request_options))

    def get_allocation(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Allocation:
        """Returns an allocation by the specified Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Allocation returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_allocation(id_, request_options=request_options))

    def list_allocations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTAllocationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1AllocationsResponse:
        """Returns a list of allocations that your account has access to. Allocations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **type**, **owner**, **name**, **folderId**.
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
            self._with_raw_response.list_allocations(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    def update_allocation(
        self,
        id_: str,
        *,
        body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Allocation:
        """Updates the allocation specified by the Id.

        Args:
            id_: Allocation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Allocation updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_allocation(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AllocationsWithRawResponse:
        return self._with_raw_response


class AsyncAllocations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAllocationsWithRawResponse(client, server, auth)

    async def create_allocation(
        self,
        *,
        body: CreateAllocationRequest | CreateAllocationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Allocation:
        """Creates a new allocation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_allocation(body=body, request_options=request_options))

    async def delete_allocation(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the allocation specified by the Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Allocation deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Conflict - The allocation cannot be deleted because it is
                used by other resources. ``error`` is ``Error | list[AllocationDeleteValidation] | RawError``."""
        return unwrap(await self._with_raw_response.delete_allocation(id_, request_options=request_options))

    async def get_allocation(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Allocation:
        """Returns an allocation by the specified Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Allocation returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_allocation(id_, request_options=request_options))

    async def list_allocations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTAllocationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1AllocationsResponse:
        """Returns a list of allocations that your account has access to. Allocations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **type**, **owner**, **name**, **folderId**.
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
            await self._with_raw_response.list_allocations(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                name_contains=name_contains,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    async def update_allocation(
        self,
        id_: str,
        *,
        body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Allocation:
        """Updates the allocation specified by the Id.

        Args:
            id_: Allocation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Allocation updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_allocation(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAllocationsWithRawResponse:
        return self._with_raw_response


class AllocationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_allocation(
        self,
        *,
        body: CreateAllocationRequest | CreateAllocationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Allocation, CreateAllocationErrorBody]:
        """Creates a new allocation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/allocations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAllocationRequest | CreateAllocationRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Allocation],
            error_mapper=create_allocation_error_mapper,
            request_options=request_options,
        )

    def delete_allocation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteAllocationErrorBody]:
        """Deletes the allocation specified by the Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/allocations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Any],
            error_mapper=delete_allocation_error_mapper,
            request_options=request_options,
        )

    def get_allocation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Allocation, GetAllocationErrorBody]:
        """Returns an allocation by the specified Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/allocations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Allocation],
            error_mapper=get_allocation_error_mapper,
            request_options=request_options,
        )

    def list_allocations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTAllocationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1AllocationsResponse, ListAllocationsErrorBody]:
        """Returns a list of allocations that your account has access to. Allocations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **type**, **owner**, **name**, **folderId**.
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
            url_template=self._server.default("/analytics/v1/allocations"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[SortByDoiTAllocationsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1AllocationsResponse],
            error_mapper=list_allocations_error_mapper,
            request_options=request_options,
        )

    def update_allocation(
        self,
        id_: str,
        *,
        body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Allocation, UpdateAllocationErrorBody]:
        """Updates the allocation specified by the Id.

        Args:
            id_: Allocation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/allocations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAllocationRequest | UpdateAllocationRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Allocation],
            error_mapper=update_allocation_error_mapper,
            request_options=request_options,
        )


class AsyncAllocationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_allocation(
        self,
        *,
        body: CreateAllocationRequest | CreateAllocationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Allocation, CreateAllocationErrorBody]:
        """Creates a new allocation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/allocations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAllocationRequest | CreateAllocationRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Allocation],
            error_mapper=create_allocation_error_mapper,
            request_options=request_options,
        )

    async def delete_allocation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteAllocationErrorBody]:
        """Deletes the allocation specified by the Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/allocations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Any],
            error_mapper=delete_allocation_error_mapper,
            request_options=request_options,
        )

    async def get_allocation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Allocation, GetAllocationErrorBody]:
        """Returns an allocation by the specified Id.

        Args:
            id_: Allocation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/allocations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Allocation],
            error_mapper=get_allocation_error_mapper,
            request_options=request_options,
        )

    async def list_allocations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        name_contains: str | None = None,
        sort_by: SortByDoiTAllocationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1AllocationsResponse, ListAllocationsErrorBody]:
        """Returns a list of allocations that your account has access to. Allocations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **type**, **owner**, **name**, **folderId**.
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
            url_template=self._server.default("/analytics/v1/allocations"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[str | None]("nameContains", name_contains),
                param[SortByDoiTAllocationsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1AllocationsResponse],
            error_mapper=list_allocations_error_mapper,
            request_options=request_options,
        )

    async def update_allocation(
        self,
        id_: str,
        *,
        body: UpdateAllocationRequest | UpdateAllocationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Allocation, UpdateAllocationErrorBody]:
        """Updates the allocation specified by the Id.

        Args:
            id_: Allocation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/allocations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAllocationRequest | UpdateAllocationRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Allocation],
            error_mapper=update_allocation_error_mapper,
            request_options=request_options,
        )
