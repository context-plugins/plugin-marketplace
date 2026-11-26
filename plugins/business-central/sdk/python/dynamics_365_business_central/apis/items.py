from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.create_item_error import CreateItemErrorBody, create_item_error_mapper
from ..errors.delete_item_error import DeleteItemErrorBody, delete_item_error_mapper
from ..errors.get_item_error import GetItemErrorBody, get_item_error_mapper
from ..errors.list_items_error import ListItemsErrorBody, list_items_error_mapper
from ..errors.update_item_error import UpdateItemErrorBody, update_item_error_mapper
from ..models.companies_api_items_response import CompaniesApiItemsResponse
from ..models.item import Item
from ..models.item_create import ItemCreate, ItemCreateDict
from ..models.item_update import ItemUpdate, ItemUpdateDict
from ..server.server import Server


class Items:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ItemsWithRawResponse(client, server, auth)

    def create_item(
        self,
        company_id: UUID,
        body: ItemCreate | ItemCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Item:
        """Creates a new item object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.create_item(company_id, body, request_options=request_options))

    def delete_item(
        self, company_id: UUID, item_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(self._with_raw_response.delete_item(company_id, item_id, request_options=request_options))

    def get_item(
        self,
        company_id: UUID,
        item_id: UUID,
        *,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Item:
        """Retrieves a specific item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved item

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_item(company_id, item_id, select=select, request_options=request_options)
        )

    def list_items(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CompaniesApiItemsResponse:
        """Returns a list of item objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved items

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_items(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    def update_item(
        self,
        company_id: UUID,
        item_id: UUID,
        if_match: str,
        body: ItemUpdate | ItemUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Item:
        """Updates an existing item object.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_item(company_id, item_id, if_match, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> ItemsWithRawResponse:
        return self._with_raw_response


class AsyncItems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncItemsWithRawResponse(client, server, auth)

    async def create_item(
        self,
        company_id: UUID,
        body: ItemCreate | ItemCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Item:
        """Creates a new item object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item created successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.create_item(company_id, body, request_options=request_options))

    async def delete_item(
        self, company_id: UUID, item_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Deletes an item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item deleted successfully

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_item(company_id, item_id, request_options=request_options))

    async def get_item(
        self,
        company_id: UUID,
        item_id: UUID,
        *,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Item:
        """Retrieves a specific item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved item

        Raises:
            ApiError: Unauthorized - authentication required Resource not found ``error`` is ``ErrorResponse |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_item(company_id, item_id, select=select, request_options=request_options)
        )

    async def list_items(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CompaniesApiItemsResponse:
        """Returns a list of item objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved items

        Raises:
            ApiError: Unauthorized - authentication required ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_items(
                company_id,
                top=top,
                skip=skip,
                filter_=filter_,
                orderby=orderby,
                select=select,
                request_options=request_options,
            ),
        )

    async def update_item(
        self,
        company_id: UUID,
        item_id: UUID,
        if_match: str,
        body: ItemUpdate | ItemUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Item:
        """Updates an existing item object.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item updated successfully

        Raises:
            ApiError: Bad request - invalid input Unauthorized - authentication required Resource not found ``error`` is
                ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_item(
                company_id, item_id, if_match, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncItemsWithRawResponse:
        return self._with_raw_response


class ItemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_item(
        self,
        company_id: UUID,
        body: ItemCreate | ItemCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, CreateItemErrorBody]:
        """Creates a new item object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/items"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemCreate | ItemCreateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Item],
            error_mapper=create_item_error_mapper,
            request_options=request_options,
        )

    def delete_item(
        self, company_id: UUID, item_id: UUID, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteItemErrorBody]:
        """Deletes an item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/items({item_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("item_id", item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=empty_response,
            error_mapper=delete_item_error_mapper,
            request_options=request_options,
        )

    def get_item(
        self,
        company_id: UUID,
        item_id: UUID,
        *,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, GetItemErrorBody]:
        """Retrieves a specific item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/items({item_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("item_id", item_id)],
            query_params=[param[str | None]("$select", select)],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Item],
            error_mapper=get_item_error_mapper,
            request_options=request_options,
        )

    def list_items(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiItemsResponse, ListItemsErrorBody]:
        """Returns a list of item objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/items"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[CompaniesApiItemsResponse],
            error_mapper=list_items_error_mapper,
            request_options=request_options,
        )

    def update_item(
        self,
        company_id: UUID,
        item_id: UUID,
        if_match: str,
        body: ItemUpdate | ItemUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, UpdateItemErrorBody]:
        """Updates an existing item object.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/items({item_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("item_id", item_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemUpdate | ItemUpdateDict](body),
            auth_scheme=AnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=json_decoder[Item],
            error_mapper=update_item_error_mapper,
            request_options=request_options,
        )


class AsyncItemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_item(
        self,
        company_id: UUID,
        body: ItemCreate | ItemCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, CreateItemErrorBody]:
        """Creates a new item object in the specified company.

        Args:
            company_id: The unique identifier of the company
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/companies({company_id})/items"),
            path_params=[param[UUID]("company_id", company_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemCreate | ItemCreateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Item],
            error_mapper=create_item_error_mapper,
            request_options=request_options,
        )

    async def delete_item(
        self, company_id: UUID, item_id: UUID, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteItemErrorBody]:
        """Deletes an item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/companies({company_id})/items({item_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("item_id", item_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_empty_response,
            error_mapper=delete_item_error_mapper,
            request_options=request_options,
        )

    async def get_item(
        self,
        company_id: UUID,
        item_id: UUID,
        *,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, GetItemErrorBody]:
        """Retrieves a specific item by ID.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/items({item_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("item_id", item_id)],
            query_params=[param[str | None]("$select", select)],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Item],
            error_mapper=get_item_error_mapper,
            request_options=request_options,
        )

    async def list_items(
        self,
        company_id: UUID,
        *,
        top: int | None = None,
        skip: int | None = None,
        filter_: str | None = None,
        orderby: str | None = None,
        select: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CompaniesApiItemsResponse, ListItemsErrorBody]:
        """Returns a list of item objects from the specified company.

        Args:
            company_id: The unique identifier of the company
            top: Maximum number of items to return
            skip: Number of items to skip
            filter_: OData filter expression
            orderby: OData order by expression
            select: Comma-separated list of properties to include in the response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/companies({company_id})/items"),
            path_params=[param[UUID]("company_id", company_id)],
            query_params=[
                param[int | None]("$top", top),
                param[int | None]("$skip", skip),
                param[str | None]("$filter", filter_),
                param[str | None]("$orderby", orderby),
                param[str | None]("$select", select),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[CompaniesApiItemsResponse],
            error_mapper=list_items_error_mapper,
            request_options=request_options,
        )

    async def update_item(
        self,
        company_id: UUID,
        item_id: UUID,
        if_match: str,
        body: ItemUpdate | ItemUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, UpdateItemErrorBody]:
        """Updates an existing item object.

        Args:
            company_id: The unique identifier of the company
            item_id: The unique identifier of the item
            if_match: ETag value for optimistic concurrency control
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/companies({company_id})/items({item_id})"),
            path_params=[param[UUID]("company_id", company_id), param[UUID]("item_id", item_id)],
            headers=[param[str]("If-Match", if_match), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemUpdate | ItemUpdateDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials, self._auth.bearer_auth
            ),
            decoder=async_json_decoder[Item],
            error_mapper=update_item_error_mapper,
            request_options=request_options,
        )
