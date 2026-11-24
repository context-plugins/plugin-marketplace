from __future__ import annotations

from typing import Any
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
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_item_error import CreateItemErrorBody, create_item_error_mapper
from ..errors.delete_item_error import DeleteItemErrorBody, delete_item_error_mapper
from ..errors.fetch_item_error import FetchItemErrorBody, fetch_item_error_mapper
from ..errors.list_items_error import ListItemsErrorBody, list_items_error_mapper
from ..errors.update_item_error import UpdateItemErrorBody, update_item_error_mapper
from ..models.item import Item
from ..models.items_request import ItemsRequest, ItemsRequestDict
from ..models.items_request1 import ItemsRequest1, ItemsRequest1Dict
from ..models.items_response import ItemsResponse
from ..server.server import Server


class Items:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ItemsWithRawResponse(client, server, auth)

    def create_item(
        self, body: ItemsRequest | ItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Item:
        """Create a reusable catalog item. Items can be referenced in invoice line_items by item_id, which auto-fills
        price and description. Each item is merchant-scoped.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_item(body, request_options=request_options))

    def delete_item(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Permanently delete a catalog item. Deleted items cannot be recovered.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item deleted.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.delete_item(id_, request_options=request_options))

    def fetch_item(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Item:
        """Get details of a specific catalog item.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_item(id_, request_options=request_options))

    def list_items(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ItemsResponse:
        """Retrieve all catalog items. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of items.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_items(count=count, skip=skip, request_options=request_options))

    def update_item(
        self, id_: str, body: ItemsRequest1 | ItemsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> Item:
        """Update the name, description, amount, currency, or active status of an item.

        Args:
            id_: Item ID (item_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated item.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_item(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> ItemsWithRawResponse:
        return self._with_raw_response


class AsyncItems:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncItemsWithRawResponse(client, server, auth)

    async def create_item(
        self, body: ItemsRequest | ItemsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Item:
        """Create a reusable catalog item. Items can be referenced in invoice line_items by item_id, which auto-fills
        price and description. Each item is merchant-scoped.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_item(body, request_options=request_options))

    async def delete_item(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Permanently delete a catalog item. Deleted items cannot be recovered.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item deleted.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.delete_item(id_, request_options=request_options))

    async def fetch_item(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Item:
        """Get details of a specific catalog item.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Item details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_item(id_, request_options=request_options))

    async def list_items(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ItemsResponse:
        """Retrieve all catalog items. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of items.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_items(count=count, skip=skip, request_options=request_options))

    async def update_item(
        self,
        id_: str,
        body: ItemsRequest1 | ItemsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Item:
        """Update the name, description, amount, currency, or active status of an item.

        Args:
            id_: Item ID (item_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated item.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_item(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncItemsWithRawResponse:
        return self._with_raw_response


class ItemsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_item(
        self, body: ItemsRequest | ItemsRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Item, CreateItemErrorBody]:
        """Create a reusable catalog item. Items can be referenced in invoice line_items by item_id, which auto-fills
        price and description. Each item is merchant-scoped.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/items"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemsRequest | ItemsRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Item],
            error_mapper=create_item_error_mapper,
            request_options=request_options,
        )

    def delete_item(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteItemErrorBody]:
        """Permanently delete a catalog item. Deleted items cannot be recovered.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Any],
            error_mapper=delete_item_error_mapper,
            request_options=request_options,
        )

    def fetch_item(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Item, FetchItemErrorBody]:
        """Get details of a specific catalog item.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/items/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Item],
            error_mapper=fetch_item_error_mapper,
            request_options=request_options,
        )

    def list_items(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ItemsResponse, ListItemsErrorBody]:
        """Retrieve all catalog items. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/items"),
            query_params=[param[int | None]("count", count), param[int | None]("skip", skip)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[ItemsResponse],
            error_mapper=list_items_error_mapper,
            request_options=request_options,
        )

    def update_item(
        self, id_: str, body: ItemsRequest1 | ItemsRequest1Dict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Item, UpdateItemErrorBody]:
        """Update the name, description, amount, currency, or active status of an item.

        Args:
            id_: Item ID (item_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemsRequest1 | ItemsRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Item],
            error_mapper=update_item_error_mapper,
            request_options=request_options,
        )


class AsyncItemsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_item(
        self, body: ItemsRequest | ItemsRequestDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Item, CreateItemErrorBody]:
        """Create a reusable catalog item. Items can be referenced in invoice line_items by item_id, which auto-fills
        price and description. Each item is merchant-scoped.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/items"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemsRequest | ItemsRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Item],
            error_mapper=create_item_error_mapper,
            request_options=request_options,
        )

    async def delete_item(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteItemErrorBody]:
        """Permanently delete a catalog item. Deleted items cannot be recovered.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Any],
            error_mapper=delete_item_error_mapper,
            request_options=request_options,
        )

    async def fetch_item(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Item, FetchItemErrorBody]:
        """Get details of a specific catalog item.

        Args:
            id_: Item ID (item_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/items/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Item],
            error_mapper=fetch_item_error_mapper,
            request_options=request_options,
        )

    async def list_items(
        self, *, count: int | None = 10, skip: int | None = 0, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ItemsResponse, ListItemsErrorBody]:
        """Retrieve all catalog items. Supports pagination.

        Args:
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/items"),
            query_params=[param[int | None]("count", count), param[int | None]("skip", skip)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[ItemsResponse],
            error_mapper=list_items_error_mapper,
            request_options=request_options,
        )

    async def update_item(
        self,
        id_: str,
        body: ItemsRequest1 | ItemsRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Item, UpdateItemErrorBody]:
        """Update the name, description, amount, currency, or active status of an item.

        Args:
            id_: Item ID (item_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/items/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ItemsRequest1 | ItemsRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Item],
            error_mapper=update_item_error_mapper,
            request_options=request_options,
        )
