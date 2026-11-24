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
from ..errors.create_source_group_error import CreateSourceGroupErrorBody, create_source_group_error_mapper
from ..errors.delete_source_group_error import DeleteSourceGroupErrorBody, delete_source_group_error_mapper
from ..errors.get_source_group_error import GetSourceGroupErrorBody, get_source_group_error_mapper
from ..errors.list_source_groups_error import ListSourceGroupsErrorBody, list_source_groups_error_mapper
from ..errors.resolve_source_groups_error import ResolveSourceGroupsErrorBody, resolve_source_groups_error_mapper
from ..errors.update_source_group_error import UpdateSourceGroupErrorBody, update_source_group_error_mapper
from ..models.create_source_group_params import CreateSourceGroupParams, CreateSourceGroupParamsDict
from ..models.enums.nulls import NullsOrStr
from ..models.enums.sort_order import SortOrderOrStr
from ..models.enums.source_group_sort_by import SourceGroupSortByOrStr
from ..models.patch_source_group_params import PatchSourceGroupParams, PatchSourceGroupParamsDict
from ..models.source_group_list_result import SourceGroupListResult
from ..models.source_group_resolve_result import SourceGroupResolveResult
from ..models.source_group_result import SourceGroupResult
from ..server.server import Server


class SourceGroups:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SourceGroupsWithRawResponse(client, server, auth)

    def create_source_group(
        self,
        body: CreateSourceGroupParams | CreateSourceGroupParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourceGroupResult:
        """Create a new source group under the organization associated with the API key.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.create_source_group(body, request_options=request_options))

    def delete_source_group(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> SourceGroupResult:
        """Delete a source group owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.delete_source_group(id_, request_options=request_options))

    def get_source_group(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> SourceGroupResult:
        """Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API
        key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_source_group(id_, request_options=request_options))

    def list_source_groups(
        self,
        sort_by: SourceGroupSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        domain: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourceGroupListResult:
        """List source groups owned by the organization associated with the API key, as well as publicly visible source
        groups. Supports filtering by name and domain.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Value sent with the request.
            domain: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_source_groups(
                sort_by,
                sort_order,
                name=name,
                domain=domain,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    def resolve_source_groups(
        self, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> SourceGroupResolveResult:
        """Resolve source groups by name. For each name, returns the organization's private source group if one exists,
        otherwise falls back to the matching public source group.

        Args:
            name: Source group names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.resolve_source_groups(name=name, request_options=request_options))

    def update_source_group(
        self,
        id_: int,
        body: PatchSourceGroupParams | PatchSourceGroupParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourceGroupResult:
        """Partially update a source group owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.update_source_group(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SourceGroupsWithRawResponse:
        return self._with_raw_response


class AsyncSourceGroups:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSourceGroupsWithRawResponse(client, server, auth)

    async def create_source_group(
        self,
        body: CreateSourceGroupParams | CreateSourceGroupParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourceGroupResult:
        """Create a new source group under the organization associated with the API key.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.create_source_group(body, request_options=request_options))

    async def delete_source_group(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SourceGroupResult:
        """Delete a source group owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.delete_source_group(id_, request_options=request_options))

    async def get_source_group(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SourceGroupResult:
        """Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API
        key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_source_group(id_, request_options=request_options))

    async def list_source_groups(
        self,
        sort_by: SourceGroupSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        domain: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourceGroupListResult:
        """List source groups owned by the organization associated with the API key, as well as publicly visible source
        groups. Supports filtering by name and domain.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Value sent with the request.
            domain: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_source_groups(
                sort_by,
                sort_order,
                name=name,
                domain=domain,
                page=page,
                size=size,
                nulls=nulls,
                request_options=request_options,
            ),
        )

    async def resolve_source_groups(
        self, *, name: list[str] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SourceGroupResolveResult:
        """Resolve source groups by name. For each name, returns the organization's private source group if one exists,
        otherwise falls back to the matching public source group.

        Args:
            name: Source group names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.resolve_source_groups(name=name, request_options=request_options))

    async def update_source_group(
        self,
        id_: int,
        body: PatchSourceGroupParams | PatchSourceGroupParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourceGroupResult:
        """Partially update a source group owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200 - Success

        Raises:
            ApiError: 401 - Invalid API Key 500 - Server Error 400 - Bad Request 403 - Request Forbidden 429 - Too Many
                Requests ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.update_source_group(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSourceGroupsWithRawResponse:
        return self._with_raw_response


class SourceGroupsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_source_group(
        self,
        body: CreateSourceGroupParams | CreateSourceGroupParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceGroupResult, CreateSourceGroupErrorBody]:
        """Create a new source group under the organization associated with the API key.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/sourceGroups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSourceGroupParams | CreateSourceGroupParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceGroupResult],
            error_mapper=create_source_group_error_mapper,
            request_options=request_options,
        )

    def delete_source_group(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SourceGroupResult, DeleteSourceGroupErrorBody]:
        """Delete a source group owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/sourceGroups/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceGroupResult],
            error_mapper=delete_source_group_error_mapper,
            request_options=request_options,
        )

    def get_source_group(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SourceGroupResult, GetSourceGroupErrorBody]:
        """Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API
        key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/sourceGroups/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceGroupResult],
            error_mapper=get_source_group_error_mapper,
            request_options=request_options,
        )

    def list_source_groups(
        self,
        sort_by: SourceGroupSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        domain: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceGroupListResult, ListSourceGroupsErrorBody]:
        """List source groups owned by the organization associated with the API key, as well as publicly visible source
        groups. Supports filtering by name and domain.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Value sent with the request.
            domain: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/sourceGroups"),
            query_params=[
                param[SourceGroupSortByOrStr]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("name", name),
                param[str | None]("domain", domain),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceGroupListResult],
            error_mapper=list_source_groups_error_mapper,
            request_options=request_options,
        )

    def resolve_source_groups(
        self, *, name: list[str] | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SourceGroupResolveResult, ResolveSourceGroupsErrorBody]:
        """Resolve source groups by name. For each name, returns the organization's private source group if one exists,
        otherwise falls back to the matching public source group.

        Args:
            name: Source group names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/sourceGroups/resolve"),
            query_params=[param[list[str] | None]("name", name)],
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceGroupResolveResult],
            error_mapper=resolve_source_groups_error_mapper,
            request_options=request_options,
        )

    def update_source_group(
        self,
        id_: int,
        body: PatchSourceGroupParams | PatchSourceGroupParamsDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceGroupResult, UpdateSourceGroupErrorBody]:
        """Partially update a source group owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/sourceGroups/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PatchSourceGroupParams | PatchSourceGroupParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=json_decoder[SourceGroupResult],
            error_mapper=update_source_group_error_mapper,
            request_options=request_options,
        )


class AsyncSourceGroupsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_source_group(
        self,
        body: CreateSourceGroupParams | CreateSourceGroupParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceGroupResult, CreateSourceGroupErrorBody]:
        """Create a new source group under the organization associated with the API key.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/api/sourceGroups"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateSourceGroupParams | CreateSourceGroupParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceGroupResult],
            error_mapper=create_source_group_error_mapper,
            request_options=request_options,
        )

    async def delete_source_group(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SourceGroupResult, DeleteSourceGroupErrorBody]:
        """Delete a source group owned by the organization associated with the API key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/api/sourceGroups/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceGroupResult],
            error_mapper=delete_source_group_error_mapper,
            request_options=request_options,
        )

    async def get_source_group(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SourceGroupResult, GetSourceGroupErrorBody]:
        """Retrieve a source group by ID. Only returns source groups owned by the organization associated with the API
        key.

        Args:
            id_: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/sourceGroups/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceGroupResult],
            error_mapper=get_source_group_error_mapper,
            request_options=request_options,
        )

    async def list_source_groups(
        self,
        sort_by: SourceGroupSortByOrStr,
        sort_order: SortOrderOrStr,
        *,
        name: str | None = None,
        domain: str | None = None,
        page: int | None = 0,
        size: int | None = 10,
        nulls: NullsOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceGroupListResult, ListSourceGroupsErrorBody]:
        """List source groups owned by the organization associated with the API key, as well as publicly visible source
        groups. Supports filtering by name and domain.

        Args:
            sort_by: Value sent with the request.
            sort_order: Required direction used to sort results. Accepts asc or desc.
            name: Value sent with the request.
            domain: Value sent with the request.
            page: Zero-based page number to retrieve. Defaults to 0.
            size: Number of results per page. Must be between 1 and 100; defaults to 10.
            nulls: Placement of null values in sorted results. Accepts first or last.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/sourceGroups"),
            query_params=[
                param[SourceGroupSortByOrStr]("sortBy", sort_by),
                param[SortOrderOrStr]("sortOrder", sort_order),
                param[str | None]("name", name),
                param[str | None]("domain", domain),
                param[int | None]("page", page),
                param[int | None]("size", size),
                param[NullsOrStr | None]("nulls", nulls),
            ],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceGroupListResult],
            error_mapper=list_source_groups_error_mapper,
            request_options=request_options,
        )

    async def resolve_source_groups(
        self, *, name: list[str] | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SourceGroupResolveResult, ResolveSourceGroupsErrorBody]:
        """Resolve source groups by name. For each name, returns the organization's private source group if one exists,
        otherwise falls back to the matching public source group.

        Args:
            name: Source group names to resolve (max 100)
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/api/sourceGroups/resolve"),
            query_params=[param[list[str] | None]("name", name)],
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceGroupResolveResult],
            error_mapper=resolve_source_groups_error_mapper,
            request_options=request_options,
        )

    async def update_source_group(
        self,
        id_: int,
        body: PatchSourceGroupParams | PatchSourceGroupParamsDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourceGroupResult, UpdateSourceGroupErrorBody]:
        """Partially update a source group owned by the organization associated with the API key. Only provided fields
        will be updated.

        Args:
            id_: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v1/api/sourceGroups/{id}"),
            path_params=[param[int]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PatchSourceGroupParams | PatchSourceGroupParamsDict](body),
            auth_scheme=self._auth.api_key_auth,
            decoder=async_json_decoder[SourceGroupResult],
            error_mapper=update_source_group_error_mapper,
            request_options=request_options,
        )
