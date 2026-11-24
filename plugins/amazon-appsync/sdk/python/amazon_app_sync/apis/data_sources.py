from __future__ import annotations

from typing import Any
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
from ..errors.create_data_source_error import CreateDataSourceErrorBody, create_data_source_error_mapper
from ..errors.delete_data_source_error import DeleteDataSourceErrorBody, delete_data_source_error_mapper
from ..errors.get_data_source_error import GetDataSourceErrorBody, get_data_source_error_mapper
from ..errors.get_data_source_introspection_error import (
    GetDataSourceIntrospectionErrorBody,
    get_data_source_introspection_error_mapper,
)
from ..errors.list_data_sources_error import ListDataSourcesErrorBody, list_data_sources_error_mapper
from ..errors.start_data_source_introspection_error import (
    StartDataSourceIntrospectionErrorBody,
    start_data_source_introspection_error_mapper,
)
from ..errors.update_data_source_error import UpdateDataSourceErrorBody, update_data_source_error_mapper
from ..models.create_data_source_response import CreateDataSourceResponse
from ..models.get_data_source_introspection_response import GetDataSourceIntrospectionResponse
from ..models.get_data_source_response import GetDataSourceResponse
from ..models.list_data_sources_response import ListDataSourcesResponse
from ..models.start_data_source_introspection_response import StartDataSourceIntrospectionResponse
from ..models.update_data_source_response import UpdateDataSourceResponse
from ..models.v1_apis_datasources_request import V1ApisDatasourcesRequest, V1ApisDatasourcesRequestDict
from ..models.v1_apis_datasources_request1 import V1ApisDatasourcesRequest1, V1ApisDatasourcesRequest1Dict
from ..models.v1_datasources_introspections_request import (
    V1DatasourcesIntrospectionsRequest,
    V1DatasourcesIntrospectionsRequestDict,
)
from ..server.server import Server


