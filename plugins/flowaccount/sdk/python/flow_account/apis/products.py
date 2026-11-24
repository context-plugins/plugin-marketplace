from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.api_response_of_boolean import ApiResponseOfBoolean
from ..models.api_response_of_i_simple_list_result_of_i_product_result import (
    ApiResponseOfISimpleListResultOfIProductResult,
)
from ..models.product_result import ProductResult, ProductResultDict
from ..server.server import Server


class Products:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProductsWithRawResponse(client, server, auth)

    def products_create(
        self,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.products_create(culture, body, request_options=request_options))

    def products_get_by_id(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.products_get_by_id(id_, culture, request_options=request_options))

    def products_get_list(
        self,
        culture: str,
        *,
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
        id_: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.products_get_list(
                culture,
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
                id_=id_,
                request_options=request_options,
            ),
        )

    def products_remove(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResponseOfBoolean:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfBoolean`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.products_remove(id_, culture, request_options=request_options))

    def products_search(
        self,
        culture: str,
        *,
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
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.products_search(
                culture,
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

    def products_update(
        self,
        id_: int,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.products_update(id_, culture, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProductsWithRawResponse:
        return self._with_raw_response


class AsyncProducts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProductsWithRawResponse(client, server, auth)

    async def products_create(
        self,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.products_create(culture, body, request_options=request_options))

    async def products_get_by_id(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.products_get_by_id(id_, culture, request_options=request_options))

    async def products_get_list(
        self,
        culture: str,
        *,
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
        id_: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.products_get_list(
                culture,
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
                id_=id_,
                request_options=request_options,
            ),
        )

    async def products_remove(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResponseOfBoolean:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfBoolean`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.products_remove(id_, culture, request_options=request_options))

    async def products_search(
        self,
        culture: str,
        *,
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
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.products_search(
                culture,
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

    async def products_update(
        self,
        id_: int,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResponseOfISimpleListResultOfIProductResult:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``ApiResponseOfISimpleListResultOfIProductResult`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.products_update(id_, culture, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncProductsWithRawResponse:
        return self._with_raw_response


class ProductsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def products_create(
        self,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/Products"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductResult | ProductResultDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def products_get_by_id(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/Products/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def products_get_list(
        self,
        culture: str,
        *,
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
        id_: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/Products"),
            path_params=[param[str]("culture", culture)],
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
                param[int | None]("id", id_),
            ],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def products_remove(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiResponseOfBoolean, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/Products/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ApiResponseOfBoolean],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def products_search(
        self,
        culture: str,
        *,
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
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/Products/search"),
            path_params=[param[str]("culture", culture)],
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
            decoder=json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def products_update(
        self,
        id_: int,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/Products/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductResult | ProductResultDict](body),
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProductsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def products_create(
        self,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``POST`` request.

        Args:
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{culture}/Products"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductResult | ProductResultDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def products_get_by_id(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``GET`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/Products/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def products_get_list(
        self,
        culture: str,
        *,
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
        id_: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/Products"),
            path_params=[param[str]("culture", culture)],
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
                param[int | None]("id", id_),
            ],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def products_remove(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ApiResponseOfBoolean, RawError]:
        """Send a ``DELETE`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/{culture}/Products/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ApiResponseOfBoolean],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def products_search(
        self,
        culture: str,
        *,
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
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
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
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/Products/search"),
            path_params=[param[str]("culture", culture)],
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
            decoder=async_json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def products_update(
        self,
        id_: int,
        culture: str,
        body: ProductResult | ProductResultDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiResponseOfISimpleListResultOfIProductResult, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/Products/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductResult | ProductResultDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[ApiResponseOfISimpleListResultOfIProductResult],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
