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
from ..errors.add_custom_category_urls_error import (
    AddCustomCategoryUrlsErrorBody,
    add_custom_category_urls_error_mapper,
)
from ..errors.create_custom_category_error import CreateCustomCategoryErrorBody, create_custom_category_error_mapper
from ..errors.delete_all_custom_category_urls_error import (
    DeleteAllCustomCategoryUrlsErrorBody,
    delete_all_custom_category_urls_error_mapper,
)
from ..errors.delete_custom_category_error import DeleteCustomCategoryErrorBody, delete_custom_category_error_mapper
from ..errors.delete_custom_category_url_error import (
    DeleteCustomCategoryUrlErrorBody,
    delete_custom_category_url_error_mapper,
)
from ..errors.list_custom_categories_error import ListCustomCategoriesErrorBody, list_custom_categories_error_mapper
from ..errors.list_custom_category_urls_error import (
    ListCustomCategoryUrlsErrorBody,
    list_custom_category_urls_error_mapper,
)
from ..errors.overwrite_custom_category_urls_error import (
    OverwriteCustomCategoryUrlsErrorBody,
    overwrite_custom_category_urls_error_mapper,
)
from ..models.custom_categories_response import CustomCategoriesResponse
from ..models.custom_categories_urls_request import CustomCategoriesUrlsRequest, CustomCategoriesUrlsRequestDict
from ..models.custom_categories_urls_response import CustomCategoriesUrlsResponse
from ..models.success_message import SuccessMessage
from ..server.server import Server


class CustomCategoriesApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomCategoriesApiWithRawResponse(client, server, auth)

    def add_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to add URLs to an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body.

        Ensure that URLs are properly formatted and included in the array.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to add URLs to
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.add_custom_category_urls(
                custom_category_name, body, request_options=request_options
            ),
        )

    def create_custom_category(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        r"""Use this API to create a new custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        If the custom category already exists, a ``400`` error is returned.

        Validation rules for ``custom_category_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            custom_category_name: The name of the custom category to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request - invalid custom category name or custom category already exists Unauthorized access
                Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.create_custom_category(custom_category_name, request_options=request_options)
        )

    def delete_all_custom_category_urls(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete all URLs from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        This action will remove all URLs associated with the specified custom category.

        Args:
            custom_category_name: The name of the custom category to delete all URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.delete_all_custom_category_urls(
                custom_category_name, request_options=request_options
            ),
        )

    def delete_custom_category(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete a single custom category by name. This action will remove the custom category and all
        of its associated data.

        Args:
            custom_category_name: The name of the custom category to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_category(custom_category_name, request_options=request_options)
        )

    def delete_custom_category_url(
        self, custom_category_name: str, encoded_url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete a specific URL from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        Ensure that a given URL is encoded using URL encoding.

        Args:
            custom_category_name: The name of the custom category to delete given URL from
            encoded_url: The URL to be deleted (Ensure that URLs are properly URL-encoded using the UTF8 encoding
                method)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.delete_custom_category_url(
                custom_category_name, encoded_url, request_options=request_options
            ),
        )

    def list_custom_categories(
        self, *, first: int | None = 50, after: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> CustomCategoriesResponse:
        """Use this API to get a paginated list of all custom categories.

        Results are returned in pages using cursor based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.list_custom_categories(first=first, after=after, request_options=request_options)
        )

    def list_custom_category_urls(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> CustomCategoriesUrlsResponse:
        """Use this API to get all URLs of an existing custom category.

        Args:
            custom_category_name: The name of the custom category to get URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.list_custom_category_urls(custom_category_name, request_options=request_options)
        )

    def overwrite_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to replace all existing URLs of a custom category with a new list of URLs.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body. All existing URLs will be removed and replaced with the provided list.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to overwrite URLs for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            self._with_raw_response.overwrite_custom_category_urls(
                custom_category_name, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomCategoriesApiWithRawResponse:
        return self._with_raw_response


class AsyncCustomCategoriesApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomCategoriesApiWithRawResponse(client, server, auth)

    async def add_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to add URLs to an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body.

        Ensure that URLs are properly formatted and included in the array.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to add URLs to
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.add_custom_category_urls(
                custom_category_name, body, request_options=request_options
            ),
        )

    async def create_custom_category(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        r"""Use this API to create a new custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        If the custom category already exists, a ``400`` error is returned.

        Validation rules for ``custom_category_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            custom_category_name: The name of the custom category to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request - invalid custom category name or custom category already exists Unauthorized access
                Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.create_custom_category(custom_category_name, request_options=request_options)
        )

    async def delete_all_custom_category_urls(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete all URLs from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        This action will remove all URLs associated with the specified custom category.

        Args:
            custom_category_name: The name of the custom category to delete all URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_all_custom_category_urls(
                custom_category_name, request_options=request_options
            ),
        )

    async def delete_custom_category(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete a single custom category by name. This action will remove the custom category and all
        of its associated data.

        Args:
            custom_category_name: The name of the custom category to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_category(custom_category_name, request_options=request_options)
        )

    async def delete_custom_category_url(
        self, custom_category_name: str, encoded_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SuccessMessage:
        """Use this API to delete a specific URL from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        Ensure that a given URL is encoded using URL encoding.

        Args:
            custom_category_name: The name of the custom category to delete given URL from
            encoded_url: The URL to be deleted (Ensure that URLs are properly URL-encoded using the UTF8 encoding
                method)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_custom_category_url(
                custom_category_name, encoded_url, request_options=request_options
            ),
        )

    async def list_custom_categories(
        self,
        *,
        first: int | None = 50,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomCategoriesResponse:
        """Use this API to get a paginated list of all custom categories.

        Results are returned in pages using cursor based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Access denied Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.list_custom_categories(
                first=first, after=after, request_options=request_options
            ),
        )

    async def list_custom_category_urls(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CustomCategoriesUrlsResponse:
        """Use this API to get all URLs of an existing custom category.

        Args:
            custom_category_name: The name of the custom category to get URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.list_custom_category_urls(
                custom_category_name, request_options=request_options
            ),
        )

    async def overwrite_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessMessage:
        """Use this API to replace all existing URLs of a custom category with a new list of URLs.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body. All existing URLs will be removed and replaced with the provided list.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to overwrite URLs for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad request Unauthorized access Internal server error. ``error`` is ``ErrorsModel | RawError``."""
        return unwrap(
            await self._with_raw_response.overwrite_custom_category_urls(
                custom_category_name, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomCategoriesApiWithRawResponse:
        return self._with_raw_response


class CustomCategoriesApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def add_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, AddCustomCategoryUrlsErrorBody]:
        """Use this API to add URLs to an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body.

        Ensure that URLs are properly formatted and included in the array.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to add URLs to
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=add_custom_category_urls_error_mapper,
            request_options=request_options,
        )

    def create_custom_category(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, CreateCustomCategoryErrorBody]:
        r"""Use this API to create a new custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        If the custom category already exists, a ``400`` error is returned.

        Validation rules for ``custom_category_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            custom_category_name: The name of the custom category to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/custom_categories/{custom_category_name}"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=create_custom_category_error_mapper,
            request_options=request_options,
        )

    def delete_all_custom_category_urls(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeleteAllCustomCategoryUrlsErrorBody]:
        """Use this API to delete all URLs from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        This action will remove all URLs associated with the specified custom category.

        Args:
            custom_category_name: The name of the custom category to delete all URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=delete_all_custom_category_urls_error_mapper,
            request_options=request_options,
        )

    def delete_custom_category(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeleteCustomCategoryErrorBody]:
        """Use this API to delete a single custom category by name. This action will remove the custom category and all
        of its associated data.

        Args:
            custom_category_name: The name of the custom category to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/custom_categories/{custom_category_name}"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=delete_custom_category_error_mapper,
            request_options=request_options,
        )

    def delete_custom_category_url(
        self, custom_category_name: str, encoded_url: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeleteCustomCategoryUrlErrorBody]:
        """Use this API to delete a specific URL from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        Ensure that a given URL is encoded using URL encoding.

        Args:
            custom_category_name: The name of the custom category to delete given URL from
            encoded_url: The URL to be deleted (Ensure that URLs are properly URL-encoded using the UTF8 encoding
                method)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/custom_categories/{custom_category_name}/url/{encoded_url}"),
            path_params=[
                param[str]("custom_category_name", custom_category_name), param[str]("encoded_url", encoded_url)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=delete_custom_category_url_error_mapper,
            request_options=request_options,
        )

    def list_custom_categories(
        self, *, first: int | None = 50, after: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomCategoriesResponse, ListCustomCategoriesErrorBody]:
        """Use this API to get a paginated list of all custom categories.

        Results are returned in pages using cursor based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_categories"),
            query_params=[param[int | None]("first", first), param[str | None]("after", after)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CustomCategoriesResponse],
            error_mapper=list_custom_categories_error_mapper,
            request_options=request_options,
        )

    def list_custom_category_urls(
        self, custom_category_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CustomCategoriesUrlsResponse, ListCustomCategoryUrlsErrorBody]:
        """Use this API to get all URLs of an existing custom category.

        Args:
            custom_category_name: The name of the custom category to get URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CustomCategoriesUrlsResponse],
            error_mapper=list_custom_category_urls_error_mapper,
            request_options=request_options,
        )

    def overwrite_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, OverwriteCustomCategoryUrlsErrorBody]:
        """Use this API to replace all existing URLs of a custom category with a new list of URLs.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body. All existing URLs will be removed and replaced with the provided list.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to overwrite URLs for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessMessage],
            error_mapper=overwrite_custom_category_urls_error_mapper,
            request_options=request_options,
        )


class AsyncCustomCategoriesApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, AddCustomCategoryUrlsErrorBody]:
        """Use this API to add URLs to an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body.

        Ensure that URLs are properly formatted and included in the array.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to add URLs to
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=add_custom_category_urls_error_mapper,
            request_options=request_options,
        )

    async def create_custom_category(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, CreateCustomCategoryErrorBody]:
        r"""Use this API to create a new custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        If the custom category already exists, a ``400`` error is returned.

        Validation rules for ``custom_category_name``:
        - Must not be empty or whitespace-only
        - Must not contain leading or trailing whitespace
        - Maximum length of 32 characters
        - Must not contain any of the following characters: ``# ! @ $ % ^ * ? . / \``

        Args:
            custom_category_name: The name of the custom category to create
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/custom_categories/{custom_category_name}"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=create_custom_category_error_mapper,
            request_options=request_options,
        )

    async def delete_all_custom_category_urls(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeleteAllCustomCategoryUrlsErrorBody]:
        """Use this API to delete all URLs from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        This action will remove all URLs associated with the specified custom category.

        Args:
            custom_category_name: The name of the custom category to delete all URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=delete_all_custom_category_urls_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_category(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeleteCustomCategoryErrorBody]:
        """Use this API to delete a single custom category by name. This action will remove the custom category and all
        of its associated data.

        Args:
            custom_category_name: The name of the custom category to delete
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/custom_categories/{custom_category_name}"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=delete_custom_category_error_mapper,
            request_options=request_options,
        )

    async def delete_custom_category_url(
        self, custom_category_name: str, encoded_url: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SuccessMessage, DeleteCustomCategoryUrlErrorBody]:
        """Use this API to delete a specific URL from an existing custom category.

        Specify the name of the custom category in the path parameter (``custom_category_name``).

        Ensure that a given URL is encoded using URL encoding.

        Args:
            custom_category_name: The name of the custom category to delete given URL from
            encoded_url: The URL to be deleted (Ensure that URLs are properly URL-encoded using the UTF8 encoding
                method)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/custom_categories/{custom_category_name}/url/{encoded_url}"),
            path_params=[
                param[str]("custom_category_name", custom_category_name), param[str]("encoded_url", encoded_url)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=delete_custom_category_url_error_mapper,
            request_options=request_options,
        )

    async def list_custom_categories(
        self,
        *,
        first: int | None = 50,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomCategoriesResponse, ListCustomCategoriesErrorBody]:
        """Use this API to get a paginated list of all custom categories.

        Results are returned in pages using cursor based pagination.

        Args:
            first: An optional pagination param that states the number of records requested from the **start** of the
                ``cursor``. The default value is **50**.
            after: An optional pagination cursor. Pass the ``endCursor`` from the previous response's ``pageInfo`` to
                fetch the next page. Check ``hasNextPage`` in the previous response's ``pageInfo`` to determine whether
                more records are available.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_categories"),
            query_params=[param[int | None]("first", first), param[str | None]("after", after)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CustomCategoriesResponse],
            error_mapper=list_custom_categories_error_mapper,
            request_options=request_options,
        )

    async def list_custom_category_urls(
        self, custom_category_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CustomCategoriesUrlsResponse, ListCustomCategoryUrlsErrorBody]:
        """Use this API to get all URLs of an existing custom category.

        Args:
            custom_category_name: The name of the custom category to get URLs from
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CustomCategoriesUrlsResponse],
            error_mapper=list_custom_category_urls_error_mapper,
            request_options=request_options,
        )

    async def overwrite_custom_category_urls(
        self,
        custom_category_name: str,
        body: CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessMessage, OverwriteCustomCategoryUrlsErrorBody]:
        """Use this API to replace all existing URLs of a custom category with a new list of URLs.

        Specify the name of the custom category in the path parameter (``custom_category_name``) and provide a JSON
        array of URLs in the request body. All existing URLs will be removed and replaced with the provided list.

        Please check the docs at https://inflight.dope.security for guidelines on URL formatting.

        If any URL in the list is invalid, the entire request will be rejected. The 400 error response will include the
        list of invalid URLs in the error details.

        Args:
            custom_category_name: The name of the custom category to overwrite URLs for
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/custom_categories/{custom_category_name}/urls"),
            path_params=[param[str]("custom_category_name", custom_category_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomCategoriesUrlsRequest | CustomCategoriesUrlsRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessMessage],
            error_mapper=overwrite_custom_category_urls_error_mapper,
            request_options=request_options,
        )