class DataSources:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = DataSourcesWithRawResponse(client, server, auth)

    def create_data_source(
        self,
        api_id: str,
        *,
        body: V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateDataSourceResponse:
        """Creates a DataSource object.

        Args:
            api_id: The API ID for the GraphQL API for the DataSource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_data_source(api_id, body=body, request_options=request_options))

    def delete_data_source(self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Deletes a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_data_source(api_id, name, request_options=request_options))

    def get_data_source(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetDataSourceResponse:
        """Retrieves a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.get_data_source(api_id, name, request_options=request_options))

    def get_data_source_introspection(
        self,
        introspection_id: str,
        *,
        include_models_sdl: bool | None = None,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetDataSourceIntrospectionResponse:
        """Retrieves the record of an existing introspection. If the retrieval is successful, the result of the
        instrospection will also be returned. If the retrieval fails the operation, an error message will be returned
        instead.

        Args:
            introspection_id: The introspection ID. Each introspection contains a unique ID that can be used to
                reference the instrospection record.
            include_models_sdl: A boolean flag that determines whether SDL should be generated for introspected types.
                If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL
                only contains the type data and no additional metadata or directives.
            next_token: Determines the number of types to be returned in a single response before paginating. This value
                is typically taken from nextToken value from the previous response.
            max_results: The maximum number of introspected types that will be returned in a single response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException ``error`` is ``BadRequestException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.get_data_source_introspection(
                introspection_id,
                include_models_sdl=include_models_sdl,
                next_token=next_token,
                max_results=max_results,
                request_options=request_options,
            ),
        )

    def list_data_sources(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListDataSourcesResponse:
        """Lists the data sources for a given API.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.list_data_sources(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def start_data_source_introspection(
        self,
        *,
        body: V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartDataSourceIntrospectionResponse:
        """Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.start_data_source_introspection(body=body, request_options=request_options)
        )

    def update_data_source(
        self,
        api_id: str,
        name: str,
        *,
        body: V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateDataSourceResponse:
        """Updates a DataSource object.

        Args:
            api_id: The API ID.
            name: The new name for the data source.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.update_data_source(api_id, name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> DataSourcesWithRawResponse:
        return self._with_raw_response


class AsyncDataSources:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncDataSourcesWithRawResponse(client, server, auth)

    async def create_data_source(
        self,
        api_id: str,
        *,
        body: V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateDataSourceResponse:
        """Creates a DataSource object.

        Args:
            api_id: The API ID for the GraphQL API for the DataSource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.create_data_source(api_id, body=body, request_options=request_options)
        )

    async def delete_data_source(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.delete_data_source(api_id, name, request_options=request_options))

    async def get_data_source(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetDataSourceResponse:
        """Retrieves a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.get_data_source(api_id, name, request_options=request_options))

    async def get_data_source_introspection(
        self,
        introspection_id: str,
        *,
        include_models_sdl: bool | None = None,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetDataSourceIntrospectionResponse:
        """Retrieves the record of an existing introspection. If the retrieval is successful, the result of the
        instrospection will also be returned. If the retrieval fails the operation, an error message will be returned
        instead.

        Args:
            introspection_id: The introspection ID. Each introspection contains a unique ID that can be used to
                reference the instrospection record.
            include_models_sdl: A boolean flag that determines whether SDL should be generated for introspected types.
                If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL
                only contains the type data and no additional metadata or directives.
            next_token: Determines the number of types to be returned in a single response before paginating. This value
                is typically taken from nextToken value from the previous response.
            max_results: The maximum number of introspected types that will be returned in a single response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException ``error`` is ``BadRequestException
                | NotFoundException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_data_source_introspection(
                introspection_id,
                include_models_sdl=include_models_sdl,
                next_token=next_token,
                max_results=max_results,
                request_options=request_options,
            ),
        )

    async def list_data_sources(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListDataSourcesResponse:
        """Lists the data sources for a given API.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.list_data_sources(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def start_data_source_introspection(
        self,
        *,
        body: V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartDataSourceIntrospectionResponse:
        """Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.start_data_source_introspection(body=body, request_options=request_options)
        )

    async def update_data_source(
        self,
        api_id: str,
        name: str,
        *,
        body: V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateDataSourceResponse:
        """Updates a DataSource object.

        Args:
            api_id: The API ID.
            name: The new name for the data source.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.update_data_source(api_id, name, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncDataSourcesWithRawResponse:
        return self._with_raw_response


class DataSourcesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_data_source(
        self,
        api_id: str,
        *,
        body: V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateDataSourceResponse, CreateDataSourceErrorBody]:
        """Creates a DataSource object.

        Args:
            api_id: The API ID for the GraphQL API for the DataSource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/datasources"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateDataSourceResponse],
            error_mapper=create_data_source_error_mapper,
            request_options=request_options,
        )

    def delete_data_source(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteDataSourceErrorBody]:
        """Deletes a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/datasources/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_data_source_error_mapper,
            request_options=request_options,
        )

    def get_data_source(
        self, api_id: str, name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetDataSourceResponse, GetDataSourceErrorBody]:
        """Retrieves a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/datasources/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetDataSourceResponse],
            error_mapper=get_data_source_error_mapper,
            request_options=request_options,
        )

    def get_data_source_introspection(
        self,
        introspection_id: str,
        *,
        include_models_sdl: bool | None = None,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetDataSourceIntrospectionResponse, GetDataSourceIntrospectionErrorBody]:
        """Retrieves the record of an existing introspection. If the retrieval is successful, the result of the
        instrospection will also be returned. If the retrieval fails the operation, an error message will be returned
        instead.

        Args:
            introspection_id: The introspection ID. Each introspection contains a unique ID that can be used to
                reference the instrospection record.
            include_models_sdl: A boolean flag that determines whether SDL should be generated for introspected types.
                If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL
                only contains the type data and no additional metadata or directives.
            next_token: Determines the number of types to be returned in a single response before paginating. This value
                is typically taken from nextToken value from the previous response.
            max_results: The maximum number of introspected types that will be returned in a single response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/datasources/introspections/{introspectionId}"),
            path_params=[param[str]("introspectionId", introspection_id)],
            query_params=[
                param[bool | None]("includeModelsSDL", include_models_sdl),
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetDataSourceIntrospectionResponse],
            error_mapper=get_data_source_introspection_error_mapper,
            request_options=request_options,
        )

    def list_data_sources(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListDataSourcesResponse, ListDataSourcesErrorBody]:
        """Lists the data sources for a given API.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/datasources"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListDataSourcesResponse],
            error_mapper=list_data_sources_error_mapper,
            request_options=request_options,
        )

    def start_data_source_introspection(
        self,
        *,
        body: V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartDataSourceIntrospectionResponse, StartDataSourceIntrospectionErrorBody]:
        """Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/datasources/introspections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartDataSourceIntrospectionResponse],
            error_mapper=start_data_source_introspection_error_mapper,
            request_options=request_options,
        )

    def update_data_source(
        self,
        api_id: str,
        name: str,
        *,
        body: V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateDataSourceResponse, UpdateDataSourceErrorBody]:
        """Updates a DataSource object.

        Args:
            api_id: The API ID.
            name: The new name for the data source.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/datasources/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateDataSourceResponse],
            error_mapper=update_data_source_error_mapper,
            request_options=request_options,
        )


class AsyncDataSourcesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_data_source(
        self,
        api_id: str,
        *,
        body: V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateDataSourceResponse, CreateDataSourceErrorBody]:
        """Creates a DataSource object.

        Args:
            api_id: The API ID for the GraphQL API for the DataSource.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/datasources"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisDatasourcesRequest | V1ApisDatasourcesRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateDataSourceResponse],
            error_mapper=create_data_source_error_mapper,
            request_options=request_options,
        )

    async def delete_data_source(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteDataSourceErrorBody]:
        """Deletes a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/datasources/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_data_source_error_mapper,
            request_options=request_options,
        )

    async def get_data_source(
        self, api_id: str, name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetDataSourceResponse, GetDataSourceErrorBody]:
        """Retrieves a DataSource object.

        Args:
            api_id: The API ID.
            name: The name of the data source.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/datasources/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetDataSourceResponse],
            error_mapper=get_data_source_error_mapper,
            request_options=request_options,
        )

    async def get_data_source_introspection(
        self,
        introspection_id: str,
        *,
        include_models_sdl: bool | None = None,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetDataSourceIntrospectionResponse, GetDataSourceIntrospectionErrorBody]:
        """Retrieves the record of an existing introspection. If the retrieval is successful, the result of the
        instrospection will also be returned. If the retrieval fails the operation, an error message will be returned
        instead.

        Args:
            introspection_id: The introspection ID. Each introspection contains a unique ID that can be used to
                reference the instrospection record.
            include_models_sdl: A boolean flag that determines whether SDL should be generated for introspected types.
                If set to true, each model will contain an sdl property that contains the SDL for that type. The SDL
                only contains the type data and no additional metadata or directives.
            next_token: Determines the number of types to be returned in a single response before paginating. This value
                is typically taken from nextToken value from the previous response.
            max_results: The maximum number of introspected types that will be returned in a single response.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/datasources/introspections/{introspectionId}"),
            path_params=[param[str]("introspectionId", introspection_id)],
            query_params=[
                param[bool | None]("includeModelsSDL", include_models_sdl),
                param[str | None]("nextToken", next_token),
                param[int | None]("maxResults", max_results),
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetDataSourceIntrospectionResponse],
            error_mapper=get_data_source_introspection_error_mapper,
            request_options=request_options,
        )

    async def list_data_sources(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListDataSourcesResponse, ListDataSourcesErrorBody]:
        """Lists the data sources for a given API.

        Args:
            api_id: The API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/datasources"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListDataSourcesResponse],
            error_mapper=list_data_sources_error_mapper,
            request_options=request_options,
        )

    async def start_data_source_introspection(
        self,
        *,
        body: V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartDataSourceIntrospectionResponse, StartDataSourceIntrospectionErrorBody]:
        """Creates a new introspection. Returns the introspectionId of the new introspection after its creation.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/datasources/introspections"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1DatasourcesIntrospectionsRequest | V1DatasourcesIntrospectionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartDataSourceIntrospectionResponse],
            error_mapper=start_data_source_introspection_error_mapper,
            request_options=request_options,
        )

    async def update_data_source(
        self,
        api_id: str,
        name: str,
        *,
        body: V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateDataSourceResponse, UpdateDataSourceErrorBody]:
        """Updates a DataSource object.

        Args:
            api_id: The API ID.
            name: The new name for the data source.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/datasources/{name}"),
            path_params=[param[str]("apiId", api_id), param[str]("name", name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisDatasourcesRequest1 | V1ApisDatasourcesRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateDataSourceResponse],
            error_mapper=update_data_source_error_mapper,
            request_options=request_options,
        )
