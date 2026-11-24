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
from ..errors.create_source_error import CreateSourceErrorBody, create_source_error_mapper
from ..errors.get_source_error import GetSourceErrorBody, get_source_error_mapper
from ..errors.list_source_error import ListSourceErrorBody, list_source_error_mapper
from ..errors.update_source_error import UpdateSourceErrorBody, update_source_error_mapper
from ..models.enums.order_by_hightouch_destinations_api import (
    OrderByHightouchDestinationsApi,
    OrderByHightouchDestinationsApiOrStr,
)
from ..models.source import Source
from ..models.source_create import SourceCreate, SourceCreateDict
from ..models.source_update import SourceUpdate, SourceUpdateDict
from ..models.sources_response import SourcesResponse
from ..models.unions.sources_response1 import SourcesResponse1
from ..server.server import Server


class Sources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SourcesWithRawResponse(client, server, auth)

    def create_source(
        self, body: SourceCreate | SourceCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> SourcesResponse1:
        """Create a new source

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Conflict Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.create_source(body, request_options=request_options))

    def get_source(self, source_id: float, *, request_options: RequestOptionsOrDict | None = None) -> Source:
        """Retrieve source from source ID

        Args:
            source_id: The id of the source
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(self._with_raw_response.get_source(source_id, request_options=request_options))

    def list_source(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourcesResponse:
        """List all the sources in the current workspace

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.list_source(
                name=name, slug=slug, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    def update_source(
        self,
        source_id: float,
        body: SourceUpdate | SourceUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SourcesResponse1:
        """Update an existing source

        Patch a source based on its Hightouch ID

        Args:
            source_id: The source's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(self._with_raw_response.update_source(source_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> SourcesWithRawResponse:
        return self._with_raw_response


class AsyncSources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSourcesWithRawResponse(client, server, auth)

    async def create_source(
        self, body: SourceCreate | SourceCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> SourcesResponse1:
        """Create a new source

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Conflict Validation Failed Something went wrong ``error`` is ``ValidateErrorJson |
                InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.create_source(body, request_options=request_options))

    async def get_source(self, source_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Source:
        """Retrieve source from source ID

        Args:
            source_id: The id of the source
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Not found Validation Failed ``error`` is ``ValidateErrorJson | RawError``."""
        return unwrap(await self._with_raw_response.get_source(source_id, request_options=request_options))

    async def list_source(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourcesResponse:
        """List all the sources in the current workspace

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Bad request Unauthorized ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.list_source(
                name=name, slug=slug, offset=offset, limit=limit, order_by=order_by, request_options=request_options
            ),
        )

    async def update_source(
        self,
        source_id: float,
        body: SourceUpdate | SourceUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SourcesResponse1:
        """Update an existing source

        Patch a source based on its Hightouch ID

        Args:
            source_id: The source's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ok

        Raises:
            ApiError: Unauthorized Forbidden Not found Validation Failed Something went wrong ``error`` is
                ``ValidateErrorJson | InternalServerErrorOrStr | RawError``."""
        return unwrap(await self._with_raw_response.update_source(source_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncSourcesWithRawResponse:
        return self._with_raw_response


class SourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_source(
        self, body: SourceCreate | SourceCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[SourcesResponse1, CreateSourceErrorBody]:
        """Create a new source

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SourceCreate | SourceCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SourcesResponse1],
            error_mapper=create_source_error_mapper,
            request_options=request_options,
        )

    def get_source(
        self, source_id: float, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Source, GetSourceErrorBody]:
        """Retrieve source from source ID

        Args:
            source_id: The id of the source
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sources/{sourceId}"),
            path_params=[param[float]("sourceId", source_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Source],
            error_mapper=get_source_error_mapper,
            request_options=request_options,
        )

    def list_source(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourcesResponse, ListSourceErrorBody]:
        """List all the sources in the current workspace

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sources"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("slug", slug),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SourcesResponse],
            error_mapper=list_source_error_mapper,
            request_options=request_options,
        )

    def update_source(
        self,
        source_id: float,
        body: SourceUpdate | SourceUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SourcesResponse1, UpdateSourceErrorBody]:
        """Update an existing source

        Patch a source based on its Hightouch ID

        Args:
            source_id: The source's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sources/{sourceId}"),
            path_params=[param[float]("sourceId", source_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SourceUpdate | SourceUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SourcesResponse1],
            error_mapper=update_source_error_mapper,
            request_options=request_options,
        )


class AsyncSourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_source(
        self, body: SourceCreate | SourceCreateDict, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[SourcesResponse1, CreateSourceErrorBody]:
        """Create a new source

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/sources"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SourceCreate | SourceCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SourcesResponse1],
            error_mapper=create_source_error_mapper,
            request_options=request_options,
        )

    async def get_source(
        self, source_id: float, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Source, GetSourceErrorBody]:
        """Retrieve source from source ID

        Args:
            source_id: The id of the source
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sources/{sourceId}"),
            path_params=[param[float]("sourceId", source_id)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Source],
            error_mapper=get_source_error_mapper,
            request_options=request_options,
        )

    async def list_source(
        self,
        *,
        name: str | None = None,
        slug: str | None = None,
        offset: float | None = 0.0,
        limit: float | None = 100.0,
        order_by: OrderByHightouchDestinationsApiOrStr | None = OrderByHightouchDestinationsApi.ID,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourcesResponse, ListSourceErrorBody]:
        """List all the sources in the current workspace

        Args:
            name: filter based on name
            slug: filter based on slug
            offset: set the offset on results (for pagination)
            limit: limit the number of objects returned (default is 100)
            order_by: specify the order
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sources"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("slug", slug),
                param[float | None]("offset", offset),
                param[float | None]("limit", limit),
                param[OrderByHightouchDestinationsApiOrStr | None]("orderBy", order_by),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SourcesResponse],
            error_mapper=list_source_error_mapper,
            request_options=request_options,
        )

    async def update_source(
        self,
        source_id: float,
        body: SourceUpdate | SourceUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SourcesResponse1, UpdateSourceErrorBody]:
        """Update an existing source

        Patch a source based on its Hightouch ID

        Args:
            source_id: The source's ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/sources/{sourceId}"),
            path_params=[param[float]("sourceId", source_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SourceUpdate | SourceUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SourcesResponse1],
            error_mapper=update_source_error_mapper,
            request_options=request_options,
        )
