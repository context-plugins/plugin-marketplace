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
from ..errors.create_annotation_error import CreateAnnotationErrorBody, create_annotation_error_mapper
from ..errors.delete_annotation_error import DeleteAnnotationErrorBody, delete_annotation_error_mapper
from ..errors.get_annotation_error import GetAnnotationErrorBody, get_annotation_error_mapper
from ..errors.list_annotations_error import ListAnnotationsErrorBody, list_annotations_error_mapper
from ..errors.update_annotation_error import UpdateAnnotationErrorBody, update_annotation_error_mapper
from ..models.analytics_v1_annotations_response import AnalyticsV1AnnotationsResponse
from ..models.annotation_list_item import AnnotationListItem
from ..models.create_annotation_request import CreateAnnotationRequest, CreateAnnotationRequestDict
from ..models.enums.sort_by_doi_t_annotations_api import SortByDoiTAnnotationsApiOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.update_annotation_request import UpdateAnnotationRequest, UpdateAnnotationRequestDict
from ..server.server import Server


class Annotations:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AnnotationsWithRawResponse(client, server, auth)

    def create_annotation(
        self,
        body: CreateAnnotationRequest | CreateAnnotationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnnotationListItem:
        """Creates a new annotation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Annotation created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_annotation(body, request_options=request_options))

    def delete_annotation(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes the annotation specified by the Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Annotation deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.delete_annotation(id_, request_options=request_options))

    def get_annotation(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> AnnotationListItem:
        """Returns an annotation by the specified Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Annotation returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_annotation(id_, request_options=request_options))

    def list_annotations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnnotationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnalyticsV1AnnotationsResponse:
        """Returns a list of annotations that your account has access to. Annotations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **content**, **timestamp**, **labels**.
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
            self._with_raw_response.list_annotations(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    def update_annotation(
        self,
        id_: str,
        *,
        body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AnnotationListItem:
        """Updates the annotation specified by the Id.

        Args:
            id_: Annotation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Annotation updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_annotation(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AnnotationsWithRawResponse:
        return self._with_raw_response


class AsyncAnnotations:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAnnotationsWithRawResponse(client, server, auth)

    async def create_annotation(
        self,
        body: CreateAnnotationRequest | CreateAnnotationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnnotationListItem:
        """Creates a new annotation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created - Annotation created successfully.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_annotation(body, request_options=request_options))

    async def delete_annotation(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Deletes the annotation specified by the Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Annotation deleted.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.delete_annotation(id_, request_options=request_options))

    async def get_annotation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AnnotationListItem:
        """Returns an annotation by the specified Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Annotation returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_annotation(id_, request_options=request_options))

    async def list_annotations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnnotationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnalyticsV1AnnotationsResponse:
        """Returns a list of annotations that your account has access to. Annotations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **content**, **timestamp**, **labels**.
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
            await self._with_raw_response.list_annotations(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    async def update_annotation(
        self,
        id_: str,
        *,
        body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AnnotationListItem:
        """Updates the annotation specified by the Id.

        Args:
            id_: Annotation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Annotation updated.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_annotation(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAnnotationsWithRawResponse:
        return self._with_raw_response


class AnnotationsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_annotation(
        self,
        body: CreateAnnotationRequest | CreateAnnotationRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnnotationListItem, CreateAnnotationErrorBody]:
        """Creates a new annotation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/annotations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAnnotationRequest | CreateAnnotationRequestDict](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnnotationListItem],
            error_mapper=create_annotation_error_mapper,
            request_options=request_options,
        )

    def delete_annotation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteAnnotationErrorBody]:
        """Deletes the annotation specified by the Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/annotations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[Any],
            error_mapper=delete_annotation_error_mapper,
            request_options=request_options,
        )

    def get_annotation(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AnnotationListItem, GetAnnotationErrorBody]:
        """Returns an annotation by the specified Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/annotations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnnotationListItem],
            error_mapper=get_annotation_error_mapper,
            request_options=request_options,
        )

    def list_annotations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnnotationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1AnnotationsResponse, ListAnnotationsErrorBody]:
        """Returns a list of annotations that your account has access to. Annotations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **content**, **timestamp**, **labels**.
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/annotations"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[SortByDoiTAnnotationsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnalyticsV1AnnotationsResponse],
            error_mapper=list_annotations_error_mapper,
            request_options=request_options,
        )

    def update_annotation(
        self,
        id_: str,
        *,
        body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AnnotationListItem, UpdateAnnotationErrorBody]:
        """Updates the annotation specified by the Id.

        Args:
            id_: Annotation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/annotations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAnnotationRequest | UpdateAnnotationRequestDict | None](body),
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[AnnotationListItem],
            error_mapper=update_annotation_error_mapper,
            request_options=request_options,
        )


class AsyncAnnotationsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_annotation(
        self,
        body: CreateAnnotationRequest | CreateAnnotationRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnnotationListItem, CreateAnnotationErrorBody]:
        """Creates a new annotation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/analytics/v1/annotations"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateAnnotationRequest | CreateAnnotationRequestDict](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnnotationListItem],
            error_mapper=create_annotation_error_mapper,
            request_options=request_options,
        )

    async def delete_annotation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteAnnotationErrorBody]:
        """Deletes the annotation specified by the Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/analytics/v1/annotations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[Any],
            error_mapper=delete_annotation_error_mapper,
            request_options=request_options,
        )

    async def get_annotation(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AnnotationListItem, GetAnnotationErrorBody]:
        """Returns an annotation by the specified Id.

        Args:
            id_: Annotation ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/annotations/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnnotationListItem],
            error_mapper=get_annotation_error_mapper,
            request_options=request_options,
        )

    async def list_annotations(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTAnnotationsApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnalyticsV1AnnotationsResponse, ListAnnotationsErrorBody]:
        """Returns a list of annotations that your account has access to. Annotations are listed in reverse
        chronological order by default.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. Valid fields: **content**, **timestamp**, **labels**.
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/annotations"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[SortByDoiTAnnotationsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnalyticsV1AnnotationsResponse],
            error_mapper=list_annotations_error_mapper,
            request_options=request_options,
        )

    async def update_annotation(
        self,
        id_: str,
        *,
        body: UpdateAnnotationRequest | UpdateAnnotationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AnnotationListItem, UpdateAnnotationErrorBody]:
        """Updates the annotation specified by the Id.

        Args:
            id_: Annotation ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/analytics/v1/annotations/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateAnnotationRequest | UpdateAnnotationRequestDict | None](body),
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[AnnotationListItem],
            error_mapper=update_annotation_error_mapper,
            request_options=request_options,
        )
