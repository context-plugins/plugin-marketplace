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
from ..errors.get_commitment_error import GetCommitmentErrorBody, get_commitment_error_mapper
from ..errors.list_commitments_error import ListCommitmentsErrorBody, list_commitments_error_mapper
from ..models.commitment_external import CommitmentExternal
from ..models.commitment_external_list import CommitmentExternalList
from ..models.enums.sort_by_doi_t_commitment_manager_api import SortByDoiTCommitmentManagerApiOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..server.server import Server


class CommitmentManager:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CommitmentManagerWithRawResponse(client, server, auth)

    def get_commitment(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> CommitmentExternal:
        """Returns a commitment by the specified Id.

        Args:
            id_: Commitment ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Commitment returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.get_commitment(id_, request_options=request_options))

    def list_commitments(
        self,
        *,
        sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CommitmentExternalList:
        """Returns a list of commitments for the customer. Commitments are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **name**, **provider**
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_commitments(
                sort_by=sort_by,
                sort_order=sort_order,
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> CommitmentManagerWithRawResponse:
        return self._with_raw_response


class AsyncCommitmentManager:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCommitmentManagerWithRawResponse(client, server, auth)

    async def get_commitment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CommitmentExternal:
        """Returns a commitment by the specified Id.

        Args:
            id_: Commitment ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - Commitment returned.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request. Not
                Found - The requested resource does not exist. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.get_commitment(id_, request_options=request_options))

    async def list_commitments(
        self,
        *,
        sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CommitmentExternalList:
        """Returns a list of commitments for the customer. Commitments are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **name**, **provider**
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK - The request succeeded.

        Raises:
            ApiError: Bad Request - The server cannot process the request, often due to a malformed request.
                Unauthorized - Invalid API key. Forbidden - The client is not authorized to perform the request.
                Internal Server Error - Something went wrong with the DoiT API server. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_commitments(
                sort_by=sort_by,
                sort_order=sort_order,
                max_results=max_results,
                page_token=page_token,
                filter_=filter_,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCommitmentManagerWithRawResponse:
        return self._with_raw_response


class CommitmentManagerWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_commitment(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CommitmentExternal, GetCommitmentErrorBody]:
        """Returns a commitment by the specified Id.

        Args:
            id_: Commitment ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/commitment-manager/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CommitmentExternal],
            error_mapper=get_commitment_error_mapper,
            request_options=request_options,
        )

    def list_commitments(
        self,
        *,
        sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CommitmentExternalList, ListCommitmentsErrorBody]:
        """Returns a list of commitments for the customer. Commitments are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **name**, **provider**
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/commitment-manager"),
            query_params=[
                param[SortByDoiTCommitmentManagerApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AnySchemes(self._auth.api_key, AllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=json_decoder[CommitmentExternalList],
            error_mapper=list_commitments_error_mapper,
            request_options=request_options,
        )


class AsyncCommitmentManagerWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_commitment(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CommitmentExternal, GetCommitmentErrorBody]:
        """Returns a commitment by the specified Id.

        Args:
            id_: Commitment ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/commitment-manager/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CommitmentExternal],
            error_mapper=get_commitment_error_mapper,
            request_options=request_options,
        )

    async def list_commitments(
        self,
        *,
        sort_by: SortByDoiTCommitmentManagerApiOrStr | None = None,
        sort_order: SortOrderOrStr | None = None,
        max_results: int | None = 50,
        page_token: str | None = None,
        filter_: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CommitmentExternalList, ListCommitmentsErrorBody]:
        """Returns a list of commitments for the customer. Commitments are listed in reverse chronological order by
        default.

        Args:
            sort_by: A field by which the results will be sorted.
            sort_order: Specifies the sort direction; accepts asc for ascending (lowest to highest) or desc for
                descending (highest to lowest).
            max_results: The maximum number of results to return in a single page. Use the page tokens to iterate
                through the entire collection.
            page_token: Page token, returned by a previous call, to request the next page of results
            filter_: An expression for filtering the results. The syntax is ``key:[<value>]``. Multiple filters can be
                connected using a pipe |. See `Filters <https://developer.doit.com/docs/filters>`__. Available filter
                keys: **name**, **provider**
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/analytics/v1/commitment-manager"),
            query_params=[
                param[SortByDoiTCommitmentManagerApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[int | None]("maxResults", max_results),
                param[str | None]("pageToken", page_token),
                param[str | None]("filter", filter_),
            ],
            auth_scheme=AsyncAnySchemes(self._auth.api_key, AsyncAllSchemes(self._auth.tenant_id, self._auth.api_key)),
            decoder=async_json_decoder[CommitmentExternalList],
            error_mapper=list_commitments_error_mapper,
            request_options=request_options,
        )
