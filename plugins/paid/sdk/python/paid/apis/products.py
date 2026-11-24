from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.create_product_error import CreateProductErrorBody, create_product_error_mapper
from ..errors.get_product_by_id_error import GetProductByIdErrorBody, get_product_by_id_error_mapper
from ..errors.list_products_error import ListProductsErrorBody, list_products_error_mapper
from ..errors.update_product_by_id_error import UpdateProductByIdErrorBody, update_product_by_id_error_mapper
from ..models.create_product_request import CreateProductRequest, CreateProductRequestDict
from ..models.product import Product
from ..models.product1 import Product1
from ..models.product_create import ProductCreate, ProductCreateDict
from ..models.product_detail import ProductDetail
from ..models.product_list_response import ProductListResponse
from ..models.product_update import ProductUpdate, ProductUpdateDict
from ..models.update_product_request import UpdateProductRequest, UpdateProductRequestDict
from ..server.server import Server


class Products:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ProductsWithRawResponse(client, server)

    def create_product(
        self,
        authorization: str,
        *,
        body: CreateProductRequest | CreateProductRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Product1:
        """Creates a new product for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_product(authorization, body=body, request_options=request_options))

    def create5(
        self,
        authorization: str,
        *,
        body: ProductCreate | ProductCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Product:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create5(authorization, body=body, request_options=request_options))

    def delete_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.delete_by_external_id4(external_id, authorization, request_options=request_options)
        )

    def delete5(
        self, product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete5(product_id, authorization, request_options=request_options))

    def get_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Product:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.get_by_external_id4(external_id, authorization, request_options=request_options)
        )

    def get_product_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProductDetail:
        """Get a product by ID, including its product attributes with pricing details

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_product_by_id(id_, authorization, request_options=request_options))

    def get5(
        self, product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Product:
        """Send a ``GET`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get5(product_id, authorization, request_options=request_options))

    def list_products(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        active: bool | None = None,
        archived: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProductListResponse:
        """Get a list of products for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by product name (case-insensitive, matches anywhere in the name).
            active: Filter by the product's active flag: true or false.
            archived: Filter by archived state: true returns only archived products, false only non-archived. Omit to
                include both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_products(
                authorization,
                limit=limit,
                offset=offset,
                name=name,
                active=active,
                archived=archived,
                request_options=request_options,
            ),
        )

    def list5(self, authorization: str, *, request_options: RequestOptionsOrDict | None = None) -> list[Product]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list5(authorization, request_options=request_options))

    def update_by_external_id3(
        self,
        external_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Product:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_by_external_id3(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    def update_product_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateProductRequest | UpdateProductRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProductDetail:
        """Update a product by ID. Optionally upsert product attributes with pricing.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_product_by_id(id_, authorization, body=body, request_options=request_options)
        )

    def update4(
        self,
        product_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Product:
        """Send a ``PUT`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update4(product_id, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ProductsWithRawResponse:
        return self._with_raw_response


class AsyncProducts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncProductsWithRawResponse(client, server)

    async def create_product(
        self,
        authorization: str,
        *,
        body: CreateProductRequest | CreateProductRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Product1:
        """Creates a new product for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            201

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.create_product(authorization, body=body, request_options=request_options)
        )

    async def create5(
        self,
        authorization: str,
        *,
        body: ProductCreate | ProductCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Product:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create5(authorization, body=body, request_options=request_options))

    async def delete_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_by_external_id4(
                external_id, authorization, request_options=request_options
            ),
        )

    async def delete5(
        self, product_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Send a ``DELETE`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.delete5(product_id, authorization, request_options=request_options))

    async def get_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Product:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_by_external_id4(
                external_id, authorization, request_options=request_options
            ),
        )

    async def get_product_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProductDetail:
        """Get a product by ID, including its product attributes with pricing details

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_product_by_id(id_, authorization, request_options=request_options)
        )

    async def get5(
        self, product_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Product:
        """Send a ``GET`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get5(product_id, authorization, request_options=request_options))

    async def list_products(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        active: bool | None = None,
        archived: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProductListResponse:
        """Get a list of products for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by product name (case-insensitive, matches anywhere in the name).
            active: Filter by the product's active flag: true or false.
            archived: Filter by archived state: true returns only archived products, false only non-archived. Omit to
                include both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_products(
                authorization,
                limit=limit,
                offset=offset,
                name=name,
                active=active,
                archived=archived,
                request_options=request_options,
            ),
        )

    async def list5(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Product]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list5(authorization, request_options=request_options))

    async def update_by_external_id3(
        self,
        external_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Product:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_by_external_id3(
                external_id, authorization, body=body, request_options=request_options
            ),
        )

    async def update_product_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateProductRequest | UpdateProductRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProductDetail:
        """Update a product by ID. Optionally upsert product attributes with pricing.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 403 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_product_by_id(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def update4(
        self,
        product_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Product:
        """Send a ``PUT`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update4(product_id, authorization, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncProductsWithRawResponse:
        return self._with_raw_response


class ProductsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_product(
        self,
        authorization: str,
        *,
        body: CreateProductRequest | CreateProductRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Product1, CreateProductErrorBody]:
        """Creates a new product for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/products/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProductRequest | CreateProductRequestDict | None](body),
            decoder=json_decoder[Product1],
            error_mapper=create_product_error_mapper,
            request_options=request_options,
        )

    def create5(
        self,
        authorization: str,
        *,
        body: ProductCreate | ProductCreateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Product, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/products"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductCreate | ProductCreateDict | None](body),
            decoder=json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/products/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def delete5(
        self, product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/products/{productId}"),
            path_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Product, RawError]:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def get_product_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProductDetail, GetProductByIdErrorBody]:
        """Get a product by ID, including its product attributes with pricing details

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ProductDetail],
            error_mapper=get_product_by_id_error_mapper,
            request_options=request_options,
        )

    def get5(
        self, product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Product, RawError]:
        """Send a ``GET`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/{productId}"),
            path_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def list_products(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        active: bool | None = None,
        archived: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductListResponse, ListProductsErrorBody]:
        """Get a list of products for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by product name (case-insensitive, matches anywhere in the name).
            active: Filter by the product's active flag: true or false.
            archived: Filter by archived state: true returns only archived products, false only non-archived. Omit to
                include both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("name", name),
                param[bool | None]("active", active),
                param[bool | None]("archived", archived),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ProductListResponse],
            error_mapper=list_products_error_mapper,
            request_options=request_options,
        )

    def list5(
        self, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Product], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products"),
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[list[Product]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_by_external_id3(
        self,
        external_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Product, RawError]:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/products/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUpdate | ProductUpdateDict | None](body),
            decoder=json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def update_product_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateProductRequest | UpdateProductRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductDetail, UpdateProductByIdErrorBody]:
        """Update a product by ID. Optionally upsert product attributes with pricing.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/products/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProductRequest | UpdateProductRequestDict | None](body),
            decoder=json_decoder[ProductDetail],
            error_mapper=update_product_by_id_error_mapper,
            request_options=request_options,
        )

    def update4(
        self,
        product_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Product, RawError]:
        """Send a ``PUT`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/products/{productId}"),
            path_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUpdate | ProductUpdateDict | None](body),
            decoder=json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncProductsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_product(
        self,
        authorization: str,
        *,
        body: CreateProductRequest | CreateProductRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Product1, CreateProductErrorBody]:
        """Creates a new product for the organization

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/products/"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateProductRequest | CreateProductRequestDict | None](body),
            decoder=async_json_decoder[Product1],
            error_mapper=create_product_error_mapper,
            request_options=request_options,
        )

    async def create5(
        self,
        authorization: str,
        *,
        body: ProductCreate | ProductCreateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Product, RawError]:
        """Send a ``POST`` request.

        Args:
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/products"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductCreate | ProductCreateDict | None](body),
            decoder=async_json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/products/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete5(
        self, product_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Send a ``DELETE`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/products/{productId}"),
            path_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_by_external_id4(
        self, external_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Product, RawError]:
        """Send a ``GET`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def get_product_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProductDetail, GetProductByIdErrorBody]:
        """Get a product by ID, including its product attributes with pricing details

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ProductDetail],
            error_mapper=get_product_by_id_error_mapper,
            request_options=request_options,
        )

    async def get5(
        self, product_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Product, RawError]:
        """Send a ``GET`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/{productId}"),
            path_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def list_products(
        self,
        authorization: str,
        *,
        limit: int | None = 10,
        offset: int | None = None,
        name: str | None = None,
        active: bool | None = None,
        archived: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductListResponse, ListProductsErrorBody]:
        """Get a list of products for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            name: Search by product name (case-insensitive, matches anywhere in the name).
            active: Filter by the product's active flag: true or false.
            archived: Filter by archived state: true returns only archived products, false only non-archived. Omit to
                include both.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("name", name),
                param[bool | None]("active", active),
                param[bool | None]("archived", archived),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ProductListResponse],
            error_mapper=list_products_error_mapper,
            request_options=request_options,
        )

    async def list5(
        self, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Product], RawError]:
        """Send a ``GET`` request.

        Args:
            authorization: Bearer authentication
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/products"),
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[list[Product]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_by_external_id3(
        self,
        external_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Product, RawError]:
        """Send a ``PUT`` request.

        Args:
            external_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/products/external/{externalId}"),
            path_params=[param[str]("externalId", external_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUpdate | ProductUpdateDict | None](body),
            decoder=async_json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def update_product_by_id(
        self,
        id_: str,
        authorization: str,
        *,
        body: UpdateProductRequest | UpdateProductRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductDetail, UpdateProductByIdErrorBody]:
        """Update a product by ID. Optionally upsert product attributes with pricing.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/products/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateProductRequest | UpdateProductRequestDict | None](body),
            decoder=async_json_decoder[ProductDetail],
            error_mapper=update_product_by_id_error_mapper,
            request_options=request_options,
        )

    async def update4(
        self,
        product_id: str,
        authorization: str,
        *,
        body: ProductUpdate | ProductUpdateDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Product, RawError]:
        """Send a ``PUT`` request.

        Args:
            product_id: Value sent with the request.
            authorization: Bearer authentication
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/products/{productId}"),
            path_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductUpdate | ProductUpdateDict | None](body),
            decoder=async_json_decoder[Product],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
