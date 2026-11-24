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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_category_error import CreateCategoryErrorBody, create_category_error_mapper
from ..errors.delete_category_error import DeleteCategoryErrorBody, delete_category_error_mapper
from ..errors.get_category_error import GetCategoryErrorBody, get_category_error_mapper
from ..errors.list_categories_error import ListCategoriesErrorBody, list_categories_error_mapper
from ..errors.list_category_milestones_error import (
    ListCategoryMilestonesErrorBody,
    list_category_milestones_error_mapper,
)
from ..errors.list_category_objectives_error import (
    ListCategoryObjectivesErrorBody,
    list_category_objectives_error_mapper,
)
from ..errors.update_category_error import UpdateCategoryErrorBody, update_category_error_mapper
from ..models.category import Category
from ..models.create_category import CreateCategory, CreateCategoryDict
from ..models.milestone import Milestone
from ..models.update_category import UpdateCategory, UpdateCategoryDict
from ..server.server import Server


class Categories:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CategoriesWithRawResponse(client, server, auth)

    def create_category(
        self, body: CreateCategory | CreateCategoryDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Category:
        """Create Category allows you to create a new Category in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.create_category(body, request_options=request_options))

    def delete_category(self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Delete Category can be used to delete any Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.delete_category(category_public_id, request_options=request_options))

    def get_category(self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None) -> Category:
        """Get Category returns information about the selected Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_category(category_public_id, request_options=request_options))

    def list_categories(self, *, request_options: RequestOptionsOrDict | None = None) -> list[Category]:
        """List Categories returns a list of all Categories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.list_categories(request_options=request_options))

    def list_category_milestones(
        self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Milestone]:
        """List Category Milestones returns a list of all Milestones with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_category_milestones(category_public_id, request_options=request_options)
        )

    def list_category_objectives(
        self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Milestone]:
        """Returns a list of all Objectives with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_category_objectives(category_public_id, request_options=request_options)
        )

    def update_category(
        self,
        category_public_id: int,
        body: UpdateCategory | UpdateCategoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Category:
        """Update Category allows you to replace a Category name with another name. If you try to name a Category
        something that already exists, you will receive a 422 response.

        Args:
            category_public_id: The unique ID of the Category you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.update_category(category_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> CategoriesWithRawResponse:
        return self._with_raw_response


class AsyncCategories:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCategoriesWithRawResponse(client, server, auth)

    async def create_category(
        self, body: CreateCategory | CreateCategoryDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Category:
        """Create Category allows you to create a new Category in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.create_category(body, request_options=request_options))

    async def delete_category(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Delete Category can be used to delete any Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No Content

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.delete_category(category_public_id, request_options=request_options)
        )

    async def get_category(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Category:
        """Get Category returns information about the selected Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_category(category_public_id, request_options=request_options))

    async def list_categories(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> list[Category]:
        """List Categories returns a list of all Categories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.list_categories(request_options=request_options))

    async def list_category_milestones(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Milestone]:
        """List Category Milestones returns a list of all Milestones with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_category_milestones(category_public_id, request_options=request_options)
        )

    async def list_category_objectives(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> list[Milestone]:
        """Returns a list of all Objectives with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_category_objectives(category_public_id, request_options=request_options)
        )

    async def update_category(
        self,
        category_public_id: int,
        body: UpdateCategory | UpdateCategoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Category:
        """Update Category allows you to replace a Category name with another name. If you try to name a Category
        something that already exists, you will receive a 422 response.

        Args:
            category_public_id: The unique ID of the Category you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Resource

        Raises:
            ApiError: Schema mismatch Resource does not exist Unprocessable ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.update_category(category_public_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCategoriesWithRawResponse:
        return self._with_raw_response


class CategoriesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_category(
        self, body: CreateCategory | CreateCategoryDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Category, CreateCategoryErrorBody]:
        """Create Category allows you to create a new Category in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/categories"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCategory | CreateCategoryDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Category],
            error_mapper=create_category_error_mapper,
            request_options=request_options,
        )

    def delete_category(
        self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCategoryErrorBody]:
        """Delete Category can be used to delete any Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/categories/{category-public-id}"),
            path_params=[param[int]("category-public-id", category_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=empty_response,
            error_mapper=delete_category_error_mapper,
            request_options=request_options,
        )

    def get_category(
        self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Category, GetCategoryErrorBody]:
        """Get Category returns information about the selected Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories/{category-public-id}"),
            path_params=[param[int]("category-public-id", category_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Category],
            error_mapper=get_category_error_mapper,
            request_options=request_options,
        )

    def list_categories(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Category], ListCategoriesErrorBody]:
        """List Categories returns a list of all Categories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories"),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Category]],
            error_mapper=list_categories_error_mapper,
            request_options=request_options,
        )

    def list_category_milestones(
        self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Milestone], ListCategoryMilestonesErrorBody]:
        """List Category Milestones returns a list of all Milestones with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories/{category-public-id}/milestones"),
            path_params=[param[int]("category-public-id", category_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Milestone]],
            error_mapper=list_category_milestones_error_mapper,
            request_options=request_options,
        )

    def list_category_objectives(
        self, category_public_id: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Milestone], ListCategoryObjectivesErrorBody]:
        """Returns a list of all Objectives with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories/{category-public-id}/objectives"),
            path_params=[param[int]("category-public-id", category_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[list[Milestone]],
            error_mapper=list_category_objectives_error_mapper,
            request_options=request_options,
        )

    def update_category(
        self,
        category_public_id: int,
        body: UpdateCategory | UpdateCategoryDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Category, UpdateCategoryErrorBody]:
        """Update Category allows you to replace a Category name with another name. If you try to name a Category
        something that already exists, you will receive a 422 response.

        Args:
            category_public_id: The unique ID of the Category you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/categories/{category-public-id}"),
            path_params=[param[int]("category-public-id", category_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCategory | UpdateCategoryDict](body),
            auth_scheme=self._auth.api_token,
            decoder=json_decoder[Category],
            error_mapper=update_category_error_mapper,
            request_options=request_options,
        )


class AsyncCategoriesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_category(
        self, body: CreateCategory | CreateCategoryDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Category, CreateCategoryErrorBody]:
        """Create Category allows you to create a new Category in Shortcut.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v3/categories"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateCategory | CreateCategoryDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Category],
            error_mapper=create_category_error_mapper,
            request_options=request_options,
        )

    async def delete_category(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteCategoryErrorBody]:
        """Delete Category can be used to delete any Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/api/v3/categories/{category-public-id}"),
            path_params=[param[int]("category-public-id", category_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_token,
            decoder=async_empty_response,
            error_mapper=delete_category_error_mapper,
            request_options=request_options,
        )

    async def get_category(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Category, GetCategoryErrorBody]:
        """Get Category returns information about the selected Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories/{category-public-id}"),
            path_params=[param[int]("category-public-id", category_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Category],
            error_mapper=get_category_error_mapper,
            request_options=request_options,
        )

    async def list_categories(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Category], ListCategoriesErrorBody]:
        """List Categories returns a list of all Categories and their attributes.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories"),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Category]],
            error_mapper=list_categories_error_mapper,
            request_options=request_options,
        )

    async def list_category_milestones(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Milestone], ListCategoryMilestonesErrorBody]:
        """List Category Milestones returns a list of all Milestones with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories/{category-public-id}/milestones"),
            path_params=[param[int]("category-public-id", category_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Milestone]],
            error_mapper=list_category_milestones_error_mapper,
            request_options=request_options,
        )

    async def list_category_objectives(
        self, category_public_id: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[list[Milestone], ListCategoryObjectivesErrorBody]:
        """Returns a list of all Objectives with the Category.

        Args:
            category_public_id: The unique ID of the Category.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v3/categories/{category-public-id}/objectives"),
            path_params=[param[int]("category-public-id", category_public_id)],
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[list[Milestone]],
            error_mapper=list_category_objectives_error_mapper,
            request_options=request_options,
        )

    async def update_category(
        self,
        category_public_id: int,
        body: UpdateCategory | UpdateCategoryDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Category, UpdateCategoryErrorBody]:
        """Update Category allows you to replace a Category name with another name. If you try to name a Category
        something that already exists, you will receive a 422 response.

        Args:
            category_public_id: The unique ID of the Category you wish to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/api/v3/categories/{category-public-id}"),
            path_params=[param[int]("category-public-id", category_public_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCategory | UpdateCategoryDict](body),
            auth_scheme=self._auth.api_token,
            decoder=async_json_decoder[Category],
            error_mapper=update_category_error_mapper,
            request_options=request_options,
        )
