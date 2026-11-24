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
from ..errors.create_resolver_error import CreateResolverErrorBody, create_resolver_error_mapper
from ..errors.delete_resolver_error import DeleteResolverErrorBody, delete_resolver_error_mapper
from ..errors.get_resolver_error import GetResolverErrorBody, get_resolver_error_mapper
from ..errors.list_resolvers_by_function_error import (
    ListResolversByFunctionErrorBody,
    list_resolvers_by_function_error_mapper,
)
from ..errors.list_resolvers_error import ListResolversErrorBody, list_resolvers_error_mapper
from ..errors.update_resolver_error import UpdateResolverErrorBody, update_resolver_error_mapper
from ..models.create_resolver_response import CreateResolverResponse
from ..models.get_resolver_response import GetResolverResponse
from ..models.list_resolvers_by_function_response import ListResolversByFunctionResponse
from ..models.list_resolvers_response import ListResolversResponse
from ..models.update_resolver_response import UpdateResolverResponse
from ..models.v1_apis_types_resolvers_field_name_request import (
    V1ApisTypesResolversFieldNameRequest,
    V1ApisTypesResolversFieldNameRequestDict,
)
from ..models.v1_apis_types_resolvers_request import V1ApisTypesResolversRequest, V1ApisTypesResolversRequestDict
from ..server.server import Server


