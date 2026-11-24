from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncFileResponse,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    FileResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_file_decoder,
    file_decoder,
    json_body,
    param,
    raw_error_response,
    unwrap,
)
from ..models.stock_card import StockCard, StockCardDict
from ..server.server import Server


class ProductInventory:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProductInventoryWithRawResponse(client, server, auth)

    def product_inventory_adjust(
        self, culture: str, body: StockCard | StockCardDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.product_inventory_adjust(culture, body, request_options=request_options))

    def product_inventory_delete_product_inventory(
        self, id_: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> FileResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_inventory_delete_product_inventory(
                id_, culture, request_options=request_options
            ),
        )

    def product_inventory_get_list(
        self,
        culture: str,
        *,
        id_: int = 0,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            id_: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_inventory_get_list(
                culture,
                id_=id_,
                sort_by=sort_by,
                current_page=current_page,
                page_size=page_size,
                filter_=filter_,
                search_string=search_string,
                custom_document_models=custom_document_models,
                range_=range_,
                month=month,
                year=year,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> ProductInventoryWithRawResponse:
        return self._with_raw_response


class AsyncProductInventory:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProductInventoryWithRawResponse(client, server, auth)

    async def product_inventory_adjust(
        self, culture: str, body: StockCard | StockCardDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_inventory_adjust(culture, body, request_options=request_options)
        )

    async def product_inventory_delete_product_inventory(
        self, id_: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AsyncFileResponse:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_inventory_delete_product_inventory(
                id_, culture, request_options=request_options
            ),
        )

    async def product_inventory_get_list(
        self,
        culture: str,
        *,
        id_: int = 0,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            id_: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_inventory_get_list(
                culture,
                id_=id_,
                sort_by=sort_by,
                current_page=current_page,
                page_size=page_size,
                filter_=filter_,
                search_string=search_string,
                custom_document_models=custom_document_models,
                range_=range_,
                month=month,
                year=year,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProductInventoryWithRawResponse:
        return self._with_raw_response


class ProductInventoryWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def product_inventory_adjust(
        self, culture: str, body: StockCard | StockCardDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/product-inventories/adjust"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StockCard | StockCardDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_inventory_delete_product_inventory(
        self, id_: str | None, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/product-inventories/{id}"),
            path_params=[param[str | None]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_inventory_get_list(
        self,
        culture: str,
        *,
        id_: int = 0,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            id_: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/product-inventories/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            query_params=[
                param[str | None]("SortBy", sort_by),
                param[str | None]("CurrentPage", current_page),
                param[str | None]("PageSize", page_size),
                param[str | None]("Filter", filter_),
                param[str | None]("SearchString", search_string),
                param[str | None]("CustomDocumentModels", custom_document_models),
                param[str | None]("Range", range_),
                param[str | None]("Month", month),
                param[str | None]("Year", year),
                param[str | None]("StartDate", start_date),
                param[str | None]("EndDate", end_date),
            ],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProductInventoryWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def product_inventory_adjust(
        self, culture: str, body: StockCard | StockCardDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/product-inventories/adjust"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StockCard | StockCardDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_inventory_delete_product_inventory(
        self, id_: str | None, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/product-inventories/{id}"),
            path_params=[param[str | None]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_inventory_get_list(
        self,
        culture: str,
        *,
        id_: int = 0,
        sort_by: str | None = None,
        current_page: str | None = None,
        page_size: str | None = None,
        filter_: str | None = None,
        search_string: str | None = None,
        custom_document_models: str | None = None,
        range_: str | None = None,
        month: str | None = None,
        year: str | None = None,
        start_date: str | None = None,
        end_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            id_: Value sent with the request.
            sort_by: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            filter_: Value sent with the request.
            search_string: Value sent with the request.
            custom_document_models: Value sent with the request.
            range_: Value sent with the request.
            month: Value sent with the request.
            year: Value sent with the request.
            start_date: Value sent with the request.
            end_date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/product-inventories/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            query_params=[
                param[str | None]("SortBy", sort_by),
                param[str | None]("CurrentPage", current_page),
                param[str | None]("PageSize", page_size),
                param[str | None]("Filter", filter_),
                param[str | None]("SearchString", search_string),
                param[str | None]("CustomDocumentModels", custom_document_models),
                param[str | None]("Range", range_),
                param[str | None]("Month", month),
                param[str | None]("Year", year),
                param[str | None]("StartDate", start_date),
                param[str | None]("EndDate", end_date),
            ],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
