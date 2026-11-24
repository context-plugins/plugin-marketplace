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
from ..errors.create_base_error import CreateBaseErrorBody, create_base_error_mapper
from ..errors.get_base_schema_error import GetBaseSchemaErrorBody, get_base_schema_error_mapper
from ..errors.list_bases_error import ListBasesErrorBody, list_bases_error_mapper
from ..errors.whoami_error import WhoamiErrorBody, whoami_error_mapper
from ..models.base_list import BaseList
from ..models.base_schema import BaseSchema
from ..models.create_base_request import CreateBaseRequest, CreateBaseRequestDict
from ..models.enums.include import IncludeOrStr
from ..models.meta_bases_tables_response import MetaBasesTablesResponse
from ..models.meta_whoami_response import MetaWhoamiResponse
from ..server.server import Server


class Bases:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = BasesWithRawResponse(client, server, auth)

    def create_base(
        self, body: CreateBaseRequest | CreateBaseRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> BaseSchema:
        """Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at
        least one table definition with fields. Returns the newly created base with its schema.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created base with its schema.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The request body contains invalid data. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_base(body, request_options=request_options))

    def get_base_schema(
        self,
        base_id: str,
        *,
        include: list[IncludeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> MetaBasesTablesResponse:
        """Returns the schema of the specified base, including all tables, their fields (with type and configuration),
        and views. This endpoint provides a complete structural overview of the base.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            include: Additional information to include in the response. Pass visibleFieldIds to include visible field
                IDs for each view.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The base schema with tables, fields, and views.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.get_base_schema(base_id, include=include, request_options=request_options)
        )

    def list_bases(self, *, offset: str | None = None, request_options: RequestOptionsOrDict | None = None) -> BaseList:
        """Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID,
        name, and permission level. Use the offset parameter from the response to paginate through all available bases.

        Args:
            offset: Pagination cursor from a previous response to fetch the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of bases.

        Raises:
            ApiError: Authentication credentials are missing or invalid. Rate limit exceeded. The API allows 5 requests
                per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.list_bases(offset=offset, request_options=request_options))

    def whoami(self, *, request_options: RequestOptionsOrDict | None = None) -> MetaWhoamiResponse:
        """Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying
        authentication and checking available permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current user ID and authorized scopes.

        Raises:
            ApiError: Authentication credentials are missing or invalid. Rate limit exceeded. The API allows 5 requests
                per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.whoami(request_options=request_options))

    @property
    def with_raw_response(self) -> BasesWithRawResponse:
        return self._with_raw_response


