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
from ..errors.create_tag_error import CreateTagErrorBody, create_tag_error_mapper
from ..errors.delete_tag_error import DeleteTagErrorBody, delete_tag_error_mapper
from ..errors.get_tags_error import GetTagsErrorBody, get_tags_error_mapper
from ..errors.update_tag_error import UpdateTagErrorBody, update_tag_error_mapper
from ..models.enums.sort_by_codeqr_io_tags_api import SortByCodeqrIoTagsApi, SortByCodeqrIoTagsApiOrStr
from ..models.enums.sort_order import SortOrder, SortOrderOrStr
from ..models.tag_model import TagModel
from ..models.tags_request import TagsRequest, TagsRequestDict
from ..models.tags_request1 import TagsRequest1, TagsRequest1Dict
from ..models.tags_response import TagsResponse
from ..models.unions.ids import Ids, IdsDict
from ..server.server import Server


class Tags:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = TagsWithRawResponse(client, server, auth)

    def create_tag(
        self, *, body: TagsRequest | TagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> TagModel:
        """Create a new tag for the authenticated project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created tag

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.create_tag(body=body, request_options=request_options))

    def delete_tag(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> TagsResponse:
        """Delete a tag from the workspace. All existing links will still work, but they will no longer be associated
        with this tag.

        Args:
            id_: The ID of the tag to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted tag ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.delete_tag(id_, request_options=request_options))

    def get_tags(
        self,
        *,
        sort_by: SortByCodeqrIoTagsApiOrStr | None = SortByCodeqrIoTagsApi.NAME,
        sort_order: SortOrderOrStr | None = SortOrder.ASC,
        search: str | None = None,
        ids: Ids | IdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[TagModel]:
        """Retrieve a list of tags for the authenticated workspace.

        Args:
            sort_by: The field to sort the tags by.
            sort_order: The order to sort the tags by.
            search: The search term to filter the tags by.
            ids: IDs of tags to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of tags

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            self._with_raw_response.get_tags(
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                ids=ids,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    def update_tag(
        self,
        id_: str,
        *,
        body: TagsRequest1 | TagsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> TagModel:
        """Update a tag in the workspace.

        Args:
            id_: The ID of the tag to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated tag.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(self._with_raw_response.update_tag(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> TagsWithRawResponse:
        return self._with_raw_response


class AsyncTags:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncTagsWithRawResponse(client, server, auth)

    async def create_tag(
        self,
        *,
        body: TagsRequest | TagsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TagModel:
        """Create a new tag for the authenticated project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The created tag

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.create_tag(body=body, request_options=request_options))

    async def delete_tag(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> TagsResponse:
        """Delete a tag from the workspace. All existing links will still work, but they will no longer be associated
        with this tag.

        Args:
            id_: The ID of the tag to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The deleted tag ID.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.delete_tag(id_, request_options=request_options))

    async def get_tags(
        self,
        *,
        sort_by: SortByCodeqrIoTagsApiOrStr | None = SortByCodeqrIoTagsApi.NAME,
        sort_order: SortOrderOrStr | None = SortOrder.ASC,
        search: str | None = None,
        ids: Ids | IdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[TagModel]:
        """Retrieve a list of tags for the authenticated workspace.

        Args:
            sort_by: The field to sort the tags by.
            sort_order: The order to sort the tags by.
            search: The search term to filter the tags by.
            ids: IDs of tags to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A list of tags

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(
            await self._with_raw_response.get_tags(
                sort_by=sort_by,
                sort_order=sort_order,
                search=search,
                ids=ids,
                page=page,
                page_size=page_size,
                request_options=request_options,
            ),
        )

    async def update_tag(
        self,
        id_: str,
        *,
        body: TagsRequest1 | TagsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> TagModel:
        """Update a tag in the workspace.

        Args:
            id_: The ID of the tag to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The updated tag.

        Raises:
            ApiError: The server cannot or will not process the request due to something that is perceived to be a
                client error (e.g., malformed request syntax, invalid request message framing, or deceptive request
                routing). Although the HTTP standard specifies "unauthorized", semantically this response means
                "unauthenticated". That is, the client must authenticate itself to get the requested response. The
                client does not have access rights to the content; that is, it is unauthorized, so the server is
                refusing to give the requested resource. Unlike 401 Unauthorized, the client's identity is known to the
                server. The server cannot find the requested resource. This response is sent when a request conflicts
                with the current state of the server. This response is sent when the requested content has been
                permanently deleted from server, with no forwarding address. The request was well-formed but was unable
                to be followed due to semantic errors. The user has sent too many requests in a given amount of time
                ("rate limiting") The server has encountered a situation it does not know how to handle. ``error`` is
                ``M4001 | RawError``."""
        return unwrap(await self._with_raw_response.update_tag(id_, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncTagsWithRawResponse:
        return self._with_raw_response


class TagsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_tag(
        self, *, body: TagsRequest | TagsRequestDict | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TagModel, CreateTagErrorBody]:
        """Create a new tag for the authenticated project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/tags"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[TagModel],
            error_mapper=create_tag_error_mapper,
            request_options=request_options,
        )

    def delete_tag(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[TagsResponse, DeleteTagErrorBody]:
        """Delete a tag from the workspace. All existing links will still work, but they will no longer be associated
        with this tag.

        Args:
            id_: The ID of the tag to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/tags/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=json_decoder[TagsResponse],
            error_mapper=delete_tag_error_mapper,
            request_options=request_options,
        )

    def get_tags(
        self,
        *,
        sort_by: SortByCodeqrIoTagsApiOrStr | None = SortByCodeqrIoTagsApi.NAME,
        sort_order: SortOrderOrStr | None = SortOrder.ASC,
        search: str | None = None,
        ids: Ids | IdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[TagModel], GetTagsErrorBody]:
        """Retrieve a list of tags for the authenticated workspace.

        Args:
            sort_by: The field to sort the tags by.
            sort_order: The order to sort the tags by.
            search: The search term to filter the tags by.
            ids: IDs of tags to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tags"),
            query_params=[
                param[SortByCodeqrIoTagsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[Ids | IdsDict | None]("ids", ids),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=json_decoder[list[TagModel]],
            error_mapper=get_tags_error_mapper,
            request_options=request_options,
        )

    def update_tag(
        self,
        id_: str,
        *,
        body: TagsRequest1 | TagsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[TagModel, UpdateTagErrorBody]:
        """Update a tag in the workspace.

        Args:
            id_: The ID of the tag to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/tags/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest1 | TagsRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=json_decoder[TagModel],
            error_mapper=update_tag_error_mapper,
            request_options=request_options,
        )


class AsyncTagsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_tag(
        self,
        *,
        body: TagsRequest | TagsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TagModel, CreateTagErrorBody]:
        """Create a new tag for the authenticated project.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/tags"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest | TagsRequestDict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[TagModel],
            error_mapper=create_tag_error_mapper,
            request_options=request_options,
        )

    async def delete_tag(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[TagsResponse, DeleteTagErrorBody]:
        """Delete a tag from the workspace. All existing links will still work, but they will no longer be associated
        with this tag.

        Args:
            id_: The ID of the tag to delete.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/tags/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[TagsResponse],
            error_mapper=delete_tag_error_mapper,
            request_options=request_options,
        )

    async def get_tags(
        self,
        *,
        sort_by: SortByCodeqrIoTagsApiOrStr | None = SortByCodeqrIoTagsApi.NAME,
        sort_order: SortOrderOrStr | None = SortOrder.ASC,
        search: str | None = None,
        ids: Ids | IdsDict | None = None,
        page: float | None = 1.0,
        page_size: float | None = 100.0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[TagModel], GetTagsErrorBody]:
        """Retrieve a list of tags for the authenticated workspace.

        Args:
            sort_by: The field to sort the tags by.
            sort_order: The order to sort the tags by.
            search: The search term to filter the tags by.
            ids: IDs of tags to filter by.
            page: The page number for pagination.
            page_size: The number of items per page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/tags"),
            query_params=[
                param[SortByCodeqrIoTagsApiOrStr | None]("sortBy", sort_by),
                param[SortOrderOrStr | None]("sortOrder", sort_order),
                param[str | None]("search", search),
                param[Ids | IdsDict | None]("ids", ids),
                param[float | None]("page", page),
                param[float | None]("pageSize", page_size),
            ],
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[list[TagModel]],
            error_mapper=get_tags_error_mapper,
            request_options=request_options,
        )

    async def update_tag(
        self,
        id_: str,
        *,
        body: TagsRequest1 | TagsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[TagModel, UpdateTagErrorBody]:
        """Update a tag in the workspace.

        Args:
            id_: The ID of the tag to update.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/tags/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[TagsRequest1 | TagsRequest1Dict | None](body),
            auth_scheme=self._auth.token,
            decoder=async_json_decoder[TagModel],
            error_mapper=update_tag_error_mapper,
            request_options=request_options,
        )
