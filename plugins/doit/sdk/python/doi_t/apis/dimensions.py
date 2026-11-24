from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_dimensions_error import GetDimensionsErrorBody, get_dimensions_error_mapper
from ..errors.list_dimensions_error import ListDimensionsErrorBody, list_dimensions_error_mapper
from ..models.dimensions_external_api_get_response import DimensionsExternalApiGetResponse
from ..models.dimensions_external_api_list_response import DimensionsExternalApiListResponse
from ..models.enums.dimensions_types import DimensionsTypesOrStr
from ..models.enums.sort_by_doi_t_dimensions_api import SortByDoiTDimensionsApi, SortByDoiTDimensionsApiOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..server.server import Server


class Dimensions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DimensionsWithRawResponse(client, server, auth)

    def get_dimensions(
        self, type_: DimensionsTypesOrStr, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> DimensionsExternalApiGetResponse:
        """Returns a dimension by type and key.

        Args:
            type_: Dimension type
            id_: Dimension id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The dimension returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_dimensions(type_, id_, request_options=request_options))

    def list_dimensions(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> DimensionsExternalApiListResponse:
        """Returns a list of the dimensions that your account has access to.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The fields eligible for filtering are: type, label, key.
            sort_by: A field by which the results will be sorted. ``key`` is an alias for the dimension ``id``. Defaults
                to ``id`` in descending order.
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
            self._with_raw_response.list_dimensions(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> DimensionsWithRawResponse:
        return self._with_raw_response


class AsyncDimensions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDimensionsWithRawResponse(client, server, auth)

    async def get_dimensions(
        self, type_: DimensionsTypesOrStr, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> DimensionsExternalApiGetResponse:
        """Returns a dimension by type and key.

        Args:
            type_: Dimension type
            id_: Dimension id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The dimension returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. Internal Server Error - Something went wrong with the
                DoiT API server. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_dimensions(type_, id_, request_options=request_options))

    async def list_dimensions(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> DimensionsExternalApiListResponse:
        """Returns a list of the dimensions that your account has access to.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The fields eligible for filtering are: type, label, key.
            sort_by: A field by which the results will be sorted. ``key`` is an alias for the dimension ``id``. Defaults
                to ``id`` in descending order.
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
            await self._with_raw_response.list_dimensions(
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                sort_by=sort_by,
                sort_order=sort_order,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncDimensionsWithRawResponse:
        return self._with_raw_response


class DimensionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_dimensions(
        self, type_: DimensionsTypesOrStr, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[DimensionsExternalApiGetResponse, GetDimensionsErrorBody]:
        """Returns a dimension by type and key.

        Args:
            type_: Dimension type
            id_: Dimension id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/dimension"),
            query_params=[param[DimensionsTypesOrStr]("type", type_), param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DimensionsExternalApiGetResponse],
            error_mapper=get_dimensions_error_mapper,
            request_options=request_options,
        )

    def list_dimensions(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID,
        sort_order: SortOrderOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[DimensionsExternalApiListResponse, ListDimensionsErrorBody]:
        """Returns a list of the dimensions that your account has access to.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The fields eligible for filtering are: type, label, key.
            sort_by: A field by which the results will be sorted. ``key`` is an alias for the dimension ``id``. Defaults
                to ``id`` in descending order.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/dimensions"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[SortByDoiTDimensionsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[DimensionsExternalApiListResponse],
            error_mapper=list_dimensions_error_mapper,
            request_options=request_options,
        )


class AsyncDimensionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_dimensions(
        self, type_: DimensionsTypesOrStr, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[DimensionsExternalApiGetResponse, GetDimensionsErrorBody]:
        """Returns a dimension by type and key.

        Args:
            type_: Dimension type
            id_: Dimension id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/dimension"),
            query_params=[param[DimensionsTypesOrStr]("type", type_), param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DimensionsExternalApiGetResponse],
            error_mapper=get_dimensions_error_mapper,
            request_options=request_options,
        )

    async def list_dimensions(
        self,
        *,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        sort_by: SortByDoiTDimensionsApiOrStr | None = SortByDoiTDimensionsApi.ID,
        sort_order: SortOrderOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[DimensionsExternalApiListResponse, ListDimensionsErrorBody]:
        """Returns a list of the dimensions that your account has access to.

        Args:
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The fields eligible for filtering are: type, label, key.
            sort_by: A field by which the results will be sorted. ``key`` is an alias for the dimension ``id``. Defaults
                to ``id`` in descending order.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/dimensions"),
            query_params=[
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
                param[SortByDoiTDimensionsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[DimensionsExternalApiListResponse],
            error_mapper=list_dimensions_error_mapper,
            request_options=request_options,
        )