class AsyncBases:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncBasesWithRawResponse(client, server, auth)

    async def create_base(
        self,
        body: CreateBaseRequest | CreateBaseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> BaseSchema:
        """Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at
        least one table definition with fields. Returns the newly created base with its schema.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The newly created base with its schema.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The request body contains invalid data. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_base(body, request_options=request_options))

    async def get_base_schema(
        self,
        base_id: str,
        *,
        include: list[IncludeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> MetaBasesTablesResponse:
        """Returns the schema of the specified base, including all tables, their fields (with type and configuration),
        and views. This endpoint provides a complete structural overview of the base.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            include: Additional information to include in the response. Pass visibleFieldIds to include visible field
                IDs for each view.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The base schema with tables, fields, and views.

        Raises:
            ApiError: Authentication credentials are missing or invalid. The authenticated user does not have permission
                to perform this action. The requested resource was not found. Rate limit exceeded. The API allows 5
                requests per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.get_base_schema(base_id, include=include, request_options=request_options)
        )

    async def list_bases(
        self, *, offset: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> BaseList:
        """Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID,
        name, and permission level. Use the offset parameter from the response to paginate through all available bases.

        Args:
            offset: Pagination cursor from a previous response to fetch the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            A paginated list of bases.

        Raises:
            ApiError: Authentication credentials are missing or invalid. Rate limit exceeded. The API allows 5 requests
                per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.list_bases(offset=offset, request_options=request_options))

    async def whoami(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> MetaWhoamiResponse:
        """Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying
        authentication and checking available permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The current user ID and authorized scopes.

        Raises:
            ApiError: Authentication credentials are missing or invalid. Rate limit exceeded. The API allows 5 requests
                per second per base. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.whoami(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncBasesWithRawResponse:
        return self._with_raw_response


class BasesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_base(
        self, body: CreateBaseRequest | CreateBaseRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BaseSchema, CreateBaseErrorBody]:
        """Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at
        least one table definition with fields. Returns the newly created base with its schema.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/meta/bases"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBaseRequest | CreateBaseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BaseSchema],
            error_mapper=create_base_error_mapper,
            request_options=request_options,
        )

    def get_base_schema(
        self,
        base_id: str,
        *,
        include: list[IncludeOrStr] | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[MetaBasesTablesResponse, GetBaseSchemaErrorBody]:
        """Returns the schema of the specified base, including all tables, their fields (with type and configuration),
        and views. This endpoint provides a complete structural overview of the base.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            include: Additional information to include in the response. Pass visibleFieldIds to include visible field
                IDs for each view.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/meta/bases/{baseId}/tables"),
            path_params=[param[str]("baseId", base_id)],
            query_params=[param[list[IncludeOrStr] | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MetaBasesTablesResponse],
            error_mapper=get_base_schema_error_mapper,
            request_options=request_options,
        )

    def list_bases(
        self, *, offset: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[BaseList, ListBasesErrorBody]:
        """Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID,
        name, and permission level. Use the offset parameter from the response to paginate through all available bases.

        Args:
            offset: Pagination cursor from a previous response to fetch the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/meta/bases"),
            query_params=[param[str | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[BaseList],
            error_mapper=list_bases_error_mapper,
            request_options=request_options,
        )

    def whoami(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[MetaWhoamiResponse, WhoamiErrorBody]:
        """Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying
        authentication and checking available permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/meta/whoami"),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[MetaWhoamiResponse],
            error_mapper=whoami_error_mapper,
            request_options=request_options,
        )


class AsyncBasesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_base(
        self,
        body: CreateBaseRequest | CreateBaseRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[BaseSchema, CreateBaseErrorBody]:
        """Creates a new base in the specified workspace. The request must include the workspace ID, base name, and at
        least one table definition with fields. Returns the newly created base with its schema.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/meta/bases"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateBaseRequest | CreateBaseRequestDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BaseSchema],
            error_mapper=create_base_error_mapper,
            request_options=request_options,
        )

    async def get_base_schema(
        self,
        base_id: str,
        *,
        include: list[IncludeOrStr] | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[MetaBasesTablesResponse, GetBaseSchemaErrorBody]:
        """Returns the schema of the specified base, including all tables, their fields (with type and configuration),
        and views. This endpoint provides a complete structural overview of the base.

        Args:
            base_id: The unique identifier of the base (starts with 'app').
            include: Additional information to include in the response. Pass visibleFieldIds to include visible field
                IDs for each view.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/meta/bases/{baseId}/tables"),
            path_params=[param[str]("baseId", base_id)],
            query_params=[param[list[IncludeOrStr] | None]("include", include)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MetaBasesTablesResponse],
            error_mapper=get_base_schema_error_mapper,
            request_options=request_options,
        )

    async def list_bases(
        self, *, offset: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[BaseList, ListBasesErrorBody]:
        """Returns a paginated list of all bases that the authenticated user has access to. Each base includes its ID,
        name, and permission level. Use the offset parameter from the response to paginate through all available bases.

        Args:
            offset: Pagination cursor from a previous response to fetch the next page.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/meta/bases"),
            query_params=[param[str | None]("offset", offset)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[BaseList],
            error_mapper=list_bases_error_mapper,
            request_options=request_options,
        )

    async def whoami(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[MetaWhoamiResponse, WhoamiErrorBody]:
        """Returns the ID and scopes of the currently authenticated user or service account. Useful for verifying
        authentication and checking available permissions.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/meta/whoami"),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[MetaWhoamiResponse],
            error_mapper=whoami_error_mapper,
            request_options=request_options,
        )
