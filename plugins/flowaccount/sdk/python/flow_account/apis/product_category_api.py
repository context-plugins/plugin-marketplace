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
    async_json_decoder,
    file_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..models.product_category import ProductCategory, ProductCategoryDict
from ..server.server import Server


class ProductCategoryApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProductCategoryApiWithRawResponse(client, server, auth)

    def product_category_create_product_category(
        self,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
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
        return unwrap(
            self._with_raw_response.product_category_create_product_category(
                culture, body, request_options=request_options
            ),
        )

    def product_category_delete_product_category(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
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
            self._with_raw_response.product_category_delete_product_category(
                id_, culture, request_options=request_options
            ),
        )

    def product_category_get_product_category(
        self,
        culture: str,
        *,
        current_page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ProductCategory]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[ProductCategory]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_category_get_product_category(
                culture, current_page=current_page, page_size=page_size, request_options=request_options
            ),
        )

    def product_category_update_product_category(
        self,
        id_: int,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> FileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A ``FileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.product_category_update_product_category(
                id_, culture, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ProductCategoryApiWithRawResponse:
        return self._with_raw_response


class AsyncProductCategoryApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProductCategoryApiWithRawResponse(client, server, auth)

    async def product_category_create_product_category(
        self,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
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
            await self._with_raw_response.product_category_create_product_category(
                culture, body, request_options=request_options
            ),
        )

    async def product_category_delete_product_category(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            await self._with_raw_response.product_category_delete_product_category(
                id_, culture, request_options=request_options
            ),
        )

    async def product_category_get_product_category(
        self,
        culture: str,
        *,
        current_page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ProductCategory]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deserialized ``list[ProductCategory]`` response.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_category_get_product_category(
                culture, current_page=current_page, page_size=page_size, request_options=request_options
            ),
        )

    async def product_category_update_product_category(
        self,
        id_: int,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AsyncFileResponse:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``AsyncFileResponse`` holding the body unread.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.product_category_update_product_category(
                id_, culture, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncProductCategoryApiWithRawResponse:
        return self._with_raw_response


class ProductCategoryApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def product_category_create_product_category(
        self,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
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
            url_template=self._server.default("/{culture}/products/categories"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductCategory | ProductCategoryDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_category_delete_product_category(
        self, id_: int, culture: str, *, request_options: RequestOptionsOrDict | None = None
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
            url_template=self._server.default("/{culture}/products/categories/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_category_get_product_category(
        self,
        culture: str,
        *,
        current_page: int | None = 0,
        page_size: int | None = 20,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ProductCategory], RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/products/categories"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[int | None]("currentPage", current_page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer,
            decoder=json_decoder[list[ProductCategory]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def product_category_update_product_category(
        self,
        id_: int,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[FileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/products/categories/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductCategory | ProductCategoryDict](body),
            auth_scheme=self._auth.bearer,
            decoder=file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProductCategoryApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def product_category_create_product_category(
        self,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
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
            url_template=self._server.default("/{culture}/products/categories"),
            path_params=[param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductCategory | ProductCategoryDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_category_delete_product_category(
        self, id_: int, culture: str, *, request_options: AsyncRequestOptionsOrDict | None = None
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
            url_template=self._server.default("/{culture}/products/categories/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_category_get_product_category(
        self,
        culture: str,
        *,
        current_page: int | None = 0,
        page_size: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ProductCategory], RawError]:
        """Send a ``GET`` request.

        Args:
            culture: Value sent with the request.
            current_page: Value sent with the request.
            page_size: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{culture}/products/categories"),
            path_params=[param[str]("culture", culture)],
            query_params=[param[int | None]("currentPage", current_page), param[int | None]("pageSize", page_size)],
            auth_scheme=self._auth.bearer,
            decoder=async_json_decoder[list[ProductCategory]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def product_category_update_product_category(
        self,
        id_: int,
        culture: str,
        body: ProductCategory | ProductCategoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AsyncFileResponse, RawError]:
        """Send a ``PUT`` request.

        Args:
            id_: Value sent with the request.
            culture: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the body unread or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/{culture}/products/categories/{id}"),
            path_params=[param[int]("id", id_), param[str]("culture", culture)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductCategory | ProductCategoryDict](body),
            auth_scheme=self._auth.bearer,
            decoder=async_file_decoder,
            error_mapper=raw_error_response,
            request_options=request_options,
        )