class Resolvers:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ResolversWithRawResponse(client, server, auth)

    def create_resolver(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResolverResponse:
        """Creates a Resolver object. A resolver converts incoming requests into a format that a data source can
        understand, and converts the data source's responses into GraphQL.

        Args:
            api_id: The ID for the GraphQL API for which the resolver is being created.
            type_name: The name of the Type.
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
            self._with_raw_response.create_resolver(api_id, type_name, body=body, request_options=request_options)
        )

    def delete_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The name of the resolver type.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            self._with_raw_response.delete_resolver(api_id, type_name, field_name, request_options=request_options)
        )

    def get_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetResolverResponse:
        """Retrieves a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The resolver type name.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException NotFoundException UnauthorizedException ``error`` is
                ``UnauthorizedException | NotFoundException | ConcurrentModificationException | RawError``."""
        return unwrap(
            self._with_raw_response.get_resolver(api_id, type_name, field_name, request_options=request_options)
        )

    def list_resolvers(
        self,
        api_id: str,
        type_name: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResolversResponse:
        """Lists the resolvers for a given API and type.

        Args:
            api_id: The API ID.
            type_name: The type name.
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
            self._with_raw_response.list_resolvers(
                api_id, type_name, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def list_resolvers_by_function(
        self,
        api_id: str,
        function_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResolversByFunctionResponse:
        """List the resolvers that are associated with a specific function.

        Args:
            api_id: The API ID.
            function_id: The function ID.
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
            self._with_raw_response.list_resolvers_by_function(
                api_id, function_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def update_resolver(
        self,
        api_id: str,
        type_name: str,
        field_name: str,
        *,
        body: V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateResolverResponse:
        """Updates a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            field_name: The new field name.
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
            self._with_raw_response.update_resolver(
                api_id, type_name, field_name, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ResolversWithRawResponse:
        return self._with_raw_response


class AsyncResolvers:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncResolversWithRawResponse(client, server, auth)

    async def create_resolver(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResolverResponse:
        """Creates a Resolver object. A resolver converts incoming requests into a format that a data source can
        understand, and converts the data source's responses into GraphQL.

        Args:
            api_id: The ID for the GraphQL API for which the resolver is being created.
            type_name: The name of the Type.
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
            await self._with_raw_response.create_resolver(api_id, type_name, body=body, request_options=request_options)
        )

    async def delete_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The name of the resolver type.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_resolver(
                api_id, type_name, field_name, request_options=request_options
            ),
        )

    async def get_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetResolverResponse:
        """Retrieves a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The resolver type name.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException NotFoundException UnauthorizedException ``error`` is
                ``UnauthorizedException | NotFoundException | ConcurrentModificationException | RawError``."""
        return unwrap(
            await self._with_raw_response.get_resolver(api_id, type_name, field_name, request_options=request_options)
        )

    async def list_resolvers(
        self,
        api_id: str,
        type_name: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResolversResponse:
        """Lists the resolvers for a given API and type.

        Args:
            api_id: The API ID.
            type_name: The type name.
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
            await self._with_raw_response.list_resolvers(
                api_id, type_name, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def list_resolvers_by_function(
        self,
        api_id: str,
        function_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResolversByFunctionResponse:
        """List the resolvers that are associated with a specific function.

        Args:
            api_id: The API ID.
            function_id: The function ID.
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
            await self._with_raw_response.list_resolvers_by_function(
                api_id, function_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def update_resolver(
        self,
        api_id: str,
        type_name: str,
        field_name: str,
        *,
        body: V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateResolverResponse:
        """Updates a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            field_name: The new field name.
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
            await self._with_raw_response.update_resolver(
                api_id, type_name, field_name, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncResolversWithRawResponse:
        return self._with_raw_response


class ResolversWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_resolver(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResolverResponse, CreateResolverErrorBody]:
        """Creates a Resolver object. A resolver converts incoming requests into a format that a data source can
        understand, and converts the data source's responses into GraphQL.

        Args:
            api_id: The ID for the GraphQL API for which the resolver is being created.
            type_name: The name of the Type.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateResolverResponse],
            error_mapper=create_resolver_error_mapper,
            request_options=request_options,
        )

    def delete_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteResolverErrorBody]:
        """Deletes a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The name of the resolver type.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            path_params=[
                param[str]("apiId", api_id), param[str]("typeName", type_name), param[str]("fieldName", field_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_resolver_error_mapper,
            request_options=request_options,
        )

    def get_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetResolverResponse, GetResolverErrorBody]:
        """Retrieves a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The resolver type name.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            path_params=[
                param[str]("apiId", api_id), param[str]("typeName", type_name), param[str]("fieldName", field_name)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetResolverResponse],
            error_mapper=get_resolver_error_mapper,
            request_options=request_options,
        )

    def list_resolvers(
        self,
        api_id: str,
        type_name: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResolversResponse, ListResolversErrorBody]:
        """Lists the resolvers for a given API and type.

        Args:
            api_id: The API ID.
            type_name: The type name.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListResolversResponse],
            error_mapper=list_resolvers_error_mapper,
            request_options=request_options,
        )

    def list_resolvers_by_function(
        self,
        api_id: str,
        function_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResolversByFunctionResponse, ListResolversByFunctionErrorBody]:
        """List the resolvers that are associated with a specific function.

        Args:
            api_id: The API ID.
            function_id: The function ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}/resolvers"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListResolversByFunctionResponse],
            error_mapper=list_resolvers_by_function_error_mapper,
            request_options=request_options,
        )

    def update_resolver(
        self,
        api_id: str,
        type_name: str,
        field_name: str,
        *,
        body: V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateResolverResponse, UpdateResolverErrorBody]:
        """Updates a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            field_name: The new field name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            path_params=[
                param[str]("apiId", api_id), param[str]("typeName", type_name), param[str]("fieldName", field_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateResolverResponse],
            error_mapper=update_resolver_error_mapper,
            request_options=request_options,
        )


class AsyncResolversWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_resolver(
        self,
        api_id: str,
        type_name: str,
        *,
        body: V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResolverResponse, CreateResolverErrorBody]:
        """Creates a Resolver object. A resolver converts incoming requests into a format that a data source can
        understand, and converts the data source's responses into GraphQL.

        Args:
            api_id: The ID for the GraphQL API for which the resolver is being created.
            type_name: The name of the Type.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesResolversRequest | V1ApisTypesResolversRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateResolverResponse],
            error_mapper=create_resolver_error_mapper,
            request_options=request_options,
        )

    async def delete_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteResolverErrorBody]:
        """Deletes a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The name of the resolver type.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            path_params=[
                param[str]("apiId", api_id), param[str]("typeName", type_name), param[str]("fieldName", field_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_resolver_error_mapper,
            request_options=request_options,
        )

    async def get_resolver(
        self, api_id: str, type_name: str, field_name: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetResolverResponse, GetResolverErrorBody]:
        """Retrieves a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The resolver type name.
            field_name: The resolver field name.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            path_params=[
                param[str]("apiId", api_id), param[str]("typeName", type_name), param[str]("fieldName", field_name)
            ],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetResolverResponse],
            error_mapper=get_resolver_error_mapper,
            request_options=request_options,
        )

    async def list_resolvers(
        self,
        api_id: str,
        type_name: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResolversResponse, ListResolversErrorBody]:
        """Lists the resolvers for a given API and type.

        Args:
            api_id: The API ID.
            type_name: The type name.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers"),
            path_params=[param[str]("apiId", api_id), param[str]("typeName", type_name)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListResolversResponse],
            error_mapper=list_resolvers_error_mapper,
            request_options=request_options,
        )

    async def list_resolvers_by_function(
        self,
        api_id: str,
        function_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResolversByFunctionResponse, ListResolversByFunctionErrorBody]:
        """List the resolvers that are associated with a specific function.

        Args:
            api_id: The API ID.
            function_id: The function ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}/resolvers"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListResolversByFunctionResponse],
            error_mapper=list_resolvers_by_function_error_mapper,
            request_options=request_options,
        )

    async def update_resolver(
        self,
        api_id: str,
        type_name: str,
        field_name: str,
        *,
        body: V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateResolverResponse, UpdateResolverErrorBody]:
        """Updates a Resolver object.

        Args:
            api_id: The API ID.
            type_name: The new type name.
            field_name: The new field name.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/types/{typeName}/resolvers/{fieldName}"),
            path_params=[
                param[str]("apiId", api_id), param[str]("typeName", type_name), param[str]("fieldName", field_name)
            ],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisTypesResolversFieldNameRequest | V1ApisTypesResolversFieldNameRequestDict | None](
                body
            ),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateResolverResponse],
            error_mapper=update_resolver_error_mapper,
            request_options=request_options,
        )
