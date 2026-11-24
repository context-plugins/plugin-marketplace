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
from ..errors.create_function_error import CreateFunctionErrorBody, create_function_error_mapper
from ..errors.delete_function_error import DeleteFunctionErrorBody, delete_function_error_mapper
from ..errors.get_function_error import GetFunctionErrorBody, get_function_error_mapper
from ..errors.list_functions_error import ListFunctionsErrorBody, list_functions_error_mapper
from ..errors.update_function_error import UpdateFunctionErrorBody, update_function_error_mapper
from ..models.create_function_response import CreateFunctionResponse
from ..models.get_function_response import GetFunctionResponse
from ..models.list_functions_response import ListFunctionsResponse
from ..models.update_function_response import UpdateFunctionResponse
from ..models.v1_apis_functions_request import V1ApisFunctionsRequest, V1ApisFunctionsRequestDict
from ..models.v1_apis_functions_request1 import V1ApisFunctionsRequest1, V1ApisFunctionsRequest1Dict
from ..server.server import Server


class Functions:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = FunctionsWithRawResponse(client, server, auth)

    def create_function(
        self,
        api_id: str,
        *,
        body: V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateFunctionResponse:
        """Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the
        resolver logic.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.create_function(api_id, body=body, request_options=request_options))

    def delete_function(
        self, api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(self._with_raw_response.delete_function(api_id, function_id, request_options=request_options))

    def get_function(
        self, api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetFunctionResponse:
        """Get a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException NotFoundException UnauthorizedException ``error`` is
                ``UnauthorizedException | NotFoundException | ConcurrentModificationException | RawError``."""
        return unwrap(self._with_raw_response.get_function(api_id, function_id, request_options=request_options))

    def list_functions(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListFunctionsResponse:
        """List multiple functions.

        Args:
            api_id: The GraphQL API ID.
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
            self._with_raw_response.list_functions(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    def update_function(
        self,
        api_id: str,
        function_id: str,
        *,
        body: V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> UpdateFunctionResponse:
        """Updates a Function object.

        Args:
            api_id: The GraphQL API ID.
            function_id: The function ID.
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
            self._with_raw_response.update_function(api_id, function_id, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> FunctionsWithRawResponse:
        return self._with_raw_response


class AsyncFunctions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncFunctionsWithRawResponse(client, server, auth)

    async def create_function(
        self,
        api_id: str,
        *,
        body: V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateFunctionResponse:
        """Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the
        resolver logic.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(await self._with_raw_response.create_function(api_id, body=body, request_options=request_options))

    async def delete_function(
        self, api_id: str, function_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Deletes a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: BadRequestException ConcurrentModificationException InternalFailureException NotFoundException
                UnauthorizedException ``error`` is ``BadRequestException | UnauthorizedException | NotFoundException |
                ConcurrentModificationException | InternalFailureException | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_function(api_id, function_id, request_options=request_options)
        )

    async def get_function(
        self, api_id: str, function_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetFunctionResponse:
        """Get a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: ConcurrentModificationException NotFoundException UnauthorizedException ``error`` is
                ``UnauthorizedException | NotFoundException | ConcurrentModificationException | RawError``."""
        return unwrap(await self._with_raw_response.get_function(api_id, function_id, request_options=request_options))

    async def list_functions(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListFunctionsResponse:
        """List multiple functions.

        Args:
            api_id: The GraphQL API ID.
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
            await self._with_raw_response.list_functions(
                api_id, next_token=next_token, max_results=max_results, request_options=request_options
            ),
        )

    async def update_function(
        self,
        api_id: str,
        function_id: str,
        *,
        body: V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> UpdateFunctionResponse:
        """Updates a Function object.

        Args:
            api_id: The GraphQL API ID.
            function_id: The function ID.
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
            await self._with_raw_response.update_function(
                api_id, function_id, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFunctionsWithRawResponse:
        return self._with_raw_response


class FunctionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_function(
        self,
        api_id: str,
        *,
        body: V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateFunctionResponse, CreateFunctionErrorBody]:
        """Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the
        resolver logic.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/functions"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[CreateFunctionResponse],
            error_mapper=create_function_error_mapper,
            request_options=request_options,
        )

    def delete_function(
        self, api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteFunctionErrorBody]:
        """Deletes a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[Any],
            error_mapper=delete_function_error_mapper,
            request_options=request_options,
        )

    def get_function(
        self, api_id: str, function_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetFunctionResponse, GetFunctionErrorBody]:
        """Get a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[GetFunctionResponse],
            error_mapper=get_function_error_mapper,
            request_options=request_options,
        )

    def list_functions(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListFunctionsResponse, ListFunctionsErrorBody]:
        """List multiple functions.

        Args:
            api_id: The GraphQL API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/functions"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[ListFunctionsResponse],
            error_mapper=list_functions_error_mapper,
            request_options=request_options,
        )

    def update_function(
        self,
        api_id: str,
        function_id: str,
        *,
        body: V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateFunctionResponse, UpdateFunctionErrorBody]:
        """Updates a Function object.

        Args:
            api_id: The GraphQL API ID.
            function_id: The function ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=json_decoder[UpdateFunctionResponse],
            error_mapper=update_function_error_mapper,
            request_options=request_options,
        )


class AsyncFunctionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_function(
        self,
        api_id: str,
        *,
        body: V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateFunctionResponse, CreateFunctionErrorBody]:
        """Creates a Function object. A function is a reusable entity. You can use multiple functions to compose the
        resolver logic.

        Args:
            api_id: The GraphQL API ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/functions"),
            path_params=[param[str]("apiId", api_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisFunctionsRequest | V1ApisFunctionsRequestDict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[CreateFunctionResponse],
            error_mapper=create_function_error_mapper,
            request_options=request_options,
        )

    async def delete_function(
        self, api_id: str, function_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, DeleteFunctionErrorBody]:
        """Deletes a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[Any],
            error_mapper=delete_function_error_mapper,
            request_options=request_options,
        )

    async def get_function(
        self, api_id: str, function_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetFunctionResponse, GetFunctionErrorBody]:
        """Get a Function.

        Args:
            api_id: The GraphQL API ID.
            function_id: The Function ID.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[GetFunctionResponse],
            error_mapper=get_function_error_mapper,
            request_options=request_options,
        )

    async def list_functions(
        self,
        api_id: str,
        *,
        next_token: str | None = None,
        max_results: int | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListFunctionsResponse, ListFunctionsErrorBody]:
        """List multiple functions.

        Args:
            api_id: The GraphQL API ID.
            next_token: An identifier that was returned from the previous call to this operation, which you can use to
                return the next set of items in the list.
            max_results: The maximum number of results that you want the request to return.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/apis/{apiId}/functions"),
            path_params=[param[str]("apiId", api_id)],
            query_params=[param[str | None]("nextToken", next_token), param[int | None]("maxResults", max_results)],
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[ListFunctionsResponse],
            error_mapper=list_functions_error_mapper,
            request_options=request_options,
        )

    async def update_function(
        self,
        api_id: str,
        function_id: str,
        *,
        body: V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[UpdateFunctionResponse, UpdateFunctionErrorBody]:
        """Updates a Function object.

        Args:
            api_id: The GraphQL API ID.
            function_id: The function ID.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/apis/{apiId}/functions/{functionId}"),
            path_params=[param[str]("apiId", api_id), param[str]("functionId", function_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[V1ApisFunctionsRequest1 | V1ApisFunctionsRequest1Dict | None](body),
            auth_scheme=self._auth.sigv4,
            decoder=async_json_decoder[UpdateFunctionResponse],
            error_mapper=update_function_error_mapper,
            request_options=request_options,
        )
