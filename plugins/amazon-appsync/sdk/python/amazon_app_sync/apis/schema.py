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
from ..errors.get_introspection_schema_error import (
    GetIntrospectionSchemaErrorBody,
    get_introspection_schema_error_mapper,
)
from ..errors.get_schema_creation_status2_error import (
    GetSchemaCreationStatus2ErrorBody,
    get_schema_creation_status2_error_mapper,
)
from ..errors.start_schema_creation2_error import StartSchemaCreation2ErrorBody, start_schema_creation2_error_mapper
from ..models.enums.format import FormatOrStr
from ..models.get_introspection_schema_response import GetIntrospectionSchemaResponse
from ..models.get_schema_creation_status_response import GetSchemaCreationStatusResponse
from ..models.start_schema_creation_response import StartSchemaCreationResponse
from ..models.v1_apis_schemacreation_request import V1ApisSchemacreationRequest, V1ApisSchemacreationRequestDict
from ..server.server import Server


class Schema:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SchemaWithRawResponse(client, server, auth)

    def get_introspection_schema(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        include_directives: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetIntrospectionSchemaResponse:
        """Retrieves the introspection schema for a GraphQL API.

        Args:
            api_id: The API ID.
            format_: The schema format: SDL or JSON.
            include_directives: A flag that specifies whether the schema introspection should contain directives.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: GraphQLSchemaException InternalFailureException NotFoundException UnauthorizedException ``error``
                is ``GraphQlSchemaException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            self._with_raw_response.get_introspection_schema(
                api_id, format_, include_directives=include_directives, request_options=request_options
            ),
        )

    def get_schema_creation_status2(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetSchemaCreationStatusResponse:
        """Retrieves the current status of a schema creation operation.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(self._with_raw_response.get_schema_creation_status2(api_id, request_options=request_options))

    def start_schema_creation2(
        self,
        api_id: str,
        *,
        body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> StartSchemaCreationResponse:
        """Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has
        completed.

        Args:
            api_id: The API ID.
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
            self._with_raw_response.start_schema_creation2(api_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> SchemaWithRawResponse:
        return self._with_raw_response


class AsyncSchema:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSchemaWithRawResponse(client, server, auth)

    async def get_introspection_schema(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        include_directives: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetIntrospectionSchemaResponse:
        """Retrieves the introspection schema for a GraphQL API.

        Args:
            api_id: The API ID.
            format_: The schema format: SDL or JSON.
            include_directives: A flag that specifies whether the schema introspection should contain directives.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: GraphQLSchemaException InternalFailureException NotFoundException UnauthorizedException ``error``
                is ``GraphQlSchemaException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_introspection_schema(
                api_id, format_, include_directives=include_directives, request_options=request_options
            ),
        )

    async def get_schema_creation_status2(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetSchemaCreationStatusResponse:
        """Retrieves the current status of a schema creation operation.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException InternalFailureException NotFoundException UnauthorizedException ``error`` is
                ``BadRequestException | UnauthorizedException | NotFoundException | InternalFailureException |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_schema_creation_status2(api_id, request_options=request_options)
        )

    async def start_schema_creation2(
        self,
        api_id: str,
        *,
        body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> StartSchemaCreationResponse:
        """Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has
        completed.

        Args:
            api_id: The API ID.
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
            await self._with_raw_response.start_schema_creation2(api_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncSchemaWithRawResponse:
        return self._with_raw_response


class SchemaWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_introspection_schema(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        include_directives: bool | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetIntrospectionSchemaResponse, GetIntrospectionSchemaErrorBody]:
        """Retrieves the introspection schema for a GraphQL API.

        Args:
            api_id: The API ID.
            format_: The schema format: SDL or JSON.
            include_directives: A flag that specifies whether the schema introspection should contain directives.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/schema"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[
                param[FormatOrStr]("format", format_), param[bool | None]("includeDirectives", include_directives)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetIntrospectionSchemaResponse],
            error_mapper=get_introspection_schema_error_mapper,
            request_options=request_options,
        )

    def get_schema_creation_status2(
        self, api_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetSchemaCreationStatusResponse, GetSchemaCreationStatus2ErrorBody]:
        """Retrieves the current status of a schema creation operation.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/schemacreation"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetSchemaCreationStatusResponse],
            error_mapper=get_schema_creation_status2_error_mapper,
            request_options=request_options,
        )

    def start_schema_creation2(
        self,
        api_id: str,
        *,
        body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[StartSchemaCreationResponse, StartSchemaCreation2ErrorBody]:
        """Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has
        completed.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/schemacreation"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[StartSchemaCreationResponse],
            error_mapper=start_schema_creation2_error_mapper,
            request_options=request_options,
        )


class AsyncSchemaWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_introspection_schema(
        self,
        api_id: str,
        format_: FormatOrStr,
        *,
        include_directives: bool | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetIntrospectionSchemaResponse, GetIntrospectionSchemaErrorBody]:
        """Retrieves the introspection schema for a GraphQL API.

        Args:
            api_id: The API ID.
            format_: The schema format: SDL or JSON.
            include_directives: A flag that specifies whether the schema introspection should contain directives.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/schema"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[
                param[FormatOrStr]("format", format_), param[bool | None]("includeDirectives", include_directives)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetIntrospectionSchemaResponse],
            error_mapper=get_introspection_schema_error_mapper,
            request_options=request_options,
        )

    async def get_schema_creation_status2(
        self, api_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetSchemaCreationStatusResponse, GetSchemaCreationStatus2ErrorBody]:
        """Retrieves the current status of a schema creation operation.

        Args:
            api_id: The API ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/schemacreation"),
            path_params=[param[str]("apiId", api_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetSchemaCreationStatusResponse],
            error_mapper=get_schema_creation_status2_error_mapper,
            request_options=request_options,
        )

    async def start_schema_creation2(
        self,
        api_id: str,
        *,
        body: V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[StartSchemaCreationResponse, StartSchemaCreation2ErrorBody]:
        """Adds a new schema to your GraphQL API. This operation is asynchronous. Use to determine when it has
        completed.

        Args:
            api_id: The API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/schemacreation"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisSchemacreationRequest | V1ApisSchemacreationRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[StartSchemaCreationResponse],
            error_mapper=start_schema_creation2_error_mapper,
            request_options=request_options,
        )
