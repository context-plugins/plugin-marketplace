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
from ..errors.create_recipe_page_error import CreateRecipePageErrorBody, create_recipe_page_error_mapper
from ..errors.create_shopping_list_page_error import (
    CreateShoppingListPageErrorBody,
    create_shopping_list_page_error_mapper,
)
from ..errors.submit_products_error import SubmitProductsErrorBody, submit_products_error_mapper
from ..models.product_submission_request import ProductSubmissionRequest, ProductSubmissionRequestDict
from ..models.products_link_response import ProductsLinkResponse
from ..models.recipe_request import RecipeRequest, RecipeRequestDict
from ..models.shopping_list_request import ShoppingListRequest, ShoppingListRequestDict
from ..models.submission_response import SubmissionResponse
from ..server.server import Server


class Products:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ProductsWithRawResponse(client, server, auth)

    def create_recipe_page(
        self, body: RecipeRequest | RecipeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ProductsLinkResponse:
        """Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details
        including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their
        Instacart cart directly from the page.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recipe page created successfully

        Raises:
            ApiError: Bad request due to invalid parameters Unauthorized due to missing or invalid API key Too many
                requests - rate limit exceeded ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.create_recipe_page(body, request_options=request_options))

    def create_shopping_list_page(
        self,
        body: ShoppingListRequest | ShoppingListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ProductsLinkResponse:
        """Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of
        products that users can add to their Instacart cart. Each call generates a new page with a unique URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Shopping list page created successfully

        Raises:
            ApiError: Bad request due to invalid parameters Unauthorized due to missing or invalid API key Too many
                requests - rate limit exceeded ``error`` is ``Error2 | RawError``."""
        return unwrap(self._with_raw_response.create_shopping_list_page(body, request_options=request_options))

    def submit_products(
        self,
        body: ProductSubmissionRequest | ProductSubmissionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SubmissionResponse:
        """Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new
        product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product,
        only the attributes included in the request body are modified and changes are displayed within a few hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Products submitted successfully

        Raises:
            ApiError: Bad request due to invalid product data Unauthorized Too many requests - rate limit exceeded
                ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.submit_products(body, request_options=request_options))

    @property
    def with_raw_response(self) -> ProductsWithRawResponse:
        return self._with_raw_response


class AsyncProducts:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncProductsWithRawResponse(client, server, auth)

    async def create_recipe_page(
        self, body: RecipeRequest | RecipeRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ProductsLinkResponse:
        """Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details
        including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their
        Instacart cart directly from the page.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Recipe page created successfully

        Raises:
            ApiError: Bad request due to invalid parameters Unauthorized due to missing or invalid API key Too many
                requests - rate limit exceeded ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.create_recipe_page(body, request_options=request_options))

    async def create_shopping_list_page(
        self,
        body: ShoppingListRequest | ShoppingListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ProductsLinkResponse:
        """Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of
        products that users can add to their Instacart cart. Each call generates a new page with a unique URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Shopping list page created successfully

        Raises:
            ApiError: Bad request due to invalid parameters Unauthorized due to missing or invalid API key Too many
                requests - rate limit exceeded ``error`` is ``Error2 | RawError``."""
        return unwrap(await self._with_raw_response.create_shopping_list_page(body, request_options=request_options))

    async def submit_products(
        self,
        body: ProductSubmissionRequest | ProductSubmissionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SubmissionResponse:
        """Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new
        product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product,
        only the attributes included in the request body are modified and changes are displayed within a few hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Products submitted successfully

        Raises:
            ApiError: Bad request due to invalid product data Unauthorized Too many requests - rate limit exceeded
                ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.submit_products(body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncProductsWithRawResponse:
        return self._with_raw_response


class ProductsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_recipe_page(
        self, body: RecipeRequest | RecipeRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ProductsLinkResponse, CreateRecipePageErrorBody]:
        """Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details
        including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their
        Instacart cart directly from the page.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idp/v1/products/recipe"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecipeRequest | RecipeRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ProductsLinkResponse],
            error_mapper=create_recipe_page_error_mapper,
            request_options=request_options,
        )

    def create_shopping_list_page(
        self,
        body: ShoppingListRequest | ShoppingListRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductsLinkResponse, CreateShoppingListPageErrorBody]:
        """Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of
        products that users can add to their Instacart cart. Each call generates a new page with a unique URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idp/v1/products/products_link"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ShoppingListRequest | ShoppingListRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[ProductsLinkResponse],
            error_mapper=create_shopping_list_page_error_mapper,
            request_options=request_options,
        )

    def submit_products(
        self,
        body: ProductSubmissionRequest | ProductSubmissionRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SubmissionResponse, SubmitProductsErrorBody]:
        """Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new
        product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product,
        only the attributes included in the request body are modified and changes are displayed within a few hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data_ingestion/catalog/product/submission"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductSubmissionRequest | ProductSubmissionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SubmissionResponse],
            error_mapper=submit_products_error_mapper,
            request_options=request_options,
        )


class AsyncProductsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_recipe_page(
        self, body: RecipeRequest | RecipeRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ProductsLinkResponse, CreateRecipePageErrorBody]:
        """Creates a recipe page on Instacart Marketplace and returns a unique URL. The page displays recipe details
        including title, image, ingredients, and cooking instructions. Users can add recipe ingredients to their
        Instacart cart directly from the page.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idp/v1/products/recipe"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[RecipeRequest | RecipeRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ProductsLinkResponse],
            error_mapper=create_recipe_page_error_mapper,
            request_options=request_options,
        )

    async def create_shopping_list_page(
        self,
        body: ShoppingListRequest | ShoppingListRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ProductsLinkResponse, CreateShoppingListPageErrorBody]:
        """Creates a shopping list page on Instacart Marketplace and returns a unique URL. The page displays a list of
        products that users can add to their Instacart cart. Each call generates a new page with a unique URL.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/idp/v1/products/products_link"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ShoppingListRequest | ShoppingListRequestDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[ProductsLinkResponse],
            error_mapper=create_shopping_list_page_error_mapper,
            request_options=request_options,
        )

    async def submit_products(
        self,
        body: ProductSubmissionRequest | ProductSubmissionRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SubmissionResponse, SubmitProductsErrorBody]:
        """Creates new products or updates existing products in the retailer's catalog on Instacart. When creating a new
        product, it takes 1-3 business days for the product to be displayed on the storefront. When updating a product,
        only the attributes included in the request body are modified and changes are displayed within a few hours.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/data_ingestion/catalog/product/submission"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ProductSubmissionRequest | ProductSubmissionRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SubmissionResponse],
            error_mapper=submit_products_error_mapper,
            request_options=request_options,
        )
